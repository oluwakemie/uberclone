import React,{ useEffect, useState} from 'react'
import tw from "tailwind-styled-components";
import { carList } from './data/carList';
const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0)
    useEffect(()=>{
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates},${pickupCoordinates};${dropoffCoordinates},${dropoffCoordinates}?access_token=pk.eyJ1Ijoia2FpbGViIiwiYSI6ImNsZXZmbTkzeDA0N3Yzd2tjcHdxNmFiOG0ifQ.yFbymACM6Z84QWw2u3945w`
        ).then(res => res.json())
        .then(data =>{
          setRideDuration(data.routes[0].duration / 100)  
        })
    }, [pickupCoordinates, dropoffCoordinates])
  return (
  <Wrapper>
<Title>
    Choose a ride or swipe up for more 
</Title>
<CarList>
    {carList.map((car, index)=>(
       <Car key={index}>
    <CarImage src={car.imgUrl}/>
    <CarDetails>
        <Service>{car.service}</Service>
        <Time>5 min away</Time>
    </CarDetails>
    <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
</Car> 
    ))}

</CarList>
  </Wrapper>
  )
}

export default RideSelector;

const CarDetails = tw.div` flex-1`

const CarImage=tw.img` h-14 mr-4`

const Car=tw.div` flex  p-4 items-center `
const Service=tw.div` font-medium`

const Price=tw.div` text-sm`
const Time= tw.div` text-xs text-blue-500`

const Wrapper = tw.div`
flex-1  overflow-y-scroll flex flex-col`

const Title = tw.div`

text-ray-500 text-center text-xs py-2 border-b
    `
const CarList = tw.div`
overflow-y-scroll
`