import { useEffect, useState } from "react";

const useModels = () => {
  const [loading, setLoading] = useState({
    state: true,
    message: "",
  });
  const [error, setError] = useState("");
  const [models, setModels] = useState("");
  const fetchModel = async () => {
    try {
      setLoading({
        state: true,
        message: "Fetching models...",
      });

      const response = await fetch(`https://image.pollinations.ai/models`);

      if (!response.ok) {
        const errorMessage = `Fetching models Failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setModels(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    fetchModel();
  }, []);

  return {
    models,
    error,
    loading,
  };
};

export default useModels;
