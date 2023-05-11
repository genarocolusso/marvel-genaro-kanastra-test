
import notFound from "../../../../../assets/notfound.png";
import { Icollection } from "../../../../../types";

export function useFormatCollection(collection: any) {
    const imagenotfound = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";


    const collections: Icollection[] = collection
        ? collection.map((collection: any) => {
            const itemImage = collection?.thumbnail?.path == imagenotfound ||
                collection?.thumbnail == null;
            return {
                id: collection.id,
                title: collection.title,
                image: !itemImage
                    ? `${collection?.thumbnail?.path}.${collection?.thumbnail?.extension}`
                    : notFound,
            };
        })
        : [];

    return collections;
}