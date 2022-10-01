import axios from "axios";

const URL = "https://pixabay.com/api/"
const KEY = "29392869-c497197ba4768b72814411005"
const perPage = 12

export const searchImages = async (q, page) => {
    const data = await axios.get(`${URL}?q=${q}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    return data
}