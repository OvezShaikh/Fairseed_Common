import React, { useState } from 'react'

const PreviewImage = ({ file }) => {
    const [preview , serPreview] = useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () =>{
        serPreview(reader.result)
    }
  return (
    <div>
            {preview ? (
                <img src={preview } alt='preview' width='200px' height='200px'/>
            ) : (
                "loading...."
            )}
    </div>
  )
}

export default PreviewImage
