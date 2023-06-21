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

function MobileStar ({
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
      return (num / 1000).toFixed(1) + 'K'
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'Mill'
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
        className='mobileStar'
      >
        <h2 className='mobileStarName'>{name}</h2>
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

        <Button
          onClick={() => setStarInfo(true)}
          color='blueGray'
          buttonType='link'
          size='sm'
          rounded={true}
          iconOnly={true}
          ripple='light'
        >
          <Icon name='info' />
        </Button>
      </div>
      <Modal
        size='regular'
        active={starInfo}
        toggler={() => setStarInfo(false)}
      >
        <ModalHeader toggler={() => setStarInfo(false)}>
          <p
            className='
          text-base 
          font-robot-slab 
          font-light 
          text-slate-800 
          underline 
          pl-2 
          pr-8'
          >
            Info about {name}
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='grid
        place-items-center
        space-y-4
        rounded-lg
        bg-slate-700
        bg-nebula
        bg-cover
        bg-no-repeat
        bg-opacity-30
        px-10
        py-12
        max-h-[400px]
        max-w-[310px]
        overflow-y-scroll
        scrollbar-thin
        scrollbar-thumb-amber-300
        scrollbar-track-slate-800
        '
          >
            <h4 className='desigTitle'>Name:</h4>
            <h1 className='desigVal'>{name}</h1>
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
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setStarInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
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

export default MobileStar
