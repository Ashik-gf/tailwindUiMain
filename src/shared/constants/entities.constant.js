import { Iconify } from './iconify.constant'

const EntitiesConst = {}

EntitiesConst.entityType = [
  { key: 1, label: 'LLC', value: 'llc' },
  { key: 2, label: 'Corporation', value: 'corporation' },
  { key: 3, label: 'Unlimited Liability', value: 'unlimited_liability' },
  { key: 4, label: 'Individual', value: 'individual' },
]

EntitiesConst.country = [
  { key: 1, label: 'United States of America', value: 'usa' },
  { key: 2, label: 'London', value: 'london' },
  { key: 3, label: 'Quatar', value: 'quatar' },
  { key: 4, label: 'Singapore', value: 'singapore' },
]

EntitiesConst.usState = [
  { key: 1, label: 'California', value: 'california' },
  { key: 2, label: 'New York', value: 'new_york' },
  { key: 3, label: 'Texax', value: 'texax' },
  { key: 4, label: 'Florida', value: 'florida' },
]

EntitiesConst.filingType = [
  { key: 1, label: 'Initial', value: 'initial' },
  { key: 2, label: 'Draft', value: 'draft' },
  { key: 3, label: 'Submitted to Fincen', value: 'submitted_to_fincen' },
  { key: 4, label: 'Filing Completed', value: 'filing_completed' },
]

EntitiesConst.taxIdentifacationType = [
  { key: 1, label: 'EIN', value: 'ein' },
  { key: 2, label: 'PTIN', value: 'ptin' },
  { key: 3, label: 'ATIN', value: 'atin' },
  { key: 4, label: 'SSN', value: 'ssn' },
]

EntitiesConst.state = [
  { key: 1, label: 'California', value: 'california' },
  { key: 2, label: 'New York', value: 'new_york' },
  { key: 3, label: 'Texax', value: 'texax' },
  { key: 4, label: 'Florida', value: 'florida' },
]

EntitiesConst.identifacationType = [
  { key: 1, label: 'EIN', value: 'ein' },
  { key: 2, label: 'PTIN', value: 'ptin' },
  { key: 3, label: 'ATIN', value: 'atin' },
  { key: 4, label: 'SSN', value: 'ssn' },
]

EntitiesConst.issuingCountry = [
  { key: 1, label: 'United States of America', value: 'usa' },
  { key: 2, label: 'London', value: 'london' },
  { key: 3, label: 'Quatar', value: 'quatar' },
  { key: 4, label: 'Singapore', value: 'singapore' },
]

EntitiesConst.issuingState = [
  { key: 1, label: 'California', value: 'california' },
  { key: 2, label: 'New York', value: 'new_york' },
  { key: 3, label: 'Texax', value: 'texax' },
  { key: 4, label: 'Florida', value: 'florida' },
]
EntitiesConst.addressType = [
  { key: 1, label: 'Home', value: 'home' },
  { key: 2, label: 'Office', value: 'office' },
]

EntitiesConst.tableActions = [
  {
    key: 1,
    title: 'Add Entity Group',
    link: '#',
    icon: Iconify.userRounded,
  },
  {
    key: 2,
    title: 'Add Single Entity',
    link: '#',
    icon: Iconify.user,
  },
  {
    key: 3,
    title: 'Add Multiple Entity',
    link: '#',
    icon: Iconify.users,
  },
  {
    key: 4,
    title: 'Email Beneficial Owners',
    link: '#',
    icon: Iconify.mail,
  },
  {
    key: 5,
    title: 'Bulk Edit Entities',
    link: '#',
    icon: Iconify.bulk,
  },
]

EntitiesConst.data = [
  {
    id_: 1,
    name: 'Private Equality Co-Invest Business, LLC',
    type: 'Limited Liability Company',
    state: 'Texas',
    latestFiling: 'EIN',
    filingStatus: true,
    submittedDate: '2022-01-28',
  },
  {
    id_: 2,
    name: 'Innovative Ventures Group, Inc.',
    type: 'Corporation',
    state: 'California',
    latestFiling: 'Annual Report',
    filingStatus: false,
    submittedDate: '2022-02-18',
  },
  {
    id_: 3,
    name: 'Tech Innovators LLC',
    type: 'Limited Liability Company',
    state: 'New York',
    latestFiling: 'Articles of Organization',
    filingStatus: false,
    submittedDate: '2022-02-14',
  },
  {
    id_: 4,
    name: 'Global Solutions Co.',
    type: 'Sole Proprietorship',
    state: 'Florida',
    latestFiling: 'Tax Return',
    filingStatus: true,
    submittedDate: '2022-01-15',
  },
  {
    id_: 5,
    name: 'Creative Ventures Ltd.',
    type: 'Limited Partnership',
    state: 'Massachusetts',
    latestFiling: 'Business Certificate',
    filingStatus: true,
    submittedDate: '2022-08-28',
  },
  {
    id_: 6,
    name: 'Eco-Friendly Innovations LLC',
    type: 'Limited Liability Company',
    state: 'Colorado',
    latestFiling: 'Environmental Impact Report',
    filingStatus: true,
    submittedDate: '2022-03-01',
  },
  {
    id_: 7,
    name: 'Digital Solutions Group, LLC',
    type: 'Limited Liability Company',
    state: 'Georgia',
    latestFiling: 'Trademark Registration',
    filingStatus: false,
    submittedDate: '2022-02-02',
  },
  {
    id_: 8,
    name: 'Pacific Ventures Corporation',
    type: 'Corporation',
    state: 'Hawaii',
    latestFiling: 'Financial Statements',
    filingStatus: true,
    submittedDate: '2022-02-28',
  },
  {
    id_: 9,
    name: 'Innovate Tomorrow Inc.',
    type: 'Corporation',
    state: 'Illinois',
    latestFiling: 'Business License Renewal',
    filingStatus: false,
    submittedDate: '2022-05-28',
  },
  {
    id_: 10,
    name: 'Sunshine Ventures Group, LLC',
    type: 'Limited Liability Company',
    state: 'Florida',
    latestFiling: 'Annual Meeting Minutes',
    filingStatus: true,
    submittedDate: '2022-01-05',
  },
]

export default EntitiesConst
