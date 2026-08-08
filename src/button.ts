export function emojiButton(
    emoji: string, text: string, handler: () => void): HTMLButtonElement {
  const button =
      Object.assign(document.createElement('button'), {className: 'emoji'});
  button.append(
      Object.assign(document.createElement('span'), {textContent: emoji}),
      Object.assign(document.createElement('span'), {textContent: text}),
  );
  button.addEventListener('click', (event: MouseEvent) => handler());
  return button;
}
