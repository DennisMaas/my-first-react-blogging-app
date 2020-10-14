import styled from 'styled-components/macro';

export const StyledInput = styled.input.attrs(props => ({
     type: "text",
     size: props.size || "1em",

}))`
    font-size: 1em;
    border: 1px solid;
    border-radius: 2px;
    
    margin: ${props => props.size};
    padding: ${props => props.size};
    
     `;