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

function MobAstroDisp ({
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
  const [imageInfo, setImageInfo] = useState(false)

  const openImage = () => {
    setAstroInfo(false)
    setImageInfo(true)
  }

  const backToInfo = () => {
    setImageInfo(false)
    setAstroInfo(true)
  }

  return (
    <>
      <div
        key={id}
        className='
    mobAstroDiv
    group
    '
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div
          className='
        grid
        place-items-center
        h-[60%]
        w-[80%]
        rounded-lg
        bg-sky-800
        bg-opacity-80
        group-hover:bg-opacity-60
        group-hover:shadow-lg
        group-hover:shadow-rose-400
        duration-300
        transform
        transition
        ease-in-out
        px-2
        '
        >
          <h1
            className='
            font-robot-slab 
            text-xl 
            font-semibold
            text-sky-300
            px-5
            py-3
            underline
            group-hover:shadow-md
            group-hover:shadow-sky-600
            duration-300
            ease-in-out
            transform
            transition
            '
          >
            {name}
          </h1>
          <h2
            className='
            font-robot-slab
            text-lg
            font-normal
            text-sky-500
            px-4
            py-2
            rounded-lg
            shadow-lg
            group-hover:shadow-sky-700
            transform
            transition
            duration-300
            ease-out
            '
          >
            {status}
          </h2>
          <Button
            onClick={() => setAstroInfo(true)}
            color='lightBlue'
            size='regular'
            buttonType='filled'
            block={true}
            ripple='light'
            className='font-robot-condensed font-normal text-lg space-x-2 capitalize'
          >
            <Icon name='chrome_reader_mode' />
            Read more
          </Button>
        </div>
      </div>
      <Modal
        size='regular'
        active={astroInfo}
        toggler={() => setAstroInfo(false)}
      >
        <ModalHeader toggler={() => setAstroInfo(false)}>
          <h1 className='pl-3 pr-7 text-xl font-robot-slab font-semibold text-sky-700 underline animate-pulse'>
            Info about Astronaut ID: {id}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          astroModalDiv
          '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            <h1
              className='
            font-robot-slab 
            font-semibold 
            text-sky-400 
            text-xl
            px-3
            py-2
            bg-slate-600
            bg-opacity-80
            rounded-lg
            '
            >
              {name}
            </h1>
            <h2
              className='
            font-robot-slab 
            font-normal 
            text-sky-500 
            text-lg
            rounded-b-lg
            shadow-lg
            shadow-slate-800
            px-3
            py-2
            bg-slate-600
            bg-opacity-80
            rounded-lg
            '
            >
              Current status: {status}
            </h2>
            <h2
              className='
            font-robot-slab 
            font-normal 
            text-sky-500 
            text-lg
            rounded-b-lg
            shadow-lg
            shadow-slate-800
            px-3
            py-2
            bg-slate-600
            bg-opacity-80
            rounded-lg
            '
            >
              Age: {age}
            </h2>
            <h2
              className='
            font-robot-slab 
            font-normal 
            text-sky-500 
            text-base
            rounded-b-lg
            shadow-lg
            shadow-slate-800
            px-3
            py-2
            bg-slate-600
            bg-opacity-80
            rounded-lg
            '
            >
              Date of birth: {dob}
            </h2>
            <div
              className='
            w-[80%]
            h-full
            space-y-5
            rounded-lg
            grid
            place-items-center
            bg-slate-600
            bg-opacity-80
            mx-auto
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-900
            scrollbar-thumb-sky-600
            '
            >
              <h2
                className='
            font-robot-slab 
            font-normal 
            text-sky-500 
            text-lg
            rounded-b-lg
            shadow-lg
            shadow-slate-800
            px-3
            py-2
            '
              >
                Agency: {agency_name}; {agency_abbrev}
              </h2>
              <a
                href={agency_url}
                className='
            font-robot-slab 
            font-normal 
            text-sky-500 
            text-lg
            rounded-b-lg
            shadow-lg
            shadow-slate-800
            px-3
            py-2
            w-[60%]
            truncate
            hover:underline
            transform
            transition
            duration-200
            ease-in-out
            '
              >
                Agency URL: {agency_url}
              </a>
            </div>
            <div
              className='
            mx-auto 
            w-[85%]
            bg-slate-700
            bg-opacity-90
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-sky-900
            scrollbar-thumb-amber-400
            h-[70%]
            rounded-lg
            text-lg
            font-robot-slab
            font-normal
            px-4
            py-3
            text-sky-200
            '
            >
              {bio}
            </div>
            <Button
              onClick={() => openImage()}
              color='lightBlue'
              size='regular'
              buttonType='filled'
              ripple='dark'
              className='font-robot font-normal capitalize'
            >
              Open image
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setAstroInfo(false)}
            size='regular'
            buttonType='filled'
            color='orange'
            block={true}
            ripple='dark'
            className='font-robot-slab font-normal space-x-2 capitalize'
          >
            <Icon name='visibility_off' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        active={imageInfo}
        size='regular'
        toggler={() => setImageInfo(false)}
      >
        <ModalHeader toggler={() => setImageInfo(false)}>
          <h2
            className='
          font-robot-slab 
          font-semibold 
          text-base 
          text-sky-400 
          pl-4 
          pr-7'
          >
            Image of {name}
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            h-[390px]
            w-[310px]
            bg-no-repeat
            bg-contain
            rounded-lg
            '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          ></div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => backToInfo()}
            color='orange'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='font-robot-slab font-normal capitalize'
          >
            <Icon name='info' />
            Info
          </Button>
          <Button
            onClick={() => setImageInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='light'
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

export default MobAstroDisp
