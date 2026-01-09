import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:5000"; // <-- update if your backend URL is different

function AddResult() {
  const navigate = useNavigate();

  const emptyForm = {
    exam: "",
    year: "",
    index_no: "",
    student_name: "",
    photoFile: null, // selected file
    subject1: "",
    subject1_mark: "",
    subject2: "",
    subject2_mark: "",
    subject3: "",
    subject3_mark: "",
    total: "",
    result_status: "",
    existingPhoto: "", // for edit mode preview
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const [results, setResults] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [listError, setListError] = useState("");

  // ===== ADMIN LOGIN CHECK =====
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/");
      return;
    }
    fetchResults();
  }, [navigate]);

  const fetchResults = async () => {
    try {
      setLoadingList(true);
      const res = await axios.get(`${API_BASE}/api/results`);
      setResults(res.data);
    } catch (err) {
      setListError("Failed to load results.");
      console.error(err);
    } finally {
      setLoadingList(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setForm({ ...form, photoFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setMessage("");
    setMessageType("info");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const formData = new FormData();

      // append all fields except existingPhoto
      Object.entries(form).forEach(([key, value]) => {
        if (key === "existingPhoto") return; // skip preview

        if (key === "photoFile") {
          if (value) formData.append("photo", value); // backend expects "photo"
        } else {
          // convert number fields to numbers
          if (
            ["year", "subject1_mark", "subject2_mark", "subject3_mark", "total"].includes(key)
          ) {
            formData.append(key, value ? Number(value) : 0);
          } else {
            formData.append(key, value);
          }
        }
      });

      let res;
      if (editingId) {
        res = await axios.put(`${API_BASE}/api/results/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Result updated successfully ✅");
      } else {
        res = await axios.post(`${API_BASE}/api/results`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Result added successfully ✅");
      }

      console.log("Saved result:", res.data); // debug
      setMessageType("info");
      resetForm();
      fetchResults();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error saving result.");
      setMessageType("error");
    }
  };

  const handleRowClick = (row) => {
    setEditingId(row._id);
    setForm({
      exam: row.exam || "",
      year: row.year?.toString() || "",
      index_no: row.index_no || "",
      student_name: row.student_name || "",
      photoFile: null,
      existingPhoto: row.photo || "", // keep existing photo for preview
      subject1: row.subject1 || "",
      subject1_mark: row.subject1_mark?.toString() || "",
      subject2: row.subject2 || "",
      subject2_mark: row.subject2_mark?.toString() || "",
      subject3: row.subject3 || "",
      subject3_mark: row.subject3_mark?.toString() || "",
      total: row.total?.toString() || "",
      result_status: row.result_status || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async () => {
    if (!editingId) return;
    if (!window.confirm("Delete this record?")) return;

    try {
      await axios.delete(`${API_BASE}/api/results/${editingId}`);
      resetForm();
      fetchResults();
      setMessage("Result deleted ✅");
      setMessageType("info");
    } catch (err) {
      console.error(err);
      setMessage("Delete failed.");
      setMessageType("error");
    }
  };

  const input =
    "w-full px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border-t-4 border-emerald-600 p-8">
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-800">
            {editingId ? "Edit Result" : "Add Result"}
          </h2>
          <p className="text-gray-600">
            Admin panel – manage student examination results
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className={input} name="exam" placeholder="Exam" value={form.exam} onChange={handleChange} />
            <input className={input} name="year" placeholder="Year" value={form.year} onChange={handleChange} />
            <input className={input} name="index_no" placeholder="Index No" value={form.index_no} onChange={handleChange} />
            <input className={input} name="student_name" placeholder="Student Name" value={form.student_name} onChange={handleChange} />
            <input type="file" className={input} name="photo" onChange={handleChange} />
            {/* Photo preview */}
            {form.photoFile ? (
              <img
                src={URL.createObjectURL(form.photoFile)}
                alt="preview"
                className="w-24 h-24 object-cover rounded-full mt-2"
              />
            ) : form.existingPhoto ? (
              <img
                src={`${API_BASE}${form.existingPhoto}`}
                alt="existing"
                className="w-24 h-24 object-cover rounded-full mt-2"
              />
            ) : null}
          </div>

          {/* SUBJECTS */}
          <h3 className="font-semibold text-emerald-700">Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className={input} name="subject1" placeholder="Subject 1" value={form.subject1} onChange={handleChange} />
            <input className={input} name="subject1_mark" placeholder="Mark" value={form.subject1_mark} onChange={handleChange} />
            <input className={input} name="subject2" placeholder="Subject 2" value={form.subject2} onChange={handleChange} />
            <input className={input} name="subject2_mark" placeholder="Mark" value={form.subject2_mark} onChange={handleChange} />
            <input className={input} name="subject3" placeholder="Subject 3" value={form.subject3} onChange={handleChange} />
            <input className={input} name="subject3_mark" placeholder="Mark" value={form.subject3_mark} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className={input} name="total" placeholder="Total Marks" value={form.total} onChange={handleChange} />
            <input className={input} name="result_status" placeholder="PASS / FAIL" value={form.result_status} onChange={handleChange} />
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-semibold">
              {editingId ? "Update" : "Save"}
            </button>

            {editingId && (
              <>
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-emerald-300 text-emerald-700 px-6 py-2 rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                >
                  Delete
                </button>
              </>
            )}
          </div>

          {message && (
            <div
              className={`mt-4 p-3 rounded-lg ${
                messageType === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {message}
            </div>
          )}
        </form>

        {/* TABLE */}
        <div className="mt-10">
          <h3 className="font-semibold text-emerald-800 mb-3">
            Student Records
          </h3>

          {loadingList ? (
            <p className="text-gray-500">Loading...</p>
          ) : listError ? (
            <p className="text-red-500">{listError}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-emerald-200 rounded-lg">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2">Year</th>
                    <th className="p-2">Exam</th>
                    <th className="p-2">Index</th>
                    <th className="p-2">Total</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr
                      key={r._id}
                      onClick={() => handleRowClick(r)}
                      className="cursor-pointer hover:bg-emerald-50 border-b"
                    >
                      <td className="p-2">{r.student_name}</td>
                      <td className="p-2 text-center">{r.year}</td>
                      <td className="p-2 text-center">{r.exam}</td>
                      <td className="p-2 text-center">{r.index_no}</td>
                      <td className="p-2 text-center">{r.total}</td>
                      <td className="p-2 text-center font-semibold">{r.result_status}</td>
                      <td className="p-2 text-center">
                        {r.photo && (
                          <img
                            src={`${API_BASE}${r.photo}`}
                            alt={r.student_name}
                            className="w-12 h-12 object-cover rounded-full mx-auto"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddResult;
