import styled from 'styled-components';

let MyButton = styled.button`
    padding: 20px;
    background-color: orange;
    border-radius: 20px;
    width: 200px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    
    &:hover {
        background-color: white;
        color: black;
    }

    ${(props) => {
        if (props.bgColor === 'white') {
            return `
                background-color: white;
                color: orange;
                border: 1px solid orange;
            `;
        } else if (props.bgColor === 'gray') {
            return `
                background-color: grey;
                color: black;
            `;
        } 
    }}
    `

export default MyButton;