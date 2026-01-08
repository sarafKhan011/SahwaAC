import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validAdmin = { username: "admin", password: "admin123" };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) navigate("/add");
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validAdmin.username && password === validAdmin.password) {
      localStorage.setItem("adminToken", "loggedin");
      navigate("/add");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border-t-4 border-emerald-600 p-8">
        <h2 className="text-2xl font-bold text-emerald-800 text-center">Admin Login</h2>
        <p className="text-gray-500 text-center mb-4">Only authorised staff can add or modify results</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-3 py-2 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg border border-emerald-100 focus:ring-2 focus:ring-emerald-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700">
              Login
            </button>
            <button type="button" onClick={handleReset} className="flex-1 border border-emerald-300 text-emerald-700 py-2 rounded-full hover:bg-emerald-50">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdLogin;
