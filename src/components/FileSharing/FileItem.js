import React from 'react';

function FileItem({ file }) {
  return (
    <div className="file-item">
      <span>{file.name}</span>
      <button onClick={() => handleFileDownload(file)}>Download</button>
    </div>
  );
}

export default FileItem;
