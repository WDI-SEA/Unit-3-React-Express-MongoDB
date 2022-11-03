import React from 'react'
import Kitchen from '../Kitchen/Kitchen'
import LivingRoom from '../LivingRoom/LivingRoom'
import BedRoom from '../BedRoom/BedRoom'
import Bath from '../Bath/Bath'


function FloorPlan() {
  return (
    <div> 
        <Kitchen/>
        <BedRoom bedNum={1}/>
        <BedRoom bedNum={2}/>
        <BedRoom bedNum={3}/>
        <LivingRoom />
        <Bath size={'half'}/>
        <Bath size={'full'}/>
    </div>
  )
}

export default FloorPlan