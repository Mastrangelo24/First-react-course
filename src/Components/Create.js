import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,setTitle] = useState ('');
    const [body,setBody] = useState ('');
    const [author,setAuthor] = useState ('Martin');
    const [isPending, setIsPending] = useState (false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);

        /*Fetch request para agregar las nuevas entradas del blog*/
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            /*Cambiamos el elemento de un objeto a un archivo json*/ 
            body: JSON.stringify (blog)
        }).then (()=>{
            console.log ("nuevo blog agregado");
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Nueva Entrada</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input 
                type="text" required 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}>
                </input>
                <label>Texto</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label>Autor</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                <option value="Martin">Martin</option>
                <option value="Unknown">Unknown</option>
                </select>
               {!isPending && <button>Agregar Blog</button>}
               {isPending && <button disabled>Subiendo Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;