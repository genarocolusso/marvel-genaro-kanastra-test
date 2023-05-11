import { ContainerWrapper } from "../../components/ContainerWrapper";
import { HeroList } from "./components/HeroList";
import { RiSearchLine } from "react-icons/ri";
import * as S from "./styles";
import { gsap } from "gsap";
import { useMarvelKanastraContext } from "../../context";
import { useLayoutEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

export const Home = () => {
  const app = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState(" ");
  const { filters, selectFilter, handleSetFilter, handleSetSearchTerm } =
    useMarvelKanastraContext();

  const handleSearch = () => {
    handleSetSearchTerm(searchTerm.length > 0 ? searchTerm : " ");
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timedelay = 0.2;
      let titles: gsap.TweenTarget[] = gsap.utils.toArray("[data-anim='text']");

      titles.forEach((title: gsap.TweenTarget, i: number) => {
        gsap.from(title, { opacity: 0, y: 100, duration: 2, delay: timedelay });
        timedelay += 0.3;
      });
      gsap.from("#searchWrapper", { opacity: 0, duration: 2, delay: 1 });
      return () => ctx.revert();
    }, app);
  }, []);

  return (
    <>
      {/*  container  Search*/}
      <S.Container ref={app}>
        <ContainerWrapper>
          <S.homeAction>
            <S.TitleText
              data-anim="text"
              fontWeight="bold"
              fontSize="3rem"
              textColor="white"
              textAlign="Center"
            >
              <FormattedMessage id="home.TitleMessage" />
            </S.TitleText>
            <S.SubTitleText
              data-anim="text"
              fontSize="2rem"
              textColor="white"
              textAlign="Center"
            >
              <FormattedMessage id="home.SubtitleMessage" />
            </S.SubTitleText>
          </S.homeAction>
          <S.SearchWrapper id="searchWrapper">
            <S.FormWrapper
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <S.InputText
                data-cy="searchText"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              ></S.InputText>
              <S.Button data-cy="searchButton">
                <FormattedMessage id="search" /> <RiSearchLine />
              </S.Button>
            </S.FormWrapper>
            <S.FormFilters>
              {filters.map((filter) => (
                <S.selectButton
                  key={filter}
                  selected={filter == selectFilter}
                  onClick={() => {
                    handleSetFilter(filter);
                  }}
                >
                  <FormattedMessage id={filter} />
                </S.selectButton>
              ))}
            </S.FormFilters>
          </S.SearchWrapper>
        </ContainerWrapper>
      </S.Container>

      {/*  container  HeroList*/}

      <HeroList />
    </>
  );
};
