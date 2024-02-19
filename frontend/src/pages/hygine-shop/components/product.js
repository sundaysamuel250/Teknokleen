import { useEffect, useState } from "react"

export const ProductView = ({product, close}) => {
    const [daProduct, setDaProduct] = useState({})
    useEffect(()=>{
        
    },[product])
    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-[2323232323]">
            <div className="h-full w-full bg-[#00000080]" onClick={()=> close()}></div>
            <div className="w-full top-[0] absolute h-[100vh]">
                <div className="relative flex justify-center items-center h-full w-full">
                    <div className="container mx-auto relative">
                        <div className="bg-white p-[20px]  overflow-auto shadow h-[80vh]">
                            <div class="flex flex-wrap -mx-4">
                                <div class="w-full px-4 md:w-1/2 ">
                                    <div class="sticky top-0 z-50 overflow-hidden ">
                                        <div class="relative mb-6 lg:mb-10" style={{ height: "450px" }}>
                                            <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                alt="" class="object-contain w-full h-full " />
                                        </div>
                                        <div class="flex-wrap hidden md:flex ">
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    class="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" class="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    class="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" class="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    class="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" class="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    class="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300">
                                                    <img src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                                        alt="" class="object-cover w-full lg:h-32" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full px-4 md:w-1/2 ">
                                    <div class="lg:pl-20">
                                        <div class="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                            <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                            <h2 class="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                               {product.name}
                                            </h2>
                                            <div class="flex flex-wrap items-center mb-6">
                                                <ul class="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor"
                                                                class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16">
                                                                <path
                                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a class="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                                    href="#">
                                                    Be the first to review the product
                                                </a>
                                            </div>
                                            <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                            </p>
                                          
                                            <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                                <span>$994.00</span>
                                                <span
                                                    class="text-base font-normal text-gray-500 line-through dark:text-gray-400">$1500.00</span>
                                            </p>
                                        </div>
                                       
                                       
                                        <div class="flex flex-wrap items-center ">
                                            <div class="mb-4 mr-4 lg:mb-0">
                                                <div class="w-28">
                                                    <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                        <button
                                                            class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                            <span class="m-auto text-2xl font-thin">-</span>
                                                        </button>
                                                        <input type="number"
                                                            class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                            placeholder="1" />
                                                        <button
                                                            class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                            <span class="m-auto text-2xl font-thin">+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-4 mr-4 lg:mb-0">
                                                <button
                                                    class="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                                    Buy Now</button>
                                            </div>
                                            <div class="mb-4 mr-4 lg:mb-0">
                                                <button
                                                    class="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        class="bi bi-cart" viewBox="0 0 16 16">
                                                        <path
                                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}