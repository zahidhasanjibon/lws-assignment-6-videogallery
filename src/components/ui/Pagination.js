import { useDispatch, useSelector } from "react-redux/es/exports";
import { setCurrentPage } from "../../features/filter/filterSlice";

export default function Pagination() {

    const dispatch = useDispatch()
    const {currentPage} = useSelector((state) => state.filter);
    // const {videos} = useSelector((state) => state.videos);

    // let videosNumber = videos.length
//  console.log(videosNumber);

    return (
        <section className="pt-12">
         <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
            <div onClick={() => dispatch(setCurrentPage(1))} className={`${currentPage === 1 ? `bg-blue-600 text-white` : `bg-blue-100` } cursor-pointer px-4 py-1 rounded-full`}>
                1
            </div>
            <div onClick={() => dispatch(setCurrentPage(2))} className={`${currentPage === 2 ? `bg-blue-600 text-white` : `bg-blue-100`} cursor-pointer  px-4 py-1 rounded-full`}>
                2
            </div>
            <div onClick={() => dispatch(setCurrentPage(3))} className={`${currentPage === 3 ? `bg-blue-600 text-white` : `bg-blue-100`} cursor-pointer px-4 py-1 rounded-full`}>
                3
            </div>
       
        </div>
       
        </section>
    );
}
