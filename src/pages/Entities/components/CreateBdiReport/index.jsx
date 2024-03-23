import FilingProcess from './components/FilingProcess'
import MissingDocuments from './components/MissingDocuments'
import OwnerInformation from './components/OwnerInformation'

const CreateBdiReport = () => {
  return (
    <div className=' mt-4 transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6 mx-4 grid grid-cols-12 '>
      {/* Filing process */}
      <div className='card p-4 col-span-12 md:col-span-4'>
        <FilingProcess />
      </div>

      {/* Beneficial Owner Information */}
      <div className='card p-4 col-span-12 md:col-span-8'>
        <OwnerInformation />
      </div>

      {/* Missing Document */}
      <div className='card p-4 col-span-12 md:col-span-4'>
        <MissingDocuments />
      </div>
    </div>
  )
}

export default CreateBdiReport
