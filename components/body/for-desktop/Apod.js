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

function Apod ({ explanation, date, url, title, author }) {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${url})`
        }}
        className='
    apodLg
    '
      >
        <div
          className='
      w-[0.7]
      mx-auto
      place-items-center
      grid 
      bg-slate-700
      h-full
      opacity-90
      px-4 
      py-3'
        >
          <div
            className='
          grid
          place-self-center
          space-y-6
          '
          >
            <h2
              className='
        text-4xl 
        font-robot-slab 
        font-normal 
        text-sky-50
        underline'
            >
              {title}
            </h2>
            <Button
              onClick={e => setReadMore(true)}
              color='blueGray'
              size='regular'
              buttonType='filled'
              block={true}
              ripple='light'
              className='
        font-robot-slab
        font-normal 
        text-lg 
        capitalize
        space-x-2
        hover:shadow-lg
        shadow-sky-500
        transform
        transition
        duration-[400]
        ease-in-out
        '
            >
              <Icon name='visibility' />
              Read more
            </Button>
          </div>
        </div>
      </div>
      <Modal size='lg' active={readMore} toggler={() => setReadMore(false)}>
        <ModalHeader toggler={() => setReadMore(false)}>
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
          lg:w-{610px}
          px-9
          flex
          space-x-2
          items-center
          scrollbar-thin
          scrollbar-track-sky-300
          scrollbar-thumb-slate-800
          '
          >
            <div
              style={{
                backgroundImage: `url(${url})`
              }}
              className='
            w-1/2
            h-full
            bg-center
            bg-no-repeat
            '
            ></div>
            <div
              className='
            h-full
            w-1/2
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
              text-xl 
              font-normal 
              font-robot-slab 
              text-slate-700'
              >
                {explanation}
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setReadMore(false)}
            color='red'
            buttonType='link'
            size='regular'
            ripple='light'
            className='font-robot-slab font-semibold capitalize text-lg'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Apod
