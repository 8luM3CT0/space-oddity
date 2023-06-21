//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  PlanetHeader,
  PlanetDisplay,
  SearchPlanet,
  Display
} from '../components'
//back-end
import Axios from 'axios'
import { useState } from 'react'

import React from 'react'

function SolarSystem (displayData, planetCount) {
  //initial states
  const [data, setData] = useState('')
  const [search, setSearch] = useState('')

  //fetch information for cosmological body
  const searchTerm = e => {
    Axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${search}`).then(
      res => {
        setData(res?.data)
      }
    )
  }

  console.log('Data to display >>>>>>>>', displayData)

  return (
    <div
      className='
    h-screen 
    overflow-hidden
    scrollbar-hide
    lg:bg-space-two
    bg-space-two-alt
    bg-no-repeat 
    bg-cover
    '
    >
      <Head>
        <title>Our solar system</title>
      </Head>
      <PlanetHeader />
      <main
        className='planetMain
      '
      >
        {/**Displayed info about Planet */}
        {displayData && <Display dataToDisplay={displayData} />}
        <div
          className='
        w-1/2
        h-[50px]
        mx-auto
        bg-gradient-to-r
        shadow-lg
        from-slate-700
        lg:to-teal-700
        to-orange-800
        rounded-lg
        px-3
        py-2
        flex
        items-center
        space-x-2
        '
        >
          <input
            type='text'
            onChange={e => setSearch(e.target.value)}
            placeholder='Search here...'
            className='
          border-none
          outline-0
          w-full
          font-space-mono
          font-normal
          text-lg
          bg-transparent
          text-sky-100
          '
          />
          <Button
            onClick={() => searchTerm()}
            color='lightBlue'
            buttonType='link'
            size='sm'
            iconOnly={true}
            rounded={true}
            ripple='dark'
            className='p-2'
          >
            <Icon name='location_searching' />
          </Button>
        </div>
        <div
          className='resultDiv
        '
        >
          {((data && data?.bodyType == 'Planet') ||
            data?.bodyType == 'Dwarf Planet') && (
            <SearchPlanet
              key={data?.id}
              id={data?.id}
              name={data?.name}
              englishName={data?.englishName}
              gravity={data?.gravity}
              density={data?.density}
              temp={data?.avgTemp}
              escapeVelo={data?.escape}
              bodyType={data?.bodyType}
              semiMajorAxis={data?.semimajorAxis}
              aphelion={data?.aphelion}
              perihelion={data?.perihelion}
              meanRadius={data?.meanRadius}
              equaRadius={data?.equaRadius}
              axialTilt={data?.axialTilt}
              backgroundImg='https://wallpaper.dog/large/10892857.jpg'
            />
          )}
          {data &&
            data?.bodyType !== 'Planet' &&
            data?.bodyType !== 'Dwarf Planet' && (
              <SearchPlanet
                key={data?.id}
                id={data?.id}
                name={data?.name}
                englishName={data?.englishName}
                gravity={data?.gravity}
                density={data?.density}
                temp={data?.avgTemp}
                escapeVelo={data?.escape}
                bodyType={data?.bodyType}
                semiMajorAxis={data?.semimajorAxis}
                aphelion={data?.aphelion}
                perihelion={data?.perihelion}
                meanRadius={data?.meanRadius}
                equaRadius={data?.equaRadius}
                axialTilt={data?.axialTilt}
                backgroundImg='https://wallpaper.dog/large/17130403.jpg'
              />
            )}
          {!data && (
            <>
              <h3
                className='
              font-space-mono 
              mx-auto
              my-auto
              font-semibold 
              text-2xl
              text-orange-400
              underline
              '
              >
                Nothing. May have typed it wrong...
              </h3>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default SolarSystem

export async function getServerSideProps () {
  const fetchDisplayData = await fetch(
    'https://api.le-systeme-solaire.net/rest/bodies/terre'
  ).then(res => res.json())

  const planetCount = await fetch(
    'https://api.le-systeme-solaire.net/rest/knowncount/planet'
  ).then(res => res.json())

  /*const moonCount = await fetch(
    'https://api.le-systeme-solaire.net/rest/knowncount/moon'
  ).then(res => res.json())

  const astCount = await fetch(
    'https://api.le-systeme-solaire.net/rest/knowncount/asteroid'
  ).then(res => res.json())
*/
  return {
    props: {
      displayData: fetchDisplayData,
      planetCount
    }
  }
}
