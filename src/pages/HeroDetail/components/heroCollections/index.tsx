import {
  CollectionParams,
  useGetHeroCollectionsById,
} from "../../../../services/marvelrequests";
import { Icollection } from "../../../../types";
import * as S from "./styles";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useFormatCollection } from "./hook/useFormatCollection";
import { FormattedMessage } from "react-intl";
import { Text } from "../../../../components/Text";

export const HeroCollections = (HeroCollectionParams: CollectionParams) => {
  const app = useRef<HTMLDivElement>(null);

  const { data, isError, isLoading } =
    useGetHeroCollectionsById(HeroCollectionParams);
  const collectionItems = data?.results || null;

  const collections: Icollection[] = useFormatCollection(collectionItems);

  useLayoutEffect(() => {
    if (collections.length > 0) {
      let ctx = gsap.context(() => {
        let timedelay = 0.2;
        let projects: gsap.TweenTarget[] = gsap.utils.toArray(".square");
        projects.forEach((project: gsap.TweenTarget, i: number) => {
          gsap.from(project, { opacity: 0, duration: 2, delay: timedelay });
          timedelay += 0.3;
        });

        gsap.from(".collectionTitle", { y: 50 });
      }, app);

      return () => ctx.revert();
    }
  }, [collections]);

  if (isLoading) {
    return (
      <S.Container>
        <S.CollectionTitle>
          {HeroCollectionParams.collectiontype}
        </S.CollectionTitle>

        <div>Loading</div>
      </S.Container>
    );
  }

  if (isError || collections.length == 0) {
    return (
      <S.Container>
        <S.CollectionTitle>
          {HeroCollectionParams.collectiontype}
        </S.CollectionTitle>
        <Text fontSize="2rem" textColor="white">
          <FormattedMessage
            id="details.collectionNotfound"
            values={{
              collectionType: HeroCollectionParams.collectiontype,
            }}
          />
        </Text>
      </S.Container>
    );
  }

  return (
    <>
      <S.Container ref={app}>
        <S.CollectionTitle className="collectionTitle">
          {HeroCollectionParams.collectiontype}
        </S.CollectionTitle>
        <S.CollectionGrid>
          {collections.map((collection: Icollection) => (
            <div className="square" key={collection.id}>
              <img src={collection.image} alt={collection.title} />
              <div> {collection.title}</div>
            </div>
          ))}
        </S.CollectionGrid>
      </S.Container>
    </>
  );
};
