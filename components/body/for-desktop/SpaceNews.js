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

function SpaceNews ({
  id,
  title,
  url,
  imageUrl,
  newsSite,
  summary,
  publishDate
}) {
  const [newsInfo, setNewsInfo] = useState(false)

  return (
    <>
      <div
        key={id}
        className='
        spaceNewsDesktop
        group
      '
      >
        {/**image url div */}
        <div
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          className='
      w-full
      h-full
      bg-center
      bg-no-repeat
      '
        ></div>
        {/**end of image url div */}
        {/**news details */}
        <div
          className='
        w-full
        space-y-4
        
        '
        >
          <p
            className='
          px-4
          text-xl
          place-self-center
          font-robot-slab 
          font-semibold 
          text-sky-200
          group-hover:text-slate-200
          transform
          transition
          duration-300
          ease-in-out
          '
          >
            {title}
          </p>
          <p
            className='
          px-4
          text-xl
          place-self-center
          font-quicksand
          font-normal 
          text-sky-300
          group-hover:text-slate-300
          transform
          transition
          duration-300
          ease-in-out
          '
          >
            from: {newsSite}
          </p>
          <p
            className='
          px-4
          text-xl
          place-self-center
          font-quicksand
          font-normal 
          text-sky-300
          group-hover:text-slate-300
          transform
          transition
          duration-300
          ease-in-out
          '
          >
            Publish date: {publishDate}
          </p>
          <Button
            onClick={() => setNewsInfo(true)}
            color='lightBlue'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='
            mx-auto 
            space-x-3 
            capitalize 
            font-robot-slab 
            font-normal 
            text-lg 
            group-hover:scale-105'
          >
            <Icon name='visibility' />
            Read more
          </Button>
        </div>
        {/**end of news details div */}
      </div>
      <Modal active={newsInfo} size='lg' toggler={() => setNewsInfo(false)}>
        <ModalHeader toggler={() => setNewsInfo(false)}>
          <h1
            className='
          text-xl 
          font-robot-slab 
          font-semibold 
          text-sky-400 underline'
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
          w-{710px}
          px-9
          flex
          space-x-2
          items-center
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-sky-300
          scrollbar-thumb-slate-800
          '
          >
            <div
              className='
            w-full
            h-full
            px-20
            py-16
            bg-center
            bg-no-repeat
            '
              style={{
                backgroundImage: `url(${imageUrl})`
              }}
            ></div>
            <div
              className='
            h-full
            w-full
            grid
            place-items-end
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
              <span className='flex items-center font-robot-slab mx-auto space-x-4'>
                <p className='font-normal text-slate-500 text-lg'>From:</p>
                <h4 className='font-semibold text-slate-700 text-lg'>
                  {newsSite}
                </h4>
              </span>{' '}
              <p
                className='
              text-xl 
              font-normal 
              font-robot-slab 
              text-slate-700'
              >
                {summary}
              </p>
              <span className='grid font-robot-slab'>
                <p className='font-normal text-sky-500 text-lg'>
                  Read more here:
                </p>
                <a
                  href={url}
                  className='
                font-semibold 
                text-sky-700 
                text-lg 
                hover:underline 
                transform
                transition
                duration-300
                ease-in-out
                '
                >
                  {url}
                </a>
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setNewsInfo(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='light'
            className='font-robot-slab font-semibold capitalize'
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
