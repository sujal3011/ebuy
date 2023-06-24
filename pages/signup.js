import { React,useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUp = () => {

  const router = useRouter();

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirm_password: "" });

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (credentials.confirm_password == credentials.password) {

      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })

      });

      const json = await response.json();
      console.log(json);
      setCredentials({ name: "", email: "", password: "", confirm_password: "" });
      if(json.success===true){
        localStorage.setItem("token",json.token);
        router.push('http://localhost:3000')
      }

    }
    else{
      console.log("Confirm paswsord must be same as original passowrd");
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">

          <div>
            <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input value={credentials.name} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleOnChange} />
            </div>
          </div>

          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input value={credentials.email} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleOnChange} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input value={credentials.password} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleOnChange} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            </div>
            <div className="mt-2">
              <input value={credentials.confirm_password} id="confirm_password" name="confirm_password" type="password" autoComplete="confirm_password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleOnChange} />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</Link>
        </p>
      </div>
    </div>
  )

}

export default SignUp