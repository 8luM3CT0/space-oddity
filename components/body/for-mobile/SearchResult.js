//front-end
import React from 'react'
//back-end
import { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store, storage } from '../../../backend/firebase'

function SearchResult ({ hit }) {
  const [user] = useAuthState(creds)
  return (
    <>
      <div key={hit?.id} className='searchResult group'>
        {/**article creator photoUrl */}
        <img
          src={hit?.createdPic}
          alt=''
          className='
        rounded-3xl
        h-10
        w-10
        border-2
        border-sky-400
        '
        />
        {/**tite */}
        <div className='grid place-items-start'>
          <h1
            className='
        font-robot-slab 
        text-lg 
        font-semibold
        text-amber-200

        '
          >
            {hit?.articleTitle}
          </h1>
          {/**display name */}
          <p
            className='
        font-robot-condensed
        text-sm
        font-normal
        text-amber-500
        '
          >
            {hit?.createdBy}
          </p>
        </div>
      </div>
    </>
  )
}

export default SearchResult
