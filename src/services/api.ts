import md5 from 'blueimp-md5';
import axios from "axios";

export const MARVEL_BASEURL: string = import.meta.env.VITE_MARVEL_API_BASEURL;
export const MARVEL_PUBLIC_KEY: string = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
export const MARVEL_PRIVATE_KEY: string = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;

interface paramsReturn {
    [T: string]: string | number;
    apikey: string;
    ts: string;
    hash: string;
}
interface paramsProps {
    [T: string]: string | number;
}
export const MarvelParams = (props: paramsProps): paramsReturn => {

    const timestamp = Date.now().toString();
    const createhash = timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY;
    const params = {
        ...props,
        apikey: MARVEL_PUBLIC_KEY,
        ts: timestamp,
        hash: md5(createhash)
    }

    return { ...params };
}


export const api = axios.create({
    baseURL: MARVEL_BASEURL,
});