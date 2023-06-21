//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'

function DeskLaunch ({
  id,
  url,
  name,
  status,
  status_desc,
  launcher,
  rocket_name,
  mission_name,
  mission_desc,
  pad_name,
  pad_long,
  pad_lat,
  imgUrl
}) {
  const [launchModal, setLaunchModal] = useState(false)
  return (
    <>
      <div
        key={id}
        className='
    deskLaunch
    group
    '
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div
          className='
launchDiv
        '
        >
          <h1
            className='
            font-robot-slab 
            font-normal 
            text-sky-400 
            text-2xl
            group-hover:text-3xl
            underline
            transform
            transition
            duration-300
            ease-in-out
            '
          >
            {name}
          </h1>
        </div>
      </div>
    </>
  )
}

export default DeskLaunch
