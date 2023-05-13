import { css } from '@emotion/css';

export const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  background-color: #f7f7f7;
  margin: 0 auto;
  width: 550px;
`;

export const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const labelStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const inputStyles = css`
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const buttonStyles = css`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }

  &:active {
    background-color: #005cbf;
  }
`;
