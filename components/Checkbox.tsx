import React from 'react'
import { data } from './data'
import { getAllChildren } from './checkboxFunctions'
import CreateCheckbox from './CreateCheckbox'

const Checkbox = () => {
    // console.log(getAllChildren(1, data));
  return (
    <div>
        <CreateCheckbox data={data} />
    </div>
  )
}

export default Checkbox