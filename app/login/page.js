"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

// import { initializeApp, auth, provider } from "../firebase";
// import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

// import 'firebase/compat/auth'
import tw from "tailwind-styled-components";

const Login = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
      if (user) {
        router.push("/");
      }
    };
    checkAuthentication();
  }, [user]);

  // const router = useRouter();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       router.push("/");
  //     }
  //   });
  // }, []);

  return (
    <Wrapper>
      <UberLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" />
      <Title>Login to access your account</Title>
      <HeadImage src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_956,h_537/v1565734756/assets/fa/dc4e40-8aee-4a48-af4c-0475c1e01d26/original/singup_mobile.svg" />

      <SignButton onClick={handleSignIn}>Sign in with Google</SignButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200 p-4`;

const SignButton = tw.button` 
bg-black text-white text-center p-4 mt-8 self-center w-full cursor-pointer`;

const UberLogo = tw.img` h-20 w-auto object-contain self-start
`;
const Title = tw.div`text-4xl pt-4 text-gray-500`;

const HeadImage = tw.img` 
object-contain`;
