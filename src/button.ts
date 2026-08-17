import {VoidEvent} from './listener.js';

export class EmojiButton {
  public readonly button: HTMLButtonElement;
  private readonly textSpan: HTMLSpanElement;
  public readonly clickEvent = new VoidEvent();

  constructor(emoji: string, text: string, title: string) {
    this.button = Object.assign(document.createElement('button'), {
      className: 'emoji',
      title: title,
      onclick: (event: MouseEvent) => this.clickEvent.notify()
    });
    this.button.appendChild(
        Object.assign(document.createElement('span'), {textContent: emoji}));
    this.textSpan = this.button.appendChild(
        Object.assign(document.createElement('span'), {textContent: text}));
  }

  updateText(text: string) {
    this.textSpan.textContent = text;
  }

  setDisabled(value: boolean) {
    this.button.disabled = value;
  }
}
