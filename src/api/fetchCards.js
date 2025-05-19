export function fetchCards() {
  const amount = 1;

  fetch(`https://nekos.best/api/v2/neko?amount=${amount}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
