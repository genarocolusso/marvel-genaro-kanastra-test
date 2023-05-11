export interface IHero {
    id: number;
    name: string;
    image: string;
    comics_available: number;
    series_available: number;
    stories_available: number;
}

export const defaultHero: IHero = {
    id: 0,
    name: "",
    image: "",
    comics_available: 0,
    series_available: 0,
    stories_available: 0,
}

export interface Icollection {
    id: string;
    title: string;
    image: string;
}

