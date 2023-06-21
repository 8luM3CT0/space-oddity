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
      <h2
        className='
      place-self-start 
      px-3
      py-2
      lg:text-2xl
      text-xl
      font-quicksand 
      font-normal 
      text-sky-100
      md:hidden
      '
      >
        Picture of the day
      </h2>
      <div
        style={{
          backgroundImage: `url(${url})`
        }}
        className='
    apodMobile
    '
      >
        <div
          className='
      grid 
      place-items-start 
      space-y-3 
      px-4 
      py-3'
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
      <Modal
        size='regular'
        active={readMore}
        toggler={() => setReadMore(false)}
      >
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
              src={url}
              alt=''
              className='
            rounded-lg
            '
            />
            <div
              className='
            h-[310px]
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
