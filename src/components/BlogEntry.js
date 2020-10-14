import React from "react";
import BlogEntryHeading from "./BlogEntryHeading";
import BlogEntryHeadingImage from "./BlogEntryHeadingImage";
import BlogEntryText from "./BlogEntryText";

function BlogEntry({blogEntryData}){
    return (
        <article className={"blogarticle"}>
            <span><BlogEntryHeading title={blogEntryData.title}/></span>
            <BlogEntryHeadingImage img={blogEntryData.image}/>
            <BlogEntryText body={blogEntryData.body}/>
        </article>
    )
}

export default BlogEntry;