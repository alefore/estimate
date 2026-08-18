export type Callback<T> = (data: T) => void;
type VoidCallback = () => void;
type Subscription = VoidCallback;

export class VoidEvent {
  private listeners = new Set<VoidCallback>();

  subscribe(fn: VoidCallback): Subscription {
    this.listeners.add(fn);
    return () => this.unsubscribe(fn);
  }

  unsubscribe(fn: VoidCallback): void {
    this.listeners.delete(fn);
  }

  notify(): void {
    const copy = [...this.listeners];
    copy.forEach(fn => fn());
  }
}

export class TypedEvent<T> {
  private listeners = new Set<Callback<T>>();

  subscribe(fn: Callback<T>): Subscription {
    this.listeners.add(fn);
    return () => this.unsubscribe(fn);
  }

  unsubscribe(fn: Callback<T>): void {
    this.listeners.delete(fn);
  }

  emit(data: T): void {
    this.listeners.forEach(fn => fn(data));
  }
}

interface ComputeContext {
  subscribe(listeners: VoidEvent): void;
}

const STACK: Array<ComputeContext> = [];

function maybeAddDependency(listeners: VoidEvent) {
  if (STACK.length > 0) STACK[STACK.length - 1]!.subscribe(listeners);
}

export interface ReadableSignal<T> {
  get value(): T;
}

export class Signal<T> {
  private _value: T;
  private listeners = new VoidEvent();

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value(): T {
    maybeAddDependency(this.listeners);
    return this._value;
  }

  set value(v: T) {
    if (this._value === v) return;
    this._value = v;
    this.notify();
  }

  notify() {
    this.listeners.notify();
  }
}

export class Computed<T> {
  private _value: T|null = null;

  private readonly dependencySubscriptions = new Set<Subscription>();
  private dirtyListeners = new VoidEvent();

  constructor(public callback: () => T) {}

  get value(): T {
    maybeAddDependency(this.dirtyListeners);
    this._compute();
    if (this._value === null) throw new Error('null value after compute!');
    return this._value;
  }

  private _setDirty() {
    if (this._value === null) return;
    this._value = null;
    this.dirtyListeners.notify();
  }

  private _compute() {
    if (STACK.length > 20) throw new Error('Stack overflow');
    if (this._value !== null) return;
    this.dependencySubscriptions.forEach((s) => s());
    this.dependencySubscriptions.clear();
    STACK.push({
      subscribe: (dependencyListeners: VoidEvent) => {
        this.dependencySubscriptions.add(
            dependencyListeners.subscribe(() => this._setDirty()))
      }
    });
    this._value = this.callback();
    STACK.pop();
  }

  alwaysFresh() {
    this.dirtyListeners.subscribe(() => this._compute());
    this.value;  // Trigger recomputation.
  }
}
