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

function MobCraftDisp ({
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
        className='
    mobileCraftDisplay
    group
    '
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div
          className='
        h-full
        grid
        place-items-center
        px-3
        rounded-t-md
        rounded-b-lg
        w-1/2
        bg-sky-900
        opacity-0
        group-hover:opacity-80
  group-hover:shadow-md
  group-hover:shadow-sky-800
  transform
  transition
  ease-in-out
  duration-300
        '
        >
          <h1
            className='
        text-lg
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
        text-base
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
            size='sm'
            iconOnly={true}
            buttonType='link'
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
        px-5
        '
          >
            <Icon name='auto_stories' />
          </Button>
        </div>
      </div>
      <Modal
        size='regular'
        active={craftInfo}
        toggler={() => setCraftInfo(false)}
      >
        <ModalHeader toggler={() => setCraftInfo(false)}>
          <h1
            className='
      text-lg 
      pl-4 
      pr-8 
      text-sky-800 
      underline 
      font-robot-slab 
      font-semibold
      animate-pulse
      '
          >
            Info ahout: {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
      mobCraftDiv
      '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            <div
              className='
          h-full 
          w-full
          px-4
          py-3
          overflow-y-scroll
          scrollbar-hide
          grid
          space-y-4
          place-items-center
          bg-slate-600
          bg-opacity-80
          rounded-xl
          '
            >
              <h1 className='modCraftName'>{name}</h1>
              <h3 className='modCraftDetail'>serial No.: {serialNo}</h3>
              <h3 className='modCraftDetail'>status: {status}</h3>
              {/**description div */}
              <div className='descriptionDiv'>{description}</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setCraftInfo(false)}
            color='orange'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='light'
            className='px-3 space-x-2 font-robot-slab text-base font-semibold capitalize'
          >
            <Icon name='do_disturb' />
            Close info
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobCraftDisp
