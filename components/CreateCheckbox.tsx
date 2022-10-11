import React, { ReactHTML } from 'react';
import { GetChildProps } from './checkboxFunctions';
import { getAllChildren } from './checkboxFunctions';


const CreateCheckbox = ({data}: {data: GetChildProps[]}) => {

    const handlecheck = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        const selected = getAllChildren(Number(id), data);

        console.log(selected)
    }

    return (
        <div>
            {data.map((item => (
                <ul key={item.id}>
                    <li onClick={(e) => handlecheck(e, item.id)}>
                        <input type="checkbox" id={item.name} data-itemid={item.id} />
                        {item.name}
                        {Array.isArray(item.data) && <CreateCheckbox data={item.data} />}
                    </li>
                </ul>
            )))}
        </div>
    )
}

export default CreateCheckbox;