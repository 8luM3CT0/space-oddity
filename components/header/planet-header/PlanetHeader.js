//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  HeaderRoutes
} from '../../'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import { useRouter } from 'next/router'

function PlanetHeader () {
  const router = useRouter()

  return (
    <>
      <header
        className='
    top-0
    z-50
    sticky
    grid
    '
      >
        <div
          className='
    py-4
    px-8 
    flex 
    items-center
    border-b
    border-slate-800
    shadow-lg
    justify-between 
    bg-slate-700'
        >
          <Button
            onClick={() => router.push('/')}
            color='blueGray'
            iconOnly={true}
            rounded={true}
            buttonType='link'
            size='regular'
            ripple='light'
            className='p-3'
          >
            <Icon name='home' />
          </Button>
          <h1
            className='
      font-ubuntu-mono
      font-[700]
      md:text-2xl
      text-xl
      text-sky-50
      '
          >
            Sol
          </h1>

          <Button
            onClick={() => router.push('/blog')}
            color='blueGray'
            size='regular'
            buttonType='link'
            ripple='light'
            className='font-inter font-semibold capitalize text-base'
          >
            <Icon name='web' />
            Blog
          </Button>
        </div>
        <div
          className='
    bg-slate-800 
    shadow-lg 
    border-b 
    border-slate-600
    w-full
    flex
    place-items-center
    justify-evenly
    p-3
    '
        >
          <Button
            onClick={() => router.push('/external')}
            color='blueGray'
            size='sm'
            buttonType='link'
            rounded={true}
            iconOnly={true}
            ripple='light'
          >
            <Icon name='flare' />
          </Button>
          <Button
            onClick={() => router.push('/rocket')}
            color='blueGray'
            size='sm'
            buttonType='link'
            rounded={true}
            iconOnly={true}
            ripple='light'
          >
            <Icon name='rocket' />
          </Button>
        </div>
      </header>
    </>
  )
}

export default PlanetHeader
