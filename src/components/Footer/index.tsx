import { ContainerWrapper } from "../ContainerWrapper";
import { DataProvidedDisclaimer } from "../DataProvidedDisclaimer";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <ContainerWrapper>
        <DataProvidedDisclaimer />
      </ContainerWrapper>
    </S.Container>
  );
};
