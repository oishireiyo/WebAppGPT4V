import React from 'react'
import ImageTextCard from '../atoms/ImageTextCard'

export default function ImageTextCards(props) {
  const {cardobjects} = props

  return (
    <div>
      {
        cardobjects.map((cardobject, index) => (
          <div key={`image-text-card-${index}`}>
            <ImageTextCard
              cardobject={cardobject}
              index={index}
            />
          </div>
        ))
      }
    </div>
  )
}