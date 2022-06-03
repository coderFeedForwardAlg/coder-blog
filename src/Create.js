import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history =  useHistory();

    const handleSubmite = (e) =>{
        e.preventDefault(); 
        const blog = {title, body, auther}

        setIsPending(true);
        
        fetch("http://localhost:3000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () =>{
                setIsPending(false);
                //history.go(-1);  // to go back in sitroy like the back errow
                history.push('/');
            }
        )

    }

    return ( 
        <div className="create">
            <h2>
                Make a Blog
            </h2>
            <form onSubmit={handleSubmite}>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange = { (e) => setTitle(e.target.value) } 
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange = { (e) => setBody(e.target.value) }
                ></textarea>
            
                <label>Blog Authe: </label>
                <select 
                    value = {auther}
                    onChange = { (e) => setAuther(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshy</option>
                    
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{auther}</p>
        </div>
     );
}

export default Create;