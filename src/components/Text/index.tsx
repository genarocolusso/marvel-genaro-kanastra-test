import * as S from "./styles";

type ContainerPropsType = {
  children: React.ReactNode;
  fontSize?: string;
  textAlign?: string;
  textColor?: string;
  fontWeight?: string;
};

export const Text = ({
  children,
  fontSize,
  textAlign,
  textColor,
  fontWeight,
}: ContainerPropsType) => {
  return (
    <S.Container
      fontSize={fontSize}
      textAlign={textAlign}
      textColor={textColor}
      fontWeight={fontWeight}
    >
      {children}
    </S.Container>
  );
};
