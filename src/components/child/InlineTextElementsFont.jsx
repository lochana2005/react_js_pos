const InlineTextElementsFont = () => {
  return (
    <div className='col-md-6'>
      <div className='card h-100 p-0'>
        <div className='card-header border-bottom bg-base py-16 px-24'>
          <h6 className='text-lg fw-semibold mb-0'>Inline Text Elements</h6>
        </div>
        <div className='card-body py-16 px-24'>
          <p className='mb-16 text-secondary-light fw-normal'>
            You can use the mark tag to{" "}
            <span className='text-warning-main bg-warning-focus px-4'>
              highlight
            </span>{" "}
            text
          </p>
          <p className='mb-16 text-secondary-light fw-normal text-decoration-line-through'>
            This is a paragraph. it stands out from regular Delete text{" "}
          </p>
          <p className='mb-16 text-secondary-light fw-normal text-decoration-line-through'>
            This line of text is meant to be treated as no longer accurate.
          </p>
          <p className='mb-16 text-secondary-light fw-normal text-decoration-underline'>
            This line of text will render as underlined
          </p>
          <p className='mb-16 text-secondary-light fw-normal text-decoration-underline'>
            This line of text is meant to be treated as an addition to the
            document.
          </p>
          <p className='mb-16 text-secondary-light fw-normal'>
            This is a paragraph. it stands out from regular text.
          </p>
          <p className='mb-16 text-secondary-light fw-semibold'>
            This line rendered as bold text.
          </p>
          <p className='mb-16 text-secondary-light fst-italic'>
            This line rendered as italicized text.
          </p>
          <p className='text-secondary-light fst-italic'>
            This line rendered as italicized text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InlineTextElementsFont;
