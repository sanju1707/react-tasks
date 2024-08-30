


const createTodoList=()=>{
    const arr=[]
    for(let i=1;i<=10;i++){
        const myobject={
            id:i,
            item:`item ${i}`
        }
        arr.push(myobject)
    }
    return arr
}
export default createTodoList;