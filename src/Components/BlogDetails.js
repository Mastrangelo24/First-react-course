import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ id)
    const history= useHistory();

    const handleClick = () =>{
        fetch ('http://localhost:8000/blogs/' + id, {
        method: 'delete'
        }).then ( () => {
            history.push ('/') 
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div>Cargando...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Autor {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Borrar Entrada</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;