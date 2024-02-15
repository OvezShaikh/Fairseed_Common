import React, { useState, useRef } from "react";
import Cropper from "react-cropper";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const ImageCropper = () => {
  // State to manage the selected image
  const [image, setImage] = useState(defaultSrc);
  // State to store cropped data
  const [cropData, setCropData] = useState("#");
  // Ref for accessing Cropper instance
  const cropperRef = useRef(null);

  // Function to handle image selection from input file
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      // Set the selected image in the state
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  // Function to get cropped data from the Cropper instance
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      // Set the cropped data in the state
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        {/* Input for selecting an image */}
        <input type="file" onChange={onChange} />
        {/* Button to use default image */}
        <button>Use default img</button>
        <br />
        <br />
        {/* Cropper component for image cropping */}
        <Cropper
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          ref={cropperRef}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          checkOrientation={false}
        />
      </div>
      <div>
        {/* Preview box for the cropped image */}
        <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div>
        {/* Box for displaying the cropped image */}
        <div
          className="box"
          style={{ width: "50%", float: "right", height: "300px" }}
        >
          <h1>
            <span>Crop</span>
            {/* Button to trigger cropping and update state */}
            <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          {/* Display the cropped image */}
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </div>
      </div>
      {/* Clear float */}
      <br style={{ clear: "both" }} />
    </div>
  );
};

export default ImageCropper;