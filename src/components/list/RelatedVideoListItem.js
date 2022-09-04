import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { filterByAuthor } from "../../features/filter/filterSlice";

export default function RelatedVideoListItem({ video }) {
    const { id, thumbnail, title, duration, author, views, date } = video || {};
    const dispatch = useDispatch()
    const match = useMatch("/")
    const navigate = useNavigate()
    const handleFilterByAuthor = () => {
            dispatch(filterByAuthor(author))
            if(!match){
                    navigate("/")
            }
    }


    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/video/${id}`}>
                    <img src={thumbnail} className="object-cover" alt={title} />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {duration}
                </p>
            </div>

            <div clas="flex flex-col w-full">
                <Link to={`/video/${id}`}>
                    <p className="text-slate-900 text-sm font-semibold">
                        {title}
                    </p>
                </Link>
                <div onClick={handleFilterByAuthor }
                    className="cursor-pointer text-gray-400 text-xs mt-2 hover:text-gray-600"
                   
                >
                    {author}
                </div>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
}
