import DefaultBadges from "./child/DefaultBadges";
import OutlineBadges from "./child/OutlineBadges";
import SoftBadges from "./child/SoftBadges";
import DefaultBadgesTwo from "./child/DefaultBadgesTwo";
import GradientBadges from "./child/GradientBadges";
import BadgesWithButton from "./child/BadgesWithButton";
import DefaultBadgesThree from "./child/DefaultBadgesThree";
import DefaultBadgesFour from "./child/DefaultBadgesFour";
import DefaultBadgesFive from "./child/DefaultBadgesFive";
import BadgeDotsStyle from "./child/BadgeDotsStyle";

const BadgesLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultBadges */}
      <DefaultBadges />

      {/* OutlineBadges */}
      <OutlineBadges />

      {/* SoftBadges */}
      <SoftBadges />

      {/* DefaultBadgesTwo */}
      <DefaultBadgesTwo />

      {/* GradientBadges */}
      <GradientBadges />

      {/* BadgesWithButton */}
      <BadgesWithButton />

      {/* DefaultBadgesThree */}
      <DefaultBadgesThree />

      {/* DefaultBadgesFour */}
      <DefaultBadgesFour />

      {/* DefaultBadgesFive */}
      <DefaultBadgesFive />

      {/* BadgeDotsStyle */}
      <BadgeDotsStyle />
    </div>
  );
};

export default BadgesLayer;
