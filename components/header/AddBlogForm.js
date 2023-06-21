//front-end
import React from 'react'
import {Button, Icon} from '../'
//back-end
import { useState } from 'react'
import {store} from '../../backend/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'


function AddBlogForm({parentId}) {
const [blogText, setBlogText] = useState('')

const addTextToBlog = e => {
    e.preventDefault()

    store.collection('articles').doc(parentId).set({
     blogText   
    },
    {merge: true}
    )

    setBlogText('')
}

  return (
    <div className='
    addBlogForm
    '>
        <textarea 
        value={blogText}
        onChange={e => setBlogText(e.target.value)}
        placeholder='
        Type your text for the blog here...
        ' className="
        h-[80%]
        w-[95%]
        bg-slate-600
        mx-auto
        overflow-y-scroll
        scrollbar-thin
        scrollbar-track-slate-700
        scrollbar-thumb-sky-200
        text-zinc-100
        px-3
        py-2
        rounded-lg
        font-robot-condensed
        font-normal
        text-lg
        " />
        <Button
        onClick={addTextToBlog}
        color='green'
        size='regular'
        buttonType='filled'
        ripple='light'
        block={true}
        className='capitalize space-x-4'
        >
            <Icon name='mode_edit' />
            <p>
                Add edits
            </p>
        </Button>
    </div>
  )
}

export default AddBlogForm