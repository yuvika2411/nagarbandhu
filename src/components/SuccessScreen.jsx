import { CheckCircle } from "lucide-react";
import { useNavigate } from "./navigation";
import { useEffect } from "react";

export default function SuccessScreen() {
  const navigate = useNavigate();

  // ✅ Run only once
  useEffect(() => {
    const timer = setTimeout(() => navigate("home"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted</h1>
      <p className="text-gray-500 text-sm">Your complaint will auto-sync soon.</p>
    </div>
  );
}
