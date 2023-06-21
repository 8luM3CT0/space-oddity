//front-end
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
//back-end
import { useState } from 'react'

function MobLaunchFailure ({
  id,
  url,
  name,
  status,
  status_desc,
  launcher,
  rocket_name,
  mission_name,
  mission_desc,
  pad_name,
  pad_long,
  pad_lat,
  imgUrl,
  orbit_area,
  orbit_abbrev,
  launcher_name,
  launcher_type
}) {
  const [launchModal, setLaunchModal] = useState(false)

  return (
    <>
      <div
        key={id}
        className='mobLaunchFailure
    group
    '
      >
        {/**image at top */}
        <div
          className='
        h-full
        w-full
        bg-launch-failure
        rounded-lg
        '
        ></div>
        {/**details */}
        <div
          className='
        h-[70%]
        w-full
        px-2
        grid
        place-items-center
        space-y-4
        bg-slate-600
        bg-opacity-70
        group-hover:shadow-xl
        group-hover:shadow-slate-700
        group-hover:scale-105
        transform
        transition
        duration-300
        ease-in-out
        rounded-xl
        
        '
        >
          <h1
            className='
            font-robot-slab
            font-semibold
            text-xl
            text-sky-300
            underline
            '
          >
            {name}
          </h1>
          <h2
            className='
            font-robot-slab
            font-normal
            text-lg
            text-sky-300
            underline
            '
          >
            {rocket_name}
          </h2>
          <h3
            className='
            font-robot-slab
            font-normal
            text-sky-500
            text-lg
            '
          >
            Status: {status}
          </h3>
          <Button
            onClick={() => setLaunchModal(true)}
            color='orange'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='dark'
            className='font-robot-slab font-normal text-base capitalize'
          >
            <Icon name='read_more' />
            Read more
          </Button>
        </div>
      </div>
      <Modal
        toggler={() => setLaunchModal(false)}
        active={launchModal}
        size='regular'
      >
        <ModalHeader toggler={() => setLaunchModal(false)}>
          <p className='font-robot-slab font-semibold text-sky-700 underline'>
            Info about launch
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          launchModalDiv
          from-[#462f0b]
  to-[#571818]
          '
          >
            <h1
              className='
            font-robot-slab 
            font-normal 
            text-[#e00a24]
           text-2xl 
             '
            >
              {name}
            </h1>
            <h1
              className='
            font-robot-slab 
            font-normal 
            text-[#aa0707]
           text-lg 
           mx-auto
             '
            >
              {rocket_name}
            </h1>
            {/**status div */}
            <div
              className='
            w-full 
            rounded-lg
            min-h-[130px]
            max-h-[170px]
            flex 
            flex-col
            space-y-2
            bg-[#72383d]
            bg-opacity-90
            '
            >
              <h1
                className='
              text-lg 
              font-robot-slab
              font-semibold
              text-sky-400
              '
              >
                Status: {status}
              </h1>
              <span
                className='
              min-h-[70px]
              max-h-[110px] 
              w-full
              rounded-lg 
              overflow-y-scroll 
              scrollbar-hide
              bg-slate-800
              text-amber-500
              px-3
              py-2
              '
              >
                {status_desc}
              </span>
            </div>
            {/**end of status div */}
            {/**mission div */}
            <div
              className='
            w-full 
            rounded-lg
            min-h-[130px]
            max-h-[170px]
            flex 
            flex-col
            space-y-2
            bg-[#280a33]
            bg-opacity-90
            '
            >
              <h1
                className='
              text-lg 
              font-robot-slab
              font-semibold
              text-emerald-300
              '
              >
                Mission name: {mission_name}
              </h1>
              <h1
                className='
              text-sm 
              font-robot-slab
              font-semibold
              text-emerald-300
              '
              >
                Orbit area: {orbit_area}, {orbit_abbrev}
              </h1>
              <span
                className='
              h-[85%] 
              w-full 
              overflow-y-scroll 
              scrollbar-hide
              bg-[#07041e]
              text-emerald-500
              px-3
              py-2
              font-font-robot
              font-normal
              '
              >
                {mission_desc}
              </span>
            </div>
            {/**end of mission div */}
            {/**launcher div */}
            <div
              className='
            w-full 
            rounded-lg
            min-h-[90px]
            max-h-[130px]
            flex 
            flex-col
            place-items-center
            space-y-2
            bg-[#4f0832]
            bg-opacity-90
            '
            >
              <h1
                className='
              text-lg 
              font-robot-slab
              font-semibold
              text-emerald-300
              '
              >
                Launch service provider: {launcher_name}
              </h1>
              <span
                className='
              text-base
              font-font-robot
              font-normal
              text-emerald-300
              h-full
              rounded-lg
              w-full
              px-3
              py-2
              bg-[#07031d]
              '
              >
                Launch service type: {launcher_type}
              </span>
            </div>
            {/**end of launcher div */}
            {/**pad div */}
            {/**end of pad div */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setLaunchModal(false)}
            color='orange'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='dark'
            className='font-robot-slab font-normal capitalize'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobLaunchFailure
