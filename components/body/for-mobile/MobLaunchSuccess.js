//front-end
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
//back-end
import { useState } from 'react'

function MobLaunchSuccess ({
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
        className='mobLaunchSuccess
    group
    '
      >
        {/**imgUrl */}
        <div
          className='
        bg-launch-success
        h-full
        w-full
        rounded-lg
        '
        ></div>
        {/** */}
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
          from-[#e0d8cc]
  to-[#708f96]
          '
          >
            <h1
              className='
            font-robot-slab 
            font-extrabold 
            text-yellow-800
           text-2xl 
             '
            >
              {name}
            </h1>
            <h1
              className='
            font-robot-slab 
            font-normal 
            text-yellow-900
           text-lg 
           mx-auto
             '
            >
              {name}
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
            bg-slate-600
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
              h-[85%] 
              w-full 
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
            bg-sky-900
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
              bg-slate-800
              text-emerald-500
              font-normal
              font-font-robot
              px-3
              py-2
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
            min-h-[130px]
            max-h-[170px]
            grid
            place-items-center
            space-y-2
            bg-sky-700
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
              h-[85%]
              w-full
              bg-teal-800
              bg-opacity-80
              grid
              place-items-center
              '
              >
                <h1
                  className='
              text-base
              font-font-robot
              font-normal
              text-emerald-300
              '
                >
                  Launch service type: {launcher_type}
                </h1>
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

export default MobLaunchSuccess
