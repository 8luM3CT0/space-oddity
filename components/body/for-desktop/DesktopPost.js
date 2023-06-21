//front-end
import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { creds, store, storage } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function DesktopPost ({
  id,
  createdBy,
  addedOn,
  articleTitle,
  articleDesc,
  articleImg
}) {
  const [user] = useAuthState(creds)
  const [editArticle, setEdit] = useState(false)
  const router = useRouter()
  //useStates for title && description
  const [upTitle, setUpTitle] = useState('')
  const [upDesc, setUpDesc] = useState('')

  const updateTitle = e => {
    e.preventDefault()

    if(!upTitle){
      alert('No title. Check input again.')
    }

    store.collection('articles').doc(id).set({
      articleTitle: upTitle
    },
    {merge: true}
    )
    setUpTitle('')
  }

  const updateDesc = e => {
    e.preventDefault()

    if(!upDesc){
      alert('No title. Check input again.')
    }

    store.collection('articles').doc(id).set({
      articleDesc: upDesc
    },
    {merge: true}
    )
    setUpDesc('')
  }

  return (
    <>
      <div
        key={id}
        className='
    desktopPost
    '
      >
        {/**title && author */}
        <span
          className='
        w-[90%]
        flex
        items-center
        justify-between
        px-5
        py-2
        '
        >
          <h1
            className='
        font-robot-slab
        font-normal
        text-xl
        text-sky-200
        underline
        '
          >
            {articleTitle}
          </h1>
          <p
            className='
        font-robot-slab
        font-extralight
        text-base
        text-sky-400
        '
          >
            Author: {createdBy}
          </p>
        </span>
        {/**article image if existing // article short description */}
        {articleImg ? (
          <>
            <div
              className='
                w-[99%]
                h-[320px]
                bg-no-repeat
                bg-cover
                mx-auto
                border-1
                border-amber-600
                rounded-lg
                '
              style={{
                backgroundImage: `url(${articleImg})`
              }}
            ></div>
          </>
        ) : (
          <>
            <div
              className='
              bg-sky-700
              rounded-lg
                font-robot-slab
                font-light
                text-lg
                text-slate-100
                h-screen
                w-full
                px-4
                py-3
                mx-auto
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-600
                scrollbar-thumb-sky-600
                '
            >
              {articleDesc}
            </div>
          </>
        )}
        {/**post options below */}
        <span
          className='
    w-[90%]
        flex
        items-center
        justify-evenly
        space-x-2
        mx-auto
        px-5
        py-2
    '
        >
          {(user?.displayName == 'John Seed' ||
            user?.displayName == 'Reaper IFF' ||
            user?.displayName == 'Robert Seed' ||
            user?.displayName == createdBy) && (
            <Button
            onClick={() => setEdit(true)}
              color='green'
              buttonType='filled'
              block={true}
              size='regular'
              ripple='light'
              className='px-3 py-2 capitalize font-robot-slab text-lg font-normal'
            >
              <Icon name='edit' />
              Edit post
            </Button>
          )}
          <Button
            onClick={() => router.push(`/article/${id}`)}
            color='lightBlue'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='px-3 py-2 capitalize font-robot-slab text-lg font-normal'
          >
            <Icon name='read_more' />
            Read
          </Button>
        </span>
      </div>
      <Modal
      size='lg'
      active={editArticle}
      toggler={() => setEdit(false)}
      >
        <ModalHeader
        toggler={() => setEdit(false)}
        >
          <h1 className="
          text-xl 
          font-robot-slab 
          font-normal 
          text-sky-500 
          pl-4 
          pr-7">
            Edit article title here...
          </h1>
        </ModalHeader>
        <ModalBody>
          <div className="
          desktopPostEdit
          ">
            <h3 className="
            desktopPostEditTitle
            ">
              Edit title
            </h3>

            <input 
            type="text" 
            value={upTitle}
            onChange={e => setUpTitle(e.target.value)}
            placeholder='Edit title...'
            className='
            bg-slate-800 
            px-4 
            py-3 
            h-[40px] 
            rounded-md
            w-[90%] 
            mx-auto
            text-sky-100
            text-xl
            ' />
          <Button
             onClick={updateTitle}
            color='green'
            buttonType='filled'
            size='sm'
            ripple='light'
            className='font-robot-slab font-normal capitalize'
            >
              Edit title
            </Button>
            <h3 className="
            desktopPostEditTitle
            ">
              Edit description
            </h3>
              <textarea 
              type="text" 
              value={upDesc}
              onChange={e => setUpDesc(e.target.value)}
              placeholder='Edit short description...'
              className='
              bg-slate-800 
              px-4 
              py-3 
              h-[75%] 
              w-[90%] 
              mx-auto
              text-sky-100
              rounded-lg
              text-xl
              overflow-y-scroll
              scrollbar-thin
              scrollbar-track-sky-800
              scrollbar-thumb-sky-100
              '
              />
          <Button
           onClick={updateDesc}
            color='green'
            buttonType='filled'
            size='sm'
            ripple='light'
            className='font-robot-slab font-normal capitalize'
            >
              Edit description
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default DesktopPost
