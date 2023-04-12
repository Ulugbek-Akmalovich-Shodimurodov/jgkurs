import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import './loader.css'

function Loader() {
  return (
    <div className='loader'>
      <ClimbingBoxLoader />
      <h3>LOADING</h3>
    </div>
  );
}

export default Loader;
