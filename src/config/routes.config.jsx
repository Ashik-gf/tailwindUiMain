import { Routes } from '@shared/constants/routes.constant'
import NotFound from '@pages/NotFound'
import AuthLayout from '@layouts/AuthLayout'
import Login from '@pages/auth/Login'
import Users from '@pages/Users'
import Home from '@pages/Home'
import Register from '@pages/auth/Register'
import DashboardLayout from '@layouts/DashboardLayout'
import Entities from '@pages/Entities'
import Blog from '@pages/Blog'
import Resource from '@pages/Resource'
import Faq from '@pages/Faq'
import Contact from '@pages/Contact'
import HomeLayout from '@layouts/HomeLayout'
import Logout from '@pages/Logout'
import Profile from '@pages/Profile'
import Overview from '@pages/Overview'

import Appui from '@pages/Resource/AppUi'
import DisplayData from '@pages/Resource/DisplayData'
import StackedLayout from '@pages/Resource/AppUi/Stacked_Layout'
import SideBarLayout from '@pages/Resource/AppUi/SideBarLayout'
import MultiColum from '@pages/Resource/AppUi/Multi_column'
import PageHeading from '@pages/Resource/Heading/PageHeading'
import CardHeading from '@pages/Resource/Heading/CardHeading'
import SeactionHeading from '@pages/Resource/Heading/SeactionHeading'
import StackedList from '@pages/Resource/AppUi/Lists/Stacked List'
import Table from '@pages/Resource/AppUi/Lists/Table'
import Grids from '@pages/Resource/AppUi/Lists/Grids'

import DiscriptionList from '@pages/Resource/DisplayData/DiscriptionList'
import Stats from '@pages/Resource/DisplayData/Stats'
import Calanders from '@pages/Resource/DisplayData/Calanders'
import FromsLayout from '@pages/Resource/Forms/FormsLayout'
import InputGroups from '@pages/Resource/Forms/InputsGroups'
import SelectsMenus from '@pages/Resource/Forms/SelectaMenus'
import SignInAndRegistation from '@pages/Resource/Forms/SignInAndRegistation'
import TextAreas from '@pages/Resource/Forms/TextAreas'
import RadioGroups from '@pages/Resource/Forms/RediosGroups'
import CheckBoxs from '@pages/Resource/Forms/CheckBoxs'
import Togols from '@pages/Resource/Forms/Togols'
import ActionPanals from '@pages/Resource/Forms/ActionPanals'
import ComboBoxes from '@pages/Resource/Forms/ComboBoxes'
import Alert from '@pages/Resource/FeedBack/Alerts'
import EmptyState from '@pages/Resource/FeedBack/EmptyState'
import Navbars from '@pages/Resource/Navigation/Navbars'
import Pagination from '@pages/Resource/Navigation/Pagination'
import Tabs from '@pages/Resource/Navigation/Tabs'
import VarticalNavigation from '@pages/Resource/Navigation/Vertical Navigation'
import SidebarNavigation from '@pages/Resource/Navigation/Sidebar Navigation'
import Breadcrumbs from '@pages/Resource/Navigation/Brandcome'
import Steps from '@pages/Resource/Navigation/Steps'
import CommandPalettes from '@pages/Resource/Navigation/Command Palettes'
import Modal from '@pages/Resource/Overlays/Modal'
import Notification from '@pages/Resource/Overlays/Notification'
import SlideOver from '@pages/Resource/Overlays/SlideOver'
import Avatars from '@pages/Resource/Elements/Avatars'
import Badges from '@pages/Resource/Elements/Badges'
import DropDown from '@pages/Resource/Elements/Dropdowns'
import Button from '@pages/Resource/Elements/Buttons'
import ButtonGroup from '@pages/Resource/Elements/Button Groups'
import Containers from '@pages/Resource/Layout/Containers'
import Panels from '@pages/Resource/Layout/Panels'
import ListContainer from '@pages/Resource/Layout/List containers'
import MediaObject from '@pages/Resource/Layout/Media Objects'
import Deviders from '@pages/Resource/Layout/Dividers'
import HomeScreen from '@pages/Resource/PagesExample/HomeScreen'
import DetailsScreen from '@pages/Resource/PagesExample/DetailsScreen'
import SettingsScreens from '@pages/Resource/PagesExample/SettingsScreen'
import Marketing from '@pages/Resource/Marketing'
import HeroSection from '@pages/Resource/Marketing/PageSection/HeroSection'
import FutureSection from '@pages/Resource/Marketing/PageSection/Feature Sections'
import CTASection from '@pages/Resource/Marketing/PageSection/CTASECTION'
import PricingSection from '@pages/Resource/Marketing/PageSection/PricingSection'
import HeaderSections from '@pages/Resource/Marketing/PageSection/HeaderSection'
import NewsletterSections from '@pages/Resource/Marketing/PageSection/NewsletterSections'
import PageSectionStats from '@pages/Resource/Marketing/PageSection/Stats'
import Testimonials from '@pages/Resource/Marketing/PageSection/Testimonials'
import ContactSection from '@pages/Resource/Marketing/PageSection/ContactSection'
import TeamSections from '@pages/Resource/Marketing/PageSection/Team Sections'
import ContentSections from '@pages/Resource/Marketing/PageSection/Content Sections'
import LogoClouds from '@pages/Resource/Marketing/PageSection/Logo Clouds'
import FaQSection from '@pages/Resource/Marketing/PageSection/FaQSection'
import FooterSection from '@pages/Resource/Marketing/PageSection/FooterSection'
import FlyoutMenus from '@pages/Resource/Marketing/Elements/Flyout Menus'
import Banners from '@pages/Resource/Marketing/Elements/Banner'
import HeadresElements from '@pages/Resource/Marketing/Elements/Headers'







