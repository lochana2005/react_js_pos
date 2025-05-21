import DefaultList from "./child/DefaultList";
import ActiveList from "./child/ActiveList";
import ActiveListTwo from "./child/ActiveListTwo";
import ListIconsLabel from "./child/ListIconsLabel";
import ColoredLists from "./child/ColoredLists";
import ListIconsLabelTwo from "./child/ListIconsLabelTwo";

const ListLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultList */}
      <DefaultList />

      {/* ActiveList */}
      <ActiveList />

      {/* ActiveListTwo */}
      <ActiveListTwo />

      {/* ListIconsLabel */}
      <ListIconsLabel />

      {/* ColoredLists */}
      <ColoredLists />

      {/* ListIconsLabelTwo */}
      <ListIconsLabelTwo />
    </div>
  );
};

export default ListLayer;
