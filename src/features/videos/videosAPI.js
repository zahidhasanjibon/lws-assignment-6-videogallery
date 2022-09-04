import axios from "../../utils/axios";

export const getVideos = async (tags, search,pageNo,authorName) => {
    let queryString = "";
    const limit = 8
    if(!pageNo){
        pageNo = 1
    }
    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }
    // if(authorName){
    //     pageNo = 1
    // }

    const response = await axios.get(`/videos/?author_like=${authorName}&${queryString}&_page=${pageNo}&_limit=${limit}`);

    return response.data;
};
