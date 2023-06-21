//front-end
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
//back-end

function MobPadDisp ({ id, url, name, wiki_url, map_url, lat, long, imgUrl, total_launch, attempted }) {
  const [padInfo, setPadInfo] = useState(false)
  return (
    <>
      <div
        key={id}
        className='
    mobPadDiv
    group
    '
      >
        {/**div with imgUrl/image location */}
        <div
          className='h-full
      w-full
      bg-slate-600
      '
        >
          <div
            className='
        hidden
  h-full
  w-full
  rounded-lg
  p-2
  bg-cover
  bg-no-repeat
        group-hover:inline-grid
        transform
        transition
        duration-300
        ease-in-out
        '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          ></div>
        </div>
        {/**landing pad details */}
        <div
          className='
        h-full
        w-full 
        bg-slate-600 
        bg-opacity-90
        grid
        place-items-center
        space-y-2
        '
        >
          <h1
            className='
            text-xl 
            font-robot-slab 
            font-semibold 
            text-amber-400'
          >
            {name}
          </h1>
          <h3 className='mobPadLoc'>
            Location: {long}, {lat}
          </h3>
          <Button
            onClick={() => setPadInfo(true)}
            color='lightGreen'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='
            px-3 
            mx-3 
            text-lg 
            font-robot-condensed 
            font-normal 
            capitalize'
          >
            <Icon name='info' />
            Info
          </Button>
        </div>
      </div>
      <Modal size='regular' active={padInfo} toggler={() => setPadInfo(false)}>
        <ModalHeader toggler={() => setPadInfo(false)}>
          <h1
            className='
            text-xl 
            font-ibm-sans 
            font-semibold
            text-amber-500
            underline
            pl-3
            pr-7
            '
          >
            Info about: {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          mobModalBody
          '
          >
            {/**top of modal */}
            <div
              className='
            h-full 
            w-full 
            grid 
            place-items-center
            space-y-5
            '
            >
              <h1
                className='
            text-2xl 
            font-robot-slab 
            font-semibold 
            text-sky-300 
            underline'
              >
                {name}
              </h1>
              
              <h2
                className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
              >
                Total launch count:
              </h2>
              <h3 className='font-robot-slab font-semibold text-xl text-sky-400'>
               {total_launch}
              </h3>
              
              <h2
                className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
              >
                Attempted launch count:
              </h2>
              <h3 className='font-robot-slab font-semibold text-xl text-sky-400'>
                {attempted}
              </h3>
              <h2
                className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
              >
                Location:
              </h2>
              <h3 className='font-robot-slab font-semibold text-lg text-sky-400'>
                Long.: {long}
              </h3>
              <h3 className='font-robot-slab font-semibold text-lg text-sky-400'>
                Lat.: {lat}
              </h3>
              <h2
                className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
              >
                Location on map:
              </h2>
            </div>
            {/**bottom of modal */}
            <div
              className='
            h-[280px]
            w-full 
            bg-center 
            bg-no-repeat 
            rounded-lg'
              style={{
                backgroundImage: `url(${imgUrl})`
              }}
            ></div>
            <h2
              className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
            >
              Wikipedia article:
            </h2>
            <a
              href={wiki_url}
              className='font-robot-slab font-semibold text-lg text-sky-400 w-[230px] truncate'
            >
              {wiki_url}
            </a>
            <h2
              className='
            text-lg 
            font-ibm-sans 
            font-normal 
            text-slate-300
            place-self-start
            '
            >
              Google Map URL:
            </h2>
            <a
              href={map_url}
              className='font-robot-slab font-semibold text-lg text-sky-400 w-[230px] truncate'
            >
              {map_url}
            </a>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setPadInfo(false)}
            color='red'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-robot-slab font-semibold capitalize space-x-3'
          >
            <Icon name='cancel' />
            Close info
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobPadDisp
