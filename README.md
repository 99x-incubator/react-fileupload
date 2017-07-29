# @99xt/react-fileupload

[![npm (scoped)](https://img.shields.io/npm/v/@99xt/react-fileupload.svg)](https://www.npmjs.com/package/@99xt/react-fileupload)
[![license](https://img.shields.io/github/license/99xt/react-fileupload.svg)](https://github.com/99xt/react-fileupload/blob/master/LICENSE)

Simpler file upload implementation for react.js apps.

## Installation

To install this library, run:

```bash
npm install @99xt/react-fileupload --save
```

## Usage

example.component.js
```
import React, {Component} from 'react';
import FileUpload from '@99xt/react-fileupload';

class ExampleApp extends Component {
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
```

## Contributing Guide

### Setting up the development environment

Clone the repository to your workstation

```bash
git clone git@github.com:99xt/react-fileupload.git
```

Navigate to the project directory 

```bash
cd react-fileupload
```


```bash
npm install
npm run build
```

Use `npm run clean` for delete built resources.

### Run Demo app

```
npm start
```

Demo app will start on [http://localhost:3000](http://localhost:3000)

### Publish to NPM

Update the version in `package.json`;

```
npm publish
```

## License

MIT