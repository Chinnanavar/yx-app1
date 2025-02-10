import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Mail = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      mobile: yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Mobile number is required'),
      password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('https://yx-bpp-yashs-projects-21164649.vercel.app/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
        const data = await response.json()
        alert(data.message)
        if (data.success) resetForm()
      } catch (error) {
        alert(error.message)
      }
    },
  });
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" {...formik.getFieldProps('name')} /> <br /><br />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

        <label>Email:</label>
        <input type="email" name="email" {...formik.getFieldProps('email')} /> <br /><br />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

        <label>Mobile:</label>
        <input type="text" name="mobile" {...formik.getFieldProps('mobile')} /> <br /><br />
        {formik.touched.mobile && formik.errors.mobile && <div>{formik.errors.mobile}</div>}

        <label>Password:</label>
        <input type="password" name="password" {...formik.getFieldProps('password')} /> <br /><br />
        {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Mail