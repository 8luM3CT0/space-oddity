//front-end
import React from 'react'
//back-end
import { useState } from 'react'
import { creds } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'

function ArticleDetails({detail}) {
  const router = useRouter()
  const [user] = useAuthState(creds)
  
    return (
    <div className='
    h-[100%]
    w-[100%]
    bg-sky-800
    bg-opacity-60
    flex
    flex-col
    justify-between
    space-y-4
    
    '>
        {/**article author */}
        <h4 className="
        font-robot-slab
        font-semibodl
        text-lg
        text-slate-50
        px-5
        py-4
        ">
          By: {detail?.data()?.createdBy}
        </h4>
        {/**article title */}
        <h1 className="
        text-2xl
        font-robot-slab
        text-slate-100
        font-normal
        px-5
        ">
        {detail?.data()?.articleTitle}
        </h1>
        {/**article creation */}
        <h5 className="
        text-base
        font-robot-slab
        font-light
        text-slate-200
        px-5
        ">
          {new Date(detail?.data()?.addedOn?.toDate()).toLocaleString()}
        </h5>
        {/**read more button */}
        <span 
        onClick={() => router.push(`/article/${detail?.id}`)}
        className="
        w-full
        h-[1/8]
        border-t-4
        border-slate-900
        px-3
        py-2
        grid
        place-items-center
        text-xl
        font-robot-slab
        font-normal
        text-sky-50
        bg-slate-400
        bg-opacity-80
        cursor-pointer
        hover:shadow-lg
        hover:shadow-slate-800
        hover:scale-y-105
        transform
        transition
        duration-200
        ease-linear
        ">
          Read more
        </span>
    </div>
  )
}

export default ArticleDetails