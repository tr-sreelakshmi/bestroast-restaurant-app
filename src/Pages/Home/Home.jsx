import React from 'react'
import Ambience from '../../Pages/Ambience/Ambience'
import Delivery from '../../Pages/Delivery/Delivery'
import Partner from '../../Pages/Partner/Partner'
import Welcome from '../../Pages/Welcome/Welcome'
import Dishes from '../Dishes/Dishes'
import Booking from '../Booking/Booking'


function Home() {
  return (
    <>
      <Welcome/>
      <Partner/>
      <Booking/>
      <Dishes/>
      <Ambience/>
      <Delivery/>
      </>
  )
}

export default Home