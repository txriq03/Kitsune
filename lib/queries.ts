import axios from 'axios';

export const getTrending: any = async () => {
    const url = "http://localhost:3000/meta/anilist/trending"
        try {
            const { data: { results }} = await axios.get(url);  // Store the response object here
            console.log(results);  // Log the actual response data
            return results;  // Return the response data
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
}

