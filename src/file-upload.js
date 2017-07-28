import React, {Component} from 'react';
import classnames from 'classnames';

import './file-upload.css';

export default class extends Component {
  constructor(props) {
    super(props);
    const { allowedTypes, allowedSize, multiple } = props;

    this.state = {
      status: 'ready',
      allowedTypes: (allowedTypes && Array.isArray(allowedTypes)) ? allowedTypes : [],
      allowedSize: (allowedSize) ? allowedSize : null,
      multiple: (multiple) ? multiple : false
    };
  }

  reset() {
    this.setState({
      status: 'ready'
    });
  }

  onDragEnter(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      status: evt.type
    });
  }

  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      status: evt.type
    });
  }

  onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      status: evt.type
    });

    // Fetch files
      const files = evt.dataTransfer.files;
      this.uploadFiles(files);
  }

  onClickFileInput(evt) {
    this.fileUploadInput.value = null;
  }

  onSelectFiles(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      status: evt.type
    });

    // Fetch files
      const files = evt.target.files;
      this.uploadFiles(files);
  }

  clickFileInput() {
    this.fileUploadInput.click();
  }

  uploadFiles(files) {
      let error = false;
      const errorMessages = [];

      const data = {
        error: null,
        files: files
      };

      const allowedTypes = this.state.allowedTypes;
      const allowedSize = this.state.allowedSize;

      if (files && files.length > 0) {
        for (let i=0; i<files.length; i++) {
          const file = files[i];

          // Validate file type
          if (allowedTypes && allowedTypes.length > 0) {
            if (!allowedTypes.includes(file.type)) {
              error = true;
              errorMessages.push('Invalid file type(s)');
            }
          }

          // Validate fileSize
          if (allowedSize && allowedSize > 0) {
            if ((file.size) / 1048576 > allowedSize) {
              error = true;
              errorMessages.push('Invalid file size(s)');
            }
          }
        }
      }

      if (error) {
        data.error = errorMessages;
        data.files = null;
      }

      const { onUploadFiles } = this.props;
      onUploadFiles(data);

      this.reset();
  }

  render() {
    return (
      <div className="rfup-container" onClick={this.clickFileInput.bind(this)}>
        <div
          className={ classnames('rfup-dropzone', `rfup-${this.state.status}`) }
          onDragEnter={ this.onDragEnter.bind(this) }
          onDragOver={ this.onDragOver.bind(this) }
          onDrop={ this.onDrop.bind(this) }
        >
          <input
            ref={ fpi => this.fileUploadInput = fpi }
                type="file"
                className="rfup-file-input"
                onClick={ this.onClickFileInput.bind(this) }
                onChange={ this.onSelectFiles.bind(this) }
                multiple={ this.state.multiple }
          />
        </div>
      </div>
    );
  }
}
