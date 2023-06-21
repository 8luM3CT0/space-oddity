//front-end
import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end

function DeskRockDisp ({
  id,
  name,
  imgUrl,
  type,
  createdOn,
  orbit,
  status,
  description
}) {
  const [rocketInfo, setRocketInfo] = useState(false)

  return (
    <>
      <div className='desktopRock group'>
        {/**left => has imageUrl */}
        <div
          key={id}
          className='
   w-full
   h-full
   p-3
   bg-center
   bg-no-repeat
   '
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        ></div>
        {/**right => has name and some other details */}
        <div
          className='
   w-full 
   h-full
   grid
   place-items-start
   space-y-4
   rounded-t-md
   bg-gradient-to-tl
   from-[#a07c74]
   to-[#12727d]
   bg-opacity-70
   px-5
   py-3
   '
        >
          <h1
            className='
    text-2xl 
    font-font-robot 
    font-bold
    text-slate-100
    group-hover:shadow-[#fc886]
    duration-300
    transform
    transition
    ease-linear
    '
          >
            {name}
          </h1>
          <h1
            className='
    text-xl 
    font-font-robot 
    font-semibold
    text-slate-200
    group-hover:shadow-[#ad8248876]
    duration-300
    transform
    transition
    ease-linear
    '
          >
            Type: {type}
          </h1>
          <h1
            className='
    text-lg 
    font-font-robot 
    font-normal
    text-slate-200
    group-hover:shadow-[#9c7644866]
    duration-300
    transform
    transition
    ease-linear
    '
          >
            Orbitting: {orbit}
          </h1>
          <h1
            className='
    text-lg 
    font-font-robot 
    font-normal
    text-slate-200
    group-hover:shadow-[#ad8248876]
    duration-300
    transform
    transition
    ease-linear
    '
          >
            Status: {status}
          </h1>
          <Button
            onClick={() => setRocketInfo(true)}
            color='orange'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='dark'
            className='
            space-x-4
            capitalize
            font-robot-slab 
            font-light 
            text-lg'
          >
            <Icon name='chrome_reader_mode' />
            <p>Read about it</p>
          </Button>
          {/**for modal */}
          {/**
                    <div
            className='
          h-[270px]
          px-4
          w-full
          rounded-lg
          mx-auto
          bg-slate-700
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-slate-700
          scrollbar-thumb-amber-300
          shadow-lg
          '
          ></div>
           */}
        </div>
      </div>
      <Modal size='lg' active={rocketInfo} toggler={() => setRocketInfo(false)}>
        <ModalHeader toggler={() => setRocketInfo(false)}>
          <h1
            className='
          text-xl 
          font-ibm-sans 
          font-normal 
          text-amber-600
          underline
          '
          >
            Info about: {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          px-3
          py-2
          grid
          place-items-center
          h-[700px]
          w-[600px]
           space-y-4
           bg-cover
           bg-no-repeat
          '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            <div
              className='
            h-[98%]
            m-auto
            w-[90%]
            px-6
            py-3
           rounded-lg
           space-y-3
           bg-slate-600
           bg-opacity-80
           overflow-y-scroll
           scrollbar-hide
           grid
           place-items-center
            '
            >
              <div
                className='
desktopRocketDiv
              '
              >
                <h2
                  className='
                font-robot-slab
                font-normal
                text-sky-100
                '
                >
                  Name: {name}
                </h2>
                <h2
                  className='
                font-robot-slab
                font-normal
                text-sky-100
                '
                >
                  Creation date: {createdOn}
                </h2>
              </div>
              <div
                className='
desktopRocketDiv
              '
              >
                <h2
                  className='
                font-robot-slab
                font-normal
                text-sky-100
                '
                >
                  Vehicle type: {type}
                </h2>
                <h2
                  className='
                font-robot-slab
                font-normal
                text-sky-100
                '
                >
                  Current status: {status}
                </h2>
              </div>
              <div
                className='
                h-[50%]
                bg-slate-700
                bg-opacity-90
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-600
                scrollbar-thumb-amber-600
                px-3
                py-2
                text-lg
                text-sky-100
                rounded-xl
              '
              >
                {description}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setRocketInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='light'
            className='font-robot-condensed font-semibold text-lg capitalize space-x-3'
          >
            <Icon name='close_fullscreen' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeskRockDisp
