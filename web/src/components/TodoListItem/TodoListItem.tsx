import { TodoListItemProps } from "./TodoListItemProps.interface";

import './TodoListItem.scss';
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions } from "../../slicers/UpdatedSlice";



const TodoListItem = (props:TodoListItemProps) => {

    const [checked,setChecked] = useState(props.data.completed);
    const dispatch = useAppDispatch();

    const handleChange = (e:ChangeEvent) => {
        setChecked(!checked);
        props.complete({...props.data, completed: !checked});
        dispatch(actions.update({...props.data, completed: !checked}));
    }



    return (
        <div className="TodoListItem">
            <input type="checkbox" checked={checked} onChange={(e:ChangeEvent)=>handleChange(e)} />
            <div>{props.data.title}</div>
        </div>
    )
}

export default TodoListItem;