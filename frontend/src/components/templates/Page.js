import React, { useState } from 'react'
import HowtoAlert from '../atoms/HowtoAlert'
import GivenVideoPlayer from '../organisms/GivenVideoPlayer'
import ImageTextCards from '../molecules/ImageTextCards'

export default function Page() {
  const [cardobjects, setCardobjects] = useState([])

  return (
    <>
      <HowtoAlert />
      <GivenVideoPlayer cardobjects={cardobjects} setCardobjects={setCardobjects}/>
      <ImageTextCards cardobjects={cardobjects}/>
    </>
  )
}