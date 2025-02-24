
import styled from "styled-components";

const StyledInput = styled.input`
display:flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 5px;
`;


export const Input = ({ label, type = "text", ...rest }) => {
    return (
      <>
        {label && <Label>{label}</Label>}
        <StyledInput type={type} className="input" {...rest} />
      </>
    );
  };
  