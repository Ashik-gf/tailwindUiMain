import { Formik } from 'formik'

// Custom Modules
import InputText from '@shared/components/inputs/InputText'
import SelectOption from '@shared/components/selectOptions/SelectOption'
import EntitiesConst from '@shared/constants/entities.constant'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'
import InputCheckbox from '@shared/components/inputs/InputCheckbox'

const ReportingCompany = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        entityType: '',
        country: '',
        usState: '',
        filingType: '',
        entityCreatedBefore: '',
        tradeOrDBA: '',
        taxIdentifacationType: '',
        taxIdentifacationNumber: '',
        addressLineOne: '',
        addressLineTwo: '',
        posCode: '',
        city: '',
        state: '',
        foreignPooledInvestment: '',
      }}
      // validationSchema={loginSchema}
      // onSubmit={loginHandler}
    >
      {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
        <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-5'>
          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Company Details
          </p>
          <InputText
            className='col-span-6'
            value={values.name}
            error={errors.name}
            label='Full Legal Name'
            name='name'
            placeholder='Enter Full Name'
            onChange={handleChange}
            required
          />
          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='entityType'
            label='Entity Type'
            placeholder='Enter Type of Business'
            value={values.entityType}
            error={errors.entityType}
            options={EntitiesConst.entityType}
          />

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='country'
            label='Country/Jurisdication of Formation'
            placeholder='Select State of Formation'
            value={values.country}
            error={errors.country}
            options={EntitiesConst.country}
          />

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='usState'
            label='US State/Jurisdication of Formation'
            placeholder='Select State of Formation'
            value={values.usState}
            error={errors.usState}
            options={EntitiesConst.usState}
          />

          <SelectOption
            className='col-span-12'
            handleChange={setFieldValue}
            name='filingType'
            label='Filing Type'
            placeholder='Select Filing Type'
            value={values.filingType}
            error={errors.filingType}
            options={EntitiesConst.filingType}
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100 flex items-center space-x-2'>
            <span>Was this entity created before january 2024</span>
            <Icon icon={Iconify.information} />
          </p>

          <div className='col-span-12 space-x-5'>
            <InputCheckbox
              value={values.entityCreatedBefore}
              error={errors.entityCreatedBefore}
              label='Yes'
              name='entityCreatedBefore'
              onChange={handleChange}
              required
            />

            <InputCheckbox
              value={values.entityCreatedBefore}
              error={errors.entityCreatedBefore}
              label='No'
              name='entityCreatedBefore'
              onChange={handleChange}
              required
            />
          </div>

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Additional Information
          </p>
          <InputText
            className='col-span-12'
            value={values.tradeOrDBA}
            error={errors.tradeOrDBA}
            label='Trade name or DBA name'
            subLabel='Multiple names should be saparated by a comma'
            name='tradeOrDBA'
            placeholder='Enter trade or DBA name'
            onChange={handleChange}
            required
            optional
          />

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='taxIdentifacationType'
            label='Tax Identification Type'
            placeholder='Select Tax Identification Type'
            value={values.taxIdentifacationType}
            error={errors.taxIdentifacationType}
            options={EntitiesConst.taxIdentifacationType}
          />

          <InputText
            className='col-span-6'
            value={values.taxIdentifacationNumber}
            error={errors.taxIdentifacationNumber}
            label='Tax Identificatoin Number'
            name='taxIdentifacationNumber'
            placeholder='Enter Tax Identificatoin Number'
            onChange={handleChange}
            required
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Current US Address
          </p>
          <InputText
            className='col-span-6'
            value={values.addressLineOne}
            error={errors.addressLineOne}
            label='Address Line 1'
            subLabel='Street Address, P.O. box, Company Name, C/O'
            name='addressLineOne'
            placeholder='Enter Address Line 1'
            onChange={handleChange}
            required
          />

          <InputText
            className='col-span-6'
            value={values.addressLineTwo}
            error={errors.addressLineTwo}
            label='Address Line 2'
            subLabel='Street Address, P.O. box, Company Name, C/O'
            name='addressLineTwo'
            placeholder='Enter Address Line 2'
            onChange={handleChange}
            required
            optional
          />

          <InputText
            className='col-span-4'
            value={values.posCode}
            error={errors.posCode}
            label='Zip/Postal Code'
            name='posCode'
            placeholder='Enter Zip/Postal Code'
            onChange={handleChange}
            required
          />

          <InputText
            className='col-span-4'
            value={values.city}
            error={errors.city}
            label='City'
            name='city'
            placeholder='Enter City'
            onChange={handleChange}
            required
          />

          <SelectOption
            className='col-span-4'
            handleChange={setFieldValue}
            name='state'
            label='State'
            placeholder='Select State'
            value={values.state}
            error={errors.state}
            options={EntitiesConst.state}
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100 flex items-center space-x-2'>
            <span>
              Is reporting company a forign pooled investment vehicle? Please
              answer yes or no
            </span>
            <Icon icon={Iconify.information} />
          </p>

          <div className='col-span-12 space-x-5'>
            <InputCheckbox
              value={values.foreignPooledInvestment}
              error={errors.foreignPooledInvestment}
              label='Yes'
              name='foreignPooledInvestment'
              onChange={handleChange}
              required
            />

            <InputCheckbox
              value={values.foreignPooledInvestment}
              error={errors.foreignPooledInvestment}
              label='No'
              name='foreignPooledInvestment'
              onChange={handleChange}
              required
            />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default ReportingCompany
