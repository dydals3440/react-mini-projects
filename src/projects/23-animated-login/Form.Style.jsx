import styled, { keyframes } from 'styled-components';
import Soccer from './Soccer.avif';

// 위에다 animation keyframes 정의해야함!
const animateContainer = keyframes`
    0% {
      
        transform: rotate(0deg);
    }
        25% {
     
        transform: rotate(45deg);
    }
        50% {
   
        transform: rotate(90deg);
    }
        75% {
     
        transform: rotate(180deg);
    }
        100% {
     
        transform: scale(0);
    }
`;

export const LoginContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  &.animate {
    animation: ${animateContainer} 1s linear;
    transform: rotate(180deg) translateY(400px);
    border-radius: 50%;
    transform: scale(0);
    transition: 1s linear;
  }
`;

const animateLogo = keyframes`
    0% {
        border-radius: 0 0 0 0;
        transform: rotate(0deg);
    }
        25% {
        border-radius: 25%;
        transform: rotate(45deg);
    }
        50% {
        border-radius: 50%;
        transform: rotate(90deg);
    }
        75% {
        border-radius:75%;
        transform: rotate(180deg);
    }
        100% {
        border-radius:100%;
        transform: scale(0);
    }
`;

export const FormAnimation = styled.div`
  width: 250px;
  height: 250px;
  background: ${(props) => props.background || `url(${Soccer}) center/cover`};
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  margin-top: 75px;
  border: 10px solid ${(props) => props.borderColor || '#333'};
  border-radius: 5px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  /* animate 속성인 경우 */
  &.animate {
    animation: ${animateLogo} 1s linear;
    transform: rotate(180deg);
    border-radius: 50%;
    transform: scale(0);
    transition: 1s linear;
  }
`;
