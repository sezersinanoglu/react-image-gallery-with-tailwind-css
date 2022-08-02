import React from 'react'

const Card = ({ image }) => {
    //return api with tags and also thats tags arrays split method
    const tags = image.tags.split(',');
    //return card components
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full h-52 rounded-lg 
            transition hover:scale-105" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            
            {/*tags components return*/}
            <div className="px-6 py-4 md:flex md:flex-row">
                {
                    tags.map((tag,index)=> {
                        return <span key={index} className="inline-block items-center text-center bg-gray-200 
                        rounded-full w-full py-1 mb-1 text-sm font-semibold 
                        text-gray-700 mr-2 md:w-52">#{tag}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Card;
