import Head from "next/head"
import Image from "next/image"
import bg from '@/assets/netflix_bg.jpg'
import logo from '@/assets/netflix_logo.svg'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../../hooks/useAuth"

interface Inputs {
  email: string,
  password: string
}

const Login = () => {

  const [login, setLogin] = useState(false)
  const {signIn, signUp} = useAuth()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async({email, password}) => {
    if(login) {
      await signIn(email, password)
    }else {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix | Login</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Image 
        src={bg}
        alt="nexflix_bg"
        fill
        style={{ objectFit: 'cover' }}
        className="-z-10 opacity-60 sm!hidden"
      />

      <Image 
        src={logo} 
        alt="nexflix_logo"
        height={25}
        className="cursor-pointer object-contain absolute left-4 top-4 md:left-10 md:top-6"
      />

      <form onSubmit={handleSubmit(onSubmit)} action="" className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-o md:max-w-md md:px-14 ">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="email" className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" {...register("email", {required: true})}/>
            {errors.email && (
              <span className="p-1 text-[13px] font-light text-red-500">please enter a valid email</span>
            )}
          </label>

          <label htmlFor="password" className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" {...register("password", {required: true})}/>
            {errors.password && (
              <span className="p-1 text-[13px] font-light text-red-500">your password must contain between 4 and 60 characters</span>
            )}
          </label>
        </div>

        <button type="submit" className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={() => setLogin(true)}>
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{'  '}
          <button className="text-white hover:underline" onClick={() => setLogin(false)}>
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
