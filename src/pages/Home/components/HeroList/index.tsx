import toast from "react-hot-toast";
import { ContainerWrapper } from "../../../../components/ContainerWrapper";
import { useMarvelKanastraContext } from "../../../../context";

import * as S from "./styles";
import { Pagination } from "../../../../components/Pagination";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const HeroList = () => {
  const {
    listOfHeroes: heroes,
    isLoadingHeroList: isLoading,
    searchTerm,
    selectFilter,
    isError,
  } = useMarvelKanastraContext();

  // return error message
  if (isError || heroes.length == 0) {
    return (
      <S.HeroList>
        <ContainerWrapper>
          <S.SearchText data-cy="errorHeroNotFound">
            <FormattedMessage id="home.ErrorOccured" />
          </S.SearchText>
        </ContainerWrapper>
      </S.HeroList>
    );
  }

  // return loading message
  if (isLoading) {
    return (
      <S.HeroList>
        <ContainerWrapper>
          <S.SearchText>
            <FormattedMessage id="loading" />
          </S.SearchText>
          <S.HeroContainer>
            {[1, 2, 3, 4, 5].map((hero) => (
              <S.HeroCard key={hero}>
                <S.HeroSkeleton />
                <S.HeroSkeleton isText={true} />
              </S.HeroCard>
            ))}
          </S.HeroContainer>
        </ContainerWrapper>
      </S.HeroList>
    );
  }

  return (
    <>
      {heroes.length > 0 && (
        <S.HeroList id="HeroList">
          <ContainerWrapper>
            {selectFilter == "Hero" ? (
              <S.SearchText>
                <FormattedMessage id="home.search" /> <span>{searchTerm}</span>
              </S.SearchText>
            ) : (
              <S.SearchText>
                <FormattedMessage id="home.search" />
                <span>
                  {selectFilter}: {searchTerm}
                </span>
              </S.SearchText>
            )}

            <S.HeroContainer>
              {heroes.map((hero) => (
                <Link key={hero.id} to={`/hero/${hero.id}`}>
                  <S.HeroCard>
                    <img src={hero.image} alt={hero.name} />
                    <S.HeroName data-cy="heroNameOnList">
                      {hero.name}
                    </S.HeroName>
                  </S.HeroCard>
                </Link>
              ))}
            </S.HeroContainer>
            <S.PaginationWrapper>
              <Pagination />
            </S.PaginationWrapper>
          </ContainerWrapper>
        </S.HeroList>
      )}
    </>
  );
};
