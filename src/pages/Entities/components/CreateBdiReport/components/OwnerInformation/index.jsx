import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'
import ReportingCompany from './components/ReportingCompany/index'
import CompanyApplicantOne from './components/CompanyApplicantOne'
import CompanyApplicantTwo from './components/CompanyApplicantTwo'
import BeneficialOwnerOne from './components/BeneficialOwnerOne'
import BeneficialOwnerTwo from './components/BeneficialOwnerTwo'
import Accordion from '@shared/components/Accordion'
import AccordionItem from '@shared/components/Accordion/AccordionItem'

const OwnerInformation = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-semibold'>Beneficial Owner Information</h1>
      <p className='pt-2 text-slate-500 dark:text-navy-200 text-sm'>
        Enter the beneficial Owner information for this reporting company.
        Information can be submitted by either a FinCEN ID Number, or you can
        upload a validation document.
      </p>
      <div className='my-4 h-px  bg-slate-200 dark:bg-navy-500'></div>
      <div className='flex w-full space-x-2 justify-end mt-2'>
        <button
          type={'submit'}
          className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-2 border'
        >
          <Icon icon={Iconify.add} className='h-5 w-5' />
          <span>Add New Beneficial Owner</span>
        </button>
      </div>

      {/* ------------------- */}
      <Accordion>
        <AccordionItem title='Reporting Company'>
          <ReportingCompany />
        </AccordionItem>

        <AccordionItem title='Company Applicant #1'>
          <CompanyApplicantOne />
        </AccordionItem>

        <AccordionItem title='Company Applicant #2'>
          <CompanyApplicantTwo />
        </AccordionItem>

        <AccordionItem title='Beneficial Owner #1'>
          <BeneficialOwnerOne />
        </AccordionItem>

        <AccordionItem title='Beneficial Owner #2'>
          <BeneficialOwnerTwo />
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default OwnerInformation
