//front-end
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../'
//back-end
import { useState } from 'react'

function PlanetDisplay ({
  id,
  name,
  discoveredBy,
  discoveryDate,
  density,
  gravity,
  bodyType,
  aroundPlanet,
  aphelion,
  perihelion,
  englishName,
  semiMajorAxis,
  equaRadius,
  temp,
  escapeVelo,
  meanRad,
  imgType
}) {
  const [read, setRead] = useState(false)

  const numFormat = num => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + ' ' + 'Kil'
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + ' ' + 'Mill'
    } else if (num < 900) {
      return num
    }
  }

  return (
    <>
      <div
        key={id}
        style={{
          backgroundImage: `url(${imgType})`
        }}
        className='displayPlanet
     group
     '
      >
        <h1
          className='
        font-robot-slab 
        text-4xl 
        mx-auto
        text-slate-100
        group-hover:text-sky-200
        transform
        transition
        duration-300
        ease-in-out
        font-semibold
        '
        >
          {englishName}
        </h1>
        <span
          className='
        font-poppins
        text-base
        flex
        items-center
        space-x-5
        '
        >
          <h4
            className='
            text-sky-200
            group-hover:text-slate-100
            transform
            transition
            duration-300
            font-normal
            '
          >
            Class:
          </h4>
          <h2
            className='
            text-lg 
            text-slate-100 
            group-hover:text-sky-200
            transform
            transition
            duration-300
            font-semibold
            '
          >
            {bodyType}
          </h2>
        </span>
        <Button
          onClick={e => setRead(true)}
          color='indigo'
          buttonType='filled'
          size='lg'
          ripple='dark'
          className='font-inter font-semibold capitalize space-x-2 items-center'
        >
          <Icon name='visibility' />
          Read
        </Button>
      </div>
      <Modal size='lg' active={read} toggler={() => setRead(false)}>
        <ModalHeader toggler={() => setRead(false)}>
          <h1 className='font-robot-slab font-normal text-lg text-cyan-700 underline'>
            {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            style={{
              backgroundImage: `url(${imgType})`
            }}
            className='planetDisplayModalDiv
         '
          >
            <h1 className='font-robot-slab font-semibold text-xl text-slate-200'>
              Name of body:
            </h1>
            <h1
              className='
              font-ibm-sans
            text-3xl 
            capitalize
            font-normal
            text-sky-400 
            shadow-lg 
            shadow-slate-100
            rounded-lg
            opacity-90
            p-2 
            place-self-center'
            >
              {name}
            </h1>
            <h1
              className='
            font-robot-slab 
            font-semibold 
            text-xl 
            text-slate-200'
            >
              Translated to English:
            </h1>
            <h1
              className='            
              font-ibm-sans
            text-3xl 
            capitalize
            font-normal
            text-sky-400 
            shadow-lg 
            shadow-slate-100
            rounded-lg
            opacity-90
            p-2 
            place-self-center'
            >
              {englishName}
            </h1>
            <h1
              className='
            font-robot-slab 
            font-semibold 
            text-xl 
            text-slate-200'
            >
              Cosmos type:
            </h1>
            <h1
              className='
            font-ibm-sans
            text-3xl 
            capitalize
            font-normal
            text-sky-400 
            shadow-lg 
            shadow-slate-100
            rounded-lg
            opacity-90
            p-2 
            place-self-center'
            >
              {bodyType}
            </h1>
            {/**numerical data from site */}
            <div className='pDisplayData'>
              {/**left side of div / top :3 */}
              <div
                className='
              leftDisplayData
              '
              >
                <h2
                  className='
                dataTitle
                '
                >
                  Grav.: {gravity}
                </h2>
                <h2
                  className='
                dataTitle
                '
                >
                  Dens.: {density}
                </h2>
                <h2
                  className='
                dataTitle
                '
                >
                  Avg. temp.: {temp} F
                </h2>
              </div>
              {/**right side of div / bottom ;) */}
              <div className='rightDisplayData'>
                <h2
                  className='
                dataTitle
                '
                >
                  Peri.: {numFormat(perihelion)}
                </h2>
                <h2
                  className='
                dataTitle
                '
                >
                  Aph.: {numFormat(aphelion)}
                </h2>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setRead(false)}
            color='deepOrange'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='capitalize font-normal'
          >
            <Icon name='visibility_off' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default PlanetDisplay
