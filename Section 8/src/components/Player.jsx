import { useState, useRef } from "react";

export default function Player() {
  const input = useRef();
  const handleClick = () => console.log("Hello")
  const ref1 = useRef(handleClick);
  const [playerName, setPlayerName] = useState("");
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Unknown entity"}</h2>
      <p>
        <input ref={ref1} type="text" />
        <button onClick={ref1.current}>Set Name</button>
      </p>
    </section>
  );
}
