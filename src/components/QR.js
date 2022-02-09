import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'

function QR() {
  const [result, setResult] = useState('No result');
  
  function handleScan(data) {
    if (data) {
      setResult(data.text)

      console.log("data2: " + console.dir(data));
      console.log("data3: " + console.dir(data.text));
    }
  }
  function handleError(err) {
    console.error(err)
  }
  return (
    <div>
    <QrReader
      facingmode='environment'
      delay={300}
      onError={(err) => handleError(err)}
      onScan={(data) => handleScan(data)}
      style={{ width: '20%'}}
      style={{ border: 'solid 3px black'}}
    />
    <p><a href={result}>{result}</a></p>
    </div>
  );
}

export default QR;