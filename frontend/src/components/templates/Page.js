import React from 'react'
import HowtoInfo from '../atoms/HowtoInfo'
import GivenVideoPlayer from '../organisms/GivenVideoPlayer'
import ImageTextCardsViwer from '../organisms/ImageTextCardsViwer'
import ApplicationBar from '../atoms/ApplicationBar'
import GetContentButton from '../atoms/GetContentButton'
import PayloadInfo from '../atoms/PayloadInfo'

export default function Page() {
  const [cardobjects, setCardobjects] = React.useState([])

  return (
    <div className=''>
      <ApplicationBar />
      <div className='h-screen grid grid-cols-5 divide-x-2 divide-gray-300'>
        <div className='col-span-2 space-y-8 m-2'>
          <div className='space-y-2'>
            <div className=''>
              <HowtoInfo />
            </div>
            <div className=''>
              <GivenVideoPlayer cardobjects={cardobjects} setCardobjects={setCardobjects}/>
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <PayloadInfo />
            </div>
            <div>
              <GetContentButton />
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <ImageTextCardsViwer cardobjects={cardobjects}/>
        </div>
      </div>
    </div>
  )
}