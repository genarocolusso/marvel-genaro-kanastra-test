import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useGetMarvelHeroes } from "../services/marvelrequests";
import notFound from "../assets/notfound.png";
import { IHero } from "../types";
import {
  MarvelKanastraContextType,
  default_pagination,
  filterENUM,
  pagination,
} from "./types";

type contextProviderProps = { children: React.ReactNode };

const searchParams = {
  Hero: "nameStartsWith",
  Comics: "comics",
  Series: "series",
};
const MarvelKanastraContext = createContext({} as MarvelKanastraContextType);

const MarvelProvider = ({ children }: contextProviderProps) => {
  const filters: filterENUM[] = ["Hero", "Comics", "Series"];
  const [searchTerm, setSearchTerm] = useState(" ");
  const [pagination, setPagination] = useState<pagination>(default_pagination);
  const [listOfHeroes, setListOfHeroes] = useState<IHero[]>([]);
  const [selectFilter, setSelectFilter] = useState<filterENUM>("Hero");

  const handleSetFilter = (value: filterENUM) => {
    //reset pagination when search New Filter
    setPagination({ ...default_pagination });
    setSelectFilter(value);
  };
  const handleSetSearchTerm = (value: string) => {
    //reset pagination when search New Term
    setPagination({ ...default_pagination });
    setSearchTerm(value);
  };

  const handleSetPagination = (direction: string) => {
    if (direction == "more") {
      const newCurrentPages = pagination.currentPage + 1;
      if (newCurrentPages < pagination.maxPages) {
        setPagination({ ...pagination, currentPage: newCurrentPages });
      } else {
        setPagination({ ...pagination, currentPage: pagination.maxPages });
      }
    } else {
      //if Less
      const newCurrentPages = pagination.currentPage - 1;
      if (newCurrentPages > pagination.minPages) {
        setPagination({ ...pagination, currentPage: newCurrentPages });
      } else {
        setPagination({ ...pagination, currentPage: pagination.minPages });
      }
    }
  };

  //reactQuery get data
  const {
    data,
    isLoading: isLoadingHeroList,
    isError,
  } = useGetMarvelHeroes({
    offset: pagination.itemPerPage * (pagination.currentPage - 1),
    [searchParams[selectFilter]]: searchTerm,
    searchType: selectFilter,
    searchTerm: searchTerm,
  });

  //default notFoundImage found on results
  const imagenotfound =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

  useEffect(() => {
    //When new data updated then recalculate herolist and pagination
    if (data) {
      //reset pagination with maxPages using total items from result data
      const calcPages: pagination = {
        maxPages: Math.ceil(data?.data?.total / pagination.itemPerPage),
        minPages: 1,
        currentPage: pagination.currentPage,
        itemPerPage: pagination.itemPerPage,
      };

      setPagination(calcPages);

      const heroList = data?.data?.results || [];
      const computedHeroList: IHero[] = heroList
        ? heroList.map((hero: any) => {
            const imageThumb =
              hero.thumbnail.path == imagenotfound
                ? notFound
                : hero.thumbnail.path + "." + hero.thumbnail.extension;
            return {
              id: hero.id,
              name: hero.name,
              image: imageThumb,
              comics_available: hero.comics.available,
              series_available: hero.series.available,
              stories_available: hero.stories.available,
            };
          })
        : [];

      setListOfHeroes(computedHeroList);
    }
  }, [data]);

  const value = useMemo(() => {
    return {
      filters,
      searchTerm: searchTerm,
      listOfHeroes,
      handleSetFilter,
      handleSetSearchTerm,
      handleSetPagination,
      pagination,
      selectFilter,
      isLoadingHeroList,
      isError,
    };
  }, [
    searchTerm,
    listOfHeroes,
    pagination,
    filters,
    selectFilter,
    listOfHeroes,
    isLoadingHeroList,
    isError,
  ]);

  return (
    <MarvelKanastraContext.Provider value={value}>
      {children}
    </MarvelKanastraContext.Provider>
  );
};

const useMarvelKanastraContext = () => {
  const marvelKanastraContext = useContext(MarvelKanastraContext);

  if (!marvelKanastraContext) {
    throw new Error(
      "useMarvelKanastraContext has to be used within <MarvelKanastraContext.Provider>"
    );
  }

  return marvelKanastraContext;
};

export { MarvelProvider, useMarvelKanastraContext };
