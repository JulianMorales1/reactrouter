import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./components/BlogPost";
import Blogs from "./pages/Blogs";
import './App.css';
import AllBlogs from "./components/AllBlogs";
import SubmitBlog from "./pages/SubmitBlog";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blogs"  element={<Blogs />}>
          <Route path="/blogs/submit-blog" element={<SubmitBlog />}>
          </Route>
            <Route index element={<AllBlogs />}>
            </Route>
            <Route path="/blogs/all" element ={<AllBlogs />}>
            </Route>
          <Route path="single-blog/:blogId" element={<BlogPost/>}/>
          </Route>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;


