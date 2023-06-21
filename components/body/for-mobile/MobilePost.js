//front-end
import React from 'react'
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../'
//back-end
import { creds, store } from '../../../backend/firebase'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

function MobilePost ({ id, title, description, headImg, author }) {
  const [viewArticle, setViewArticle] = useState(false)
  const router = useRouter()
  const [user] = useAuthState(creds)

  return (
    <>
      <div key={id} className='mobArticle group'>
        {/**imgUrl */}
        {headImg ? (
          <div
            className='
            h-full
            w-[100%]
            mx-auto
            bg-cover
            bg-no-repeat
            '
            style={{
              backgroundImage: `url(${headImg})`
            }}
          ></div>
        ) : (
          <div
            className='
            h-full
            w-[100%]
            bg-nebula
            bg-cover
            bg-no-repeat
            '
          ></div>
        )}
        {/**article details */}
        {/** title*/}
        <div
          className='
        h-full
        w-full
        flex
        flex-col
        px-4
        py-3
        bg-slate-700
        bg-opacity-90
        '
        >
          <h1
            className='
        font-normal
        text-2xl
        text-[#00a8aa]
        group-hover:animate-pulse
        transform
        transition
        duration-300
        ease-in-out
        '
          >
            {title}
          </h1>
          <h1
            className='
        font-light
        font-robot-slab
        text-lg
        text-[#a8b2fd]
        group-hover:animate-pulse
        transform
        transition
        duration-300
        ease-in-out
        '
          >
            By: {author}
          </h1>
        </div>
        {/**lower actions div */}
        <div
          className='
        w-full 
        h-[110px] 
        bg-slate-700 
        bg-opacity-80
        flex
        items-center
        justify-evenly
        border-t-4
        border-slate-600
        '
        >
          {(user?.displayName == author ||
            user?.displayName == 'Reaper IFF' ||
            user?.displayName == 'John Seed' ||
            user?.displayName == 'Robert Seed') && (
            <Button
              color='lightBlue'
              buttonType='link'
              size='sm'
              rounded={true}
              ripple='light'
              className='px-2 py-1'
            >
              <Icon name='edit' />
            </Button>
          )}
          <Button
            onClick={() => router.push(`/article/${id}`)}
            color='green'
            buttonType='link'
            size='sm'
            rounded={true}
            ripple='light'
            className='px-2 py-1'
          >
            <Icon name='visibility' />
          </Button>
        </div>
      </div>
    </>
  )
}

export default MobilePost
