import React, {Component} from 'react'
import {render} from 'react-dom'

import FileUpload from '../../src'
import "./index.css";

class Demo extends Component {

  onUploadFiles(evt) {
    if (evt.error) {
        throw evt.error;
    }

    const files = evt.files;
    // You can run upload script here
    console.log(files);
  }

  render() {
    const allowedTypes = [];
    const allowedSize = 15; // MB
    const multiple = true;

    return (
      <div>
        <h1>react-fileupload Demo</h1>

        <h3>with Default UI</h3>
        <FileUpload
          allowedTypes={ allowedTypes }
          allowedSize={ allowedSize }
          multiple={ multiple }
          onUploadFiles={ this.onUploadFiles }
        / >

        <div style={{margin: '35px 0'}} />

        <h3>with a Custom UI</h3>
        <FileUpload
          allowedTypes={ allowedTypes }
          allowedSize={ allowedSize }
          multiple={ multiple }
          onUploadFiles={ this.onUploadFiles }
          renderUI={({status}) => {
            return (
              <div style={{ border: '2px dashed #ccc', padding: '50px' }}>
                <p>Click or drag n' drop your file(s) here.</p>
                <p>Drag n' drop status: {status}</p>
              </div>
            )
          }}
        / >
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
