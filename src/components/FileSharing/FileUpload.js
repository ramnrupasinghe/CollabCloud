import React from 'react';

function FileUpload() {
  const handleFileUpload = (e) => {
    // Logic to handle file upload
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default FileUpload;
