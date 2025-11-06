import { ArrowLeft, Edit3, LogOut, Home, Upload, Search, User } from "lucide-react";
import { useNavigate } from "./navigation";

export default function ProfileScreen() {
  const navigate = useNavigate();

  const user = {
    name: "Yuvika Jindal",
    email: "yuvika.jindal@gmail.com",
    city: "Ghaziabad, UP",
    joined: "Feb 2024",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md pb-16">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold tracking-wide">Profile</h1>
        </div>
      </div>

      {/* Floating Profile Card */}
      <div className="max-w-md mx-auto -mt-16 px-4">
        <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center transition transform hover:scale-[1.01] hover:shadow-xl">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-28 h-28 rounded-full mx-auto -mt-16 border-4 border-white shadow-lg object-cover"
          />
          <h2 className="text-lg font-bold text-gray-900 mt-4">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <p className="text-gray-500 text-sm">{user.city}</p>

          <button className="mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2 mx-auto hover:bg-blue-700 transition font-medium">
            <Edit3 className="w-4 h-4" />
            Edit Profile
          </button>
        </div>

        {/* Activity Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Activity</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">34</div>
              <div className="text-sm text-gray-600">Complaints</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">28</div>
              <div className="text-sm text-gray-600">Resolved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">6</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => alert("Logged out successfully")}
          className="w-full py-3 mt-6 rounded-xl font-semibold border-2 border-red-500 text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Bottom Navigation */}
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto px-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <button
              onClick={() => navigate("/home")}
              className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 mb-1">🏠</div>
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => navigate("/upload")}
              className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600"
            >
              <div className="w-6 h-6 mb-1">📄</div>
              <span className="text-xs">Report</span>
            </button>
            <button className="flex flex-col items-center py-2 text-gray-400 hover:text-gray-600">
              <div className="w-6 h-6 mb-1">🔍</div>
              <span className="text-xs font-medium">Track</span>
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="flex flex-col items-center py-2 text-blue-600"
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
