import DefaultCard from "./child/DefaultCard";
import CardTextIcon from "./child/CardTextIcon";
import CardWithImageOverlays from "./child/CardWithImageOverlays";
import CardHeaderFooter from "./child/CardHeaderFooter";
import HorizontalCard from "./child/HorizontalCard";
import CardWithBackgroundColor from "./child/CardWithBackgroundColor";

const CardLayer = () => {
  return (
    <>
      {/* DefaultCard */}
      <DefaultCard />

      {/* CardTextIcon */}
      <CardTextIcon />

      {/* CardWithImageOverlays */}
      <CardWithImageOverlays />

      {/* CardHeaderFooter */}
      <CardHeaderFooter />

      {/* HorizontalCard */}
      <HorizontalCard />

      {/* CardWithBackgroundColor */}
      <CardWithBackgroundColor />
    </>
  );
};

export default CardLayer;
