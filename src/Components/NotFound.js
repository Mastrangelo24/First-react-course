import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
       <div className='not-found'>
           <h2>Ups! Esa pagina no existe</h2>
           <Link to ="/">Redirigiendo a la pagina de inicio...</Link>
       </div> 
     );
}
 
export default notFound;