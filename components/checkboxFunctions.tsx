
export type GetChildProps = {
    id: number;
    name: string;
    childPid?: number;
    data?: GetChildProps[]
}

// take care of returning the selected item and all child
export const getAllChildren = (target: number, data: GetChildProps[]) => {
    let items;
    items = data;
    items.forEach((item => {
        if(item.id === target) {
            items = item;
        }else if(item.data && item.id !== target) {
            getAllChildren(target, item.data);
        } else {
            return 'Not Founded';
        }
    }))

    return items ? items : []
}

// function to add status to all data.
// const addingStatus = (data: GetChildProps[]) => {
//     data.map((item) => {

//     })
// }

