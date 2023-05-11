import styled from "styled-components";


type ContainerProp = {
  fontSize?: string;
  textAlign?: string;
  textColor?: string;
  fontWeight?: string;
}

export const Container = styled.div<ContainerProp>`
  font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
  text-align:  ${props => props.textAlign ? props.textAlign : 'left'}  ;
  color:  ${({ theme, textColor }) => textColor ? textColor : theme.baseText}  ;
  font-weight:  ${props => props.fontWeight ? props.fontWeight : 'normal'}   ;
  font-family: 'Roboto condensed', sans-serif;
  `

