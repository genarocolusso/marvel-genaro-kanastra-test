import styled from "styled-components";

export const Container = styled.div`
 
  display: flex;
  flex-direction: column;  
  max-width: 1280px;
  width: 100%; 
  z-index: 1;
  position: relative; 
  padding: 12px 16px;
    @media only screen and (max-width: 768px) {
     padding: 1rem; 
     max-width: 100%;
  }
  `
