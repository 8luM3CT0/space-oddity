import React, { useState } from 'react'
//front-end
import Head from 'next/head'
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  TabContent,
  TabItem,
  TabList,
  TabPane,
  RocketHeader,
  MobileTop,
  MobileFNews,
  DesktopFNews,
  MobRockDip,
  DeskRockDip,
  MobCraftDisp,
  DeskCraftDisp,
  MobPadDisp,
  DeskPadDisp,
  MobAstroDisp,
  DeskAstroDisp,
  MobAgency,
  DeskAgency,
  MobLaunchSuccess,
  MobLaunchFailure,
  LaunchDeterm
} from '../components/'
//back-end
import Axios from 'axios'

function Rocket ({
  rocketNews,
  secondNews,
  spaceStattion,
  spaceCraft,
  landingPad,
  astroNauts,
  launches,
  spaceLaunch
}) {
  const [openTab, setOpenTab] = useState(1)
  //for searh queries
  const [data, setData] = useState('')
  const [search, setSearch] = useState('')

  //get the spacecraft data based from search
  const searchStation = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/spacestation/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching space station >>>>>', res)
    })
  }

  //get the spacecraft
  const searchCraft = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/spacecraft/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching the spacecraft >>>>>', res)
    })
  }

  //get landing pads
  const searchLPads = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/pad/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching the landing pads >>>>>', res)
    })
  }

  //get the astronauts
  const searchAstronaut = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/astronaut/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching the astronauts >>>>>', res)
    })
  }

  //get the space agencies
  const searchAgency = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/agencies/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching space agencies >>>>>', res)
    })
  }

  //get the launches
  const searchLaunch = e => {
    Axios.get(
      `https://ll.thespacedevs.com/2.2.0/launch/?format=json&search=${search}`
    ).then(res => {
      setData(res?.data)
      console.log('Result from searching space agencies >>>>>', res)
    })
  }

  return (
    <>
      <div
        className='
    rocketBg
    '
      >
        <Head>
          <title>Rocket info</title>
        </Head>
        <RocketHeader />
        <main
          className='
          rocketMain
        '
        >
          <Tab>
            <TabList color='orange'>
              <div
                className='
              mx-auto 
              flex 
              max-w-5xl
              items-center 
              space-x-12
              overflow-x-scroll
              scrollbar-hide
              '
              >
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='rocket_launch' />
                  Flight news
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='workspaces' />
                  Space station
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='rocket' />
                  Spacecrafts
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(4)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='flight_land' />
                  Landing pads
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(5)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='face' />
                  Astronauts
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(6)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='account_balance' />
                  Agencies
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(7)
                  }}
                  ripple='light'
                  href='tabItem'
                >
                  <Icon name='rocket_launch' />
                  Launches
                </TabItem>
              </div>
            </TabList>
            <TabContent>
              <TabPane active={openTab === 1 ? true : false}>
                <div
                  className='
min-h-[930px]
max-h-screen
              max-w-5xl
              flex
              flex-col
              space-y-3
              px-2
              rounded-lg
              bg-slate-800
              mx-auto
              
                '
                >
                  {/**MobileTop */}
                  {rocketNews &&
                    rocketNews
                      ?.slice(0, 1)
                      .map(news => (
                        <MobileTop
                          id={news?.id}
                          key={news?.id}
                          title={news?.title}
                          imgUrl={news?.imageUrl}
                          author={news?.newsSite}
                          description={news?.summary}
                          url={news?.url}
                        />
                      ))}
                  {/**MobileFNews */}
                  <div className='mobileNewsDiv'>
                    {secondNews &&
                      secondNews?.map(news => (
                        <MobileFNews
                          id={news?.id}
                          key={news?.id}
                          title={news?.title}
                          author={news?.newsSite}
                          description={news?.summary}
                          imgUrl={news?.imageUrl}
                          url={news?.url}
                        />
                      ))}
                  </div>
                  {/**DesktopFNews */}
                  <div className='desktopNewsDiv'>
                    {rocketNews &&
                      rocketNews?.map(news => (
                        <DesktopFNews
                          id={news?.id}
                          key={news?.id}
                          title={news?.title}
                          author={news?.newsSite}
                          description={news?.summary}
                          imgUrl={news?.imageUrl}
                          url={news?.url}
                        />
                      ))}
                    {secondNews &&
                      secondNews?.map(news => (
                        <DesktopFNews
                          id={news?.id}
                          key={news?.id}
                          title={news?.title}
                          author={news?.newsSite}
                          description={news?.summary}
                          imgUrl={news?.imageUrl}
                          url={news?.url}
                        />
                      ))}
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 2 ? true : false}>
                <div
                  className='
  min-h-[930px]
