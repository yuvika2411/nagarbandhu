import { Camera, CheckCircle, Clock, TrendingUp, Menu, Search, Edit } from "lucide-react";
import { useNavigate } from "./navigation";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const stats = [
    { icon: CheckCircle, value: "1200+", label: "Issues Resolved" },
    { icon: Clock, value: "2 Days", label: "Avg Resolution Time" },
    { icon: TrendingUp, value: "345", label: "Active Complaints" },
  ];

  const categories = [
    { name: "Potholes", count: 34, icon: "🕳️", color: "bg-blue-100" },
    { name: "Garbage", count: 57, icon: "🗑️", color: "bg-green-100" },
    { name: "Streetlights", count: 12, icon: "💡", color: "bg-emerald-100" },
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <Menu className="w-6 h-6" />
            <h1 className="text-xl font-bold">NagarBandhu</h1>
            <Search className="w-6 h-6" />
          </div>

          <button
            onClick={() => navigate("/upload")}
            className="w-full bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-white/30 transition-all"
          >
            <div className="bg-white/30 rounded-full p-3">
              <Camera className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold">Report an Issue</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-md mx-auto px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="flex flex-col items-center p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div
                  className={`${cat.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2`}
                >
                  {cat.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900">{cat.name}</div>
                <div className="text-lg font-bold text-blue-600">{cat.count}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-20">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Citizen Reviews</h2>

          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((r, i) => (
                <div key={i} className="flex gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
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
              ))
            ) : (
              <p className="text-gray-500 text-sm">No reviews yet.</p>
            )}
          </div>

          {/* Write Review Button */}
          <button
            onClick={() => navigate("/review")}
            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Write Review
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto px-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <button className="flex flex-col items-center py-2 text-blue-600">
              <div className="w-6 h-6 mb-1">🏠</div>
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => navigate("/upload")}
              className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 mb-1">📄</div>
              <span className="text-xs">Report</span>
            </button>
            <button
              onClick={() => navigate("/track")}
              className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 mb-1">🔍</div>
              <span className="text-xs">Track</span>
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 mb-1">👤</div>
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
