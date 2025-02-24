
import styled from "styled-components";

const CardStyled = styled.div`
width: 100%;
max-width: 400px;
background-color: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

/* Card Content */
const CardContentStyled = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`



export const Card = ({ children, className }) => {
    return <CardStyled>{children}</CardStyled>;
  };
  
  export const CardContent = ({ children }) => {
    return <CardContentStyled>{children}</CardContentStyled>;
  };
  