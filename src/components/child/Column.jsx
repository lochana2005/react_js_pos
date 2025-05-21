import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import { Icon } from "@iconify/react/dist/iconify.js";

const Column = ({
  column,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onDuplicateTask,
}) => {
  return (
    <div className='w-33 kanban-item radius-12 bg-light'>
      <div className='card p-0 radius-12 overflow-hidden shadow-none'>
        <div className='card-body p-3 pb-3'>
          <div className='d-flex align-items-center justify-content-between px-3 py-2'>
            <h6 className='text-lg fw-semibold mb-0'>{column.title}</h6>
            <div className='d-flex align-items-center gap-2'>
              <button
                type='button'
                className=' hover-text-primary add-task-button bg-transparent border-0'
                onClick={() => onAddTask(column.id)}
              >
                <Icon icon='ph:plus-circle' className='icon text-2xl'></Icon>
              </button>
            </div>
          </div>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                className='connectedSortable ps-3 pt-3 pe-3'
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: snapshot.isDraggingOver ? "#e3f2fd" : "inherit",
                  minHeight: "100px",
                }}
              >
                {tasks.map((task, index) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    index={index}
                    onEdit={() => onEditTask(task.id, column.id)}
                    onDelete={() => onDeleteTask(task.id, column.id)}
                    onDuplicate={() => onDuplicateTask(task.id, column.id)}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* Add Task Button */}
          <button
            type='button'
            className='d-flex align-items-center gap-2 fw-medium w-100 text-primary-600 justify-content-center text-hover-primary-800 mt-2'
            onClick={() => onAddTask(column.id)}
          >
            <Icon icon='ph:plus-circle' className='icon text-xl'></Icon>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Column;
