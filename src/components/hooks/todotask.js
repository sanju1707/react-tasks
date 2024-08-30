

const taskCreateTodoList=()=>{
    const arr=[]
    for(let i=1;i<=100;i++){
        const myobject={
            id:i,
            item:`item ${i}`
        }
        arr.push(myobject)
    }
    return arr;
}
export default taskCreateTodoList;