import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [giftUrl, setGiftUrl] = useState("")

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json()
            console.log("gift", data);
            setGiftUrl(data[0].images.downsized.url)
        } catch (error) {
            setGiftUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")
        }
    }
    
    useEffect(() => {
        if (keyword) fetchGifs()
    }, [keyword])
    return giftUrl
}

export default useFetch