//front-end
import React from 'react'
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

function DeskAstroDisp ({
  id,
  name,
  url,
  status,
  type,
  age,
  dob,
  dod,
  nationality,
  bio,
  twitt,
  insta,
  wiki,
  agency_name,
  agency_url,
  agency_hq,
  agency_abbrev,
  imgUrl,
  total_flights,
  first_flight,
  last_flight
}) {
  const [astroInfo, setAstroInfo] = useState(false)
  return (
    <>
      <div
        key={id}
        className='deskAstroDiv
        group
    '
      >
        {/**astronaut picture */}
        <div
          className='
        h-full
        w-full
        bg-center
        bg-no-repeat
        rounded-md
        '
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        ></div>
        {/**astronaut details */}
        <div
          className='
        h-[70%]
        w-full 
        grid 
        place-items-center
        space-y-4
        px-4
        py-3
        '
        >
          <h1
            className='
            font-robot-slab 
            font-semibold 
            text-sky-300 
            text-2xl
            shadow-lg
            '
          >
            {name}
          </h1>
          <h2
            className='
            font-robot-slab 
            font-normal 
            text-sky-400 
            text-lg
            shadow-md
            '
          >
            {status}
          </h2>
          <h2
            className='
            font-robot-slab 
            font-normal 
            text-sky-400 
            text-lg
            shadow-md
            '
          >
            Nationality: {nationality}
          </h2>
          {/**some small details */}
          <div
            className='
        w-full
        flex
        items-center
        justify-between
        px-3
        space-x-2
        py-2
        '
          >
            <span
              className='
            font-robot-slab 
            font-light
            text-sky-500 
            text-base
            shadow-md
            grid
            place-items-start
            '
            >
              Age: {age}
            </span>
            <span
              className='
            font-robot-slab 
            font-light 
            text-sky-500 
            text-base
            shadow-md
            grid
            place-items-start
            '
            >
              Date of birth: {dob}
            </span>
          </div>
          <div
            onClick={() => setAstroInfo(true)}
            className='
          h-full
          w-full
          rounded-lg
          bg-sky-400
          group-hover:rounded-b-3xl
          group-hover:rounded-t-xl
          group-hover:bg-amber-500
          group-hover:shadow-lg
          group-hover:shadow-amber-800
          group-hover:scale-105
          transform
          transition
          duration-[400ms]
          ease-in-out
          flex
          items-center
          justify-evenly
          '
          >
            <Icon name='visibility' />
            <h1 className='text-xl font-robot-slab font-semibold'>Read more</h1>
          </div>
        </div>
      </div>
      <Modal size='lg' active={astroInfo} toggler={() => setAstroInfo(false)}>
        <ModalHeader toggler={() => setAstroInfo(false)}>
          <h1
            className='
      font-robot-slab 
      font-semibold 
      text-xl
      text-sky-700
      underline
      animate-pulse
      '
          >
            Info about astronaut ID: {id}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
      max-h-[870px]
      min-h-[840px]
      max-w-[960px]
      min-w-[930px]
      grid
      place-items-center
      bg-gradient-to-br
      from-sky-700
      to-slate-800
      px-3
      py-2
      '
          >
            {/**imgUrl */}
            {status == 'Deceased' ? (
              <div
                className='
            bg-contain
            h-[320px]
            w-full
            rounded-xl
            bg-no-repeat
            shadow-xl
            shadow-orange-400
            '
                style={{
                  backgroundImage: `url(${imgUrl})`
                }}
              ></div>
            ) : (
              <div
                className='
            bg-contain
            h-[320px]
            w-full
            rounded-xl
            bg-no-repeat
            '
                style={{
                  backgroundImage: `url(${imgUrl})`
                }}
              ></div>
            )}
            {/**astronaut details */}
            <div
              className='
            h-full
            w-full
            border
            rounded-lg
            border-opacity-80
            border-slate-100
            overflow-hidden
            grid
            place-items-start
            pl-3
            pr-5
            py-3
            space-y-4
            bg-[#725a7a]
            bg-opacity-70
            '
            >
              <h1 className='font-robot-slab font-normal text-amber-400 text-2xl'>
                {name}
              </h1>
              <span className='w-[90%] bg-[#48383d] justify-evenly px-4 py-3 rounded-lg shadow-lg shadow-slate-700 flex items-center space-x-2'>
                <h2 className='font-robot-condensed font-normal text-lg text-amber-700'>
                  Status: {status}
                </h2>
                <h2 className='font-robot-condensed font-normal text-lg text-amber-700'>
                  For: {type}
                </h2>
              </span>
              <span className='w-[90%] bg-[#56464b] justify-evenly px-4 py-3 rounded-lg shadow-lg shadow-slate-700 flex items-center space-x-2'>
                <h2 className='font-robot-condensed font-normal text-lg text-amber-700'>
                  Agency: {agency_name}
                </h2>
                <h2 className='font-robot-condensed font-normal text-lg text-amber-700'>
                  Abbrev.: {agency_abbrev}
                </h2>
              </span>
              <div
                className='
              h-[80%] 
              bg-[#48383d]
              w-full 
              px-3 
              py-2 
              text-amber-400
              text-lg
              shadow-lg
              shadow-slate-800
              rounded-lg
              overflow-y-scroll 
              scrollbar-thin 
              scrollbar-track-sky-900 
              scrollbar-thumb-amber-300'
              >
                {bio}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setAstroInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='dark'
            className='font-robot-condensed font-normal text-lg space-x-2 capitalize'
          >
            <Icon name='visibility_off' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeskAstroDisp
