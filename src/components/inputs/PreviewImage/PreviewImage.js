import React, { useState } from 'react';

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();

  reader.onload = () => {
    setPreview(reader.result);
  };

  // Handle potential errors during file reading
  reader.onerror = (error) => {
    console.error('Error reading the file:', error);
  };

  reader.readAsDataURL(file);

  return (
    <div>
      {preview ? (
        <img src={preview} alt='preview' width='200px' height='200px' />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PreviewImage;
