import data from './../data.json';
import { useState } from 'react';

function MyProjects(){
const [index, setIndex] = useState(0);


function handleClick() {
    if (index < data.projects.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
 }
 return (
    <div>
        <button onClick={handleClick}>Next</button>
        <h2>{data.projects[index].title}</h2>
        <h3>{data.projects[index].artist}</h3>
        <h3>{data.projects[index].album}</h3>
        <h3>{data.projects[index].year}</h3>
        </div>
        );
}
export default MyProjects;