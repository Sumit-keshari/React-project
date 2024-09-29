// import React, { memo } from 'react'

function Random() {
  let random = Math.random() * 100;
  return (
    <div>
      <h1>Random number is:{Math.round(random)}</h1>
    </div>
  );
}
export default Random;
