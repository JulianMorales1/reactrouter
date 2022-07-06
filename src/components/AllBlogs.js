
import React,{useState,useEffect} from 'react'
import data from '../utils/sampleBlogs';

import { useSearchParams } from 'react-router-dom';


const AllBlogs = ()=>{

    const [allBlogs,setAllBlogs] = useState(data.blogPosts);

    useEffect(()=>{
        if(localStorage.getItem('blogs')){
            setAllBlogs(JSON.parse(localStorage.getItem('blogs')))
        }else{
            localStorage.setItem('blogs',JSON.stringify(data.blogPosts));
            setAllBlogs(data.blogPosts)
        }
    },[])

    const [searchParams,setSearchParams] = useSearchParams();

            let filtered = allBlogs;
            
                

                let sortOrder = searchParams.get('sortOrder');
                let sortField = searchParams.get('sortField');
                let limit = Number(searchParams.get('limit'));
                let page = Number(searchParams.get('page'));

              

                if((!sortOrder) && (!sortField) && (!limit) && (!page)){
                    
                  console.log("no search")

                }else{
                    filtered = data.blogPosts.sort(function (a, b) {
                        var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt)
                        return dateA - dateB
                        
                    });

                    if(!limit && !page){
                        
                    }else{
                       
                        filtered = filtered.slice(page * limit, (page * limit) + limit);

                    }
                    
                }

    return(
        <div>
            {filtered.map(blog=>{
                return (
                    <div>
                    <h2>BlogId: {blog.id}</h2>
                    <p>Title: {blog.title}</p>
                    <p>Text: {blog.text}</p>
                    <p>Author: {blog.author}</p>
            </div>
                )
            })}
        </div>
    )
       
}

    

export default AllBlogs;