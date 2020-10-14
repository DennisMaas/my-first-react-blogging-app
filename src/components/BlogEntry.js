import React, { useState } from 'react';
import BlogEntryHeading from "./BlogEntryHeading";
import BlogEntryHeadingImage from "./BlogEntryHeadingImage";
import BlogEntryText from "./BlogEntryText";
import {StyledButton} from "./StyledButton";

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
            <StyledButton onClick={updateCounterUp}>like it!</StyledButton>
            <p>{likeCount} Leute fanden´s witzig</p>
            <StyledButton onClick={updateCounterDown}>hate it!</StyledButton>
            <p>{disLikeCount} Leute fanden´s doof</p>
        </article>
    )
}

export default BlogEntry;