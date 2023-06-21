//front-end
import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  SearchField
} from '..'
//back-end
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function BlogHeader () {
  const router = useRouter()

  return (
    <header
      className='
    grid
    top-0
    z-50
    sticky
    w-full
    '
    >
      <div
        className='
   blogHeader
    '
      >
        {/**Back button */}
        <Button
          onClick={() => router.push('/')}
          color='blueGray'
          buttonType='link'
          size='regular'
          iconOnly={true}
          ripple='light'
        >
          <Icon name='gite' />
        </Button>
        {/**Header title */}
        <h1
          className='
        text-xl
        font-space-mono
        font-semibold
        text-slate-100
        underline
        '
        >
          Blog
        </h1>
        {/**Button for login */}
        <Button
          color='blue'
          buttonType='link'
          size='regular'
          iconOnly={true}
          ripple='dark'
        >
          <Icon name='person_4' />
        </Button>
      </div>
      {/**Search field div */}
      <SearchField />
    </header>
  )
}

export default BlogHeader
