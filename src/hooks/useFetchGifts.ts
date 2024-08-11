import { useEffect, useState } from 'react'
import { getGifts, Gif } from '../helpers/GetGif';


export const useFetchGifts = (category:string) => {

    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const gifts = await getGifts(category);
        setImages(gifts);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    },[])

  return {
    images,
    isLoading
  }
}