max-h-screen
              px-2
              max-w-5xl
              grid
              place-items-center
              space-y-1 
              mx-auto
              rounded-lg
              bg-slate-800'
                >
                  <div
                    className='
                  rocketSearchRes
                   '
                  >
                    {/**DesktopRockDisp */}
                    {data &&
                      data?.results?.map(station => (
                        <DeskRockDip
                          id={station?.id}
                          key={station?.id}
                          name={station?.name}
                          type={station?.type?.name}
                          orbit={station?.orbit}
                          status={station?.status?.name}
                          description={station?.description}
                          createdOn={station?.founded}
                          imgUrl={station?.image_url}
                        />
                      ))}
                    {/**MobileRockDisp */}
                    {data &&
                      data?.results?.map(station => (
                        <MobRockDip
                          id={station?.id}
                          key={station?.id}
                          name={station?.name}
                          type={station?.type?.name}
                          orbit={station?.orbit}
                          status={station?.status?.name}
                          description={station?.description}
                          createdOn={station?.founded}
                          imgUrl={station?.image_url}
                        />
                      ))}
                  </div>
                  <div
                    className='rocketSearchDiv
                         '
                  >
                    <input
                      onChange={e => setSearch(e.target.value)}
                      type='text'
                      className='
                          font-robot-slab
                          font-normal
                          text-base
                          bg-transparent
                          outline-none
                          border-0
                          w-full
                          text-slate-100
                          '
                    />
                    <Button
                      onClick={() => searchStation()}
                      rounded={true}
                      color='blueGray'
                      buttonType='link'
                      size='sm'
                      ripple='light'
                      className='px-2'
                    >
                      <Icon name='search' />
                    </Button>
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 3 ? true : false}>
                <div
                  className='
                min-h-[890px]
                max-w-5xl
              max-h-full
              px-2 
              mx-auto
              rounded-lg 
              bg-opacity-80
              bg-spacecraft
              bg-cover
              bg-no-repeat
              grid
              place-items-center
              '
                >
                  <div className='spacecraftRes'>
                    {/**MobileCraftDisp */}
                    {data &&
                      data?.results.map(craft => (
                        <MobCraftDisp
                          id={craft?.id}
                          key={craft?.id}
                          name={craft?.name}
                          imgUrl={craft?.spacecraft_config?.image_url}
                          serialNo={craft?.serial_number}
                          status={craft?.status?.name}
                          description={craft?.description}
                        />
                      ))}
                    {/**DesktopCraftDisp */}
                    {data &&
                      data?.results.map(craft => (
                        <DeskCraftDisp
                          id={craft?.id}
                          key={craft?.id}
                          name={craft?.name}
                          imgUrl={craft?.spacecraft_config?.image_url}
                          serialNo={craft?.serial_number}
                          status={craft?.status?.name}
                          description={craft?.description}
                        />
                      ))}
                  </div>
                  <div
                    className='spacecraftSearch
                         '
                  >
                    <input
                      onChange={e => setSearch(e.target.value)}
                      type='text'
                      className='
                          font-robot-slab
                          font-normal
                          text-base
                          bg-transparent
                          outline-none
                          border-0
                          w-full
                          text-slate-100
                          '
                    />
                    <Button
                      onClick={() => searchCraft()}
                      rounded={true}
                      color='blue'
                      buttonType='link'
                      size='sm'
                      ripple='light'
                      className='px-2'
                    >
                      <Icon name='search' />
                    </Button>
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 4 ? true : false}>
                <div
                  className='
  min-h-[930px]
