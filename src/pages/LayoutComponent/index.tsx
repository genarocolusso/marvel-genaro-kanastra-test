import { Toaster } from "react-hot-toast";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import * as S from "./styles";

type LayoutPropsType = {
  children: React.ReactNode;
};

export const LayoutComponent = ({ children }: LayoutPropsType) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
      <Toaster position="bottom-left" />
    </S.Container>
  );
};
