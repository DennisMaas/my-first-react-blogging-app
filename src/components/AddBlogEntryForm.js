import React, {useState} from "react";
import {StyledButton} from "./StyledButton";
import {StyledForm} from "./StyledForm";
import {StyledLabel} from "./StyledLabel";
import {StyledInput} from "./StyledInput";

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


    return <StyledForm>
        <StyledLabel>Title:
            <StyledInput value={blogTitle}
                   onChange={event => setBlogTitle(event.target.value)}/>
        </StyledLabel>

        <StyledLabel>Body:
            <StyledInput value={blogBody}
                         onChange={event => setBlogBody(event.target.value)}/>
        </StyledLabel>

        <StyledButton
            disabled={
                blogTitle.length === 0 || blogBody.length === 0
            }
            type={"button"}
            onClick={
                ()=> {
                    sendData();
                    setBlogTitle("");
                    setBlogBody("");
                    }
            }
        >Submit</StyledButton>
    </StyledForm>


}