import { ContainerWrapper } from "../ContainerWrapper";
import marvelLogo from "../../assets/marvel.png";
import kanastraLogo from "../../assets/kanastra.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <S.Container colorBg="primary">
      <ContainerWrapper>
        <S.NavSpacedLogos>
          <Link to="/">
            <img src={kanastraLogo} alt="Marvel Logo" />
          </Link>
        </S.NavSpacedLogos>
      </ContainerWrapper>
    </S.Container>
  );
};
