import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const SubmitBlog =(props)=>{

    const navigate = useNavigate()

    const [title,setTitle] = useState('');
    const [author,setAuthor] =useState('');
    const [text,setText] = useState('');


    const submitHandlder=(e)=>{
        e.preventDefault();

        let prevBlogs =JSON.parse(localStorage.getItem('blogs'));

        const newPost={
            id:prevBlogs.length+1,
            title:title,
            author:author,
            text:text,
            createdAt:Date.now(),
        }

       // console.log(newPost)

      

        let newBlogs =[...prevBlogs,newPost];
        localStorage.setItem('blogs',JSON.stringify(newBlogs))
        navigate('/blogs')

    }
    return(
        <div>
            <form onSubmit={submitHandlder}>

            <input type='text' placeholder="Blog Title" onChange={(event)=>setTitle(event.target.value)} />
            <input type='text' placeholder="Blog Author" onChange={(event)=>setAuthor(event.target.value)} />
            <input type='text' placeholder="Blog Text" onChange={(event)=>setText(event.target.value)} />

            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SubmitBlog;