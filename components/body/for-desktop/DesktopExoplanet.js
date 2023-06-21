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

function DesktopExoplanet ({
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
            'url(https://i.pinimg.com/564x/f7/25/fa/f725fa25d405422fe9280167679f55c7.jpg)'
        }}
        className='
    deskPl
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
          {constell}
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
          Radius: {radius}
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
          Solar mass: {sma}
        </h2>
        <Button
          onClick={() => setExoInfo(true)}
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
      <Modal size='lg' active={exoInfo} toggler={() => setExoInfo(false)}>
        <ModalHeader toggler={() => setExoInfo(false)}>
          <p
            className='
          text-xl 
          font-robot-slab 
          font-normal
          px-8 
          text-slate-400 
          underline'
          >
            Info about {name}
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            grid
            space-y-2
        place-items-start
        rounded-lg
        bg-opacity-90
        bg-gradient-to-br
        from-[#391713]
        to-[#073d3a]
        px-10
        py-12
        min-h-[610px]
        max-h-[690px]
        min-w-[590px]
        max-w-[620px]
        '
          >
            {/** */}
            <h1
              className='
            top-0
            left-0
            w-[0.3]
            text-3xl
            text-emerald-400
            font-ibm-sans
            pb-3
            pr-3
            shadow-lg
            rounded-lg
            shadow-[#78b9b6]
            font-normal
            '
            >
              {name}
            </h1>
            {/**right side */}
            <div
              className='
            w-full
            h-[580px]
            grid
            space-y-5
            p-4
            bg-gradient-to-b
            from-slate-800
            to-[#163f3d]
            bg-opacity-70
            rounded-lg
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-sky-900
            scrollbar-thumb-slate-400
            '
            >
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

export default DesktopExoplanet
