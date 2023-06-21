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

function MobAgency ({
  id,
  name,
  headquarters,
  imgUrl,
  foundedOn,
  bio,
  country,
  abbrev,
  type
}) {
  const [infoModal, setInfoModal] = useState(false)
  return (
    <>
      <div
        className='
    mobAgency
    group
    '
      >
        {/**imgUrl */}
        {imgUrl !== '' || imgUrl !== null ? (
          <div
            className='
        h-full
        w-full
        bg-center
        bg-no-repeat
        rounded-lg
        group-hover:scale-105
        transform
        transition
        duration-200
        ease-out
        '
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          ></div>
        ) : (
          <div
            className='
        h-full
        w-full
        bg-space-tb
        bg-center
        bg-no-repeat
        rounded-lg
        group-hover:scale-105
        transform
        transition
        duration-200
        ease-out
        '
          ></div>
        )}
        {/**name, hq, Button */}
        <div
          className='
        w-[95%]
        h-full
        grid
        place-items-center
        bg-slate-700
        bg-opacity-80
        '
        >
          <h1
            className='
            font-robot-slab 
            font-semibold 
            text-lg 
            text-amber-400
            underline
            '
          >
            {name}
          </h1>
          <h3
            className='
            font-robot-slab 
            font-normal 
            text-base 
            text-amber-400
            underline
            '
          >
            Headquarters: {headquarters}
          </h3>
          <Button
            onClick={() => setInfoModal(true)}
            color='red'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-google-sans font-normal text-base capitalize'
          >
            <Icon name='info' />
            Read more
          </Button>
        </div>
      </div>
      <Modal
        size='regular'
        active={infoModal}
        toggler={() => setInfoModal(false)}
      >
        <ModalHeader toggler={() => setInfoModal(false)}>
          <p
            className='
          font-robot-slab
          font-semibold
          text-amber-600
          text-lg
          underline
          pl-4
          pr-7
          '
          >
            Info about agency
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          mobModal
          '
          >
            <span
              className='
            px-5
            py-3
            rounded-lg
            bg-slate-700
            shadow-md
            hover:shadow-lg
            shadow-slate-800
            group
            transform
            transition
            duration-300
            ease-in-out
            '
            >
              <h1
                className='
                        font-robot-slab 
                        font-semibold 
                        text-sky-400
                        text-lg
                        group-hover:text-sky-300
                        group-hover:scale-105
                        transform
                        transition
                        duration-300
                        ease-in-out
                        '
              >
                {name}, {abbrev}
              </h1>
            </span>
            <span
              className='
            px-5
            py-3
            rounded-lg
            bg-slate-700
            shadow-md
            hover:shadow-lg
            shadow-slate-800
            group
            transform
            transition
            duration-300
            ease-in-out
            '
            >
              <h1
                className='
                        font-robot-slab 
                        font-semibold 
                        text-sky-400
                        text-base
                        group-hover:text-sky-300
                        group-hover:scale-105
                        transform
                        transition
                        duration-300
                        ease-in-out
                        '
              >
                Country: {country}
              </h1>
            </span>
            <span
              className='
            px-5
            py-3
            rounded-lg
            bg-slate-700
            shadow-md
            hover:shadow-lg
            shadow-slate-800
            group
            transform
            transition
            duration-300
            ease-in-out
            '
            >
              <h1
                className='
                        font-robot-slab 
                        font-semibold 
                        text-sky-400
                        text-base
                        group-hover:text-sky-300
                        group-hover:scale-105
                        transform
                        transition
                        duration-300
                        ease-in-out
                        '
              >
                Agency type: {type}
              </h1>
            </span>
            <span
              className='
            px-5
            py-3
            rounded-lg
            bg-slate-700
            shadow-md
            hover:shadow-lg
            shadow-slate-800
            group
            transform
            transition
            duration-300
            ease-in-out
            '
            >
              <h1
                className='
                        font-robot-slab 
                        font-semibold 
                        text-sky-400
                        text-base
                        group-hover:text-sky-300
                        group-hover:scale-105
                        transform
                        transition
                        duration-300
                        ease-in-out
                        '
              >
                Founded on: {foundedOn}
              </h1>
            </span>
            <div
              className='
            h-[240px]
            w-[95%]
            mx-auto
            rounded-lg
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-800
            scrollbar-thumb-emerald-700
            bg-slate-800
            bg-opacity-80
            font-robot-slab
            font-light
            text-base
            px-3
            py-4
            text-amber-400
            '
            >
              {bio}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setInfoModal(false)}
            color='orange'
            block={true}
            buttonType='filled'
            size='regular'
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

export default MobAgency
