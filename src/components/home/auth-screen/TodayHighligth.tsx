"use client"

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const TodayHighligth = () => {
  return (
    <div className='w-full md:w-3/4 mx-auto'>
        <CldVideoPlayer 
        width='960'
        height='540'
        className='rounded-md'
        src='video-hd_xvoaym'
        />
    </div>
  )
}

export default TodayHighligth