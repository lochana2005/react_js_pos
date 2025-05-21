import KanbanBoard from "./child/KanbanBoard";

const KanbanLayer = () => {
  return (
    <div className='overflow-x-auto scroll-sm pb-8'>
      <KanbanBoard />
    </div>
  );
};

export default KanbanLayer;
