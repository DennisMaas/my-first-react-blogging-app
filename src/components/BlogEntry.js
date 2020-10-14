import React, { useState } from 'react';
import BlogEntryHeading from "./BlogEntryHeading";
import BlogEntryHeadingImage from "./BlogEntryHeadingImage";
import BlogEntryText from "./BlogEntryText";

function BlogEntry({blogEntryData}){
    const [likeCount, setCount] = useState(0)
    function updateCounterUp(){
        setCount(likeCount+1)
    }
    const [disLikeCount, setDisLikeCount] = useState(0)
    function updateCounterDown(){
        setDisLikeCount(disLikeCount+1)
    }
    return (
        <article className={"blogarticle"}>
            <BlogEntryHeading title={blogEntryData.blogTitle}/>
            <BlogEntryHeadingImage img={blogEntryData.blogTitleImage}/>
            <BlogEntryText body={blogEntryData.blogBody}/>
            <button onClick={updateCounterUp}>like it!</button>
            <p>{likeCount} Leute fanden´s witzig</p>
            <button onClick={updateCounterDown}>hate it!</button>
            <p>{disLikeCount} Leute fanden´s doof</p>
        </article>
    )
}

export default BlogEntry;