max-h-screen
              px-2
              max-w-5xl
              grid
              place-items-center 
              mx-auto
              rounded-lg 
              bg-cover
              bg-no-repeat
              bg-landing
              '
                >
                  <div
                    className='
                landingPadRes
                '
                  >
                    {/**MobilePadDisp */}
                    {data &&
                      data?.results.map(lPad => (
                        <MobPadDisp
                          id={lPad?.id}
                          key={lPad?.id}
                          name={lPad?.name}
                          imgUrl={lPad?.map_image}
                          wiki_url={lPad?.wiki_url}
                          long={lPad?.longitude}
                          lat={lPad?.latitude}
                          url={lPad?.url}
                          map_url={lPad?.map_url}
                          total_launch={lPad?.total_launch_count}
                          attempted={lPad?.orbital_launch_attempt_count}
                        />
                      ))}
                    {/**DesktopPadDisp */}
                    {data &&
                      data?.results.map(lPad => (
                        <DeskPadDisp
                          id={lPad?.id}
                          key={lPad?.id}
                          name={lPad?.name}
                          imgUrl={lPad?.map_image}
                          wiki_url={lPad?.wiki_url}
                          long={lPad?.longitude}
                          lat={lPad?.latitude}
                          url={lPad?.url}
                          map_url={lPad?.map_url}
                          total_launch={lPad?.total_launch_count}
                          attempted={lPad?.orbital_launch_attempt_count}
                        />
                      ))}
                  </div>
                  <div
                    className='landingPadSearch
                         '
                  >
                    <input
                      onChange={e => setSearch(e.target.value)}
                      type='text'
                      className='
                          font-robot-slab
                          font-normal
                          text-base
                          bg-transparent
                          outline-none
                          border-0
                          w-full
                          text-slate-100
                          '
                    />
                    <Button
                      onClick={() => searchLPads()}
                      rounded={true}
                      color='green'
                      buttonType='link'
                      size='sm'
                      ripple='light'
                      className='px-2'
                    >
                      <Icon name='search' />
                    </Button>
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 5 ? true : false}>
                <div
                  className='
  min-h-[930px]
