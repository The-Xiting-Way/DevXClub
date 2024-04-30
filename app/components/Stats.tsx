
import React from 'react';

const Numbers: React.FC = () => {
    return (
        <section className="py-10 bg-gradient-to-r from gray-00 to-gray-200 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">

                                <div className="max-w-2xl mx-auto text-center">
                                    <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                                    <p className="mt-3 text-xl leading-relaxed text-gray-500 md:mt-8">We have many who are like us and like you.</p>
                                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500"> 6+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-300">Years in business</p>
                        <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500"> 4821 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-300">Projects delivered</p>
                        <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500"> 37+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-300">Team members</p>
                        <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;
