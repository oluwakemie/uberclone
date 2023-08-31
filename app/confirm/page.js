"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import { useSearchParams } from "next/navigation";
import RideSelector from "@/components/RideSelector";
import Link from "next/link";
  
const Confirm = () => {
  const searchParams = useSearchParams();
  const pickup = searchParams.get("pickup");
  const dropoff = searchParams.get("dropoff");

  console.log[("Pickup", pickup)];
  console.log[("Dropoff", dropoff)];
  const [pickupCoordinates, setPickupCoordinates] = useState(0, 0);
  const [dropoffCoordinates, setDropoffCoordinates] = useState(0, 0);

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Santa Monica";
    //
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FpbGViIiwiYSI6ImNsZXZnNTF0NzA2YW8zcm80bXFibW16eDcifQ.CWet-QKeMJXv-X2mbO547Q",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });

    //
  };
  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "Los Angelos";
    //
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FpbGViIiwiYSI6ImNsZXZnNTF0NzA2YW8zcm80bXFibW16eDcifQ.CWet-QKeMJXv-X2mbO547Q",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Dropoff");
        console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
        <BackButton src="arrow.svg"/>
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>

        <RideSelector />

        <ConfirmButtonContainer>
          <ConfirmButton>
             Confirm UberX
          </ConfirmButton>
         
          </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl `

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white p-2 shadow-sm cursor-pointer`
const BackButton= tw.img`
h-full object-contain
`

const Wrapper = tw.div`
flex h-screen flex-col 
`;
