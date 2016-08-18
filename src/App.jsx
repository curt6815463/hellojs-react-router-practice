import React from 'react'
import {Link} from 'react-router'

require('vendor/vendor.scss');

export class App extends React.Component {
  render() {
    return (
      <div>
        React Example
        <div>
          <Link to='/counter'>counter page</Link>
          <Link to='/about/curt'>about</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
