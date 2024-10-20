import { Droppable } from "react-beautiful-dnd";
import { columnInterface } from "../types";
import Card from "./Card";

const Column = ({ column, cards }: columnInterface) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="p-8 bg-yellow-400 text-white rounded-xl">
        <h1 className="text-xl font-semibold">{column.title}</h1>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div 
          {...provided.droppableProps} 
          ref={provided.innerRef} >
            {cards.map((item, index) => (
              <Card key={item.id} task={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
