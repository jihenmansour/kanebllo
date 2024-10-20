import { EllipsisVertical } from "lucide-react";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { boardInterface } from "../types";
import Card from "./Card";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const initialData: boardInterface = {
  cards: {
    "task-1": { id: "task-1", content: "Clean my room" },
    "task-2": { id: "task-2", content: "Buy groceries" },
    "task-3": { id: "task-3", content: "Prepare dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      cardIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "To Do",
      cardIds: ["task-1", "task-3"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

const Board = () => {
  const [items, setItems] = useState<boardInterface>(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = items.columns[source.droppableId];
    const newTaskIds = Array.from(column.cardIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...items,
      columns: {
        ...items.columns,
        [newColumn.id]: newColumn,
      },
    };

    setItems(newState);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 mt-14">
      <DragDropContext onDragEnd={onDragEnd}>
      {items.columnOrder.map((item) => {
        const column = items.columns[item];
        const cards = column.cardIds.map((id)=> items.cards[id])
        return <Column column={column} cards={cards}/>
      })}
          </DragDropContext>
    </div>
  );
};

export default Board;
