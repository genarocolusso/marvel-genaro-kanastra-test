import { IHero } from "../types";

export interface pagination {
    maxPages: number;
    currentPage: number;
    minPages: number;
    itemPerPage: number;
}
export const default_pagination = {
    maxPages: 0,
    currentPage: 1,
    minPages: 1,
    itemPerPage: 20,
};
export interface MarvelKanastraContextType {
    filters: filterENUM[];
    searchTerm: string;
    listOfHeroes: IHero[];
    isLoadingHeroList: boolean;
    isError: boolean;
    selectFilter: string;
    pagination: pagination;
    handleSetFilter: (value: filterENUM) => void;
    handleSetSearchTerm: (value: string) => void;
    handleSetPagination: (direction: string) => void;
}

export type filterENUM = "Hero" | "Comics" | "Series";