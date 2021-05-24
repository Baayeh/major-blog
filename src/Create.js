import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Major');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then( () => {
            console.log('blog created');
            setIsLoading(false);

            history.push('/');
        } )
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label>Blog Author:</label>
                <select
                    value={body}
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="Major">Major</option>
                    <option value="Major">Mayor</option>
                </select>

                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button>Add Blog....</button> }

            </form>
        </div>
    );
}
 
export default Create;