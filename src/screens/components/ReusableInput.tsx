import { useState } from 'react';

const ReusableInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
    <section className='bg-indigo-50'>
      <div className='container px-6 py-10 w-150 bg-gray-200'>
        <div className='bg-blue-100 px-6 py-8 shadow-md rounded-md border m-4 md:m-0'>
            <form action="">
              <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                  Username
                  </label>
                  <input
                  type='email'
                  id='username'
                  name='username'
                  className='border rounded w-full py-2 px-3 mb-2 text-gray-700'
                  placeholder='Please enter your username.'
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2'>
                  Password
                  </label>
                  <input
                  type='password'
                  id='password'
                  name='password'
                  className='border rounded w-full py-2 px-3 mb-2 text-gray-700'
                  placeholder='Please enter your password.'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReusableInput
