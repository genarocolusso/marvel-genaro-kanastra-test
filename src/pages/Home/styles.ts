import styled from "styled-components";
import spiderWall from "../../assets/spiderWall.jpg";
import { Container as normalText } from "../../components/Text/styles";

export const Container = styled.div`
  width:100%;
  height: calc(80vh - 64px);
  background-image: url(${spiderWall});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
   &::after{
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
   } 
  `
export const TitleText = styled(normalText)`
margin-bottom: 0.5rem; 
line-height: 3.5rem;
`
export const SubTitleText = styled(normalText)`
margin-bottom: 0.5rem; 
line-height: 3rem;
`


export const homeAction = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.8rem;

  `
export const FormWrapper = styled.form`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
     
`
export const SearchWrapper = styled.div`
display: flex;
flex-direction: column; 
gap: 8px;
max-width: 568px;
    width: 100%;
    margin: 0px auto;
`
export const InputText = styled.input`
background: rgba(255, 255, 255, 0.08);
border: 1px solid #D9D9D9;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
border-radius: 6px;
height: 2.8rem; 
max-width: 540px;
width: 100%;  
color: white;
padding: 0px 1rem;

&:focus-visible{
    outline: none;
}
  `
export const Button = styled.button`
all: unset;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding:  8px 36px ;
gap: 10px;  
background: ${({ theme }) => theme.black};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
border-radius: 20px;
color: white;
transition: all 0.12s ease-in-out; 
cursor: pointer;
&:hover{
    background: ${({ theme }) => theme.baseTitle}
}   
`
export const FormFilters = styled.div`
display: flex;
gap: 8px;
max-width: 568px;
`;


interface selectButton {
  selected?: boolean;

}

export const selectButton = styled(Button) <selectButton>`
background:  transparent;
border: 1px solid white;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.06)); 
padding: 0.375rem 1rem;
font-size: 0.875rem;
 
cursor: pointer;
${(props) => props.selected && `background: ${props.theme.primary}; &:hover { background: ${props.theme.primary};}`}
`

