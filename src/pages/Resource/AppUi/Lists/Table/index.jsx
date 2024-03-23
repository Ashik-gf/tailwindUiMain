import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import Simple from "./Simple";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import SimpleonDark from "./Simple on dark";
import SimpleOnCard from "./Simple in card";
import FullWidth from "./Full width";
import FullWidthWithConstrainedContent from "./Full width with constrained content";
import WithStripedRows from "./With striped rows";
import WithUppercaseHeadings from "./With uppercase headings";
import WithStackedColumnsonMobile from "./With stacked columns on mobile";
import WithHiddenColumnsonMobile from "./With hidden columns on mobile";
import WithAvatarsAndMultilineContent from "./With avatars and multi-line content";
import WithStickyHeader from "./With sticky header";
import WithVerticalLines from "./With vertical lines";
import WithCondensedContent from "./With condensed content";
import WithSortableHeadings from "./With sortable headings";
import WithGroupedRows from "./With grouped rows";
import WithSummaryRows from "./With summary rows";
import WithDorder from "./With border";
import WithCheckboxes from "./With checkboxes";
import WithHiddenHeadings from "./With hidden headings";
import FullWidthWithAvatarsOnDark from "./Full width with avatars on dark";

const Table = () => {
  return (
    <div>
      {/* Header */}
      <div className=" text-slate-500 hover:text-slate-600 mt-10">
        <Link to={"/resource/appui"}>
          <p className=" flex items-center gap-3 ">
            <IoArrowBackCircle className=" text-3xl" />
            <span>Back</span>{" "}
          </p>
        </Link>
        <p>
          <Link>Application Ui</Link> / <Link>Application shells</Link>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Tables
        </h1>
      </div>
      {/* Simple */}
      <div className="div">
        <HeaderSection title={"Simple"}>
          <Simple />
        </HeaderSection>
      </div>
      {/* Simple on dark */}
      <div className="div">
        <HeaderSection title={"Simple on dark"}>
          <SimpleonDark />
        </HeaderSection>
      </div>
      {/* Simple in card */}
      <div className="div">
        <HeaderSection title={"Simple in card"}>
          <SimpleOnCard />
        </HeaderSection>
      </div>
      {/* Full width */}
      <div className="div">
        <HeaderSection title={"Full width"}>
          <FullWidth />
        </HeaderSection>
      </div>
      {/* Full width with constrained content */}
      <div className="div">
        <HeaderSection title={"Full width with constrained content"}>
          <FullWidthWithConstrainedContent />
        </HeaderSection>
      </div>
      {/* With striped rows */}
      <div className="div">
        <HeaderSection title={"With striped rows"}>
          <WithStripedRows />
        </HeaderSection>
      </div>
      {/* With uppercase headings */}
      <div className="div">
        <HeaderSection title={"With uppercase headings"}>
          <WithUppercaseHeadings />
        </HeaderSection>
      </div>
      {/* With stacked columns on mobile */}
      <div className="div">
        <HeaderSection title={"With stacked columns on mobile"}>
          <WithStackedColumnsonMobile />
        </HeaderSection>
      </div>
      {/* With hidden columns on mobile*/}
      <div className="div">
        <HeaderSection title={"With hidden columns on mobile"}>
          <WithHiddenColumnsonMobile />
        </HeaderSection>
      </div>
      {/* With avatars and multi-line content*/}
      <div className="div">
        <HeaderSection title={"With avatars and multi-line content"}>
          <WithAvatarsAndMultilineContent />
        </HeaderSection>
      </div>
      {/* With sticky header*/}
      <div className="div">
        <HeaderSection title={"With sticky header"}>
          <WithStickyHeader />
        </HeaderSection>
      </div>
      {/* With vertical lines*/}
      <div className="div">
        <HeaderSection title={"With vertical lines"}>
          <WithVerticalLines />
        </HeaderSection>
      </div>
      {/* With condensed content*/}
      <div className="div">
        <HeaderSection title={"With condensed content"}>
          <WithCondensedContent />
        </HeaderSection>
      </div>
      {/* With sortable headings*/}
      <div className="div">
        <HeaderSection title={"With sortable headings"}>
          <WithSortableHeadings />
        </HeaderSection>
      </div>
      {/* With grouped rows*/}
      <div className="div">
        <HeaderSection title={"With grouped rows"}>
          <WithGroupedRows />
        </HeaderSection>
      </div>
      {/* With summary rows */}
      <div className="div">
        <HeaderSection title={"With summary rows"}>
          <WithSummaryRows />
        </HeaderSection>
      </div>
      {/* With border */}
      <div className="div">
        <HeaderSection title={"With border"}>
          <WithDorder />
        </HeaderSection>
      </div>
      {/* With checkboxes */}
      <div className="div">
        <HeaderSection title={"With checkboxes"}>
          <WithCheckboxes />
        </HeaderSection>
      </div>
      {/* With hidden headings */}
      <div className="div">
        <HeaderSection title={"With hidden headings"}>
          <WithHiddenHeadings />
        </HeaderSection>
      </div>
      {/* Full width with avatars on dark */}
      <div className="div">
        <HeaderSection title={"Full width with avatars on dark"}>
          <FullWidthWithAvatarsOnDark />
        </HeaderSection>
      </div>

    </div>
  );
};

export default Table;
