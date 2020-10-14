import React, { useState } from 'react';
import BlogEntryHeading from "./BlogEntryHeading";
import BlogEntryHeadingImage from "./BlogEntryHeadingImage";
import BlogEntryText from "./BlogEntryText";

function BlogEntry({blogEntryData}){
    const [likeCount, setCount] =useState(0)
    function updateCounter(){
        () => setCount(likeCount+1)
    }
    return (
        <article className={"blogarticle"}>
            <span><BlogEntryHeading title={blogEntryData.title}/></span>
            <BlogEntryHeadingImage img={blogEntryData.image}/>
            <BlogEntryText body={blogEntryData.body}/>
            <button onClick={updateCounter}>like it!</button>
            <p>{likeCount} Leuten gefiel dieser Beitrag</p>
        </article>
    )
}

export default BlogEntry;