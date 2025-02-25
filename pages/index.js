import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    try {
      const res = await axios.get("https://cai-backend.onrender.com/");
      setResponse(res.data);
    } catch (error) {
      setResponse("Error contacting CAI Backend");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Welcome to CAI</h1>
      <button
        onClick={fetchResponse}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Contact Backend
      </button>
      <p className="mt-4">{response}</p>
    </div>
  );
}
