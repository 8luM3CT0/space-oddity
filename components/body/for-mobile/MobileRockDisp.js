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

function MobileRockDisp ({
  id,
  name,
  imgUrl,
  type,
  createdOn,
  orbit,
  description
}) {
  const [rocketInfo, setRocketInfo] = useState(false)
  return (
    <>
      <div
        key={id}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
        className='mobileRock group'
      >
        {/**Name */}
        <h1
          className='
        text-2xl 
        w-3/4
        truncate
        font-ibm-sans 
        font-semibold
        text-amber-700
        py-3
        px-4
        shadow-lg
        rounded-3xl
        group-hover:text-red-500
        shadow-orange-600
        group-hover:shadow-amber-300
        transform
        transition
        duration-300
        ease-in-out
        '
        >
          {name}
        </h1>
        {/**button to view */}
        <button
          onClick={e => setRocketInfo(true)}
          className='
        truncate
        rounded-lg
        mx-auto
        py-2
        px-4
        justify-center
        bg-transparent
        text-transparent
        text-xl
        space-x-2
        font-robot-slab
        font-normal
        group-hover:bg-slate-700
        group-hover:bg-opacity-100
        group-hover:shadow-lg
        group-hover:shadow-[#774438]
        group-hover:scale-105
        group-hover:text-[#f4cf8b]
        transform
        transition
        duration-300
        ease-in-out
        flex
        items-center
        '
        >
          <Icon name='info_outline' />
          <p>Info</p>
        </button>
      </div>
      <Modal
        size='regular'
        active={rocketInfo}
        toggler={() => setRocketInfo(false)}
      >
        <ModalHeader toggler={() => setRocketInfo(false)}>
          <h1
            className='
            text-base
            font-ibm-sans
             font-normal
             underline
             text-[#d6b270]
             animate-pulse
             pl-2
             pr-7
             '
          >
            Info about: {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          modRockDiv
          '
          >
            <div
              className='
          h-[270px]
          w-[310px]
          mx-auto
          px-3
          py-2
          rounded-lg
          bg-center
          bg-no-repeat
          '
              style={{
                backgroundImage: `url(${imgUrl})`
              }}
            ></div>
            <h2
              className='
            text-xl
            text-slate-100
            font-robot-slab
            font-bold
            underline
            '
            >
              {name}
            </h2>
            <h2
              className='
            text-lg
            text-slate-100
            font-robot-slab
            font-light
            '
            >
              Vehi. type: {type}
            </h2>
            <h2
              className='
            text-lg
            text-slate-100
            font-robot-slab
            font-light
            '
            >
              Orbitting around: {orbit}
            </h2>
            <div
              className='
            h-[190px]
            w-3/4
            mx-auto
            px-2
            py-3
            bg-gradient-to-b
            from-slate-700
            to-slate-600
            text-sky-100
            rounded-lg
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-700
            scrollbar-thumb-orange-400
            '
            >
              {description}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setRocketInfo(false)}
            color='red'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-robot-slab capitalize font-normal space-x-1'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobileRockDisp
