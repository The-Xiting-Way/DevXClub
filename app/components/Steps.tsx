
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="p-10 mt-32 bg-gradient-to-r from gray-00 to-gray-200 sm:py-16 lg:pt-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500 sm:text-4xl lg:text-5xl">How does it work?</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-black"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-300 md:mt-10">Create a free account</h3>
                            <p className="mt-4 text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-black"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-300 md:mt-10">Build your website</h3>
                            <p className="mt-4 text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-black"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-gray-300 md:mt-10">Release & Launch</h3>
                            <p className="mt-4 text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;