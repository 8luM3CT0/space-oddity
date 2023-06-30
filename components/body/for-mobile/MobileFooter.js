//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  MobPost,
  SearchRes
} from '../../'
//back-end
import firebase from 'firebase'
import { creds, provider, store, storage } from '../../../backend/firebase'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  useCollection,
  useCollectionData
} from 'react-firebase-hooks/firestore'
//for search with  meilisearch
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight
} from 'react-instantsearch-dom'

const searchClient = instantMeiliSearch(
  'https://ms-165b4ed19152-3740.sfo.meilisearch.io',
  '397ee881e2c43e2a62a6170d0e85c926ebc43744'
)

function MobileFooter (queryText) {
  const router = useRouter()

  const [blogForm, setBlogForm] = useState(false)
  const [credsModal, setCredsModal] = useState(false)
  const [searchModal, setSearchModal] = useState(false)
  //for blog form
  const [artTitle, setArtTitle] = useState('')
  const [artDesc, setArtDesc] = useState('')
  const pickerRef = useRef(null)
  const [artImg, setArtImg] = useState(null)
  //for search
  const [searchDocu, setSearchDocu] = useState('')
  const [results, setResults] = useState([])

  const [user] = useAuthState(creds)

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

  const logOut = () => {
    creds.signOut()
    setCredsModal(false)
  }

  //for image uploading and removal
  const removePic = () => {
    setArtImg(null)
  }

  const addImageToArticle = e => {
    const readd = new FileReader()
    if (e.target.files[0]) {
      readd.readAsDataURL(e.target.files[0])
    }
    readd.onload = readerEvent => {
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
    setBlogForm(false)
  }

  //end of search functions

  return (
    <>
      <div className='blogFooter'>
        {/**Back to home */}
        <Button
          onClick={() => router.push('/')}
          color='blue'
          buttonType='link'
          size='regular'
          iconOnly={true}
          rounded={true}
          ripple='light'
          className='px-3'
        >
          <Icon name='gite' />
        </Button>
        {/**Add post */}
        <Button
          onClick={() => setBlogForm(true)}
          color='green'
          buttonType='link'
          size='regular'
          iconOnly={true}
          rounded={true}
          ripple='light'
          className='px-3'
        >
          <Icon name='add_box' />
        </Button>
        {/**post search (also to test out the search functionality) */}
        <Button
          onClick={() => setSearchModal(true)}
          color='cyan'
          buttonType='link'
          size='regular'
          iconOnly={true}
          rounded={true}
          ripple='light'
          className='px-3'
        >
          <Icon name='location_searching' />
        </Button>
        {!user ? (
          <Button
            onClick={() => googleLog()}
            color='blue'
            buttonType='link'
            size='regular'
            iconOnly={true}
            ripple='dark'
          >
            <Icon name='person_4' />
          </Button>
        ) : (
          <img
            onClick={() => setCredsModal(true)}
            src={user?.photoURL}
            alt=''
            className='
            h-10
            w-10
            rounded-lg
            border
            border-orange-400
            cursor-pointer
            hover:shadow-lg
          shadow-amber-400
          transform
          transition
          duration-200
          ease-in-out
            '
          />
        )}
      </div>
      {/**Blog form */}
      <Modal
        size='regular'
        active={blogForm}
        toggler={() => setBlogForm(false)}
      >
        <ModalHeader toggler={() => setBlogForm(false)}>
          <p
            className='
        text-2xl 
        font-robot-slab 
        font-semibold 
        text-slate-600
        underline
        pl-4
        pr-7
        '
          >
            Add a new post
          </p>
        </ModalHeader>
        {user ? (
          <>
            <ModalBody>
              <div className='blogModDiv'>
                <h1
                  className='
            text-xl 
            font-font-robot 
            font-normal 
            text-sky-400'
                >
                  Title:
                </h1>
                <input
                  value={artTitle}
                  onChange={e => setArtTitle(e.target.value)}
                  placeholder='Title...'
                  type='text'
                  className='
            h-[55px]
            px-3
            w-[95%]
            mx-auto
            text-lg
            font-robot-slab
            font-semibold
            text-slate-700
            bg-sky-400
            rounded-lg
            border-none
            active:shadow-lg
            shadow-amber-700
            placeholder-sky-900
            '
                />
                <h1
                  className='
            text-xl 
            font-font-robot 
            font-normal 
            text-sky-400'
                >
                  Short description:
                </h1>
                <textarea
                  value={artDesc}
                  onChange={e => setArtDesc(e.target.value)}
                  className='
            h-[75%]
            w-[95%]
            mx-auto
            text-base
            font-robot-slab
            font-normal
            text-slate-200
            bg-slate-800
            bg-opacity-80
            rounded-lg
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-slate-800
            scrollbar-thumb-sky-700
            px-3
            py-2
            '
                />
                {artImg ? (
                  <>
                    <img
                      src={artImg}
                      alt=''
                      className='
                    h-[20%]
                    w-[30%]
                    rounded-lg
                    border-1
                    border-amber-300
                    mx-auto
                    '
                    />
                    <Button
                      onClick={removePic}
                      block={true}
                      color='red'
                      buttonType='filled'
                      size='sm'
                      ripple='dark'
                      className='font-robot-condensed font-normal text-base capitalize'
                    >
                      <Icon name='delete' />
                      Remove ?
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => pickerRef.current.click()}
                      color='lightBlue'
                      buttonType='filled'
                      block={true}
                      size='regular'
                      ripple='dark'
                      className='font-robot-slab font-normal capitalize'
                    >
                      <Icon name='camera_enhance' />
                      Add
                    </Button>
                    <input
                      type='file'
                      hidden
                      ref={pickerRef}
                      onChange={addImageToArticle}
                    />
                  </>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => setBlogForm(false)}
                block={true}
                color='red'
                buttonType='filled'
                size='regular'
                ripple='dark'
                className='font-robot-slab font-normal capitalize'
              >
                <Icon name='close' />
                Cancel
              </Button>
              <Button
                onClick={uploadToDb}
                color='green'
                block={true}
                buttonType='filled'
                size='regular'
                ripple='dark'
                className='font-robot-slab font-normal capitalize'
              >
                <Icon name='post_add' />
                Post
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>
              <div className='blogModDiv'>
                <h1
                  className='
            text-xl 
            font-font-robot 
            font-normal 
            text-sky-400'
                >
                  Sign in to post
                </h1>
                <h1 className='text-xl font-font-robot font-normal text-sky-400'>
                  Click the far right icon on the footer to log in
                </h1>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => setBlogForm(false)}
                block={true}
                color='red'
                buttonType='filled'
                size='regular'
                ripple='dark'
                className='font-robot-slab font-normal capitalize'
              >
                <Icon name='close' />
                Cancel
              </Button>
            </ModalFooter>
          </>
        )}
      </Modal>
      {/**credentials modal */}
      <Modal
        size='regular'
        active={credsModal}
        toggler={() => setCredsModal(false)}
      >
        <ModalHeader toggler={() => setCredsModal(false)}>
          <p
            className='
        text-xl
        font-robot-slab
        font-normal
        text-sky-500
        underline
        pl-3
        pr-6
        '
          >
            User credentials
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
        h-[280px]
        w-[310px]
        rounded-lg
        grid
        place-items-center
        space-y-4
        '
          >
            <img
              src={user?.photoURL}
              alt=''
              className='
          h-[56px]
          w-[56px]
          rounded-xl
          border
          border-amber-500
          '
            />
            <h1
              className='
          font-robot-slab
          font-normal
          text-xl
          text-sky-800
          '
            >
              {user?.displayName}
            </h1>
            <h1
              className='
          font-robot-slab
          font-light
          text-lg
          text-sky-900
          '
            >
              {user?.email}
            </h1>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setCredsModal(false)}
            color='red'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-font-robot font-normal capitalize'
          >
            <Icon name='close' />
            Cancel
          </Button>
          <Button
            onClick={logOut}
            color='gray'
            buttonType='filled'
            block={true}
            size='regular'
            ripple='light'
            className='font-font-robot font-normal capitalize'
          >
            <Icon name='logout' />
            Log out
          </Button>
        </ModalFooter>
      </Modal>
      {/**search form */}
      <Modal
        size='regular'
        active={searchModal}
        toggler={() => setSearchModal(false)}
      >
        <ModalHeader toggler={() => setSearchModal(false)}>
          <h1
            className='
          font-robot-slab 
          font-semibold 
          text-lg 
          text-slate-400
          underline
          '
          >
            Search for the article below
          </h1>
        </ModalHeader>
        <ModalBody>
          <div className='searchModal'>
            <InstantSearch indexName='articles' searchClient={searchClient}>
              <div
                className='
              mx-auto 
              w-full 
              bg-slate-700 
              rounded-3xl 
              h-[60px] 
              px-3 
              py-2 
              place-items-center'
              >
                <SearchBox
                  className='
                w-full 
                place-self-center
                h-[55px] 
                bg-transparent 
                border-none 
                px-3
                py-4 
                rounded-lg 
                font-robot-slab 
                font-normal 
                text-sky-900'
                />
              </div>
              <div
                className='
            h-[95%]
            overflow-y-scroll
            scrollbar-hide
            space-y-12
            w-full
            rounded-lg
            bg-slate-800
            bg-opacity-80
            '
              >
                <InfiniteHits hitComponent={SearchRes} />
              </div>
            </InstantSearch>
            {/**search result; use mobile post first */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setSearchModal(false)}
            buttonType='filled'
            size='regular'
            color='red'
            block={true}
            ripple='light'
            className='font-google-sans font-normal capitalize'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobileFooter
