import React, { useRef } from "react";
import HTMLFlipBook from 'react-pageflip'
import "./Flipbook.css";

const pages = [

];

const Flipbook = () => {
  const flipBook = useRef(null);

  return (
    <HTMLFlipBook
      ref={flipBook}
      width={630}
      height={820}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size="stretch"
      startPage={2}    // ← add this line
    >
      <div className="page-template cover">
        <img src="../Assets/Flipbook/cover1.png" className="page-image"></img>
      </div>
      <div className="page-template page1">
        <img src="../Assets/Flipbook/page1.png" className="page-image"></img>
      </div>
      <div className="page-template page2">
        <img src="../Assets/Flipbook/page2.png" className="page-image"></img>
      </div>
      <div className="page-template page3">
        <img src="../Assets/Flipbook/page3.png" className="page-image"></img>
      </div>
      <div className="page-template page4">
        <img src="../Assets/Flipbook/page4.png" className="page-image"></img>
      </div>
      <div className="page-template page5">
        <img src="../Assets/Flipbook/page5.png" className="page-image"></img>
      </div>
      <div className="page-template page6">
        <img src="../Assets/Flipbook/page6.png" className="page-image"></img>
      </div>
      <div className="page-template page7">
        <img src="../Assets/Flipbook/page7.png" className="page-image"></img>
      </div>
      <div className="page-template page8">
        <img src="../Assets/Flipbook/page8.png" className="page-image"></img>
      </div>
      <div className="page-template page9">
        <img src="../Assets/Flipbook/page9.png" className="page-image"></img>
      </div>
            <div className="page-template page10">
        <img src="../Assets/Flipbook/page10.png" className="page-image"></img>
      </div>
      <div className="page-template page11">
        <img src="../Assets/Flipbook/page11.png" className="page-image"></img>
      </div>
      <div className="page-template page12">
        <img src="../Assets/Flipbook/page12.png" className="page-image"></img>
      </div>
      <div className="page-template page13">
        <img src="../Assets/Flipbook/page13.png" className="page-image"></img>
      </div>
      <div className="page-template page14">
        <img src="../Assets/Flipbook/page14.png" className="page-image"></img>
      </div>
      <div className="page-template page15">
        <img src="../Assets/Flipbook/page15.png" className="page-image"></img>
      </div>
      <div className="page-template page16">
        <img src="../Assets/Flipbook/page16.png" className="page-image"></img>
      </div>
      <div className="page-template page17">
        <img src="../Assets/Flipbook/page17.png" className="page-image"></img>
      </div>
      <div className="page-template page18">
        <img src="../Assets/Flipbook/page18.png" className="page-image"></img>
      </div>
      <div className="page-template page19">
        <img src="../Assets/Flipbook/page19.png" className="page-image"></img>
      </div>
      <div className="page-template page20">
        <img src="../Assets/Flipbook/page20.png" className="page-image"></img>
      </div>
      <div className="page-template page21">
        <img src="../Assets/Flipbook/page21.png" className="page-image"></img>
      </div>
      <div className="page-template page22">
        <img src="../Assets/Flipbook/page22.png" className="page-image"></img>
      </div>
      <div className="page-template page23">
        <img src="../Assets/Flipbook/page23.png" className="page-image"></img>
      </div>
      <div className="page-template page24">
        <img src="../Assets/Flipbook/page24.png" className="page-image"></img>
      </div>
      <div className="page-template page25">
        <img src="../Assets/Flipbook/page25.png" className="page-image"></img>
      </div>
      <div className="page-template page26">
        <img src="../Assets/Flipbook/page26.png" className="page-image"></img>
      </div>
      <div className="page-template page27">
        <img src="../Assets/Flipbook/page27.png" className="page-image"></img>
      </div>
      <div className="page-template page28">
        <img src="../Assets/Flipbook/page28.png" className="page-image"></img>
      </div>
      <div className="page-template page29">
        <img src="../Assets/Flipbook/page29.png" className="page-image"></img>
      </div>
      <div className="page-template page30">
        <img src="../Assets/Flipbook/page30.png" className="page-image"></img>
      </div>
      <div className="page-template page31">
        <img src="../Assets/Flipbook/page31.png" className="page-image"></img>
      </div>
      <div className="page-template page32">
        <img src="../Assets/Flipbook/page32.png" className="page-image"></img>
      </div>
      <div className="page-template page33">
        <img src="../Assets/Flipbook/page33.png" className="page-image"></img>
      </div>
      <div className="page-template page34">
        <img src="../Assets/Flipbook/page34.png" className="page-image"></img>
      </div>
      <div className="page-template page35">
        <img src="../Assets/Flipbook/page35.png" className="page-image"></img>
      </div>
      <div className="page-template page36">
        <img src="../Assets/Flipbook/page36.png" className="page-image"></img>
      </div>
      <div className="page-template page37">
        <img src="../Assets/Flipbook/page37.png" className="page-image"></img>
      </div>
      <div className="page-template page38">
        <img src="../Assets/Flipbook/page38.png" className="page-image"></img>
      </div>
      <div className="page-template page39">
        <img src="../Assets/Flipbook/page39.png" className="page-image"></img>
      </div>
      <div className="page-template page40">
        <img src="../Assets/Flipbook/page40.png" className="page-image"></img>
      </div>
      <div className="page-template page41">
        <img src="../Assets/Flipbook/page41.png" className="page-image"></img>
      </div>
      <div className="page-template page42">
        <img src="../Assets/Flipbook/page42.png" className="page-image"></img>
      </div>
      <div className="page-template page43">
        <img src="../Assets/Flipbook/page43.png" className="page-image"></img>
      </div>
      <div className="page-template page44">
        <img src="../Assets/Flipbook/page44.png" className="page-image"></img>
      </div>
      <div className="page-template page45">
        <img src="../Assets/Flipbook/page45.png" className="page-image"></img>
      </div>
      <div className="page-template page46">
        <img src="../Assets/Flipbook/page46.png" className="page-image"></img>
      </div>
      <div className="page-template page47">
        <img src="../Assets/Flipbook/page47.png" className="page-image"></img>
      </div>
      <div className="page-template page48">
        <img src="../Assets/Flipbook/page48.png" className="page-image"></img>
      </div>
      <div className="page-template page49">
        <img src="../Assets/Flipbook/page49.png" className="page-image"></img>
      </div>
      <div className="page-template page50">
        <img src="../Assets/Flipbook/page50.png" className="page-image"></img>
      </div>
      <div className="page-template page51">
        <img src="../Assets/Flipbook/page51.png" className="page-image"></img>
      </div>
      <div className="page-template page52">
        <img src="../Assets/Flipbook/page52.png" className="page-image"></img>
      </div>
      <div className="page-template page53">
        <img src="../Assets/Flipbook/page53.png" className="page-image"></img>
      </div>
      <div className="page-template page54">
        <img src="../Assets/Flipbook/page54.png" className="page-image"></img>
      </div>
      <div className="page-template page55">
        <img src="../Assets/Flipbook/page55.png" className="page-image"></img>
      </div>
      <div className="page-template page56">
        <img src="../Assets/Flipbook/page56.png" className="page-image"></img>
      </div>
      <div className="page-template page57">
        <img src="../Assets/Flipbook/page57.png" className="page-image"></img>
      </div>
      <div className="page-template page58">
        <img src="../Assets/Flipbook/page58.png" className="page-image"></img>
      </div>
      <div className="page-template page59">
        <img src="../Assets/Flipbook/page59.png" className="page-image"></img>
      </div>
      <div className="page-template page60">
        <img src="../Assets/Flipbook/page60.png" className="page-image"></img>
      </div>
      <div className="page-template page61">
        <img src="../Assets/Flipbook/page61.png" className="page-image"></img>
      </div>
      <div className="page-template page62">
        <img src="../Assets/Flipbook/page62.png" className="page-image"></img>
      </div>
      <div className="page-template page63">
        <img src="../Assets/Flipbook/page63.png" className="page-image"></img>
      </div>
      <div className="page-template page64">
        <img src="../Assets/Flipbook/page64.png" className="page-image"></img>
      </div>
      <div className="page-template back-cover">
        <img src="../Assets/Flipbook/back-cover.png" className="page-image"></img>
      </div>
    </HTMLFlipBook>
  );
};

export default Flipbook;
