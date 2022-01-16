import { TodoListItemData } from "./TodoListItemData.interface";

export interface TodoListItemProps{
    data: TodoListItemData;
    complete(item:TodoListItemData):void;
}