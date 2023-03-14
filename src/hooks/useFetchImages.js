import { useEffect, useState } from "react"

export const useFetchImages = (url) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=> {
        const fetchImages = async ()=> {
            const request = await fetch(url);
            const response = await request.json();
          

            if (request.ok) {
                setImages(response.results);
                setIsloading(false);
            }
        }

        fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [images, setImages, isLoading];
}