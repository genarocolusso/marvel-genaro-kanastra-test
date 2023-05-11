import { FormattedMessage } from "react-intl";
import { useMarvelKanastraContext } from "../../context";
import * as S from "./styles";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
export const Pagination = () => {
  const { handleSetPagination, pagination } = useMarvelKanastraContext();

  return (
    <S.Container>
      <S.Previous onClick={() => handleSetPagination("less")}>
        <RiArrowLeftSLine />
      </S.Previous>
      <S.PageInfos>
        <FormattedMessage
          id="pagination"
          values={{
            atual: pagination.currentPage,
            total: pagination.maxPages,
          }}
        />
      </S.PageInfos>
      <S.Next onClick={() => handleSetPagination("more")}>
        <RiArrowRightSLine />
      </S.Next>
    </S.Container>
  );
};
