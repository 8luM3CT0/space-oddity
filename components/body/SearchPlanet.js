//front-end
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '..'
//back-end
import { useState } from 'react'

function SearchPlanet ({
  id,
  name,
  englishName,
  isPlanet,
  semiMajorAxis,
  perihelion,
  aphelion,
  mass,
  vol,
  density,
  gravity,
  escapeVelo,
  meanRadius,
  equaRadius,
  axialTilt,
  polarRadius,
  meanAnom,
  obliquity,
  temp,
  eccentricity,
  sideralOrbit,
  sideralRota,
  bodyType,
  backgroundImg
}) {
  const [moreInfo, setMoreInfo] = useState(false)

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
          backgroundImage: `url(${backgroundImg})`
        }}
        className='
    lg:h-[460px]
    md:h-[340px]
    h-[290px]
    w-[75%]
    mx-auto
    grid
    place-items-center
    space-y-3
    rounded-xl
    px-4
    bg-slate-300
    bg-center
    bg-no-repeat
    cursor-pointer
    hover:shadow-xl
    hover:shadow-slate-300
    transform
    transition
    duration-300
    ease-in-out
    group
    '
      >
        <div
          className='resultMid
      '
        >
          <h2
            className='
      searchName
      group-hover:text-sky-200
      '
          >
            {name}
          </h2>
          <span className='flex items-center space-x-2'>
            <h4 className='text-sm font-space-mono font-normal text-sky-400'>
              Type:
            </h4>
            <h5 className='text-lg font-google-sans font-semibold text-sky-200'>
              {bodyType}
            </h5>
          </span>
          <Button
            onClick={e => setMoreInfo(true)}
            color='cyan'
            size='regular'
            buttonType='filled'
            ripple='light'
            className='font-poppins font-semibold capitalize'
          >
            <Icon name='tips_and_updates' />
            About
          </Button>
        </div>
      </div>
      <Modal
        size='regular'
        active={moreInfo}
        toggler={() => setMoreInfo(false)}
      >
        <ModalHeader toggler={() => setMoreInfo(false)}>
          <h1
            className='
          font-ibm-sans 
          font-semibold 
          text-lg 
          text-sky-400 
          underline
          px-3
          '
          >
            {name}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            style={{
              backgroundImage: `url(${backgroundImg})`
            }}
            className='searchResModal
          '
          >
            <h4
              className='searchResHead
            '
            >
              Name
            </h4>
            <h2
              className='
            searchResTitle'
            >
              {name}
            </h2>
            <h4
              className='searchResHead
            '
            >
              Name translated:
            </h4>
            <h2
              className='
            searchResTitle'
            >
              {englishName}
            </h2>
            <h4
              className='searchResHead
            '
            >
              Body type
            </h4>
            <h2
              className='
            searchResTitle'
            >
              {bodyType}
            </h2>
            {/**div similar to planet display */}
            <span className='mx-auto flex items-center space-x-2'>
              <p className='searchResData'>Perihelion:</p>
              <h4 className='searchResTop'>{numFormat(perihelion)}</h4>
            </span>
            <span className='mx-auto flex items-center space-x-2'>
              <p className='searchResData'>Aphelion:</p>
              <h4 className='searchResTop'>{numFormat(aphelion)}</h4>
            </span>
            <span className='mx-auto flex items-center space-x-2'>
              <p className='searchResData'>Semi-major axis:</p>
              <h4 className='searchResTop'>{numFormat(semiMajorAxis)}</h4>
            </span>
            <div className='pDisplayData'>
              <div className='leftDisplayData'>
                <h4 className='searchResData'>Grav.: {gravity}</h4>
                <h4 className='searchResData'>Avg. temp.: {temp}</h4>
                <h4 className='searchResData'>
                  Earth rad.: {numFormat(equaRadius)}
                </h4>
                <h4 className='searchResData'>
                  Axial tilt: {axialTilt.toFixed(2)}
                </h4>
                <h4 className='searchResData'>Grav.: {gravity}</h4>
                <h4 className='searchResData'>Avg. temp.: {temp}</h4>
              </div>
              <div className='rightDisplayData'>
                <h4 className='searchResData'>Dens.: {density.toFixed(2)}</h4>
                <h4 className='searchResData'>
                  Escape velo.: {numFormat(escapeVelo)}
                </h4>
                <h4 className='searchResData'>
                  Mean rad.: {numFormat(meanRadius)}
                </h4>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setMoreInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='
          px-2 s
          pace-x-2 
          font-robot-slab 
          font-normal 
          text-base 
          capitalize'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default SearchPlanet
