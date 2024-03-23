import { Formik } from 'formik'

// Custom Modules
import InputText from '@shared/components/inputs/InputText'
import InputPassword from '@shared/components/inputs/InputPassword'
import { useLoginMutation } from '@store/auth/authApi'
import { loginSchema } from '@shared/schemas/user.schema'
import { Iconify } from '@shared/constants/iconify.constant'

const Login = () => {
  const [login] = useLoginMutation()

  function loginHandler(values, { resetForm }) {
    delete values?.remember
    login(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={{
        email: 'nazmul@gmail.com',
        password: 'Password@1234',
        remember: false,
      }}
      validationSchema={loginSchema}
      onSubmit={loginHandler}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <form
          onSubmit={handleSubmit}
          className='card mt-5 rounded-lg p-5 lg:p-7'
        >
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
          {/* Remember Me | Forget Password */}
          {/* <div className='mt-4 flex items-center justify-between space-x-2'>
            <InputCheckbox
              label='Remember Me'
              value={values.remember}
              error={errors.remember}
              name='remember'
              onChange={handleChange}
            />
            <Link
              to=''
              className='text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100'
            >
              Forgot Password?
            </Link>
          </div> */}

          <button
            type='submit'
            className='btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
          >
            Sign In
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Login
