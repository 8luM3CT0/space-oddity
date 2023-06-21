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
import { useRouter } from 'next/router'

function SpaceNews ({ id, title, url, imageUrl, newsSite, summary }) {
  const [newsInfo, setNewsInfo] = useState(false)
  const router = useRouter()

  return (
    <>
      <div
        onClick={e => setNewsInfo(true)}
        key={id}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className='
    spaceNewsMobile
    group
    '
      >
        <p
          className='
        text-lg 
        mx-auto
        font-robot-slab 
        font-semibold 
        text-sky-500
        group-hover:text-slate-600
        '
        >
          {title}
        </p>
      </div>
      <Modal
        active={newsInfo}
        size='regular'
        toggler={() => setNewsInfo(false)}
      >
        <ModalHeader toggler={() => setNewsInfo(false)}>
          <h1
            className='
          font-robot-slab 
          font-semibold 
          text-sky-700
          text-2xl
          px-7 
          underline 
          animate-pulse'
          >
            {title}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          py-7 
          mx-auto
          h-[690px]
          lg:w-{590px}
          md:w-[450px]
          w-[310px]
          px-9
          grid
          place-items-center
          space-y-3
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-sky-300
          scrollbar-thumb-slate-800
          grid-cols-1
          '
          >
            <img
              src={imageUrl}
              alt=''
              className='
            rounded-lg
            '
            />
            <div
              className='
            h-[310px]
            w-full
            overflow-y-scroll
            scrollbar-thin
            bg-slate-200
            px-3
            py-2
            rounded-lg
            scrollbar-track-slate-200
            scrollbar-thumb-sky-800
            '
            >
              <p
                className='
              text-base 
              font-normal 
              font-robot-slab 
              text-slate-700'
              >
                {summary}
              </p>
            </div>
            <Button
              onClick={() => router.push(url)}
              color='blue'
              buttonType='filled'
              size='regular'
              ripple='dark'
              className='font-robot-slab font-normal capitalize mx-auto'
            >
              <Icon name='visibility' />
              Read more
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setNewsInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='dark'
            className='font-robot-slab font-normal capitalize mx-auto'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default SpaceNews
