import "./styling.css";

function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button id="SaveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
