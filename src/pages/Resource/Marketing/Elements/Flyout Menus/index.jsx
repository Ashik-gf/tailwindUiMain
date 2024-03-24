import MainHeaderSection from "@shared/components/MainHeader";
import Full_width from "./Full-width";
import FirstHeaderSection from "@shared/components/FirstHeaderSection";
import HeaderSections from "../../PageSection/HeaderSection";
import Stacked_with_footer_Actions from "./Stacked with footer actions";
import HeaderSection from "@shared/components/HeaderSection/HeaderSection";
import Full_width_two_columns from "./Full-width two-columns";
import Stacked_with_footer_list from "./Stacked with footer list";
import Simple_with_descriptions from "./Simple with descriptions";
import Two_column from "./Two-column";
import Simple from "./Simple";

const FlyoutMenus = () => {
  return (
    <div>
      <MainHeaderSection title={"Flyout Menus"} tag={"Elements"} />
      <FirstHeaderSection
        title={"Stacked with footer actions"}
        className={" border-red-400 border-2"}
      >
        <div className="div w-full h-[600px]">
          <Stacked_with_footer_Actions />
        </div>
      </FirstHeaderSection>
      {/* Full-width two-columns */}
      <HeaderSection className={''} title={'Full-width two-columns'}>
      <div className="border-[1px] border-gray-200 w-full h-[400px]">
        <Full_width_two_columns />
      </div>
      </HeaderSection>
      {/* Full-width two-columns */}
      <HeaderSection className={''} title={'Full-width two-columns'}>
      <div className="border-[1px] border-gray-200 w-full h-[640px]">
        <Stacked_with_footer_list />
      </div>
      </HeaderSection>
      {/* Full-width */}
      <HeaderSection className={''} title={'Full-width'}>
      <div className="border-[1px] border-gray-200 w-full h-[640px]">
        <Full_width />
      </div>
      </HeaderSection>
      {/*Simple with descriptions */}
      <HeaderSection className={''} title={'Simple with descriptions'}>
      <div className="border-[1px] border-gray-200 rounded-lg w-full h-[660px]">
        <Simple_with_descriptions />
      </div>
      </HeaderSection>
      {/*Two-column */}
      <HeaderSection className={''} title={'Two-column'}>
      <div className="border-[1px] border-gray-200 rounded-lg w-full h-[660px]">
        <Two_column />
      </div>
      </HeaderSection>
      {/*Simple */}
      <HeaderSection className={''} title={'Simple'}>
      <div className="div border-[1px] border-gray-200 rounded-lg w-full h-[400px]">
        <Simple />
      </div>
      </HeaderSection>

    </div>
  );
};

export default FlyoutMenus;
