//front-end
import Head from 'next/head'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  ArticleHeader
} from '../../components'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { creds, store } from '../../backend/firebase'
import { useRouter } from 'next/router'

function SpaceArticle () {
  const router = useRouter()
  const { id } = router.query

  const [snapshot, loadingSnapshot, error] = useDocument(
    store.doc(`/articles/${id}`)
  )

  return (
    <>
      <div
        className='
    h-screen
    overflow-y-scroll
    scrollbar-hide
    bg-gradient-to-br
    from-slate-800
    to-sky-600
    '
      >
        <ArticleHeader editor={snapshot?.data()?.createdBy} articleId={id} />
        <Head>
          <title>Article by: {snapshot?.data()?.createdBy} </title>
        </Head>
        <main
          className='
        mx-auto
        rounded-lg
        w-[95%]
        h-full
        overflow-y-scroll
        scrollbar-hide
        scrollbar-thumb-sky-600
        scrollbar-track-slate-800
        px-3
        py-2
        space-y-2
        flex
        flex-col
        place-items-center
        bg-slate-600
        bg-opacity-60
        '
        >
          {/**article img, title && short description */}
          <div
            className='
          lg:h-[60%]
          h-[40%]
          shadow-lg
          shadow-slate-200
          w-full
          flex
          flex-col
          place-items-start
          '
          >
            <div
              className='
            h-[90%]
            w-full
            bg-gray-200
            bg-cover
            bg-no-repeat
            bg-placeholder
            rounded-sm
            '
            ></div>
            <div
              className='
            rounded-sm
            px-5
            py-2
            h-[10%]
            w-full
            bg-slate-800
            bg-opacity-70
            justify-between
            flex
            items-center
            '
            >
              <h1
                className='
            font-robot-slab
            font-semibold
            text-sky-300
            underline
            lg:text-2xl
            text-xl
            '
              >
                {snapshot?.data()?.articleTitle}
              </h1>
              <h1
                className='
            font-robot-slab
            font-light
            text-sky-300
            underline
            lg:text-base
            text-sm
            '
              >
                By: {snapshot?.data()?.createdBy}
              </h1>
            </div>
          </div>
          {/**end of top components */}
          <div className="
          overflow-y-scroll
          scrollbar-thin
          scrollbar-track-slate-900
          scrollbar-thumb-sky-800
          px-3
          py-2
          pb-[340px]
          rounded-lg
          h-[80%]
          w-[90%]
          mx-auto
          bg-sky-500
          bg-opacity-70
          ">
            {snapshot?.data()?.blogText && (
              <>
                <h3 className="
                text-lg
                font-robot-slab
                font-normal
                text-slate-100
                ">
                  {snapshot?.data()?.blogText}
                </h3>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default SpaceArticle
