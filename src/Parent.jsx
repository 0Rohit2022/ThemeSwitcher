import React from 'react'
import Child from './Child'
import { createContext } from 'react'
import { useState } from 'react';

import OtherChild from "./OtherChild";
export const GlobalInfo = createContext();

function Parent() {
    const [color,setColor] = useState('red');
    const getDay = (item) => {
        console.log(item);
        SetWeekDay(item);
    }
    const [WeekDay , SetWeekDay] = useState("Monday");
  return (
    <>
      <GlobalInfo.Provider value={{ AppColor: color , Day : getDay}}>
        <h2>Parent Component {WeekDay}</h2>
        <Child />
        <OtherChild />
      </GlobalInfo.Provider>
    </>
  );
}

export default Parent