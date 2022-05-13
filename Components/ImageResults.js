import React from 'react'
import Pagination from './Pagination'

const ImageResults = ({results}) => {
  return (
    <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {results.items?.map((result)=>(
                <div key={result.link} className='mb-8'>
                    <div className='group'>
                        <a href={result.image. contextLink}>
                            <img src={result.link} alt={result.title} className="group-hover:shadow-xl w-full h-60 object-contain"/>
                            <a href={result.image. contextLink}className="group-hover:underline">
                                <h2 className="truncate text-xl">{result.title}</h2>
                             </a>
                             <a href={result.image. contextLink} className="group-hover:underline">
                                <p className="text-gray-600">{result.displayLink}</p>
                             </a>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        <div className='ml-16'>
            <Pagination/>
        </div>
    </div>
  )
}

export default ImageResults