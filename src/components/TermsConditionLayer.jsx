import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import ReactQuill from "react-quill-new";
import "highlight.js/styles/github.css";

const TermsConditionLayer = () => {
  const quillRef = useRef(null);
  const [value, setValue] = useState(`<div id="editor">
        <p class="">This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”)
          collects, uses, shares and protects the personal information that we collect through this site or
          different channels. 6amMart has established the site to link up the users </p>
        <p><br /></p>

        <h6>Using ChatGPT</h6>
        <p class="">This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”)
          collects, uses, shares and protects the personal information that we collect through this site or
          different channels. 6amMart has established the site to link up the users who need foods or grocery items
          to be shipped or </p>
        <p><br /></p>

        <h6>Intellectual Property</h6>
        <p class="">This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”)
          collects, uses, shares and protects the personal information that we collect through this site or
          different channels. 6amMart has established the site to link up the users who need foods or grocery items
          to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location.
          This policy also applies to any mobile applications that we develop for use </p>
        <p><br /></p>

        <h6>Using ChatGPT</h6>
        <p class="">This policy explains how 6amMart website and related applications (the “Site”, “we” or “us”)
          collects, uses, shares and protects the personal information that we collect through this site or
          different channels. 6amMart has established the site to link up the users who need foods or grocery items
          to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location.
          This policy also applies to any mobile applications that we develop for use with </p>
        <p><br /></p>
        <p> our services on the Site, and references to this “Site”, “we” or “us” is intended . grocery items to be
          shipped or delivered by the riders from the affiliated restaurants or shops to the desired location. This
          policy also applies to any mobile applications that we develop for use</p>

        <p>Some initial <strong>bold</strong> text</p>
        <p><br /></p>
      </div>`);
  // eslint-disable-next-line no-unused-vars
  const [isHighlightReady, setIsHighlightReady] = useState(false);

  useEffect(() => {
    // Load highlight.js configuration and signal when ready
    hljs?.configure({
      languages: [
        "javascript",
        "ruby",
        "python",
        "java",
        "csharp",
        "cpp",
        "go",
        "php",
        "swift",
      ],
    });
  }, []);

  const handleSave = () => {
    const editorContent = quillRef.current.getEditor().root.innerHTML;
    console.log("Editor content:", editorContent);
  };

  // Quill editor modules with syntax highlighting (only load if highlight.js is ready)
  const modules = isHighlightReady
    ? {
        syntax: {
          highlight: (text) => hljs?.highlightAuto(text).value, // Enable highlight.js in Quill
        },
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      }
    : {
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <>
      <div className='card basic-data-table radius-12 overflow-hidden'>
        <div className='card-body p-0'>
          {/* Editor Toolbar */}
          <div id='toolbar-container'>
            <span className='ql-formats'>
              <select className='ql-font'></select>
              <select className='ql-size'></select>
            </span>
            <span className='ql-formats'>
              <button className='ql-bold'></button>
              <button className='ql-italic'></button>
              <button className='ql-underline'></button>
              <button className='ql-strike'></button>
            </span>
            <span className='ql-formats'>
              <select className='ql-color'></select>
              <select className='ql-background'></select>
            </span>
            <span className='ql-formats'>
              <button className='ql-script' value='sub'></button>
              <button className='ql-script' value='super'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-header' value='1'></button>
              <button className='ql-header' value='2'></button>
              <button className='ql-blockquote'></button>
              <button className='ql-code-block'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-list' value='ordered'></button>
              <button className='ql-list' value='bullet'></button>
              <button className='ql-indent' value='-1'></button>
              <button className='ql-indent' value='+1'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-direction' value='rtl'></button>
              <select className='ql-align'></select>
            </span>
            <span className='ql-formats'>
              <button className='ql-link'></button>
              <button className='ql-image'></button>
              <button className='ql-video'></button>
              <button className='ql-formula'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-clean'></button>
            </span>
          </div>

          {/* Quill Editor */}
          <ReactQuill
            ref={quillRef}
            theme='snow'
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            placeholder='Compose an epic...'
          />
        </div>

        <div className='card-footer p-24 bg-base border border-bottom-0 border-end-0 border-start-0'>
          <div className='d-flex align-items-center justify-content-center gap-3'>
            <button
              type='button'
              className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8'
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary border border-primary-600 text-md px-28 py-12 radius-8'
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditionLayer;
