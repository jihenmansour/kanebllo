import { Droppable } from "react-beautiful-dnd";
import { columnInterface } from "../types";
import Card from "./Card";
import { cn } from "../utils/cn";
import Dropdown from "./Dropdown";

const Column = ({ column, cards }: columnInterface) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className={cn("p-8 text-white rounded-xl flex relative justify-between", column.color)}>
        <h1 className="text-xl font-semibold">{column.title}</h1>
        <Dropdown/>
      </div>
      
      <Droppable key={column.id} droppableId={column.id}>
        {(provided) => (
          <div 
          className="flex flex-col gap-2"
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
