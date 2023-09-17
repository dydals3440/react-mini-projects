import styled from 'styled-components';
import Soccer from './Soccer.avif';

export const LoginContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const FormAnimation = styled.div`
  width: 250px;
  height: 250px;
  background: url(${Soccer}) center/cover;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  margin-top: 75px;
  border: 10px solid #333;
  border-radius: 5px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
`;
