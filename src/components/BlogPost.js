import { useParams } from "react-router-dom";
import {blogPosts} from "../utils/sampleBlogs"
  
const BlogPost  = () => {
    let params = useParams();
    let foundBlog = null;
    for (let i = 0; i < blogPosts.length; i++) {
        const blog = blogPosts[i]

        if(blog.id === Number(params.blogId)) {
            foundBlog = blog
        }
    }
    return (
        <div>

         <h2>BlogId: {params.blogId}</h2>
        <p>Title:{foundBlog.title}</p>
        <p>Text:{foundBlog.text}</p>
        <p>Author:{foundBlog.author}</p> 

        
        </div>
    );
}

export default BlogPost