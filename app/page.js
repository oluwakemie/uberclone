"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";


mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FpbGViIiwiYSI6ImNsZXZmbTkzeDA0N3Yzd2tjcHdxNmFiOG0ifQ.yFbymACM6Z84QWw2u3945w";

export default function Home() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn, logOut } = UserAuth();


  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
      if(!user){
        router.push("/login");
      }
    };
    checkAuthentication();
  }, [user]);

 

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

 



  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
  //     center: [-99.29011, 39.39172],
  //     zoom: 3,
  //   });
  // });

  //what are components? Reusable ui element
  return (
    <div>
      <Wrapper>
        <Map />
        <ActionItems>
          {/* Header */}
          <Header>
            {/* self closing tag */}
            <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
            <Profile>
              <Name>{user && user.displayName}</Name>
              <UserImage onClick={handleSignOut} src={ user && user.photoURL}/>
            </Profile>
          </Header>
          {/* ActionButton */}
          <ActionButtons>
            <Link href="/search">
              <ActionButton>
                {" "}
                <ActionButtonImage src="/car.svg" />
                Ride
              </ActionButton>
            </Link>
            
            <ActionButton>
              {" "}
              <ActionButtonImage src="/bike.svg" />
              Wheels
            </ActionButton>
            
            <ActionButton>
              {" "}
              <ActionButtonImage src="/calendar.svg" />
              Reserve
            </ActionButton>
          </ActionButtons>
          {/* InputButton  */}
          <InputButton>Where to ?</InputButton>
        </ActionItems>
      </Wrapper>
    </div>
  );
}

const Wrapper = tw.div`flex flex-col h-screen`;

const ActionItems = tw.div`flex-1 p-4`;

const Header = tw.div`
flex justify-between items-center
`;
const Uberlogo = tw.img`
h-28 
`;
const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 w-20
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const ActionButtons = tw.div`
flex justify-between
`;
const ActionButton = tw.div`
bg-gray-200 flex flex-1 m-1 h-32 items-center  flex-col justify-center rounded-lg transform hover:scale-105 transition`;

const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-1xl p-4 flex items-center mt-8
`;
