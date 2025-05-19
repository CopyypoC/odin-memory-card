const AMOUNT = 2;

export function fetchCards() {
  return fetch(`https://nekos.best/api/v2/neko?amount=${AMOUNT}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
