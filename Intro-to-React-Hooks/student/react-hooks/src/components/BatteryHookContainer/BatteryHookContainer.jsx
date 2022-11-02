import React, {useState} from 'react'
import { useEffect } from 'react'
import Battery from '../Battery/Battery'
import {register, unregister} from '../../utils/battery'

function BatteryHookContainer() {
    
        // const arr = useState(0.55)
        // const level = arr[0]
        // const setLevel = arr[1]
        // console.log('Retun from useState', arr)
        //----------ShortCut for all the code above:----------------
    
        //This will just store data in the State component
        //setLevel --> used just to update the state eg: user input ig..
        // const [level, setLevel] = useState(.95)

    const [batteryData, setBatteryData] = useState({
        level: .45,
        charging: true
      })


      const updateBattery = ({level, charging}) => {
        setBatteryData({level, charging})
      }


    //Acts like a monitor to see the changes that happned
    useEffect(() =>{
        register(updateBattery)
        return() => {
            unregister(updateBattery);
        }

    }, [])
    
    const chargeBattery = () =>{
        setBatteryData({...batteryData,
            level: batteryData.level + 0.01})
    }

    return (
    <>
         <Battery level={batteryData.level} charging={batteryData.charging}/>

        {/* <button onClick={chargeBattery}>Charge Battery!</button> */}

    </>
  )
}

export default BatteryHookContainer