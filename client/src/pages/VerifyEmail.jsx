import React from 'react'

const verifyEmail = () => {
  return (
    <div className='relative w-full h-[760px] overflow-hidden'>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-blue-500'> ✅ Check Your Email </h2>
            <p className='mt-4 text-gray-600'> We have sent you a verification email. Please check your inbox and click on the link to verify your email address. </p>

        </div>

      </div>
    </div>
  )
}

export default verifyEmail