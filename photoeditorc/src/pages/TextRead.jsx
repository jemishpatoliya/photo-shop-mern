import React, { useState } from "react";
import axios from "axios";

const TextRead = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("/api/text-read", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setExtractedText(response.data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  return (
    <div>
      <h2>Upload Image for Text Extraction</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Extract Text</button>
      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextRead;
