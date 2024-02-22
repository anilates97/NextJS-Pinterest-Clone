"use client";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../shared/firebaseConfig";
import UserInfo from "../components/UserInfo";

interface ProfileParams {
  params: {
    userId: string;
  };
}

function Profile({ params }: ProfileParams) {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const docRef = doc(db, "user", params.userId.replace("%40", "@"));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        console.log("not found");
      }
    };
    getUserInfo();
  }, [params, db]);

  return <div>{userInfo ? <UserInfo userInfo={userInfo} /> : null}</div>;
}

export default Profile;
