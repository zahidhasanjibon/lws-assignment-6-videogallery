import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAllFilter } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags } = useSelector((state) => state.tags);
    const { tags:filterTags,search,author } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    let isShowResetBtn = false

    if(filterTags.length > 0 || search.length > 0 || author.length > 0){
        isShowResetBtn = true
    }

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return tags?.length > 0 ? (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.map((tag) => (
                    <Tag key={tag.id} title={tag.title} />
                ))}
               {
                isShowResetBtn &&  <div onClick={() => dispatch(resetAllFilter()) } className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" style={{marginLeft:'170px'}}>
                reset
            </div>
               }
            </div>
        

        </section>
    ) : null;
}
