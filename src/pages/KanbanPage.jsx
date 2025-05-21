import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import KanbanLayer from "../components/KanbanLayer";

const KanbanPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Kanban' />

        {/* KanbanLayer */}
        <KanbanLayer />
      </MasterLayout>
    </>
  );
};

export default KanbanPage;
