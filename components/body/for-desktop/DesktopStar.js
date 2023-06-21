import React from 'react'
//front-end
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

function DesktopStar ({
  id,
  bgImg,
  name,
  desig,
  hip,
  hd,
  sao,
  constell,
  mag,
  dist,
  radial,
  spk,
  bvc,
  teff,
  mass,
  radius,
  ra,
  de
}) {
  const numFormat = num => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + ' ' + 'Kil'
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + ' ' + 'Mill'
    } else if (num < 900) {
      return num
    }
  }

  const [starInfo, setStarInfo] = useState(false)
  return (
    <>
      <div
        key={id}
        style={{
          backgroundImage: `url(${bgImg})`
        }}
        className='
    deskStar
    '
      >
        <h2
          className='
        font-font-robot
        underline
        font-semibold
        text-slate-100
        p-4
        text-base
        place-self-start'
        >
          {name}
        </h2>
        <h2
          className='
        font-quicksand
        font-light 
        text-slate-100
        p-4
        text-base
        place-self-start'
        >
          {desig}
        </h2>
        <h2
          className='
        font-quicksand
        font-light 
        text-slate-100
        p-4
        text-sm
        place-self-start'
        >
          Mass: {mass}
        </h2>
        <h2
          className='
        font-quicksand
        font-light 
        text-slate-100
        p-4
        text-sm
        place-self-start'
        >
          Constellation: {constell}
        </h2>
        <Button
          onClick={() => setStarInfo(true)}
          color='blueGray'
          buttonType='link'
          size='regular'
          rounded={true}
          iconOnly={true}
          ripple='light'
        >
          <Icon name='visibility' />
        </Button>
      </div>
      <Modal size='lg' active={starInfo} toggler={() => setStarInfo(false)}>
        <ModalHeader toggler={() => setStarInfo(false)}>
          <p className='text-xl px-8 font-robot-slab font-normal text-slate-400 underline'>
            Info about {name}
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
        grid
        grid-cols-2
        place-items-start
        rounded-lg
        bg-slate-700
        bg-os
        bg-cover
        bg-no-repeat
        bg-opacity-60
        px-10
        py-12
        h-[690px]
        w-[710px]
        '
          >
            <h1
              className='
            top-0
            left-0
            w-[0.3] 
            text-3xl 
            text-orange-600
            font-ibm-sans
            pb-3
            pr-3
            shadow-lg
            rounded-lg
            shadow-amber-200 
            font-normal'
            >
              {name}
            </h1>
            {/**right side with info */}
            <div
              className='
            w-full
            h-full 
            grid 
            space-y-5
            p-4
            bg-slate-700
            bg-opacity-60
            rounded-lg
            overflow-y-scroll
        scrollbar-thin
        scrollbar-thumb-amber-300
        scrollbar-track-slate-800
        
            '
            >
              <h4 className='desigTitle'>Designation:</h4>
              <h1 className='desigVal'>{desig}</h1>
              <h4 className='desigTitle'>Constellation:</h4>
              <h1 className='desigVal'>{constell}</h1>
              <h4 className='desigTitle'>HD Designation:</h4>
              <h1 className='desigVal'>{hd}</h1>
              <h4 className='desigTitle'>HIP Designation:</h4>
              <h1 className='desigVal'>{hip}</h1>
              <h4 className='desigTitle'>SAO Designation:</h4>
              <h1 className='desigVal'>{sao}</h1>
              <h4 className='desigTitle'>Distance (Light years):</h4>
              <h1 className='desigVal'>{dist} LY</h1>
              <h4 className='desigTitle'>Solar mass:</h4>
              <h1 className='desigVal'>{mass} </h1>
              <h4 className='desigTitle'>Solar radius:</h4>
              <h1 className='desigVal'>{radius} </h1>
              <h4 className='desigTitle'>Radian measurement:</h4>
              <h1 className='desigVal'>{radial} </h1>
              <h4 className='desigTitle'>Declination:</h4>
              <h1 className='desigVal'>{de} </h1>
              <h4 className='desigTitle'>Right ascension:</h4>
              <h1 className='desigVal'>{ra} </h1>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setStarInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='font-ibm-sans font-semibold capitalize text-lg'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DesktopStar
