import React, {useState} from 'react';
import './App.css';
import BlogEntry from "./components/BlogEntry";
import AddBlogEntryForm from "./components/AddBlogEntryForm";

function App() {
  const [blogList, setBlogList] = useState([]);
  function addToBlogList(blogEntryData){
      let newList =[...blogList, blogEntryData];
      setBlogList(newList)
  }


  return (
    <div className="App">
      <AddBlogEntryForm onAddBlogEntry={addToBlogList}/>

      {blogList
          .map(blogEntryData => <BlogEntry key={blogEntryData.id} blogEntryData={blogEntryData}/>) }
    </div>
  );
}

export default App;
