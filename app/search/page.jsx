"use client";
import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";
const Search = () => {

  const [pickup, setPickup ] = useState("");
  const [dropoff, setDropoff]  = useState("");

  console.log(pickup) 
  console.log(dropoff) 
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/confirm">
          <BackButton src="arrow.svg" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="circle.svg" />
          <Line src="https://t3.ftcdn.net/jpg/03/63/34/70/360_F_363347020_YzZc2x3LI8fTfVXvGVPTXTrkOAJ1MR4l.jpg" />
          <Square src="square.svg" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location"
          value={pickup  }
          onChange={(e)=>setPickup(e.target.value)}/>
          <Input placeholder="Where to?" 
            value={dropoff  }
            onChange={(e)=>setDropoff(e.target.value)}/>
        </InputBoxes>
        <PlusIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png" />
      </InputContainer>
      <SavedPlaced>
        <StarIcon src="https://www.freeiconspng.com/uploads/white-star-icon-13.png" />
        Save Places
      </SavedPlaced>
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff,
        }
      }}>
        <ConfirmButtonContainer>Confirm Location</ConfirmButtonContainer>
      </Link>
      {/* Button Container */}
      {/* Input Container */}
      {/* saved places */}
      {/* confirm location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen`;

const ButtonContainer = tw.div`
bg-white px-4 
`;
const BackButton = tw.img`
h-9 cursor-pointer
`;
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
 `;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2 
`;

const Circle = tw.img`
h-2.5 
`;
const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3`;
const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`

h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none `;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`;
const SavedPlaced = tw.div`
flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmButtonContainer = tw.div`
bg-black mt-2 mx-4 px-4 py-3 text-white text-center cursor-pointer
`;
