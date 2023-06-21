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

function MobileExoplanet ({
  id,
  name,
  constell,
  mass,
  earth_mass,
  radius,
  earth_radius,
  sma,
  per,
  ecc,
  distance,
  ra,
  de,
  disco,
  updatedOn
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

  const [exoInfo, setExoInfo] = useState(false)

  return (
    <>
      <div
        key={id}
        style={{
          backgroundImage:
            'url(https://i.pinimg.com/564x/2d/04/64/2d04641c262958f97e690b3b4a05e30b.jpg)'
        }}
        className='mobileExopl'
      >
        <h2 className='mobileExoName'>{name}</h2>
        <h2
          className='
        font-quicksand
        font-light 
        text-slate-100
        p-4
        text-base
        place-self-start'
        >
          {constell}
        </h2>

        <Button
          onClick={() => setExoInfo(true)}
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
      <Modal size='regular' active={exoInfo} toggler={() => setExoInfo(false)}>
        <ModalHeader toggler={() => setExoInfo(false)}>
          <p
            className='
          text-sm 
          pl-3
          pr-8
          font-robot-slab 
          font-light 
          text-slate-400 
          underline'
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
        bg-opacity-80
        bg-center
        bg-no-repeat
        bg-exopl
        bg-slate-700
        px-8
        py-12
        min-h-[350px]
        max-h-[400px]
        w-[310px]
        overflow-y-scroll
        scrollbar-thin
        scrollbar-thumb-pink-500
        scrollbar-track-slate-800
        scrollbar-corner-rose-600

        '
          >
            <h3 className='exoTitle'>Name:</h3>
            <h1 className='exoVal'>{name}</h1>
            <h3 className='exoTitle'>Constellation:</h3>
            <h1 className='exoVal'>{constell}</h1>
            <h3 className='exoTitle'>Mass:</h3>
            <h1 className='exoVal'>{mass}</h1>
            <h3 className='exoTitle'>Solar mass:</h3>
            <h1 className='exoVal'>{sma}</h1>
            <h3 className='exoTitle'>Earth mass:</h3>
            <h1 className='exoVal'>{earth_mass}</h1>
            <h3 className='exoTitle'>Orbital period:</h3>
            <h1 className='exoVal'>{per}</h1>
            <h3 className='exoTitle'>Declination:</h3>
            <h1 className='exoVal'>{de}</h1>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setExoInfo(false)}
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

export default MobileExoplanet
