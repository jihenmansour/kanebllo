import { useState } from "react";
import { boardInterface } from "../types";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const initialData: boardInterface = {
  cards: {
    "task-1": { id: "task-1", content: "Clean my room" },
    "task-2": { id: "task-2", content: "Buy groceries" },
    "task-3": { id: "task-3", content: "Prepare dinner" },
    "task-4": { id: "task-4", content: "Do the dishes" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      color: "bg-yellow-400",
      cardIds: ["task-1", "task-3", "task-2", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      color: "bg-purple-400",
      cardIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      color: "bg-emerald-400",
      cardIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
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

    console.log(newTaskIds)
    const newColumn = {
      ...column,
      cardIds: newTaskIds,
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
        {items.columnOrder.map((item, index) => {
          const column = items.columns[item];
          const cards = column.cardIds.map((id) => items.cards[id]);
          return <Column column={column} cards={cards} key={index} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default Board;
