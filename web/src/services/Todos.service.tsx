import { TodoListItemData } from "../components/TodoListItem/TodoListItemData.interface";

export const getTodos = ():Promise<TodoListItemData[]>=>{

    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then((data:TodoListItemData[]) => resolve(data))
        .catch((err:Error) => reject(err))
    })
}