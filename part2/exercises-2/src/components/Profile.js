import './styles.css';
import Button from './Button';
import oceans from  './oceans.json';
const listItem =oceans.map(ocean => <div>  key= {ocean.id}
<img src={ocean.image} alt={ocean.name} className="img"/>   
<h1>{ocean.name}</h1>
        <h3>Fun Facts:</h3>
   <ul>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
      <Button />
   </ul>
</div>);

function Profile()
{
   return(
      <div>
        <ul>
         {listItem}
        </ul>
        
         
      </div>  
   );
}

export default Profile;