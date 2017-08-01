// @flow

import React from 'react';
import ReactDom from 'react-dom';


class Hello extends React.Component {
  render() {
    return <div>Hello World</div>
  }
}

ReactDom.render(<Hello />, document.getElementById('app'));
