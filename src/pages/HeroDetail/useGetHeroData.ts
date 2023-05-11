import { IHero } from "../../types";


export const useGetHeroData = (hero: any) => {

    const newHero: IHero = {
        id: hero?.id,
        name: hero?.name,
        image: hero?.thumbnail?.path + ".jpg" || "none",
        comics_available: hero.comics.available,
        series_available: hero.series.available,
        stories_available: hero.stories.available
    }


    return newHero;

}