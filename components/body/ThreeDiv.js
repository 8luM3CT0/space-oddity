import React from 'react'
//front-end
import { Modal, ModalHeader, ModalBody, ModalFooter, Icon, Button } from '../'
//back-end
import { useRouter } from 'next/router'

function ThreeDiv ({ iconName, pushTo, message, bgImg, pageMess }) {
  const router = useRouter()
  //      onClick={() => router.push(`${pushTo}`)}
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`
      }}
      className='
    h-[400px]
    w-[400px]
    rounded-xl
    bg-center
    bg-no-repeat
    shadow-xl
    grid
    place-items-center
    hover:shadow-slate-100
    transform
    transition
    ease-in-out
    duration-300
    cursor-pointer
    '
    >
      <h1
        className='
        mx-auto 
        my-auto 
        text-xl
        text-sky-100
        font-robot-slab
        font-light
        px-3
        '
      >
        {message}
      </h1>
      <Button
        onClick={() => router.push(`${pushTo}`)}
        color='blueGray'
        buttonType='filled'
        size='regular'
        ripple='light'
        className='space-x-2 font-ubunto font-normal text-base capitalize'
      >
        <Icon name={iconName} />
        {pageMess}
      </Button>
    </div>
  )
}

export default ThreeDiv