max-h-screen
              px-2
              max-w-5xl
            grid
            place-items-center
              mx-auto
              rounded-lg 
              bg-cover
              bg-no-repeat
              bg-astro
              '
                >
                  <div
                    className='astroSearchInp
                         '
                  >
                    <input
                      onChange={e => setSearch(e.target.value)}
                      type='text'
                      className='
                          font-robot-slab
                          font-semibold
                          text-base
                          bg-transparent
                          outline-none
                          border-0
                          w-full
                          text-slate-6s00
                          '
                    />
                    <Button
                      onClick={() => searchAstronaut()}
                      rounded={true}
                      color='orange'
                      buttonType='link'
                      size='sm'
                      ripple='light'
                      className='px-2'
                    >
                      <Icon name='search' />
                    </Button>
                  </div>
                  <div className='astroRes'>
                    {/**MobileAstroDisp */}
                    {astroNauts &&
                      !data &&
                      astroNauts?.results
                        ?.slice(0, 1)
                        .map(cosmonaut => (
                          <MobAstroDisp
                            id={cosmonaut?.id}
                            key={cosmonaut?.id}
                            name={cosmonaut?.name}
                            imgUrl={cosmonaut?.profile_image}
                            status={cosmonaut?.status?.name}
                            nationality={cosmonaut?.nationality}
                            age={cosmonaut?.age}
                            dob={cosmonaut?.date_of_birth}
                            type={cosmonaut?.type}
                            agency_name={cosmonaut?.agency?.name}
                            agency_url={cosmonaut?.agency?.url}
                            agency_abbrev={cosmonaut?.agency?.abbrev}
                            bio={cosmonaut?.bio}
                            twitt={cosmonaut?.twitter}
                            insta={cosmonaut?.instagram}
                            wiki={cosmonaut?.wiki}
                          />
                        ))}
                    {/**DesktopAstroDisp */}
                    {astroNauts &&
                      !data &&
                      astroNauts?.results
                        ?.slice(0, 1)
                        .map(cosmonaut => (
                          <DeskAstroDisp
                            id={cosmonaut?.id}
                            key={cosmonaut?.id}
                            name={cosmonaut?.name}
                            imgUrl={cosmonaut?.profile_image}
                            status={cosmonaut?.status?.name}
                            nationality={cosmonaut?.nationality}
                            age={cosmonaut?.age}
                            dob={cosmonaut?.date_of_birth}
                            type={cosmonaut?.type?.name}
                            agency_name={cosmonaut?.agency?.name}
                            agency_url={cosmonaut?.agency?.url}
                            agency_abbrev={cosmonaut?.agency?.abbrev}
                            bio={cosmonaut?.bio}
                            twitt={cosmonaut?.twitter}
                            insta={cosmonaut?.instagram}
                            wiki={cosmonaut?.wiki}
                          />
                        ))}
                    {data &&
                      data?.results.map(cosmonaut => (
                        <DeskAstroDisp
                          id={cosmonaut?.id}
                          key={cosmonaut?.id}
                          name={cosmonaut?.name}
                          imgUrl={cosmonaut?.profile_image}
                          status={cosmonaut?.status?.name}
                          nationality={cosmonaut?.nationality}
                          age={cosmonaut?.age}
                          dob={cosmonaut?.date_of_birth}
                          type={cosmonaut?.type?.name}
                          agency_name={cosmonaut?.agency?.name}
                          agency_url={cosmonaut?.agency?.url}
                          agency_abbrev={cosmonaut?.agency?.abbrev}
                          bio={cosmonaut?.bio}
                          twitt={cosmonaut?.twitter}
                          insta={cosmonaut?.instagram}
                          wiki={cosmonaut?.wiki}
                        />
                      ))}
                    {data &&
                      data?.results.map(cosmonaut => (
                        <MobAstroDisp
                          id={cosmonaut?.id}
                          key={cosmonaut?.id}
                          name={cosmonaut?.name}
                          imgUrl={cosmonaut?.profile_image}
                          status={cosmonaut?.status?.name}
                          nationality={cosmonaut?.nationality}
                          age={cosmonaut?.age}
                          dob={cosmonaut?.date_of_birth}
                          type={cosmonaut?.type?.name}
                          agency_name={cosmonaut?.agency?.name}
                          agency_url={cosmonaut?.agency?.url}
                          agency_abbrev={cosmonaut?.agency?.abbrev}
                          bio={cosmonaut?.bio}
                          twitt={cosmonaut?.twitter}
                          insta={cosmonaut?.instagram}
                          wiki={cosmonaut?.wiki}
                        />
                      ))}
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 6 ? true : false}>
                <div
                  className='
                 min-h-[930px]
