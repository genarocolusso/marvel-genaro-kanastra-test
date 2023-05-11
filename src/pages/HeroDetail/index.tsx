import { useParams } from "react-router-dom";
import { useGetHeroById } from "../../services/marvelrequests";
import { ContainerWrapper } from "../../components/ContainerWrapper";

import * as S from "./styles";
import { useGetHeroData } from "./useGetHeroData";
import { HeroCollections } from "./components/heroCollections";
import { HeroChart } from "./components/heroChart";
import { FormattedMessage } from "react-intl";

export const HeroDetail = () => {
  const { id } = useParams();
  const heroid = id || "";
  const { data, isLoading, isError } = useGetHeroById({ id: heroid });

  const hero = data ? useGetHeroData(data?.results[0]) : undefined;

  const heroInfoDatas = hero
    ? {
        comics: hero.comics_available,
        series: hero.series_available,
        stories: hero.stories_available,
      }
    : undefined;

  if (isLoading && heroid == "") {
    return (
      <>
        <S.Container>
          <ContainerWrapper>
            <h1>
              <FormattedMessage id="loading" />
            </h1>
          </ContainerWrapper>
        </S.Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <S.Container>
          <ContainerWrapper>
            <h1>
              <FormattedMessage id="home.ErrorOccured" />
            </h1>
          </ContainerWrapper>
        </S.Container>
      </>
    );
  }

  return (
    <>
      <S.Container img={hero?.image}>
        <ContainerWrapper>
          <S.HeroDetailName>{hero?.name}</S.HeroDetailName>
          <S.HeroDataCharts>
            <S.HeroAppeared>
              <p>Comics: {hero?.comics_available}</p>
              <p>Series: {hero?.series_available}</p>
              <p>Stories: {hero?.stories_available}</p>
            </S.HeroAppeared>
            <HeroChart HeroData={heroInfoDatas} />
          </S.HeroDataCharts>
          <HeroCollections collectiontype="comics" id={heroid} />

          <HeroCollections collectiontype="series" id={heroid} />

          <HeroCollections collectiontype="stories" id={heroid} />
        </ContainerWrapper>
      </S.Container>
    </>
  );
};
