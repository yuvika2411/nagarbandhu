"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "./navigation";

export default function ReviewScreen() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState([]);

  // Demo reviews (used if no user reviews)
  const demoReviews = [
    {
      name: "Shilpi Arora",
      comment: "My pothole complaint was resolved within 2 days. Great work!",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      name: "Mukul Garg",
      comment: "Garbage cleared quickly. Impressive response time!",
      rating: 4,
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  const handleSubmit = () => {
    if (!name || !comment || rating === 0) {
      alert("Please fill all fields and select a rating!");
      return;
    }

    const newReview = {
      name,
      comment,
      rating,
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    alert("Review submitted successfully!");
    navigate("home");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button onClick={() => navigate("home")} className="mr-2">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Write a Review</h1>
      </div>

      {/* Name Input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Rating Stars */}
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} onClick={() => setRating(num)}>
            <Star
              className={`w-8 h-8 ${
                num <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={num <= rating ? "currentColor" : "none"}
            />
          </button>
        ))}
      </div>

      {/* Comment Box */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your experience..."
        className="w-full h-28 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none mb-4"
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors mb-6"
      >
        Submit Review
      </button>

      {/* Reviews Section */}
      <div className="bg-white rounded-2xl shadow-lg p-5">
        <h2 className="text-lg font-bold text-gray-900 mb-4">All Reviews</h2>

        <div className="space-y-4">
          {(reviews.length > 0 ? reviews : demoReviews).map((r, i) => (
            <div key={i} className="flex gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900 text-sm">
                    {r.name}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <span
                        key={j}
                        className={`text-sm ${
                          j < r.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
