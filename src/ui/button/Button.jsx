
import styled from "styled-components";


const ButtonStyled = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
  `


export const Button = ({ children, type = "button", className, ...rest }) => {
    return (
      <ButtonStyled type={type} {...rest} >
        {children}
      </ButtonStyled>
    );
  };
  