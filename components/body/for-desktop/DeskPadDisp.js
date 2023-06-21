//front-end
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
//back-end

function DeskPadDisp ({
  id,
  url,
  name,
  wiki_url,
  map_url,
  lat,
  long,
  imgUrl,
  total_launch,
  attempted
}) {
  const [padInfo, setPadInfo] = useState(false)

  return (
    <>
      <div key={id} className='deskPadDiv cursor-pointer group'>
        <div
          className='
        bg-center
        bg-no-repeat
        h-full
        w-2/3
        grid
        place-items-center
        rounded-lg
        group-hover:shadow-xl
        group-hover:shadow-sky-600
        transform
        transition
        ease-in
        duration-300
        '
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        >
          <div
            className='
            h-1/2 
            w-4/5
            rounded-xl
            grid
            place-items-center 
            px-3 
            py-2
            bg-slate-700
            bg-opacity-80
            group-hover:shadow-lg
            group-hover:shadow-slate-400
            transform
            transition
            ease-in-out
            duration-300
            '
          >
            <h1
              className='
                text-2xl 
                font-robot-slab 
                font-semibold 
                text-sky-300
                underline
                '
            >
              {name}
            </h1>
            <Button
              onClick={() => setPadInfo(true)}
              color='blueGray'
              buttonType='filled'
              size='regular'
              block={true}
              ripple='dark'
              className='font-robot-slab capitalize font-normal text-lg space-x-2'
            >
              <Icon name='read_more' />
              Read more
            </Button>
          </div>
        </div>
      </div>
      <Modal size='lg' active={padInfo} toggler={() => setPadInfo(false)}>
        <ModalHeader toggler={() => setPadInfo(false)}>
          <h1
            className='
        text-2xl 
        font-robot-slab 
        font-semibold 
        text-amber-400 
        underline 
        animate-pulse'
          >
            Info about rocket ID: {id}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div className='deskModalDiv'>
            {/**image associated with  the data */}
            <div
              className='
            h-full
            w-full
            bg-center
            bg-no-repeat
            rounded-lg
            p-2
            '
              style={{
                backgroundImage: `url(${imgUrl})`
              }}
            ></div>
            {/**data fetched from the url */}
            <div
              className='
            h-full
            w-full
            grid
            px-4
            place-items-center
            space-y-4
            bg-slate-800
            bg-opacity-80
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-[#894242]
            scrollbar-thumb-[#ebd4cc]
            rounded-xl
            '
            >
              <h1
                className='
              text-3xl 
              font-source-serif 
              text-[#efd5f7]
              p-3
              font-semimbold
              rounded-3xl
              shadow-xl
              shadow-[#f07167]
              '
              >
                {name}
              </h1>
              <div
                className='
              h-1/2
              w-full
              flex
              items-center
              space-x-2
              px-3
              '
              >
                {/**left */}
                <div
                  className='
                grid
                place-items-center
                w-full
                h-full
                '
                >
                  <h3
                    className='
              text-lg
              font-robot-slab
              font-normal
              text-violet-400
              '
                  >
                    Latitude: {lat}
                  </h3>
                  <h3
                    className='
              text-lg
              font-robot-slab
              font-normal
              text-violet-400
              '
                  >
                    Longitude: {long}
                  </h3>
                </div>
                {/**right */}
                <div
                  className='
                h-full
                w-full
                grid
                place-items-center
                '
                >
                  <h3
                    className='
              text-lg
              font-robot-slab
              font-normal
              text-violet-400
              '
                  >
                    Total launches: {total_launch}
                  </h3>
                  <h3
                    className='
              text-lg
              font-robot-slab
              font-normal
              text-violet-400
              '
                  >
                    Attempted launches: {attempted}
                  </h3>
                </div>
              </div>
              {/**google map url */}
              <span
                className='
                grid 
                w-full 
                place-items-center
                px-3
                py-2
                space-y-3
                '
              >
                <p
                  className='
                  place-self-start
                  text-lg
                  font-robot-slab
                  font-normal
                  text-violet-500
                  '
                >
                  Map url:
                </p>
                <a
                  href={map_url}
                  className='
                  w-1/2
                  truncate
                  text-base
                  font-robot-slab
                  font-semibold
                  text-violet-300
                  underline
                  '
                >
                  {map_url}
                </a>
              </span>
              {/**wikipedia url */}
              <span
                className='
                grid 
                w-full 
                place-items-center
                px-3
                py-2
                space-y-3
                '
              >
                <p
                  className='
                  place-self-start
                  text-lg
                  font-robot-slab
                  font-normal
                  text-violet-500
                  '
                >
                  Wikipedia url:
                </p>
                <a
                  href={wiki_url}
                  className='
                  w-1/2
                  truncate
                  text-base
                  font-robot-slab
                  font-semibold
                  text-violet-300
                  underline
                  '
                >
                  {wiki_url}
                </a>
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setPadInfo(false)}
            color='red'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-robot-condensed font-normal capitalize space-x-2 text-lg'
          >
            <Icon name='do_disturb_off' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeskPadDisp
