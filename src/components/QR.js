import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QR extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 700,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
      window.location.replace(result);
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      width: '90%',
      margin:'0 auto',
      padding: '20px',
    }

    return(
      <div>
        <QrReader
          facingMode='user'
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        {/* <p>{this.state.result}</p>
        <p><a href={this.state.result}>{this.state.result}</a></p> */}
      </div>
    )
  }
}

export default QR;