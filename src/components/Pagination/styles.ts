import styled from "styled-components";

export const Container = styled.div`
 
  display: flex;
  flex-direction: row;   
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  `

export const PageInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 31px; 
height: 36px;
color: white;
background: ${({ theme }) => theme.primary};
border-radius: 20px;
`;

export const Next = styled.button`
all: unset;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 10px;  
color: white;
background: ${({ theme }) => theme.primary};
border-radius: 20px; 
cursor: pointer;
`;

export const Previous = styled(Next)``;