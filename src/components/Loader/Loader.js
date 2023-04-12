import React from 'react';
import ReactLoading from 'react-loading';
import { BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from 'react-spinners';
import './loader.css'

function Loader() {
  return (
    <div className='loader'>
      {/* <ReactLoading type={'rings'} color={'blue'} height={100} width={100} /> */}
      <ClimbingBoxLoader />
    </div>
  );
}

export default Loader;
