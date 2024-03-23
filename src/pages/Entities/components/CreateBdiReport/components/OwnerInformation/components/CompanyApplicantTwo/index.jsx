import { Formik } from 'formik'

// Custom Modules
import InputText from '@shared/components/inputs/InputText'
import SelectOption from '@shared/components/selectOptions/SelectOption'
import EntitiesConst from '@shared/constants/entities.constant'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'
import DrugAndDropUpload from '@shared/components/uploads/DrugAndDropUpload'
import InputDate from '@shared/components/inputs/InputDate'

const CompanyApplicantTwo = () => {
  return (
    <Formik
      initialValues={{
        finCenIdNumber: '',
        identificationDocument: [],
        identifacationType: '',
        identifacationNumber: '',
        issuingCountry: '',
        issuingState: '',
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        addressLineOne: '',
        addressLineTwo: '',
        country: '',
        postCode: '',
        city: '',
        state: '',
        addressType: '',
        dob: '',
      }}
      // validationSchema={loginSchema}
      // onSubmit={loginHandler}
    >
      {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
        <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-5'>
          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            FinCEN ID
          </p>
          <InputText
            className='col-span-12'
            value={values.finCenIdNumber}
            error={errors.finCenIdNumber}
            label='FinCEN ID Number'
            name='finCenIdNumber'
            placeholder='Enter FinCEN ID Number'
            onChange={handleChange}
            optional
            required
          />

          <p className='col-span-12 text-xs text-slate-400 dark:text-navy-100 flex items-center space-x-2'>
            <span>
              IF YOU DO NOT HAVE A FINCEN ID NUMBER, PLEASE PROVIDE INDENTIFYING
              DOCUMENT AND PERSONAL INFORMATION BELLOW
            </span>
          </p>

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Form of Identification
          </p>

          <div className='col-span-12'>
            <DrugAndDropUpload
              fileName='identificationDocument'
              files={values.identificationDocument}
              setFiles={setFieldValue}
              maxFiles={5}
            />
          </div>

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='identifacationType'
            label='Identification Type'
            placeholder='Select Identification Type'
            value={values.identifacationType}
            error={errors.identifacationType}
            options={EntitiesConst.identifacationType}
          />

          <InputText
            className='col-span-6'
            value={values.identifacationNumber}
            error={errors.identifacationNumber}
            label='Identificatoin Number'
            name='identifacationNumber'
            placeholder='Enter Identificatoin Number'
            onChange={handleChange}
            required
          />

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='issuingCountry'
            label='Issuing Country/Jurisdication'
            placeholder='Select Issuing Country'
            value={values.issuingCountry}
            error={errors.issuingCountry}
            options={EntitiesConst.issuingCountry}
          />

          <SelectOption
            className='col-span-6'
            handleChange={setFieldValue}
            name='issuingState'
            label='Issuing State'
            placeholder='Select Issuing State'
            value={values.issuingState}
            error={errors.issuingState}
            options={EntitiesConst.issuingState}
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Personally Identification Informtion
          </p>
          <InputText
            className='col-span-3'
            value={values.firstName}
            error={errors.firstName}
            label='First Name'
            name='firstName'
            placeholder='Enter First Name'
            onChange={handleChange}
            required
          />

          <InputText
            className='col-span-3'
            value={values.middleName}
            error={errors.middleName}
            label='Middle Name'
            name='middleName'
            placeholder='Enter Middle Name'
            onChange={handleChange}
            optional
          />

          <InputText
            className='col-span-3'
            value={values.lastName}
            error={errors.lastName}
            label='Last Name'
            name='lastName'
            placeholder='Enter Last Name'
            onChange={handleChange}
            required
          />

          <InputText
            className='col-span-3'
            value={values.suffix}
            error={errors.suffix}
            label='Suffix'
            name='suffix'
            placeholder='Enter Suffix'
            onChange={handleChange}
            optional
          />

          <InputDate
            className='col-span-12'
            value={values.dob}
            error={errors.dob}
            label='Date of Birth'
            name='dob'
            placeholder='Enter Date of Birth'
            onChange={handleChange}
            optional
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Address
          </p>
          <SelectOption
            className='col-span-12'
            handleChange={setFieldValue}
            name='country'
            label='Country'
            placeholder='Select Country'
            value={values.country}
            error={errors.country}
            options={EntitiesConst.country}
          />
          <InputText
            className='col-span-12'
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
            className='col-span-12'
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
            value={values.postCode}
            error={errors.postCode}
            label='Zip/Postal Code'
            name='postCode'
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
            label='State/Province/Region'
            placeholder='Select State'
            value={values.state}
            error={errors.state}
            options={EntitiesConst.state}
          />

          <p className='col-span-12 text-base font-medium text-slate-700 dark:text-navy-100'>
            Additional Information
          </p>
          <SelectOption
            className='col-span-12'
            handleChange={setFieldValue}
            name='addressType'
            label='Address Type'
            placeholder='Select Address Type'
            value={values.addressType}
            error={errors.addressType}
            options={EntitiesConst.addressType}
          />
          <div className='flex items-center gap-3 justify-end col-span-12'>
            <button type='button' className='flex space-x-1 btn-indigo py-2'>
              <Icon icon={Iconify.delete} className='h-5 w-5' />
              <span>Remove Applicant</span>
            </button>

            <button
              type='submit'
              className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-2 border'
            >
              <Icon icon={Iconify.add} className='h-5 w-5' />
              <span>Add New Company Applicant</span>
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default CompanyApplicantTwo
