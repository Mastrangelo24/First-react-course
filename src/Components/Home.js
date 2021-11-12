import BlogList from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
   const { data, isPending, error} = useFetch('http://localhost:8000/blogs');
   
    return ( 
        <div className="home">
            {error && <div>Error! Could not fetch the data</div>}
            {isPending && <div>Cargando...</div> }
            {data && <BlogList blogs = {data} title="Todas las entradas"/>}
        </div>
     );
}
 
export default Home ;