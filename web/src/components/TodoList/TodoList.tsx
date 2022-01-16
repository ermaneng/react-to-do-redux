import { useEffect, useState } from "react";
import { getTodos } from "../../services/Todos.service";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListItemData } from "../TodoListItem/TodoListItemData.interface";
import UpdatedTodoListItem from "../UpdatedTodoListItem/UpdatedTodoListItem";

const TodoList = () => {

    const [todoList,setTodoList] = useState<TodoListItemData[]>([])

    useEffect(()=>{
        getTodos().then((data:TodoListItemData[]) => setTodoList(data));
    },[])

    const itemCompleted = (item:TodoListItemData)=>{
        console.info(item);
        
    }

    return (
        <>
        <UpdatedTodoListItem />
        {todoList.map((todo:TodoListItemData)=>(
         <TodoListItem key={todo.id} data={todo} complete={(item:TodoListItemData)=>itemCompleted(item)} />
        ))}
        </>
    )

}

export default TodoList;