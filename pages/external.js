//front-end
import Head from 'next/head'
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  Tab,
  TabContent,
  TabList,
  TabPane,
  TabItem,
  ExternalHeader,
  DeskExo,
  MobileExo,
  MobStar,
  DeskStar
} from '../components/'
//back-end
import { useState } from 'react'
import Axios from 'axios'

function ExternalSystem ({ exoData, starData }) {
  const [openTab, setOpenTab] = useState(1)
  //for search
  const [planetSearch, setPlanetSearch] = useState('')
  const [data, setData] = useState('')
  const [starSearch, setStarSearch] = useState('')
  const [datum, setDatum] = useState('')

  console.log('exoplanet data >>>>>>>>>>', exoData?.exoplanets?.[0])
  //console.log('Star data return >>>>>>>>>>', starData?.hipstars?.[0])

  const searchPlanet = () => {
    Axios.get(
      `https://www.astropical.space/api-exo.php?which=name&limit=${planetSearch}&format=json`
    ).then(res => {
      setData(res?.data)
      console.log('Exoplanets data return >>>>>>', res?.data?.exoplanets)
    })
  }

  const searchStar = () => {
    Axios.get(
      `https://www.astropical.space/api.php?table=stars&which=name&limit=${starSearch}&format=json`
    ).then(res => {
      setData(res?.data)
      console.log('Star result return >>>>', res?.data?.hipstars)
    })
  }

  return (
    <div
      className='
    h-screen 
    overflow-hidden
    lg:bg-gal-desk
    bg-gal-mb
    bg-no-repeat 
    bg-cover
    '
    >
      <ExternalHeader />
      <Head>
        <title>Reach beyond our worlds</title>
      </Head>
      <main
        className='
            max-w-[1580px]
      mx-auto
      h-full 
      space-y-7
      px-5 
      pt-3
      overflow-y-scroll
      scrollbar-hide
      opacity-90
            '
      >
        <Tab>
          <TabList color='blueGray'>
            <div
              className='
            mx-auto 
            flex 
            items-center 
            space-x-3 
            overflow-x-scroll 
            scrollbar-hide
            '
            >
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                ripple='dark'
                href='tabItem'
              >
                <Icon name='flare' size='lg' />
                Stars
              </TabItem>
              <TabItem
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                ripple='dark'
                href='tabItem'
              >
                <Icon name='language' size='lg' />
                Exoplanets
              </TabItem>
            </div>
          </TabList>
          <TabContent>
            <TabPane active={openTab === 1 ? true : false}>
              <div
                className='
                mx-auto 
                w-3/4
                flex
                items-center
                h-[55px]
                rounded-3xl
                px-2
                py-1
                my-3
                shadow-xl
                shadow-slate-400
                bg-slate-500
                '
              >
                <input
                  onChange={e => setStarSearch(e.target.value)}
                  type='text'
                  placeholder='Star designated name...'
                  className='
                  outline-none 
                  border-0 
                  bg-transparent 
                  font-robot-condensed 
                  font-normal
                  text-lg
                  px-2
                  placeholder-gray-200
                  text-sky-100
                  w-full
                  '
                />
                <Button
                  onClick={() => searchStar()}
                  color='blue'
                  buttonType='link'
                  rounded={true}
                  size='regular'
                  iconOnly={true}
                  ripple='light'
                  className='p-1'
                >
                  <Icon name='saved_search' />
                </Button>
              </div>
              <div
                className='cosmosTab
                bg-gradient-to-b
                from-sky-700
                to-slate-800
    scrollbar-track-slate-700
    scrollbar-thumb-orange-300
    rounded-lg
              '
              >
                {data &&
                  data?.hipstars?.map(testData => (
                    <MobStar
                      id={testData?.id}
                      key={testData?.id}
                      name={testData?.name}
                      constell={testData?.con}
                      desig={testData?.desig}
                      mass={testData?.mass}
                      hip={testData?.hip}
                      hd={testData?.hd}
                      sao={testData?.sao}
                      dist={testData?.dist}
                      radius={testData?.radius}
                      radial={testData?.rad}
                      ra={testData?.ra}
                      de={testData?.de}
                      bgImg='https://i.pinimg.com/736x/3d/7d/a6/3d7da6b8a573e71cded297cc569c942a.jpg'
                    />
                  ))}
                {data &&
                  data?.hipstars?.map(testData => (
                    <DeskStar
                      id={testData?.id}
                      key={testData?.id}
                      name={testData?.name}
                      constell={testData?.con}
                      desig={testData?.desig}
                      mass={testData?.mass}
                      hip={testData?.hip}
                      hd={testData?.hd}
                      sao={testData?.sao}
                      dist={testData?.dist}
                      radius={testData?.radius}
                      radial={testData?.rad}
                      ra={testData?.ra}
                      de={testData?.de}
                      bgImg='https://i.pinimg.com/564x/85/b5/97/85b5976bdbfea6eef0e3bef9b62b43f5.jpg'
                    />
                  ))}
                {(!data?.hipstars || data?.hipstars?.[0]?.name == '') && (
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
            </TabPane>
            <TabPane active={openTab === 2 ? true : false}>
              <div
                className='
                mx-auto 
                w-3/4
                flex
                items-center
                h-[55px]
                rounded-3xl
                px-2
                py-1
                my-3
                shadow-xl
                bg-zinc-500
                '
              >
                <input
                  onChange={e => setPlanetSearch(e.target.value)}
                  type='text'
                  placeholder='Exoplanet name...'
                  className='
                  outline-none 
                  border-0 
                  bg-transparent 
                  font-robot-condensed 
                  font-normal
                  text-lg
                  px-2
                  placeholder-gray-200
                  text-zinc-100
                  w-full
                  '
                />
                <Button
                  onClick={() => searchPlanet()}
                  color='orange'
                  buttonType='link'
                  rounded={true}
                  size='regular'
                  iconOnly={true}
                  ripple='light'
                  className='p-1'
                >
                  <Icon name='travel_explore' />
                </Button>
              </div>
              <div
                className='cosmosTab
                rounded-lg
                bg-gradient-to-t
                from-rose-800
                to-slate-800
                scrollbar-track-slate-700
                scrollbar-thumb-amber-500
              '
              >
                {data &&
                  data?.exoplanets?.map(testData => (
                    <DeskExo
                      id={testData?.id}
                      key={testData?.id}
                      name={testData?.name}
                      constell={testData?.con}
                      mass={testData?.mass}
                      radius={testData?.rad}
                      sma={testData?.sma}
                      earth_mass={testData?.mass_earths}
                      per={testData?.per}
                      de={testData?.de}
                    />
                  ))}
                {data &&
                  data?.exoplanets?.map(testData => (
                    <MobileExo
                      id={testData?.id}
                      key={testData?.id}
                      name={testData?.name}
                      constell={testData?.con}
                      mass={testData?.mass}
                      radius={testData?.rad}
                      sma={testData?.sma}
                      earth_mass={testData?.mass_earths}
                      per={testData?.per}
                      de={testData?.de}
                    />
                  ))}
                {(!data?.exoplanets || data?.exoplanets?.[0]?.name == '') && (
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
            </TabPane>
          </TabContent>
        </Tab>
      </main>
    </div>
  )
}

export default ExternalSystem

export async function getServerSideProps () {
  const testExoplanet = await fetch(
    'https://www.astropical.space/api-exo.php?which=name&limit=gj%20486&format=json'
  ).then(res => res.json())

  const testStar = await fetch(
    'https://www.astropical.space/api.php?table=stars&which=name&limit=siri&format=json'
  ).then(res => res.json())

  return {
    props: {
      exoData: testExoplanet,
      starData: testStar
    }
  }
}
