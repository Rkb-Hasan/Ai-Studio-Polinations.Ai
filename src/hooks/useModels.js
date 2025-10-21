import { useEffect, useState } from "react";

const useModels = () => {
  const [modelLoading, setModelLoading] = useState({
    state: true,
    message: "",
  });
  const [error, setError] = useState("");
  const [models, setModels] = useState("");
  const fetchModel = async () => {
    try {
      setModelLoading({
        state: true,
        message: "Fetching models...",
      });

      const response = await fetch(`https://image.pollinations.ai/models`, {
        signal: AbortSignal.timeout(20000),
      });

      if (!response.ok) {
        const errorMessage = `Fetching models Failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setModelLoading({
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const models = await fetchModel();
      if (!ignore) {
        console.log("setting");
        setModels(models);
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    models,
    error,
    modelLoading,
  };
};

export default useModels;
