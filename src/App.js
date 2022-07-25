import React from "react";

export default function App() {
  const [{ id, advice }, setQuote] = React.useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice,what's difficult is getting up and taking action.",
  });

  function handleClick() {
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.adviceslip.com/advice");
    request.send();

    request.addEventListener("load", function () {
      if (!request.status === 200) return;

      const {
        slip: { id, advice },
      } = JSON.parse(request.responseText);

      setQuote({ id, advice });
    });
  }

  return (
    <>
      <h1 className="advice-number">
        Advice #<span>{id}</span>
      </h1>
      <p className="advice-text">"{advice}"</p>
      <img
        className="pattern-divider"
        src="./pattern-divider-desktop.svg"
        alt="A pattern divider"
      />
      <button className="dice-button" onClick={handleClick}>
        <img src="./icon-dice.svg" alt="A dice" />
      </button>
    </>
  );
}
