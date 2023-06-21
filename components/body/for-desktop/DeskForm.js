//front-end
import React, { useRef } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import firebase from 'firebase'
import { creds, provider, store, storage } from '../../../backend/firebase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'

function DeskForm () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  //for article state
  const [artTitle, setArtTitle] = useState('')
  const [artDesc, setArtDesc] = useState('')
  const filePickerRef = useRef(null)
  const [artImg, setArtImg] = useState(null)

  const googleLog = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  useEffect(() => {
    if (user) {
      store.collection('SOUsers').doc(user?.uid).set(
        {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
    }
  }, [user])

  //add to articles database
  //for image uploading and removal
  const removePic = () => {
    setArtImg(null)
  }

  const addImage = e => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setArtImg(readerEvent.target.result)
    }
  }

  //upload article title and description to firebase
  const uploadToDb = e => {
    e.preventDefault()

    if (!artTitle || !artDesc) {
      return
    }

    if (artTitle && artDesc && artImg) {
      store
        .collection('articles')
        .add({
          articleTitle: artTitle,
          articleDesc: artDesc,
          createdBy: user?.displayName,
          createdPic: user?.photoURL,
          addedOn: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(doc => {
          if (artImg) {
            const uploadTask = storage
              .ref(`articles/${doc.id}`)
              .putString(artImg, 'data_url')

            removePic()

            uploadTask.on(
              'state_change',
              null,
              error => console.error(error),
              () => {
                storage
                  .ref('articles')
                  .child(doc.id)
                  .getDownloadURL()
                  .then(image => {
                    store.collection('articles').doc(doc.id).set(
                      {
                        articleImage: artImg
                      },
                      { merge: true }
                    )
                  })
              }
            )
          }
        })
    } else if (artTitle && artDesc && !artImg) {
      store.collection('articles').add({
        createdBy: user?.displayName,
        addedOn: firebase.firestore.FieldValue.serverTimestamp(),
        articleTitle: artTitle,
        articleDesc: artDesc
      })
    }

    setArtTitle('')
    setArtDesc('')
  }

  return (
    <>
      <div
        className='
deskForm
          '
      >
        <input
          type='text'
          value={artTitle}
          placeholder='Title of the article...'
          onChange={e => setArtTitle(e.target.value)}
          className='
        w-[95%] 
        h-[50px] 
        mx-auto
        px-3
        py-2
        rounded-lg
        bg-sky-800
        text-lg
        text-sky-100
        font-robot-slab
        font-semibold
        placeholder-slate-50
        '
        />
        <textarea
          value={artDesc}
          onChange={e => setArtDesc(e.target.value)}
          className='
            bg-gradient-to-b
            from-sky-900
            to-amber-900
            w-full
            h-[90%]
            placeholder-slate-100
            font-robot-slab
            text-lg
            text-sky-100
            rounded-lg
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-800
            scrollbar-thumb-sky-500
            border-0
            outline-none
            px-3
            py-2
            '
          placeholder='Type something for the blog...'
        />
        {/**for image and other media type purposes */}
        <span
          className='
            flex
            items-center
            w-full
            justify-evenly
            '
        >
          {artImg ? (
            <div
              className='
              flex
              items-center
              space-x-2
              p-2
              h-[30%]
              w-[90%]
              mx-auto
              justify-evenly
              '
            >
              <img
                src={artImg}
                alt=''
                className='
                h-[10%]
                w-[10%]
                rounded-lg
                border-1
                border-amber-300
                mx-auto
                '
              />
              <Button
                onClick={removePic}
                color='red'
                buttonType='filled'
                size='regular'
                ripple='dark'
                className='font-robot-condensed font-normal text-base capitalize'
              >
                Remove ?
              </Button>
            </div>
          ) : (
            <>
              <Button
                onClick={() => filePickerRef.current.click()}
                color='green'
                buttonType='link'
                size='regular'
                ripple='dark'
                className='font-robot-condensed font-normal text-lg capitalize'
              >
                <Icon name='camera' />
                Add image
              </Button>
              <input
                type='file'
                hidden
                ref={filePickerRef}
                onChange={addImage}
              />
            </>
          )}
        </span>
        <Button
          onClick={uploadToDb}
          color='blueGray'
          buttonType='filled'
          size='regular'
          block={true}
          ripple='light'
          className='font-robot-slab font-semibold text-lg space-x-3 capitalize'
        >
          <Icon name='post_add' />
          Post
        </Button>
      </div>
    </>
  )
}

export default DeskForm
