import React from 'react'
import ImageTextCards from '../molecules/ImageTextCards'
import OutputInfo from '../atoms/OutputInfo'

export default function ImageTextCardsViwer(props) {
  const {cardobjects} = props

  return (
    <div className='space-y-2 m-2'>
      <div>
        <OutputInfo />
      </div>
      <div>
        <ImageTextCards cardobjects={cardobjects}/>
      </div>
    </div>
  )
}