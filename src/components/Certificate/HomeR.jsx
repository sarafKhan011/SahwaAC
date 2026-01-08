import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeR() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    if (!token) navigate("/"); // redirect if not logged in
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl border-t-4 border-emerald-600 p-8">
        <h2 className="text-2xl font-bold text-emerald-800">Search Your Result</h2>
        <p className="text-gray-600 mt-1">Enter your exam details to view marks</p>
        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select className="input"><option>Select Exam</option></select>
            <select className="input"><option>Select Year</option></select>
          </div>
          <input className="input" placeholder="Index Number" />
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-semibold">
            Search Result
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeR;
