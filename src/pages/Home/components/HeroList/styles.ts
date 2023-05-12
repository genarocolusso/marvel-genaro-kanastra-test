import styled, { keyframes } from "styled-components";
import { Container as normalText } from "../../../../components/Text/styles";

export const HeroList = styled.div`
position: relative;
background: black;
width: 100%;
display: flex;
flex-direction: column;
    align-items: center;
::before { 
    content: '';
    width: 100%;
    height: 98px;
    margin-top: -94px;
    display: block;
    background-image: url("data:image/svg+xml, %3Csvg width='1284' height='98' viewBox='0 0 1284 98' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M0.513672 0V97.7425H1284L0.513672 0Z' fill='%23000000' /%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
}
 

`

export const SearchText = styled(normalText)`
font-size: 1.25rem;
margin-bottom: 2rem;
padding: 0px 16px;
color: ${({ theme }) => theme.baseLabel};
 > span  { 
    font-size: 2.5rem;
    color: ${({ theme }) => theme.white}
 }
`

export const HeroContainer = styled.div`
display: grid;
gap: 1rem; 
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

@media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HeroCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 8px;
 img{ 
    width: 100%;  
    max-width: 180px;
     height: 180px;
     min-height: 180px;
    border-radius: 12px;
    object-fit: cover;
 }
 transition: all 0.2s ease-in-out;
 &:hover{
  opacity: 0.6;
 }
`;

export const HeroName = styled(normalText)`
font-size: 0.875rem;
color: white;
font-weight: bold;
`;

export const PaginationWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 1.5rem;
@media only screen and (max-width: 768px) {
    
justify-content: center;
    
  }
`;
// skeleton 

const pulseopacity = keyframes`
  from {
   opacity: 1; 
   background-color:  rgb(76, 80, 79);
  }

  to {
    opacity: 0.6; 
   background-color: rgb(82, 107, 99);
  }
`;

interface SkeletonProps {
  isText?: boolean;
}
export const HeroSkeleton = styled.div<SkeletonProps>`
    width: 100%;  
    max-width: 180px;
    height: ${({ isText }) => isText ? `20px` : `180px`}  ; 
    border-radius: 12px; 
    background-color: ${({ theme }) => theme.baseLabel};
    margin-bottom: 0.5rem;
    animation: ${pulseopacity} 0.5s ease-in-out   infinite alternate;
`