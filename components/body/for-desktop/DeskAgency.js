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

function DeskAgency ({
  id,
  name,
  headquarters,
  imgUrl,
  foundedOn,
  bio,
  country,
  abbrev,
  type,
  logo
}) {
  const [infoModal, setInfoModal] = useState(false)

  return (
    <>
      <div key={id} className='deskAgency group'>
        {/**immgUrl */}
        <div
          className='
      h-full
      w-[95%]
      rounded-md
      bg-center
      bg-no-repeat
      shadow-lg
      shadow-slate-700
      bg-slate-700
    group-hover:scale-105
    transform
    transition
    duration-200
    ease-in-out
      '
          style={{
            backgroundImage: `url(${logo})`
          }}
        ></div>
        {/**name, hq, foundedOn, headquarters */}
        <div
          className='
      h-full
      w-[95%]
      rounded-lg
      bg-slate-700
      bg-opacity-80
      grid
      place-items-center
      space-y-3
      '
        >
          <h1
            className='
        font-robot-slab
        font-semibold
        text-2xl
        text-amber-400
        underline
        '
          >
            {name}
          </h1>
          {/**headquarters and founded on */}
          <span className='w-[95%] flex items-center space-x-3 justify-between'>
            <h3
              className='
        font-robot-slab
        font-semibold
        text-lg
        text-amber-600
        '
            >
              Headquarters: {country}
            </h3>
            {foundedOn !== '' || foundedOn !== 'null' ? (
              <h3
                className='
        font-robot-slab
        font-semibold
        text-lg
        text-amber-600
        '
              >
                Founded on: {foundedOn}
              </h3>
            ) : (
              <h3
                className='
        font-robot-slab
        font-semibold
        text-lg
        text-amber-600
        '
              >
                N/A
              </h3>
            )}
          </span>
          <Button
            onClick={() => setInfoModal(true)}
            color='red'
            block={true}
            buttonType='filled'
            size='regular'
            ripple='light'
            className='font-google-sans font-normal text-lg capitalize'
          >
            <Icon name='info' />
            Read more
          </Button>
        </div>
      </div>
      <Modal size='lg' active={infoModal} toggler={() => setInfoModal(false)}>
        <ModalHeader toggler={() => setInfoModal(false)}>
          <p
            className='
        text-2xl
        font-google-sans
        font-semibold
        text-sky-500
        underline
        animate-pulse
        '
          >
            Info about agency ID: {id}
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          h-[840px]
          w-[870px]
          flex
          items-center
          bg-over
          bg-no-repeat
          rounded-lg
          px-1
          bg-slate-700
          bg-opacity-70
          '
            style={{
              backgroundImage: `url(${logo})`
            }}
          >
            {/**agency details */}
            <div
              className='
            h-[100%]
            w-[80%]
            overflow-hidden
            rounded-lg
           mx-auto
            px-3
            py-4
            grid
            place-items-start
            bg-sky-900
            bg-opacity-80
            '
            >
              <h1
                className='
              font-robot-slab 
              font-light 
              text-2xl 
              pt-3
              pl-4
              pr-6
              text-sky-300
              '
              >
                {name}
              </h1>
              <span
                className='
              w-[85%]
              mx-auto
              rounded-md
              shadow-md
              flex
              items-center
              justify-evenly
              '
              >
                <h2
                  className='
                text-xl
                font-google-sans
                font-normal
                text-sky-400
                '
                >
                  Agency type: {type}
                </h2>
                <h2
                  className='
                text-xl
                font-google-sans
                font-normal
                text-sky-400
                '
                >
                  Country: {country}
                </h2>
              </span>
              <span
                className='
              w-[85%]
              mx-auto
              rounded-md
              shadow-md
              flex
              items-center
              justify-evenly
              '
              >
                <h2
                  className='
                text-xl
                font-google-sans
                font-normal
                text-sky-400
                '
                >
                  Abbbreviation: {abbrev}
                </h2>
                <h2
                  className='
                text-xl
                font-google-sans
                font-normal
                text-sky-400
                '
                >
                  Founded on: {foundedOn}
                </h2>
              </span>
              <div
                className='
                h-[60%]
                bg-[#173043]
                w-full
                px-4
                py-3
                rounded-md
                mx-auto
                text-amber-400
                text-lg
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-800
            scrollbar-thumb-emerald-700
                '
              >
                {bio}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setInfoModal(false)}
            size='regular'
            color='red'
            buttonType='filled'
            block={true}
            ripple='light'
            className='font-google-sans font-normal text-base capitalize'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeskAgency
