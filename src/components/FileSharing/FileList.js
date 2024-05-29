import React from 'react';
import FileItem from './FileItem';

function FileList({ files }) {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <FileItem key={index} file={file} />
      ))}
    </div>
  );
}

export default FileList;
