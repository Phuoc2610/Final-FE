import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from '../../redux/product/productThunks'
import Pagination from "./Pagination";
const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.product);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getProduct({ page: currentPage, perPage: 8 }));
    }, [currentPage, dispatch]);

    return (
        <div className="dark:bg-[#0f183a] pt-6" id="product">
            <div className="w-[90%] mx-auto rounded-lg">
                <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data?.data?.map((item) => (
                        <div className="w-full rounded-lg shadow-2xl cursor-pointer" key={item?.id}  >
                            <div className='w-full h-[240px] '>
                                <img loading="lazy" className="object-cover w-full h-full" src={item?.productImages[0]?.url} alt="" />
                            </div>

                            <div className="text-center dark:bg-[#253569a2] pb-4">
                                <h2 className="py-2 text-center text-red-600 font-semibold text-2xl">{item?.name}</h2>
                                <div className="pb-2">
                                    <span className="text-2xl font-semibold dark:text-white">{item?.price}$</span>
                                </div>
                                <div className="grid justify-items-center md:grid-cols-2 md:gap-1">
                                    <button className="w-[70%] md:w-[80%] btn-product" onClick={() => { navigate(`/cart/${item?.id}`) }}>Add to Card</button>
                                    <button className="w-[40%] max-md:mt-2 md:w-[50%] btn-product" onClick={() => { navigate(`/details/${item?.id}`) }}>More</button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={data?.meta?.totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
       
        </div>
    )
}

export default Products;