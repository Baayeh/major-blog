import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);

    //     setBlogs(newBlogs);
    // }

    

    return (
        <div className="home">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}


            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"  handleDelete={handleDelete} /> */}
        </div>
    );
}
 
export default Home;