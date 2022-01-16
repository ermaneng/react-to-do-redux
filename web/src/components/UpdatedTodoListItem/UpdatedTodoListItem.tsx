import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import './UpdatedTodoListItem.scss';

const UpdatedTodoListItem = () => {

    const updated:any = useAppSelector((state:RootState) => state.updated.value);

    return(
        <>
        {updated && updated.completed && (
            <div className="UpdatedTodoListItem">
                Last Completed: {updated.title}
            </div>
        )
        }
        
        </>
        
    )

}

export default UpdatedTodoListItem;