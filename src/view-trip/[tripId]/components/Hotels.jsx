// import React from "react";
// import { Link } from "react-router-dom";

// function Hotels({ trip }) {
//   return (
//     <div>
//       <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
//         {trip?.tripData?.hotels?.map((hotel, index) => (
//           <Link
//             key={index} // Add a unique key for each mapped element
//             to={
//               "https://www.google.com/maps/search/?api=1&query=" +
//               encodeURIComponent(hotel?.hotelName + " " + hotel?.hotelAddress)
//             }
//             target="_blank"
//           >
//             <div className="hover:scale-105 transition-all cursor-pointer">
//               <img src="/bg.jpg" className="rounded-xl" alt="Hotel" />
//               <div className="my-2 flex flex-col gap-2">
//                 <h2 className="font-medium">{hotel?.hotelName}</h2>
//                 <h2 className="text-xs text-gray-500">{hotel?.hotelAddress}</h2>
//                 <h2 className="text-sm">{hotel?.price}</h2>
//                 <h2 className="text-sm">{hotel?.rating} stars</h2>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hotels;

import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({ trip }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
