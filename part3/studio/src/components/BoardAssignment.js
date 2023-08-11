import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
   { label: 'Favorite Recipes', value: 'favorite' },
   { label: 'lime drink', value: 'lime' },
   { label: 'cold drinks', value: 'cold' }];

const [boardName, setName]= useState('no boards yet!');

   const handleChange = (event) => {

        setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
{boards.map((props) =>(
   <option value ={props.label} >{props.label}</option>
))
}
     
         
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}