import React from 'react'
import { data } from './data'
import { getAllChildren, addingStatus } from './checkboxFunctions'
import CreateCheckbox from './CreateCheckbox'

const Checkbox = () => {

    
    // console.log(getAllChildren(1, data));
    // console.log(data);
    // addingStatus(data);
    // console.log(data);
  return (
    <div>
        <CreateCheckbox data={data} />
    </div>
  )
}

export default Checkbox