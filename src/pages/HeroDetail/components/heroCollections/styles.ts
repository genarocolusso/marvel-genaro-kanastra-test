import styled from "styled-components";


export const Container = styled.div`
width: 100%; 
display: flex; 
flex-direction: column;   
gap: 1rem;
padding: 2rem 0rem;
`;

export const CollectionGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
gap: 3.25rem;
color: white; 
background: rgba(255,255,255,0.1);
border-radius: 8px;  
padding: 16px 16px;
img{
    width: 148px;
    height: 227px; 
}

@media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    
  }
`;

export const CollectionTitle = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 42px; 

background: #000000;
color: white;
border-radius: 90px 0px;
max-width: 200px;

`;