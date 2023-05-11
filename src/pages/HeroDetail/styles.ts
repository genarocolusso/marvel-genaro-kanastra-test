import styled from "styled-components";


interface ContainerProps {
  img?: string;
}

export const Container = styled.div<ContainerProps>`
width: 100%; 
height: calc(90vh - 64px);
overflow-y: auto;
display: flex; 
    justify-content: center;
padding: 2rem 1rem;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-image: ${({ img }) => img ? `url( ${img} )` : null};
&::before{
    content: '';
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: -10px;
   } 

   ::-webkit-scrollbar {
  width: 10px; 
}

/* Track */
::-webkit-scrollbar-track {
  background: #e0e0e0 ;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  rgb(69, 161, 128); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  rgb(104, 180, 152); 
}
`;

export const HeroDetailName = styled.div`
font-size: 3.5rem;
font-weight: bold;
margin-bottom: 4rem;
color: white;
`;

export const HeroAppeared = styled.div`

color: white;
padding: 1rem 0.5rem;
line-height: 130%;
font-size: 1.5rem;
background-color: black;
width: 200px;
border-radius: 12px;
`;

export const HeroDataCharts = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; 
align-items: center;
justify-content: space-between;
gap: 1rem;
`;