import React, { useEffect, useState } from 'react';
import { GetChildProps } from './checkboxFunctions';
import { getAllChildren, addingStatus } from './checkboxFunctions';


const CreateCheckbox = ({data}: {data: GetChildProps[]}) => {

    const [finalData, setFinalData] = useState<GetChildProps[]>();

    const handlecheck = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        const dataWithStatus = addingStatus(data);
        const selected: GetChildProps[] = getAllChildren(Number(id), dataWithStatus);
        selected.status = true;
        const checkData = finalData?.map(item => {
            if(item.id === selected.id) {
                item.status = !item.status
            }
        })
        // setFinalData(checkData)
        console.log(checkData)
    }

    useEffect(() => {

        const dataWithStatus = addingStatus(data);
        setFinalData(dataWithStatus);
      
    }, [data])

    return (
        <div>
            {finalData?.map((item => (
                <ul key={item.id}>
                    <li onClick={(e) => handlecheck(e, item.id)}>
                        <input type="checkbox" id={item.name} data-itemid={item.id} checked={item.status} />
                        {item.name}
                        {Array.isArray(item.data) && <CreateCheckbox data={item.data} />}
                    </li>
                </ul>
            )))}
        </div>
    )
}

export default CreateCheckbox;