import React, {Component} from 'react'
import {render} from 'react-dom'

import FileUpload from '../../src'

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

        <FileUpload
          allowedTypes={ allowedTypes }
          allowedSize={ allowedSize }
          multiple={ multiple }
          onUploadFiles={ this.onUploadFiles }
        >
        </FileUpload>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
