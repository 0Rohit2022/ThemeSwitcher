import React, {useContext} from 'react'
import { GlobalInfo } from './Parent'
import SuperChild from './SuperChild';

function Child() {
    const {AppColor} = useContext(GlobalInfo);
    console.log(AppColor);
  return (
    <>
        <h2 style={{color:AppColor}}>Child Component</h2>
        <SuperChild />
    </>
  )
}

export default Child