import React from 'react'
import { GlobalInfo } from './Parent'
import { useContext } from 'react'
function SuperChild() {
    const {AppColor, Day} = useContext(GlobalInfo);
    const Days = "Sunday";
  return (
   <>
        <h2 style={{color:AppColor}}>Super Child</h2>
        <button onClick={() => Day(Days)}>Click Me</button>
   </>
  )
}

export default SuperChild