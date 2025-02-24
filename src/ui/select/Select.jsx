import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
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

export const Select = ({ label, children, ...rest }) => {
    return (
      <div>
        {label && <Label>{label}</Label>}
        <StyledSelect {...rest}>
          {children}
        </StyledSelect>
      </div>
    );
  };
  