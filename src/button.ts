export function emojiButton(
    emoji: string, text: string, title: string,
    handler: () => void): HTMLButtonElement {
  const button = Object.assign(
      document.createElement('button'), {className: 'emoji', title: title});
  button.append(
      Object.assign(document.createElement('span'), {textContent: emoji}),
      Object.assign(document.createElement('span'), {textContent: text}),
  );
  button.addEventListener('click', (event: MouseEvent) => handler());
  return button;
}
