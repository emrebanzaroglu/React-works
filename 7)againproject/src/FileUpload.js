import React, {  Component } from 'react';
import {useState} from 'react'
import axios from 'axios';

export default class FileUpload extends Component {
  render() {

    
const [selectedFile, setSelectedFile] = useState(null);

const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      await axios.post('/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
    return (
      
    <div>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
    )
  }
}

  