import React from 'react';
import { motion } from "framer-motion";
import { heroData } from "../../utils/data"
import delivery from "../../img/delivery.png";
import heroBg from "../../img/heroBg.png"

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="py-16 flex-1 flex items-center relative">
                    <img
                        src={heroBg}
                        className="ml-auto h-120 w-full lg:w-auto lg:h-650"
                        alt="" />
                    <div
                        className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-1 lg:px-2 py-4 gap-4 flex-wrap lg:flex-wrap">
                        {
                            heroData && heroData.map(n => (
                                <div
                                    key={n.id}
                                    className="w-[140px] lg:w-[180px] p-4 bg-rose-100 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-2xl">
                                    <img
                                        src={n.imgSrc}
                                        className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                                        alt="" />
                                    <p
                                        className="text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-red-700">{n.name}
                                    </p>
                                    <p
                                        className="text-xs md:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                        {n.decp}
                                    </p>
                                    <p
                                        className='text-md font-semibold text-headingColor'>
                                        <span className='text-xs text-red-600'>Tk.</span>
                                        {n.price}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 justify-center w-[200px] bg-rose-200 px-4 py-1 rounded-full">
                        <p className='text-base text-rose-500 font-semibold'>Bike Delivery</p>
                        <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
                            <img src={delivery} className="w-full h-full object-contain" alt="" />
                        </div>
                    </div>
                    <p className="text-[2.5rem] md:w-[600px] lg:w-[800px] md:text-[4.5rem] font-bold tracking-wide text-headingColor">
                        The Fastest Delivery in <span className='text-rose-600 text-[3rem]  lg:text-[5rem]'>Your City</span>
                    </p>
                    <p className="py-6 md:w-[600px] lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <motion.button
                        whileTap={{ scale: 0.5 }}
                        type='button'
                        className='bg-gradient-to-br from-rose-500 to-rose-800 w-full md:w-auto px-4 py-2 rounded-2xl hover:shadow-2xl transition-all ease-in-out duration-100'
                    >Order Now</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;