export const RoutesConfig = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: Routes.home, element: <Home /> },
      { path: Routes.blog, element: <Blog /> },
    
      { path: Routes.faq, element: <Faq /> },
      { path: Routes.contact, element: <Contact /> },
    ],
  },
 {
  path: Routes.resource,
  element: <Resource />,
  children:[
// {path: Routes.layOutComponents, element: <LayoutComponents />},
{path: Routes.appui, element: <Appui />},
{path: Routes.displayDta, element: <DisplayData />},
{path: Routes.stacked, element: <StackedLayout />},
{path: Routes.sideBarLayout, element: <SideBarLayout />},
{path: Routes.multiColumn, element: <MultiColum />},
{path: Routes.pageHeading, element: <PageHeading />},
{path: Routes.cardheading, element: <CardHeading />},
{path: Routes.sectionheading, element: <SeactionHeading />},
{path: Routes.stackedList, element: <StackedList />},
{path: Routes.table, element: <Table />},
{path: Routes.grids, element: <Grids />},
{path: Routes.discriptionList, element: <DiscriptionList />},
{path: Routes.stats, element: <Stats />},
{path: Routes.formsLyout, element: <FromsLayout />},
{path: Routes.inputGroups, element: <InputGroups />},
{path: Routes.selectsMenu, element: <SelectsMenus />},
{path: Routes.signInAndRegistation, element: <SignInAndRegistation />},
{path: Routes.textArea, element: <TextAreas />},
{path: Routes.checkBoxes, element: <CheckBoxs />},
{path: Routes.togols, element: <Togols />},
{path: Routes.radioGroups, element: <RadioGroups />},
{path: Routes.actionPanals, element: <ActionPanals />},
{path: Routes.comboBoxes, element: <ComboBoxes />},
{path: Routes.alert, element: <Alert />},
{path: Routes.emptyState, element: <EmptyState />},
{path: Routes.navbar, element: <Navbars />},
{path: Routes.pagination, element: <Pagination />},
{path: Routes.tab, element: <Tabs />},
{path: Routes.varticalNavigation, element: <VarticalNavigation />},
{path: Routes.sidebarNavigation, element: <SidebarNavigation />},
{path: Routes.breadcrumbs, element: <Breadcrumbs />},
{path: Routes.steps, element: <Steps />},
{path: Routes.commandPalettes, element: <CommandPalettes />},
{path: Routes.modal, element: <Modal />},
{path: Routes.notification, element: <Notification />},
{path: Routes.slidover, element: <SlideOver />},
{path: Routes.avatars, element: <Avatars />},
{path: Routes.badges, element: <Badges />},
{path: Routes.dropDown, element: <DropDown />},
{path: Routes.button, element: <Button />},
{path: Routes.buttonGroup, element: <ButtonGroup />},
{path: Routes.containers, element: <Containers />},
{path: Routes.panels, element: <Panels />},
{path: Routes.listContainer, element: <ListContainer />},
{path: Routes.mediaObject, element: <MediaObject />},
{path: Routes.deviders, element: <Deviders />},
{path: Routes.homescreen, element: <HomeScreen />},
{path: Routes.detailsScreen, element: <DetailsScreen />},
{path: Routes.settingsScreens, element: <SettingsScreens />},
{path: Routes.settingsScreens, element: <SettingsScreens />},
{path: Routes.marketing, element: <Marketing />},
{path: Routes.heroSection, element: <HeroSection />},
{path: Routes.future, element: <FutureSection />},
{path: Routes.ctaSection, element: <CTASection />},
{path: Routes.pricing, element: <PricingSection />},
{path: Routes.headerSection, element: <HeaderSections />},
{path: Routes.newsLetter, element: <NewsletterSections />},
{path: Routes.pageStats, element: <PageSectionStats />},
{path: Routes.testimonial, element: <Testimonials />},
{path: Routes.contactSection, element: <ContactSection />},
{path: Routes.teamSection, element: <TeamSections />},
{path: Routes.contentSection, element: <ContentSections />},
{path: Routes.logoClouds, element: <LogoClouds />},
{path: Routes.logoClouds, element: <LogoClouds />},
{path: Routes.faqs, element: <FaQSection />},
{path: Routes.footers, element: <FooterSection />},
{path: Routes.headresElements, element: <HeadresElements />},
{path: Routes.flyoutMenus, element: <FlyoutMenus />},
{path: Routes.banners, element: <Banners />},



  ]
 },
  {
    path: Routes.dashboard,
    element: <DashboardLayout />,
    children: [
      { path: Routes.overview, element: <Overview /> },
      { path: Routes.entities, element: <Entities /> },
      { path: Routes.people, element: <Users /> },
      { path: Routes.training, element: <Users /> },
      { path: Routes.settings, element: <Users /> },
      { path: Routes.profile, element: <Profile /> },
      { path: Routes.logout, element: <Logout /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: Routes.login, element: <Login /> },
      { path: Routes.register, element: <Register /> },
    ],
  },
  { path: Routes.notFound, element: <NotFound /> },
]
