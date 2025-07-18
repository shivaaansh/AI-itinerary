import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": "AIzaSyCb0omz66LW4aD3BF-kVcyG6xVyk3UXvyU",
    "X-Goog-FieldMask": ["places.photos", "places.displayName", "places.id"],
  },
};
export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);
export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  "AIzaSyCb0omz66LW4aD3BF-kVcyG6xVyk3UXvyU";
