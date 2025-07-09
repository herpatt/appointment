import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      if (form.username === 'admin' && form.password === 'admin') {
        navigate("/dashboard");
      } else {
        setErrorMessage("Login Failed");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Error occured at Login.");
    }
  };

  return (
      <div className="max-h-screen flex items-center justify-center px-4 pb-36">
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-lg w-full max-w-md backdrop-blur-md drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] bg-white"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center font-bold text-[#022366]">
            Login
          </h2>

          {errorMessage && (
            <div className="text-red-400 text-sm text-center mb-4">
              {errorMessage}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm  mb-1 text-[#022366]">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-[#022366] mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
  );
};

export default LoginPage;
