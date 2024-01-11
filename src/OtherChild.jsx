import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from './Parent'
function OtherChild() {
  const { AppColor } = useContext(GlobalInfo);
  return (
    <>
      <h2 style={{ color: AppColor }}>Super Child</h2>
    </>
  );
}


export default OtherChild