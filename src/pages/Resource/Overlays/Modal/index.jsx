import React, { useState } from "react";
import MainHeaderSection from "@shared/components/MainHeader";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SimpleWithGrayFooter from "./Simple with gray footer";
import CenteredWithSingleAction from "./CenteredWithSingleAction";
import CenteredWithWideButtons from "./Centered with wide buttons";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={"OverLay"} title={"Modal"} />
      <HeaderSection className={"rounded-lg"} title={"Simple with gray footer"}>
        <div className=" h-[500px]">
          <SimpleWithGrayFooter />
        </div>
      </HeaderSection>
      {/* Centered with single action */}
      <HeaderSection
        className={"rounded-lg relative"}
        title={"Centered with single action"}
      >
        <div>
          <CenteredWithSingleAction />
        </div>
      </HeaderSection>
{/* Centered with wide buttons */}
<HeaderSection
className={'rounded-lg '}
title={'Centered with wide buttons'}
>
<div>
  <CenteredWithWideButtons />
</div>
</HeaderSection>


    </div>
  );
};

export default Modal;
