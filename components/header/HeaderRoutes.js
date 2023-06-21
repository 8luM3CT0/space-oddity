//front-end
import React from 'react'
import { Button, Icon } from '../'
//back-end
import { useRouter } from 'next/router'

function HeaderRoutes () {
  const router = useRouter()

  return (
    <div
      className='
    bg-slate-800 
    shadow-lg 
    border-b 
    border-slate-600
    top-0
    z-50
    sticky
    w-full
    flex
    place-items-center
    justify-evenly
    p-3
    '
    >
      <Button
        color='blueGray'
        size='sm'
        buttonType='link'
        rounded={true}
        iconOnly={true}
        ripple='light'
      >
        <Icon name='public' />
      </Button>
      <Button
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
        color='blueGray'
        size='sm'
        buttonType='link'
        rounded={true}
        iconOnly={true}
        ripple='light'
      >
        <Icon name='rocket' />
      </Button>
      <Button
        color='blueGray'
        size='sm'
        buttonType='link'
        rounded={true}
        iconOnly={true}
        ripple='light'
      >
        <Icon name='search' />
      </Button>
    </div>
  )
}

export default HeaderRoutes
