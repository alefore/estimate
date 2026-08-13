export class EmojiButton {
  public readonly button: HTMLButtonElement;
  private readonly textSpan: HTMLSpanElement;

  constructor(emoji: string, text: string, title: string, handler: () => void) {
    this.button = Object.assign(document.createElement('button'), {
      className: 'emoji',
      title: title,
      onclick: (event: MouseEvent) => handler()
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
