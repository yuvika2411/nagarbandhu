import { ArrowLeft, MapPin, Clock, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "./navigation";
import { useState } from "react";

export default function TrackScreen() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("In Progress");

  const handleResolve = () => {
    setStatus("Resolved");
    setTimeout(() => alert("Complaint marked as resolved ✅"), 500);
  };

  const steps = [
    { label: "Complaint Submitted", done: true },
    { label: "Assigned to Dept", done: true },
    { label: "In Progress", done: status === "In Progress" || status === "Resolved" },
    { label: "Resolved", done: status === "Resolved" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate("/home")}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Track Complaint</h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Complaint Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Complaint #34567</h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                status === "Resolved"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="text-sm text-gray-600 mb-3">
            Reported on: <span className="font-medium">5 Nov 2025</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Sector 45, Gurugram</span>
          </div>

          <div className="text-gray-600 text-sm">
            Garbage overflowing near main street, causing odor and obstruction.
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Progress</h2>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                {step.done ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Clock className="w-5 h-5 text-gray-400" />
                )}
                <span
                  className={`text-sm ${
                    step.done ? "text-gray-900 font-medium" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleResolve}
            disabled={status === "Resolved"}
            className={`w-full py-3 rounded-xl font-semibold text-white ${
              status === "Resolved"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 transition"
            }`}
          >
            Mark as Resolved
          </button>
          <button
            onClick={() => alert("Complaint reopened ❌")}
            className="w-full py-3 rounded-xl font-semibold border-2 border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Reopen Complaint
          </button>
        </div>
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
            <button className="flex flex-col items-center py-2 text-blue-600">
              <div className="w-6 h-6 mb-1">🔍</div>
              <span className="text-xs font-medium">Track</span>
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
