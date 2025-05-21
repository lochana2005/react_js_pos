import DefaultProgress from "./child/DefaultProgress";
import ProgressWithMultipleColor from "./child/ProgressWithMultipleColor";
import ProgressWithRightLabel from "./child/ProgressWithRightLabel";
import StripedProgress from "./child/StripedProgress";
import AnimatedProgress from "./child/AnimatedProgress";
import GradientProgress from "./child/GradientProgress";
import GradientProgressTwo from "./child/GradientProgressTwo";
import GradientProgressThree from "./child/GradientProgressThree";
import ProgressCircle from "./child/ProgressCircle";

const ProgressLayer = () => {
  return (
    <div className='row gy-4'>
      {/* DefaultProgress */}
      <DefaultProgress />

      {/* ProgressWithMultipleColor */}
      <ProgressWithMultipleColor />

      {/* ProgressWithRightLabel */}
      <ProgressWithRightLabel />

      {/* StripedProgress */}
      <StripedProgress />

      {/* AnimatedProgress */}
      <AnimatedProgress />

      {/* GradientProgress */}
      <GradientProgress />

      {/* GradientProgressTwo */}
      <GradientProgressTwo />

      {/* GradientProgressThree */}
      <GradientProgressThree />

      {/* ProgressCircle */}
      <ProgressCircle />
    </div>
  );
};

export default ProgressLayer;
