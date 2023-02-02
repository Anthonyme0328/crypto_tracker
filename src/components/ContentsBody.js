import React from "react";
import '../App.css'
import {FaTwitter} from 'react-icons/fa'

function ContentsBody({ name, icon, price, symbol, url, twitt }) {


  return (
    <div className="coin">
      <h1> Name: {name}</h1>
      <img title="Link To Website" src={icon} onClick={()=> window.open(url, '_blank')} />
      <h3> Price: ${price}</h3>
      <h3> Symbol: {symbol}</h3>
      <button title="Link To Website" onClick={()=> window.open(url, '_blank')}> More Info</button>
      <FaTwitter title="Link To Twitter" style={{marginLeft: '2em', color: 'lightblue', height: '2em', width: '2em'}} onClick={()=> {window.open(twitt, '_blank')}}/>
    </div>
  );
}

export default ContentsBody;