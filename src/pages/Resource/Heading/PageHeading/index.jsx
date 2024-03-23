import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import WithMetaAndActions from "./With meta and actions";
import WithActions from "./With actions";
import WithActionsAndBreadcrumbs from "./With actions and breadcrumbs";
import WithActionsAndBreadcrumbsOnDark from "./With actions on dark";
import WithMetaAndActionsOnDark from "./With meta and actions on dark";
import WithBannerImage from "./With banner image";
import WithAvatarAndActions from "./With avatar and actions";
import CardWithAvatarAndStats from "./Card with avatar and stats";
import WithMetaActionsAndBreadcrumbs from "./With meta, actions, and breadcrumbs";
import WithDark from "./With meta, actions, and breadcrumbs on dark";
import WithFiltersAndAction from "./With filters and action";
import WithLogoMetaAndActions from "./With logo, meta and actions";

const PageHeading = () => {
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
          Page Headings
        </h1>
      </div>
      {/* With meta and actions */}

      <HeaderSection className={""} title={"With meta and actions"}>
        <div className="  border-gray-400">
          <WithMetaAndActions />
        </div>
      </HeaderSection>
      {/* With actions*/}

      <HeaderSection className={""} title={"With actions"}>
        <div className=" p-8  border-gray-400">
          <WithActions />
        </div>
      </HeaderSection>
      {/* With actions and breadcrumbs*/}

      <HeaderSection className={""} title={"With actions"}>
        <div className="  border-gray-400">
          <WithActionsAndBreadcrumbs />
        </div>
      </HeaderSection>

      {/* With actions and breadcrumbs on dark*/}

      <HeaderSection className={""} title={"With actions and breadcrumbs on dark"}>
        <div className=" bg-gray-900 p-8 rounded-lg  border-gray-400">
          <WithActionsAndBreadcrumbsOnDark />
        </div>
      </HeaderSection>
      {/* With meta and actions on dark*/}

      <HeaderSection className={""} title={"With meta and actions on dark"}>
        <div className="  bg-gray-900 p-8 rounded-lg">
          <WithMetaAndActionsOnDark />
        </div>
      </HeaderSection>
      {/* With banner image */}

      <HeaderSection className={""} title={"With banner image"}>
        <div className="  border-gray-400">
          <WithBannerImage />
        </div>
      </HeaderSection>
      {/* With avatar and actions */}

      <HeaderSection className={""} title={"With avatar and actions"}>
        <div className="  border-gray-400">
          <WithAvatarAndActions />
        </div>
      </HeaderSection>
      {/* Card with avatar and stats */}

      <HeaderSection className={""} title={"Card with avatar and stats"}>
        <div className="  border-gray-400">
          <CardWithAvatarAndStats />
        </div>
      </HeaderSection>
      {/* With meta, actions, and breadcrumbs */}

      <HeaderSection className={""} title={"With meta, actions, and breadcrumbs"}>
        <div className="  border-gray-400">
          <WithMetaActionsAndBreadcrumbs />
        </div>
      </HeaderSection>
      {/* With meta, actions, and breadcrumbs on dark*/}

      <HeaderSection className={""} title={"With meta, actions, and breadcrumbs on dark"}>
        <div className=" bg-gray-800 p-8 rounded-lg">
          <WithDark />
        </div>
      </HeaderSection>
      {/* With Filters And Action */}

      <HeaderSection className={""} title={" With Filters And Action "}>
        <div className="  border-gray-400">
          <WithFiltersAndAction />
        </div>
      </HeaderSection>
      {/* With logo, meta and actions */}

      <HeaderSection className={" "} title={" With logo, meta and actions "}>
        <div className={' p-8'}>
          <WithLogoMetaAndActions />
        </div>
      </HeaderSection>
    </div>
  );
};

export default PageHeading;
