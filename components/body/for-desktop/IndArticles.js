//front-end
import React from 'react'
import {
  Button,
  Icon
} from '../../'
import ArticleDetails from './ArticleDetails'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../../../backend/firebase'


function IndArticles ({ db }) {
  return (
    <div key={db?.id} id={db?.id} className='desktopIndArticle'>
      {/**article image as background if existing; else use bg-placeholder */}
      {db?.data()?.articleImage ? (
        <div
          className='
        w-full
        h-full
        bg-cover
        bg-no-repeat
        '
          style={{
            backgroundImage: `url(${db?.data()?.articleImage})`
          }}
        >
          {db && (
            <ArticleDetails 
            detail={db}
            />
          )}
        </div>
      ) : (
        <div
          className='
        w-full
        h-full
        bg-cover
        bg-no-repeat
        bg-placeholder
        '
        >
                      <ArticleDetails 
            detail={db}
            />
        </div>
      )}
    </div>
  )
}

export default IndArticles
