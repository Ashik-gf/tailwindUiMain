import { Formik } from 'formik'

// Custom Modules
import InputText from '@shared/components/inputs/InputText'
import InputPassword from '@shared/components/inputs/InputPassword'
import { useLoginMutation } from '@store/auth/authApi'
import { Iconify } from '@shared/constants/iconify.constant'

const Register = () => {
  const [login] = useLoginMutation()

  function registerHandler(values, { resetForm }) {
    delete values?.remember
    login(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        mobile: '',
        email: '',
        password: '',
      }}
      // validationSchema={createUserSchema}
      onSubmit={registerHandler}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <form
          onSubmit={handleSubmit}
          className='card mt-5 rounded-lg p-5 lg:p-7'
        >
          <InputText
            value={values.name}
            error={errors.name}
            icon={Iconify.name}
            label='Name'
            name='name'
            placeholder='Enter Name'
            onChange={handleChange}
            required
          />
          <InputText
            value={values.mobile}
            error={errors.mobile}
            icon={Iconify.phone}
            label='Mobile'
            name='mobile'
            placeholder='Enter Mobile Number'
            onChange={handleChange}
            required
          />
          <InputText
            value={values.email}
            error={errors.email}
            icon={Iconify.mail}
            label='Email'
            name='email'
            placeholder='Enter Email'
            onChange={handleChange}
            required
          />
          <InputPassword
            value={values.password}
            error={errors.password}
            label='Password'
            name='password'
            placeholder='Enter Password'
            onChange={handleChange}
            required
          />
          {/* Submit Button */}
          <button
            type='submit'
            className='btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
          >
            Register
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Register
