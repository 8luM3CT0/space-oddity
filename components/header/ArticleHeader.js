//front-end
import React from 'react'
import { Button, Icon, Modal, ModalHeader, ModalBody, ModalFooter } from '../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'
import { creds, store, storage, provider } from '../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import firebase from 'firebase'
import AddBlogForm from './AddBlogForm'

function ArticleHeader ({editor, articleId}) {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [editModal, setEditModal] = useState(false)

  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  useEffect(() => {
    if(user){
      store.collection('SOUser').doc(user?.uid).set(
        {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
        {merge: true}
      )
    }
  }, [user])

  return (
    <>
      <header
        className='
        top-0
        z-50
        sticky
        w-full
        grid
        '
      >
        {/**
        login credentials && blog link
         */}
        <div
          className='
            flex
            items-center
            justify-between
            px-4
            py-3
            w-full
            bg-slate-700
            bg-opacity-90
            '
        >
          <Button
            onClick={() => router.push('/blog')}
            buttonType='filled'
            size='regular'
            color='blueGray'
            ripple='light'
            className='font-normal capitalize text-lg font-robot-condensed'
          >
            <Icon name='web' />
            Blog
          </Button>
          {user?.displayName == editor && (
                      <Button
                      onClick={() => setEditModal(true)}
                      buttonType='link'
                      size='regular'
                      color='green'
                      ripple='light'
                      className='font-normal capitalize text-base font-robot-condensed'
                    >
                      <Icon name='edit' />
                      Edit
                    </Button>
          )}
          <Button
          onClick={signIn}
            buttonType='link'
            size='regular'
            color='blue'
            ripple='light'
            className='font-normal capitalize'
          >
            <Icon name='person_4' />
          </Button>
        </div>
        {/**links to other components */}
        <div
          className='
            flex
            items-center
            justify-evenly
            px-5
            py-4
            w-full
            bg-sky-800
            bg-opacity-90
            '
        >
          <Button
            onClick={() => router.push('/')}
            color='lightBlue'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='gite' />
          </Button>
          <Button
            onClick={() => router.push('/solar')}
            color='green'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='public' />
          </Button>
          <Button
            onClick={() => router.push('/external')}
            color='red'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='auto_awesome' />
          </Button>
          <Button
            onClick={() => router.push('/rocket')}
            color='orange'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='rocket' />
          </Button>
        </div>
      </header>
      <Modal
      size='lg'
      active={editModal}
      toggler={() => setEditModal(false)}
      >
        <ModalHeader
        toggler={() => setEditModal(false)}
        >
          <h1 className="
          font-robot-slab
          font-semibold
          text-lg
          pl-5
          pr-9
          text-sky-800
          ">
            Edit the article
          </h1>
        </ModalHeader>
        <ModalBody>
          <AddBlogForm 
          parentId={articleId}
          />
        </ModalBody>
      </Modal>
    </>
  )
}

export default ArticleHeader
