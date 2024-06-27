"use client"

import React, {useState} from 'react'
import Image from 'next/image'

const MasonaryGrid = () => {
    const [hoverIndex,setHoverIndex] = useState<number | null>(null)
    const [mousePosition,setMousePosition] = useState<{x:number,y:number}>({x:0,y:0});

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>,index:number) => {
        if(hoverIndex === index) {
            const rect = (e.target as HTMLDivElement).getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            setMousePosition({x,y});
        }
    }

  return (
    <div className='p-5 sm:p-8'>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>div:not(:first-child)]:mt-8'>
           {[...Array(15)].map((_,i) => (
            <div 
            key={i} 
            className='relative overflow-hidden rounded-md'
            onMouseEnter={()=>setHoverIndex(i)}
            onMouseLeave={()=>setHoverIndex(null)}
            onMouseMove={(e)=> handleMouseMove(e,i)}
            >
                <Image 
                src={`/fetuare/featura${i + 1}.jpg`}
                className='cursor-pointer hover:scale-150 transition-transform duration-500 ease-in-out'
                alt='featured pets'
                style={{
                    transformOrigin:`${mousePosition.x}% ${mousePosition.y}%`
                }}
                width={500}
                height={500}
                />
            </div>
           ))}
        </div>
    </div>
  )
}

export default MasonaryGrid