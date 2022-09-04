import axios from "../../utils/axios";

export const updateLikesUnlikes = async (id,likesOrUnlikesData) => {
    // const response = await axios.get(`/videos/${id}`);

    if(!likesOrUnlikesData) {
        const response = await axios.get(`/videos/${id}`);
        return response.data
    }

    const response = await axios
        .put(`/videos/${id}`, {
           ...likesOrUnlikesData
        }, {
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

    return response.data;
};
