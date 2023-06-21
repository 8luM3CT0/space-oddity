import React from 'react'
//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function DesktopFNews ({ id, title, description, author, date, imgUrl, url }) {
  return (
    <>
      <div
        key={id}
        className='
    desktopNews
    group
    '
      >
        {/** 
     left div == image
     similar UI to the desktop news at 
     home page
     */}
        <div
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
          className='
     w-full
     h-full
     bg-center 
     bg-no-repeat
     rounded-lg
     
     '
        ></div>
        {/**
     right div == contains
     some other elements
      */}
        <div
          className='
      w-full
      h-full
      place-items-center
      space-y-4
      px-3
      py-6
      bg-amber-800
      '
        >
          <h1
            className='
        text-xl 
        font-ibm-sans 
        font-bold
        text-sky-200
        group-hover:underline
        transform
        transition
        duration-300
        ease-in-out
        '
          >
            {title}
          </h1>
          <span
            className='
        flex
        items-center
        space-x-2
        '
          >
            <h3
              className='
          font-ibm-mono 
          text-base
          font-normal 
          text-sky-500
          '
            >
              Source: {''}
            </h3>
            <h2
              className='
          text-lg
          font-ibm-sans 
          font-semibold
          text-sky-300
          group-hover:underline
          transform
          transition
          duration-300
          ease-in-out
          '
            >
              {author}
            </h2>
          </span>
          <div
            className='
        h-[280px] 
        bg-amber-500
        rounded-lg
        px-3
        py-4
        overflow-y-scroll
        scrollbar-thin
        scrollbar-thumb-slate-800
        scrollbar-track-amber-700
        font-ibm-sans
        font-normall
        text-lg
        text-[#ae7c54]
        '
          >
            {description}
          </div>
          <a
            href={url}
            className='
              text-base
              font-ibm-sans 
              font-semibold 
              text-sky-300
              hover:underline
              hover:shadow-md
              hover:shadow-sky-200
              rounded-lg
              transform
              transition
              duration-300
              ease-out
              '
          >
            {url}
          </a>
        </div>
      </div>
    </>
  )
}

export default DesktopFNews
