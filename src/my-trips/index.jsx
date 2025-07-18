import { db } from "@/service/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore"; // Ensure correct Firestore imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import for navigation
import UserTripCardItem from "./Components/UserTripCardItem";

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // Parse user from localStorage

    if (!user) {
      navigate("/"); // Redirect to home if user is not logged in
      return;
    }
    const q = query(
      collection(db, "AItrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q); // Fetch documents from Firestore
    setUserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 bg-white">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips?.length > 0
          ? userTrips.map((trip, index) => (
              <UserTripCardItem trip={trip} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default MyTrips;
