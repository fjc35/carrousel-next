"use client";

import React, { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const apiKey = "TA_CLE_API"; // Remplace avec ta clé API
  const placeId = "TA_PLACE_ID"; // Remplace avec ton Google Place ID

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des avis :", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Avis Google</h2>
      <div className="flex overflow-x-auto gap-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md min-w-[250px]">
              <p className="font-semibold">{review.author_name}</p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>
              <p className="text-gray-700">{review.text.substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>Chargement des avis...</p>
        )}
      </div>
    </div>
  );
};

export default GoogleReviews;
