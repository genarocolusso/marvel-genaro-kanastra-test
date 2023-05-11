import styled from "styled-components";

interface ContainerProps {
  colorBg: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%; 
  height: 4rem;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;    
  justify-content: space-around; 
  background-color:  ${({ colorBg, theme }) => theme[colorBg]};
  z-index: 1;
  position: relative;
  `

export const NavSpacedLogos = styled.div`

display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
    gap: 2rem;
`