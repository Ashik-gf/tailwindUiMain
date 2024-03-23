import NoRecordsFound from './components/NoRecordsFound'
import UploadEntities from './components/UploadEntities'
import CreateBdiReport from './components/CreateBdiReport'
import { useUploadEntitiesType } from '@shared/hooks/useUploadEntitiesType'

const Entities = () => {
  const { type } = useUploadEntitiesType()

  return type === 'upload' ? (
    <UploadEntities />
  ) : type === 'create' ? (
    <CreateBdiReport />
  ) : (
    <NoRecordsFound />
  )
}

export default Entities
