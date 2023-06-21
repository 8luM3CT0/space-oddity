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

function DeskCraftDisp ({
  id,
  url,
  name,
  serialNo,
  status,
  description,
  imgUrl
}) {
  const [craftInfo, setCraftInfo] = useState(false)
  return (
    <>
      <div
        key={id}
        className='desktopCraftDisplay group'
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div
          className='
    h-1/2
    w-full
    bg-sky-900
    opacity-0
    group-hover:opacity-90
    group-hover:shadow-lg
    group-hover:shadow-sky-300
    ease-in-out
    transform
    transition
    duration-300
    grid
    place-items-start
    py-3
    px-4
    space-y-3
    '
        >
          <h1
            className='
        text-xl
  text-sky-50
  font-robot-slab
  font-semibold
  ml-3
  mr-7
  opacity-0
  group-hover:opacity-100
  transform
  transition
  ease-in-out
  duration-300
        '
          >
            {name}
          </h1>
          <h1
            className='
        text-lg
  text-slate-50
  font-robot-slab
  font-light
  ml-3
  mr-7
  opacity-0
  group-hover:opacity-100
  transform
  transition
  ease-in-out
  duration-300
        '
          >
            Serial no. {serialNo}
          </h1>
          <Button
            onClick={() => setCraftInfo(true)}
            color='orange'
            size='regular'
            buttonType='outline'
            block={true}
            ripple='light'
            className='
        opacity-0 
        group-hover:opacity-90 
        space-x-2 
        capitalize 
        text-base 
        font-robot-slab 
        font-normal
        
        '
          >
            <Icon name='auto_stories' />
            More
          </Button>
        </div>
      </div>
      <Modal size='lg' active={craftInfo} toggler={() => setCraftInfo(false)}>
        <ModalHeader toggler={() => setCraftInfo(false)}>
          <h1 className='text-xl font-robot-slab font-semibold text-sky-300 underline'>
            Info about: {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
    max-h-[840px]
    min-h-[720px]
    max-w-[720px]
    min-w-[690px]
    px-8
    py-12
    rounded-lg
    bg-slate-800
    bg-opacity-80
    grid
    place-items-center
    space-y-4
    overflow-hidden
    '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            <div
              className='deskModalDiv
            '
            >
              {/**modal name */}
              <span
                style={{
                  backgroundImage: `url(${imgUrl})`
                }}
                className='
              flex
              items-center
              space-x-4
              px-4
              py-3
              w-[83.33%]
              h-[45px]
              rounded-lg
              shadow-lg
              shadow-sky-300
              bg-cover
              bg-no-repeat
              active:shadow-sky-600
              '
              >
                <h2
                  className='
                font-ibm-sans 
                font-normal
                text-lg
                text-sky-600
                underline
                '
                >
                  Name:
                </h2>
                <h1
                  className='
                font-robot-slab 
                font-semibold
                text-xl
                text-sky-400
                '
                >
                  {name}
                </h1>
              </span>
              {/**modal status and serial number */}
              <span
                style={{
                  backgroundImage: `url(${imgUrl})`
                }}
                className='
              flex
              items-center
              space-x-4
              justify-evenly
              px-4
              py-3
              w-[83.33%]
              h-[45px]
              rounded-lg
              shadow-lg
              shadow-sky-300
              bg-center
              bg-no-repeat
              active:shadow-sky-600
              '
              >
                <h2
                  className='
                font-robot-slab 
                font-normal
                text-lg
                text-sky-400
                px-3
                py-2
                bg-opacity-70
                rounded-lg
                bg-slate-700
                underline
                '
                >
                  Serial #: {serialNo}
                </h2>
                <h1
                  className='
                font-robot-slab 
                font-normal
                text-lg
                text-sky-400
                px-3
                py-2
                bg-opacity-70
                rounded-lg
                bg-slate-700
                '
                >
                  Status: {status}
                </h1>
              </span>
              {/**description modal div */}
              <div
                className='
              h-5/6
              w-full
              rounded-xl
              bg-opacity-80
              bg-slate-700
              text-sky-400
              font-robot-slab
              font-semibold
              text-lg
              overflow-y-scroll
              scrollbar-thin
              scrollbar-track-slate-800
              scrollbar-thumb-amber-400
              mx-auto
              px-4
              py-2
              '
              >
                {description}
              </div>
            </div>
          </div>
          <div className='deskWarning'>
            <h1
              className='
            text-2xl 
            font-robot-slab 
            font-semibold
            text-amber-300
            animate-pulse
            w-1/2
            m-auto
            p-3
            shadow-md
            shadow-amber-500
            '
            >
              This can only be viewed on a desktop screen.
            </h1>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setCraftInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='dark'
            className='space-x-3 font-robot-slab font-semibold text-lg capitalize'
          >
            <Icon name='close_fullscreen' />
            Close Info
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeskCraftDisp
