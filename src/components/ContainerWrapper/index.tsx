import * as S from "./styles";

type ContainerPropsType = {
  children: React.ReactNode;
};

export const ContainerWrapper = ({ children }: ContainerPropsType) => {
  return <S.Container>{children}</S.Container>;
};
