import HeadingFont from "./child/HeadingFont";
import DisplayHeadingFont from "./child/DisplayHeadingFont";
import HeadingColorsFont from "./child/HeadingColorsFont";
import InlineTextElementsFont from "./child/InlineTextElementsFont";
import TextFont from "./child/TextFont";
import TextDecorationFont from "./child/TextDecorationFont";
import BlockquoteBackgroundColorTextFont from "./child/BlockquoteBackgroundColorTextFont";
import BlockquoteBorderColorFont from "./child/BlockquoteBorderColorFont";

const TypographyLayer = () => {
  return (
    <div className='row gy-4'>
      {/* HeadingFont */}
      <HeadingFont />

      {/* DisplayHeadingFont */}
      <DisplayHeadingFont />

      {/* HeadingColorsFont */}
      <HeadingColorsFont />

      {/* InlineTextElementsFont */}
      <InlineTextElementsFont />

      {/* TextFont */}
      <TextFont />

      {/* TextDecorationFont */}
      <TextDecorationFont />

      {/* BlockquoteBackgroundColorTextFont */}
      <BlockquoteBackgroundColorTextFont />

      {/* BlockquoteBorderColorFont */}
      <BlockquoteBorderColorFont />
    </div>
  );
};

export default TypographyLayer;
