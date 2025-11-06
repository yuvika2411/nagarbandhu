import { ArrowLeft, Camera, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "./navigation";

export default function UploadScreen() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

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
            <h1 className="text-xl font-bold">Report an Issue</h1>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="bg-gray-100 rounded-xl h-56 flex items-center justify-center mb-4 relative overflow-hidden">
            {photo ? (
              <img src={photo} alt="Uploaded" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzEwLjUiTiA3N8KwMjQnMjAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Location Map"
                ></iframe>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <MapPin className="w-10 h-10 text-blue-600 drop-shadow-lg" />
                </div>
              </div>
            )}
          </div>

          <label className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors">
            <input
              type="file"
              accept="image/*,video/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
            <div className="bg-blue-600 rounded-full p-2">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="text-blue-900 font-semibold text-sm">
              Upload Photo/Video
            </span>
          </label>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue..."
            className="w-full h-16 p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none text-gray-700 text-sm"
          />
        </div>

        {/* Submit Button - directly below description */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors shadow-md mb-4"
        >
          Submit Complaint
        </button>

        {isSaved && (
          <div className="text-center text-gray-600 text-sm">
            Complaint saved, will auto-sync
          </div>
        )}
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
            <button className="flex flex-col items-center py-2 text-blue-600">
              <div className="w-6 h-6 mb-1">📄</div>
              <span className="text-xs font-medium">Report</span>
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
