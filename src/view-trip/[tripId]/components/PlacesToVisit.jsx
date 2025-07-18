import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      {/* Section Title */}
      <h2 className="font-bold text-lg text-gray-800">Places to Visit</h2>

      {/* Itinerary Section */}
      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            {/* Day Heading */}
            <h2 className="font-medium text-lg text-gray-700">
              Day {item.day}
            </h2>

            {/* Places Grid */}
            <div className="grid md:grid-cols-2 gap-5 mt-3">
              {item.plan.map((place, idx) => (
                <div key={idx} className="p-3 border rounded-lg bg-gray-50">
                  {/* Time to Visit */}
                  <h2 className="font-medium text-sm text-orange-600 mb-2">
                    {place.timeToVisit ||
                      place.bestTimeToVisit ||
                      "Time not specified"}
                  </h2>

                  {/* Place Card */}
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
