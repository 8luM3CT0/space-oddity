//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  SearchResult
} from '../'
//back-end
import { useState } from 'react'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import {
  InstantSearch,
  Hits,
  Configure,
  SearchBox,
  connectSearchBox
} from 'react-instantsearch-dom'

const searchClient = instantMeiliSearch(
  'https://ms-165b4ed19152-3740.sfo.meilisearch.io',
  '397ee881e2c43e2a62a6170d0e85c926ebc43744'
)

const SearchBar = ({ currentRefinement, isSearchStalled, refine }) => (
  <form
    noValidate
    role='search'
    action=''
    className='
  mx-auto
  my-4
  w-[80%]
  h-[55px]
  bg-sky-700
  bg-opacity-80
  px-3
  py-2
  rounded-lg
  shadow-lg
  shadow-slate-600
  '
  >
    <input
      type='search'
      value={currentRefinement}
      placeholder='Search articles here...'
      onChange={e => refine(e.currentTarget.value)}
      className='
    bg-transparent
    border-0
    outline-none
    w-full
    font-robot-slab
    font-normal
    text-lg
    text-sky-100
    placeholder-sky-200
    
    '
    />
  </form>
)

const CustomSearchBox = connectSearchBox(SearchBar)

function SearchField () {
  const [searchArticle, setSearchArticle] = useState('')

  return (
    <>
      <div className='blogSearchArt'>
        <div className=''></div>
        <Button
          onClick={() => setSearchArticle(true)}
          color='lightBlue'
          buttonType='link'
          size='regular'
          className='font-robot-slab font-light capitalize text-base'
        >
          <Icon name='search' />
          Search articles
        </Button>
      </div>
      <Modal
        size='lg'
        active={searchArticle}
        toggler={() => setSearchArticle(false)}
      >
        <ModalHeader toggler={() => setSearchArticle(false)}>
          <p
            className='
          font-robot-slab 
          font-semibold 
          text-lg 
          text-sky-600
          underline
          pl-4
          pr-8
          '
          >
            Search articles here..
          </p>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          h-[840px]
          w-[840px]
          rounded-lg
          shadow-lg
          shadow-slate-700
          bg-gradient-to-br
          from-slate-700
          to-sky-700
          bg-opacity-70
          overflow-hidden
          '
          >
            <InstantSearch indexName='articles' searchClient={searchClient}>
              <CustomSearchBox />
              <div
                className='
              h-full
              w-full
              mx-auto
              overflow-y-scroll
              scrollbar-thin
              scrollbar-track-slate-600
              scrollbar-thumb-sky-600
              space-y-5
              flex
              flex-col
              place-items-center
              shadow-lg
              bg-sky-600
              bg-opacity-70
              rounded-lg
              px-4
              py-3
              '
              >
                <Hits hitComponent={SearchResult} />
              </div>
            </InstantSearch>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setSearchArticle(false)}
            color='red'
            buttonType='filled'
            size='regular'
            block={true}
            ripple='light'
            className='font-robot-slab font-semibold text-lg capitalize'
          >
            <Icon name='cancel' />
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default SearchField
