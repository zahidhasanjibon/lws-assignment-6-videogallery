import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { fetchLikesUnlikes } from "../../features/likeUnlike/likeUnlikeSlice";



export default function LikeUnlike({id}) {
        
            const {updateLikesUnlikes} = useSelector((state) => state.likesUnlikes)
            const {likes,unlikes} = updateLikesUnlikes
    const dispatch = useDispatch()

        const handleLikes = () => {
            let newLikes =  likes + 1
                dispatch(fetchLikesUnlikes({id,likesOrUnlikesData:{ ...updateLikesUnlikes,likes:newLikes}}))
        }
        const handleUnlikes = () => {
                    let newUnlikes = unlikes + 1
                    dispatch(fetchLikesUnlikes({id,likesOrUnlikesData:{...updateLikesUnlikes,unlikes:newUnlikes}}))
        }

        useEffect(() => {
                dispatch(fetchLikesUnlikes({id}))
        },[dispatch,id])

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img onClick={handleLikes} className="cursor-pointer w-5 block" src={likeImage} alt="Like" />
                </div>
                <div  className="text-sm leading-[1.7142857] text-slate-600">
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img  onClick={handleUnlikes} className="cursor-pointer w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
