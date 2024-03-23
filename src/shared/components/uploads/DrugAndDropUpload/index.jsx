import { Dropzone, FileItem } from '@dropzone-ui/react'
import { toast } from 'react-hot-toast'

const DrugAndDropUpload = ({ fileName, files, setFiles, maxFiles }) => {
  return (
    <Dropzone
      style={{ background: 'transparent' }}
      minHeight='200px'
      maxFiles={maxFiles}
      maxFileSize={2097152}
      value={files}
      header={true}
      view='list'
      accept='image/png, image/jpg, image/jpeg'
      onDrop={(acceptedFiles) => {
        // Check Error
        if (acceptedFiles[0]?.errors.length) {
          toast.error(acceptedFiles[0].errors[0])
        }

        if (acceptedFiles.length === 0 && files.length === maxFiles) return

        const filteredFiles = acceptedFiles.filter((item) => item.valid)
        setFiles(fileName, [...files, ...filteredFiles])
      }}
    >
      {files.map((file, index) => (
        <span key={index}>
          <FileItem
            {...file}
            onDelete={(id) =>
              setFiles(
                fileName,
                files.filter((x) => x.id !== id)
              )
            }
            preview
            info
          />
        </span>
      ))}

      {!files.length && <span>Drop files here or Click to browse</span>}
    </Dropzone>
  )
}

export default DrugAndDropUpload
