import { useState } from "react";
import Column from "./Column";
import AddEditTaskModal from "./AddEditTaskModal";
import { DragDropContext } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

const initialData = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "In Progress",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Pending",
      taskIds: ["task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-5", "task-6", "task-7"],
    },
  },
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: "assets/images/kanban/kanban-1.png",
    },
    "task-2": {
      id: "task-2",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: "assets/images/kanban/kanban-2.png",
    },
    "task-3": {
      id: "task-3",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: null,
    },
    "task-4": {
      id: "task-4",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: "assets/images/kanban/kanban-2.png",
    },
    "task-5": {
      id: "task-5",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: null,
    },
    "task-6": {
      id: "task-6",
      title: "Creating a new website",
      description: "Lorem ipsum dolor sit amet, consectetur ",
      tag: "UI Design",
      date: "2024-08-25",
      image: null,
    },
    "task-7": {
      id: "task-7",
      title: "Creating a new website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      tag: "UI Design",
      date: "2024-08-25",
      image: "assets/images/kanban/kanban-2.png",
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentColumn, setCurrentColumn] = useState(null);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If no destination, do nothing
    if (!destination) {
      return;
    }

    // If dropped in the same place, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];

    // Moving within the same column
    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving to a different column
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...endColumn,
      taskIds: endTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    });
  };

  const handleAddTask = (columnId) => {
    setCurrentTask(null);
    setCurrentColumn(columnId);
    setShowModal(true);
  };

  const handleEditTask = (taskId, columnId) => {
    const task = data.tasks[taskId];
    setCurrentTask({ ...task, columnId });
    setCurrentColumn(columnId);
    setShowModal(true);
  };

  const handleDeleteTask = (taskId, columnId) => {
    const column = data.columns[columnId];
    const newTaskIds = column.taskIds.filter((id) => id !== taskId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newTasks = { ...data.tasks };
    delete newTasks[taskId];

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
      tasks: newTasks,
    });
  };

  const handleDuplicateTask = (taskId, columnId) => {
    const task = data.tasks[taskId];
    const newId = uuidv4();
    const duplicatedTask = { ...task, id: newId };
    const newTasks = {
      ...data.tasks,
      [newId]: duplicatedTask,
    };
    const column = data.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(0, 0, newId); // Add to the top
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
      tasks: newTasks,
    });
  };

  // If implementing column duplication
  const handleDuplicateColumn = (columnId) => {
    const column = data.columns[columnId];
    const newColumnId = uuidv4();
    const newTaskIds = [...column.taskIds]; // Duplicate task assignments as-is

    const newColumn = {
      ...column,
      id: newColumnId,
      title: `${column.title} (Copy)`,
      taskIds: newTaskIds,
    };

    setData((prevData) => ({
      ...prevData,
      columns: {
        ...prevData.columns,
        [newColumnId]: newColumn,
      },
      columnOrder: [...prevData.columnOrder, newColumnId],
    }));
  };

  const handleSaveTask = (task, isEdit) => {
    if (isEdit) {
      // Update existing task
      const updatedTasks = {
        ...data.tasks,
        [task.id]: task,
      };
      setData({
        ...data,
        tasks: updatedTasks,
      });
    } else {
      // Add new task
      const newId = uuidv4();
      const newTask = { ...task, id: newId };
      const newTasks = {
        ...data.tasks,
        [newId]: newTask,
      };
      const column = data.columns[currentColumn];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.push(newId);
      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
        tasks: newTasks,
      });
    }
    setShowModal(false);
  };

  return (
    <div className='kanban-wrapper p-4'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          className='d-flex align-items-start gap-4'
          style={{ overflowX: "auto" }}
        >
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onDuplicateTask={handleDuplicateTask}
                onDuplicateColumn={handleDuplicateColumn} // Pass the handler if implementing
              />
            );
          })}
        </div>
      </DragDropContext>

      {/* Add/Edit Task Modal */}
      <AddEditTaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveTask}
        task={currentTask}
      />
    </div>
  );
};

export default KanbanBoard;
