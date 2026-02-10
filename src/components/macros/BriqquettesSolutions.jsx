import React, { useEffect, useState } from 'react'

const BriqquetesSolutions = ({ titles, imageUrl }) => {

    // defining a state for the title variable. which is the text content of tthe slide-show.
    const [title, setTitle] = useState(titles[0]);

    // using useEffect to put an interval listener to change the contents of the title in every 3 seconds. 
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTitle(titles[index]);
            index = (index + 1) % titles.length;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // can export as prop if need to use component with different colors
    const bgColors = ['bg-gray-50', 'bg-gray-200', 'bg-gray-300', 'bg-gray-200', 'bg-gray-100']; // Define the background colors

    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div className={`flex justify-center items-center ${bgColors[titles.indexOf(title)]} min-h-[30em] sm:h-auto soln`}>
                    <h2 className='uppercase text-3xl sm:text-4xl lg:text-6xl font-semibold text-center px-10 sm:px-20 text-black'>
                        {title}
                    </h2>
                </div>
                <div>
                    <img src={imageUrl} className='sm:h-full w-full' alt="Briqquetes biomass deposit" />
                </div>
            </div>
        </>
    )
}

export default BriqquetesSolutions