const fetchImage = async (options) => {
  try {
    const response = await fetch(
      `https://image.pollinations.ai/prompt/${encodeURIComponent(options)}`
    );

    if (!response.ok) {
      const errorMessage = `Generating Image Failed ${response.status}`;
      throw new Error(errorMessage);
    }

    const imageBlob = await response.blob();
    const objectURL = URL.createObjectURL(imageBlob);
    return objectURL;
  } catch (error) {
    console.log(error);
  }
};

export default fetchImage;
