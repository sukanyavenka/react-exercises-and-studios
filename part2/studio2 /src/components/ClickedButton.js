import "./styling.css";

function ClickedButton() {
  function handleRemoveClick()
  {
    alert("you are removing the pin from board")
  }
  return(
    < button id="clickedButton" onClick={handleRemoveClick}>
Saved
    </button>

  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
