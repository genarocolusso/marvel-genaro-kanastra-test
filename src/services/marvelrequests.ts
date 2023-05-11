import { useQuery } from "@tanstack/react-query";
import { MarvelParams, api } from "./api";
import toast from "react-hot-toast";
import _ from "lodash";
import { useIntl } from "react-intl";

interface getMarvelHeroesQueryParams {
    offset: number,
    nameStartsWith?: string,
    comics?: string,
    series?: string,
    searchType?: string,
    searchTerm?: string
}

export const useGetMarvelHeroes = (queryparams: getMarvelHeroesQueryParams) => {
    const intl = useIntl();
    let getQueryParams = _.omit(queryparams, ['searchType', 'searchTerm']);
    if (queryparams.searchTerm && queryparams.searchTerm.trim().length == 0 || queryparams.searchTerm === undefined) {
        getQueryParams = { offset: queryparams.offset };
    }
    const params = MarvelParams({ ...getQueryParams });
    return useQuery({
        queryKey: ["characters", queryparams.searchType, queryparams.searchTerm, queryparams.offset], queryFn: () => {

            const toastId = toast.loading(intl.formatMessage(
                { id: "toast.loading" }));

            return api.get(`/characters`, { params: params })
                .then((response) => {
                    toast.success(intl.formatMessage(
                        { id: "toast.success" }
                    ));
                    toast.dismiss(toastId);
                    return response.data
                })
                .catch(error => {
                    toast.error(
                        intl.formatMessage(
                            { id: "toast.dataError" }) +
                        error.response.data.status,
                        {
                            duration: 4000,
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                    toast.dismiss(toastId);
                }
                )
        }, staleTime: 10000 * 600, // 10min
    })

}

export const useGetHeroById = (queryparams: { id: string }) => {
    const intl = useIntl();

    const characterId = queryparams.id;
    const params = MarvelParams({ characterId });
    return useQuery({
        queryKey: ["characterId", characterId], queryFn: () => {

            const toastId = toast.loading(intl.formatMessage(
                { id: "toast.loading" }));

            return api.get(`/characters/${characterId}`, { params: params })
                .then((response) => {
                    toast.success(intl.formatMessage(
                        { id: "toast.success" }
                    ));
                    toast.dismiss(toastId);
                    return response.data.data
                })
                .catch(error => {
                    toast.error(
                        intl.formatMessage(
                            { id: "toast.dataError" }) +
                        error.response.data.status,
                        {
                            duration: 4000,
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                    toast.dismiss(toastId);
                }
                )
        }, staleTime: 10000 * 600, // 10min
    })

}


export interface CollectionParams {
    id: string, collectiontype: string
}
export const useGetHeroCollectionsById = (queryparams: CollectionParams) => {

    const characterId = queryparams.id;
    const collectiontype = queryparams.collectiontype;
    const limit = 6;

    const params = MarvelParams({ limit });
    return useQuery({
        queryKey: ["characterId", characterId, collectiontype], queryFn: () => {

            return api.get(`/characters/${characterId}/${collectiontype}`, { params: params })
                .then((response) => {

                    return response.data.data
                })

        }, staleTime: 10000 * 600, // 10min
    })

}

