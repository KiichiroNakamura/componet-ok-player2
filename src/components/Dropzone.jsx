import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const style = {
  width: 200,
  height: 100,
  border: "1px dotted #888",
  margin: 0
};
export const Dropzone = () => {
  const [fileList, setFileList] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("acceptedFiles:", acceptedFiles);
    const newList = acceptedFiles;
    console.log(newList);
    setFileList(newList);
    console.log(fileList);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag or Click to select files</p>
        )}
      </div>
      <Sdiv>
        <ul>
          {fileList.map((fileName) => (
            <li key={fileName.name}>{fileName.name}</li>
          ))}
        </ul>
      </Sdiv>
    </>
  );
};
const Sdiv = styled.div({
  backgroundColor: "#dddddd"
});
