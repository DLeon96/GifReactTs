export interface Gif {
    id: string;
    title: string;
    url: string;
}

export const getGifts = async (category: string): Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rt5IBK5nolixAk2V1Gu8agscxcsetZFn&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts: Gif[] = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifts;
};
