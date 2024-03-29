import { React, useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  //variables
  let buttonLabel;
  let nameField = playerName;
  //functions
  function handleClick() {
    setIsEditing(() => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  //logic
  if (isEditing) {
    buttonLabel = "Save";
    nameField = (
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        required
        value={playerName}
      />
    );
  } else {
    buttonLabel = "Edit";
  }
  //render
  return (
    <div>
      <li>
        <span className="player-name">{nameField}</span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{buttonLabel}</button>
      </li>
    </div>
  );
}

export default Player;
