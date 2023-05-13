import { css } from '@emotion/css';

export const listWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 20px auto;
  min-height: 22vh;
  width: 550px;
  background-color: #f7f7f7;
`;

export const listStyles = css`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 375px;
`;

export const itemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
`;

export const btnDeleteStyles = css`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff6659;
  }

  &:last-child {
    border-bottom: none;
}
  }
`;

export const nameStyles = css`
  grid-column: 1 / 2;
`;

export const numberStyles = css`
  grid-column: 2 / 3;
`;