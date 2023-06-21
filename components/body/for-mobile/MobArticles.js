//front-end
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Icon } from '../..'
import TimeAgo from 'timeago-react'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'

function MobArticles ({ firebaseDocument }) {
  const router = useRouter()

  return (
    <div
      id={firebaseDocument?.data()?.id}
      className='
    mobIndArticle
    '
    >
      <div
        className='
        h-full
        w-full
        bg-sky-900
        bg-opacity-50
        px-5
        py-4
        grid
        place-items-start
        space-y-5
        '
      >
        <h1
          className='
        font-font-robot
        font-normal
        text-2xl
        text-sky-50
        line-clamp-2
        w-[70%]
        '
        >
          {firebaseDocument?.data()?.articleTitle}
        </h1>
        <span
          className='
        grid
        place-items-start
        w-full
        space-y-2
        '
        >
          <h4
            className='
        font-font-robot
        font-light
        text-base
        text-sky-200
        '
          >
            Article by:
          </h4>
          <h4
            className='
        font-font-robot
        font-semibold
        text-lg
        text-sky-100
        '
          >
            {firebaseDocument?.data()?.createdBy}
          </h4>
        </span>
        <span
          className='
        grid
        place-items-start
        w-full
        space-y-2
        '
        >
          <h4
            className='
        font-font-robot
        font-light
        text-base
        text-sky-200
        '
          >
            Posted on:
          </h4>
          <h4
            className='
        font-font-robot
        font-semibold
        text-lg
        text-sky-100
        '
          >
            {new Date(
              firebaseDocument?.data()?.addedOn?.toDate()
            ).toLocaleString()}
          </h4>
        </span>
      </div>
    </div>
  )
}

export default MobArticles
