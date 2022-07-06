
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
                let limit = searchParams.get('limit');
                let page = searchParams.get('page');
                if((!sortOrder) && (!sortField)){
                    
                   // alert('no search')

                }else{
                    filtered= data.blogPosts.sort(function (a, b) {
                        var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt)
                        console.log(dateA)
                        return dateA - dateB
                        
                    });

                    if(!limit && !page){
                        
                    }else{


                        /*
                        limit=2 page=1 ==> filted[0,1]
                        limit=2 page =2 ==. filtered[2,3]
                        limit=2 page=3 ==> filtered[4,5]

                            page=4 =>filted[6,7]




                        */
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