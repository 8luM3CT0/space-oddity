//front-end
import Head from 'next/head'
import {
  MainHeader,
  DesktopNews,
  MobNews,
  DivForTree,
  MobArticle,
  IndexArticle
} from '../components/'
//back-end
import { useCollection } from 'react-firebase-hooks/firestore'
import { store } from '../backend/firebase'

export default function Home ({ apod, astroData, planetData, spaceNews }) {
  console.log('Space news >>>>>>>>>>', spaceNews?.slice(2, 8))

  const [blogCollection] = useCollection(
    store.collection('articles').orderBy('addedOn', 'asc').limit(3)
  )

  console.log('blogCollection return >>>', blogCollection)

  return (
    <div
      className='
    h-screen 
    overflow-y-scroll
    scrollbar-hide
    bg-space-one 
    bg-no-repeat 
    bg-cover '
    >
      <Head>
        <title>Reach for the stars</title>
      </Head>
      <MainHeader />
      <main
        className='
      max-w-full
      mx-auto
      h-full 
      space-y-7
      px-5 
      py-3
      pb-[240px]
      overflow-y-scroll
      scrollbar-hide
      '
      >
        {/*
        <Apod
          url={apod?.url}
          title={apod?.title}
          date={apod?.date}
          explanation={apod?.explanation}
        />
        <DesktopApod
          url={apod?.url}
          title={apod?.title}
          date={apod?.date}
          explanation={apod?.explanation}
        />
        */}
        {/** news div here */}
        <div
          className='
        newsDivLg
        '
        >
          {spaceNews &&
            spaceNews?.map(news => (
              <DesktopNews
                key={news?.id}
                id={news?.id}
                title={news?.title}
                summary={news?.summary}
                newsSite={news?.newsSite}
                url={news?.url}
                imageUrl={news?.imageUrl}
                publishDate={news?.publishedAt}
              />
            ))}
        </div>
        <div className='newsDivMob'>
          {spaceNews &&
            spaceNews?.map(news => (
              <MobNews
                id={news?.id}
                key={news?.id}
                title={news?.title}
                summary={news?.summary}
                imageUrl={news?.imageUrl}
                newsSite={news?.newsSite}
                url={news?.url}
                publishDate={news?.publishedAt}
              />
            ))}
        </div>
        {/**end of news div */}
        {/**DIv will contain the three different pages */}
        <div
          className='
        threeDivs
        justify-center
        opacity-80
        rounded-lg
        '
        >
          <DivForTree
            iconName='public'
            pushTo='/solar'
            message='See our system, with all its beauty...'
            pageMess='Sol'
            bgImg='https://i.pinimg.com/564x/5e/c5/44/5ec544d285fd0ad1db6dacfbefc99057.jpg'
          />
          <DivForTree
            iconName='flare'
            pushTo='/external'
            message='Explore what lies beyond our reach...'
            pageMess='Cosmos'
            bgImg='https://i.pinimg.com/564x/86/6e/41/866e4183b6c07c0af2063bc1ce52dda7.jpg'
          />
          <DivForTree
            iconName='rocket'
            pushTo='/rocket'
            pageMess='Flights'
            message='Check what flights have been scheduled to explore the frontier...'
            bgImg='https://i.pinimg.com/564x/64/7a/65/647a65b7024294928068720e989173c3.jpg'
          />
        </div>
        <div className='newsDiv'>
          {blogCollection &&
            blogCollection?.docs.map(article => (
              <MobArticle firebaseDocument={article} />
            ))}
          {blogCollection &&
            blogCollection?.docs.map(article => <IndexArticle db={article} />)}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  /*  const apodFetch = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=w6SWXDUkcAjvRcnyQLqLM80lpdpEQZdB7sSgcXfT'
  ).then(res => res.json())
*/
  const spaceNews = await fetch(
    'https://api.spaceflightnewsapi.net/v3/articles?_limit=8'
  ).then(res => res.json())

  const openAstroData = await fetch(
    'https://api.astrocats.space/catalog?ra=21:23:32.16&dec=-53:01:36.08&radius=2'
  ).then(res => res.json())

  const planetData = await fetch(
    'https://api.le-systeme-solaire.net/rest/knowncount/'
  ).then(res => res.json())

  return {
    props: {
      // apod: apodFetch,
      spaceNews,
      astroData: openAstroData,
      planetData
    }
  }
}
