//front-end
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../../backend/firebase'
import { useRouter } from 'next/router'

function SearchResult ({ hit }) {
  const router = useRouter()
  const [editArticle, setEditArticle] = useState(false)

  return (
    <>
      <div
        className='
    w-[720px]
    mx-auto
    my-6
    h-[320px]
    rounded-lg
    bg-slate-600
    grid
    place-item-start
    space-y-5
    px-5
    py-4
    '
      >
        {/**title */}
        <h1
          className='
      font-robot-slab
      font-semibold
      text-xl
    text-sky-300
    underline
    shadow-b-2
    shadow-slate-700
      '
        >
          {hit?.articleTitle}
        </h1>
        {/**description */}
        <div
          className='
      h-[70%]
      w-full
      overflow-hidden
      bg-sky-900
      bg-opacity-70
      rounded-lg
      px-3
      py-2
      mx-auto
      '
        >
          <h4
            className='
        font-robot-slab
        font-light
        text-sky-400
        text-base
        '
          >
            {hit?.articleDesc}
          </h4>
        </div>
        {/**buttons */}
        <span
          className='
      w-full
      flex
      items-center
      space-x-3
      justify-evenly
      '
        >
          <Button
            size='regular'
            buttonType='outline'
            block={true}
            color='green'
            className='font-robot-slab font-normal capitalize text-base'
          >
            <Icon name='plumbing' />
            Edit
          </Button>
          <Button
            onClick={() => router.push(`/article/${id}`)}
            size='regular'
            buttonType='outline'
            block={true}
            color='lightBlue'
            className='font-robot-slab font-normal capitalize text-base'
          >
            <Icon name='visibility' />
            Read
          </Button>
        </span>
      </div>
      <Modal
        size='regular'
        active={editArticle}
        toggler={() => setEditArticle(false)}
      ></Modal>
    </>
  )
}

export default SearchResult
