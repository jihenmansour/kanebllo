import { cardInterface } from "../types";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ index, task }: cardInterface) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}>
        <div className="p-8 bg-white shadow-md rounded-xl">
          <h1>{task.content}</h1>
        </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
