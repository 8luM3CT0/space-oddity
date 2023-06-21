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

function MobFirstNews ({
  id,
  title,
  url,
  imageUrl,
  newsSite,
  summary,
  publishDate
}) {
  const [newsInfo, setNewsInfo] = useState(false)
  const router = useRouter()

  return (
    <>
      <div
        key={id}
        onClick={() => setNewsInfo(true)}
        className='
      initNewsMobile
      group
      '
      >
        {/**div with news details url */}
        <div
          className='
        grid 
        h-full
        w-[155px]
        place-items-center
        space-y-3
        px-3
        py-2
        bg-gradient-to-br
        from-sky-500
        to-slate-800
        group-hover:bg-slate-100
        transform
        transition
        duration-200
        '
        >
          <p
            className='
          px-4
          w-[80%]
          truncate
          py-3
          shadow-lg
          shadow-slate-300
          rounded-lg
          text-2xl 
          mx-auto
          font-robot-slab 
          font-semibold 
          text-blue-50
          group-hover:text-sky-300
          transform
          transition
          ease-in-out
          duration-300
          '
          >
            {title}
          </p>
          <p
            className='
          px-4
          py-3
          shadow-lg
          shadow-slate-300
          rounded-lg
          text-base
          mx-auto
          font-robot-slab 
          font-normal
          text-blue-100
          group-hover:text-sky-400
          transform
          transition
          ease-in-out
          duration-300
          w-[70%]
          truncate
          '
          >
            {newsSite}
          </p>
          <p
            className='
          px-4
          py-3
          shadow-lg
          shadow-slate-300
          rounded-lg
          text-base
          mx-auto
          font-robot-slab 
          font-normal
          text-blue-100
          group-hover:text-sky-400
          transform
          transition
          ease-in-out
          duration-300
          '
          >
            {publishDate}
          </p>
        </div>
        {/**div with image url */}
        <div
          className='
        w-[155px]
        h-full
        bg-no-repeat
        bg-center
        '
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        ></div>
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
            className='mobNewsModal
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

export default MobFirstNews
