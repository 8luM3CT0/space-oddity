//front-end
import React, { useState } from 'react'
import {
  BlogHeader,
  DeskForm,
  MobFooter,
  MobPost,
  DesktopPost
} from '../components'
//back-end
import { creds, store } from '../backend/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import Head from 'next/head'

function Blog () {
  const [user] = useAuthState(creds)
  //database return (the articles)
  const [articles] = useCollection(
    store.collection('articles').orderBy('articleTitle', 'asc')
  )

  return (
    <div
      className='
  h-screen
  overflow-hidden
  scrollbar-hide
    '
    >
      <BlogHeader />
      <Head>
        <title>Here are the blog articles</title>
      </Head>
      <main
        className='blogMain
        '
      >
        <div
          className='
          blogMidDiv
        '
        >
          {/**input box at top */}
          {user && <DeskForm />}
          {/**posts  below */}
          <div
            className='
          blogMainDiv
          '
          >
            {articles &&
              articles?.docs.map(doc => (
                <>
                  <MobPost
                    key={doc?.id}
                    id={doc?.id}
                    title={doc?.data()?.articleTitle}
                    author={doc?.data()?.createdBy}
                    headImg={doc?.data()?.articleImage}
                  />
                  <DesktopPost
                    key={doc?.id}
                    id={doc?.id}
                    articleTitle={doc?.data()?.articleTitle}
                    articleDesc={doc?.data()?.articleDesc}
                    articleImg={doc?.data()?.articleImage}
                    createdBy={doc?.data()?.createdBy}
                  />
                </>
              ))}
          </div>
        </div>
      </main>
      {/**Footer for mobile purposes */}
      <MobFooter />
    </div>
  )
}

export default Blog
