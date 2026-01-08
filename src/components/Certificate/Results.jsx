import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  // ===== STUDENT LOGIN CHECK =====
  useEffect(() => {
    const loggedIn = localStorage.getItem("studentLoggedIn");
    if (loggedIn !== "true") {
      navigate("/"); // StudentLogin page
    }
  }, [navigate]);
  // ================================

  if (!result) {
    return (
      <div className="page-center">
        <div className="sheet empty-card">
          <p>No result data. Please search again.</p>
          <button className="btn-back" onClick={() => navigate("/search")}>
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  // photo file name -> /photos/<name> ; empty na default image
  const photoSrc = result.photo_url
    ? `/photos/${result.photo_url}` // e.g. /photos/com1221.jpg
    : "/student-placeholder.png"; // keep this file in public/

  const statusClass =
    result.result_status?.toLowerCase() === "pass"
      ? "status-pass"
      : "status-fail";

  return (
    <div className="min-h-screen bg-emerald-50 py-10">
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border-t-4 border-emerald-600 p-8">
      <h1 className="text-3xl font-bold text-center text-emerald-800">
        Sahwa Arabic College
      </h1>
      <p className="text-center text-gray-600">
        Official Examination Result
      </p>
  
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Student:</span> Ahmed Ali
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Index:</span> AC1234
          </p>
        </div>
  
        <div className="bg-emerald-100 rounded-xl p-4 text-center">
          <p className="text-sm text-emerald-700">Total Marks</p>
          <p className="text-3xl font-bold text-emerald-800">275</p>
          <span className="inline-block mt-2 px-4 py-1 rounded-full bg-emerald-600 text-white text-sm">
            PASS
          </span>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Results;