max-h-[1024px]
              px-2
              max-w-5xl
            grid
            place-items-center
              mx-auto
              rounded-lg 
              bg-cover
              bg-no-repeat
              bg-exopl
                '
                >
                  <div
                    className='
                  mx-auto
                  max-h-[1000px]
                  min-h-[900px]
                  w-[90%]
                  rounded-lg
                  flex
                  flex-col
                  place-items-center
                  space-y-3
                  bg-slate-600
                  bg-opacity-70
                  px-7
                  py-5
                  overflow-hidden
                  '
                  >
                    {/**input field */}
                    <div
                      className='
                    w-[80%] 
                    h-[50px]
                    px-4
                    rounded-xl
                    flex
                    items-center
                    bg-gradient-to-l
                    from-[#47b39d]
                    to-[#eb6b56]
                    '
                    >
                      <input
                        onChange={e => setSearch(e.target.value)}
                        type='text'
                        className='
                      bg-transparent
                      outline-0
                      border-none
                      w-[95%]
                      text-lg
                      font-robot-slab
                      font-normal
                      text-slate-50
                      placeholder-slate-700
                      '
                      />
                      <Button
                        onClick={() => searchAgency()}
                        color='red'
                        buttonType='link'
                        size='sm'
                        iconOnly={true}
                        rounded={true}
                        ripple='light'
                        className='px-3 py-2'
                      >
                        <Icon name='search' />
                      </Button>
                    </div>
                    {/**search results */}
                    <div
                      className='
                    max-h-[840px]
                    min-h-[720px]
                    w-full
                    rounded-lg
                    overflow-y-scroll
                    scrollbar-thin
                    scrollbar-track-[#462664]
                    scrollbar-thumb-[#b05f6d]
                    grid
                    px-3
                    py-4
                    bg-gradient-to-br
                    from-[#47b39d]
                    to-[#eb6b56]
                    '
                    >
                      {data &&
                        data?.results.map(agency => (
                          <MobAgency
                            id={agency?.id}
                            key={agency?.id}
                            name={agency?.name}
                            imgUrl={agency?.logo_url}
                            type={agency?.type}
                            abbrev={agency?.abbrev}
                            bio={agency?.description}
                            foundedOn={agency?.founding_year}
                            country={agency?.country_code}
                          />
                        ))}
                      {data &&
                        data?.results.map(agency => (
                          <DeskAgency
                            id={agency?.id}
                            key={agency?.id}
                            name={agency?.name}
                            imgUrl={agency?.image_url}
                            logo={agency?.logo_url}
                            type={agency?.type}
                            abbrev={agency?.abbrev}
                            bio={agency?.description}
                            foundedOn={agency?.founding_year}
                            country={agency?.country_code}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane active={openTab === 7 ? true : false}>
                <div
                  className='
                min-h-[945px]
max-h-[1080px]
              px-2
              max-w-5xl
            grid
            place-items-center
              mx-auto
              rounded-lg 
              bg-cover
              bg-no-repeat
              bg-logo
                '
                >
                  <div
                    className='
                  mx-auto
                  max-h-[1000px]
                  min-h-[900px]
                  w-[90%]
                  rounded-lg
                  flex
                  flex-col
                  place-items-center
                  space-y-3
                  bg-sky-800
                  bg-opacity-70
                  px-7
                  py-5
                  overflow-hidden
                  '
                  >
                    {/**input field */}
                    <div
                      className='
                    w-[80%] 
                    h-[50px]
                    px-4
                    rounded-xl
                    flex
                    items-center
                    bg-gradient-to-r
                    from-[#aa895f]
                    to-[#364649]
                    '
                    >
                      <input
                        onChange={e => setSearch(e.target.value)}
                        type='text'
                        className='
                      bg-transparent
                      outline-0
                      border-none
                      w-[95%]
                      text-lg
                      font-robot-slab
                      font-normal
                      text-amber-50
                      placeholder-slate-700
                      '
                      />
                      <Button
                        onClick={() => searchLaunch()}
                        color='orange'
                        buttonType='link'
                        size='sm'
                        iconOnly={true}
                        rounded={true}
                        ripple='light'
                        className='px-3 py-2'
                      >
                        <Icon name='search' />
                      </Button>
                    </div>
                    {/**input field end */}
                    {/**search results div */}
                    <div
                      className='
                    launchTabPane
                    '
                    >
                      {data &&
                        data?.results.map(launch => (
                          <LaunchDeterm
                            key={launch?.id}
                            id={launch?.id}
                            name={launch?.name}
                            status={launch?.status?.name}
                            status_desc={launch?.status?.description}
                            rocket_name={
                              launch?.rocket?.configuration?.full_name
                            }
                            mission_name={launch?.mission?.name}
                            mission_desc={launch?.mission?.description}
                            orbit_area={launch?.mission?.orbit?.name}
                            orbit_abbrev={launch?.mission?.orbit?.abbrev}
                            launcher_name={
                              launch?.launch_service_provider?.name
                            }
                            launcher_type={
                              launch?.launch_service_provider?.type
                            }
                          />
                        ))}
                    </div>
                    {/**end of search results div */}
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </Tab>
        </main>
      </div>
    </>
  )
}

export default Rocket

export async function getServerSideProps () {
  const rocketNews = await fetch(
    'https://api.spaceflightnewsapi.net/v3/articles?_limit=7'
  ).then(res => res.json())

  const secondNews = await fetch(
    'https://api.spaceflightnewsapi.net/v3/blogs?_limit=8'
  ).then(res => res.json())

  const spaceLaunch = await fetch(
    'https://ll.thespacedevs.com/2.2.0/launch/?format=json'
  ).then(res => res.json())

  return {
    props: {
      rocketNews,
      secondNews,
      spaceLaunch
    }
  }
}
