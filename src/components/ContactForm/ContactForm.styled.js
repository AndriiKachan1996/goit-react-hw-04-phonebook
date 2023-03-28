import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  text-align: center;
  font-size: 40px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: table-caption;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  width: 500px;
  display: table;
`;
export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 26px;
  font-weight: 700;
  color: #eae8d9;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  outline: none;
  width: 250px;
  height: 25px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: aliceblue;
  }
  :active {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;
