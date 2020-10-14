import React, {useState} from "react";
import {StyledButton} from "./StyledButton";

export default function AddBlogEntryForm({onAddBlogEntry}){
    const  [blogTitle, setBlogTitle] = useState("");
    const  [blogBody, setBlogBody] = useState("");

    function sendData(){
        const blogData = {
            blogTitle: blogTitle,
            blogBody: blogBody
        };
        onAddBlogEntry(blogData);
    }


    return <form>
        <label>Title:
            <input value={blogTitle}
                   onChange={event => setBlogTitle(event.target.value)}/>
        </label>

        <label>Body:
            <input value={blogBody}
                   onChange={event => setBlogBody(event.target.value)}/>
        </label>

        <StyledButton
            disabled={
                blogTitle.length === 0 && blogBody.length === 0
            }
            type={"button"} onClick={
                sendData}
        >Submit</StyledButton>
    </form>


}