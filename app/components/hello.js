import React from 'react'
import './hello.less'

class Hello extends React.Component {
  render() {
    return (
      <div className = "hello-component"> 
        Hello world, React and Webpack!
      </div>
    );
  }
}

export default Hello;
