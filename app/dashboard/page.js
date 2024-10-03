"use client"
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session, update } = useSession();
  const [form, setform] = useState({})
  const router = useRouter()
  useEffect(() => {
    document.title = "Login - Get me a chai"
    if (session) {
      getdata();
    } else {
      router.push('/login')
    }
  }, [session, router])

  const getdata = async () => {
    if (session?.user?.email) {
      let Name = session.user.email.split("@")[0];
      let u = await fetchuser(Name)
      setform(u)
    } else {
      console.error("User Email not available");

    }
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target);
    const plainData = Object.fromEntries(formData.entries());

    if (session?.user?.email) {
      let result = await updateProfile(plainData, session.user.name);

      if (result.error) {
        console.error(result.error);
      } else {
        toast('Profile Updated!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      console.error("User email not available");
    }
  };


  return (<>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
      transition="Bounce"
    >
    </ToastContainer>
    <div className='container mx-auto flex flex-col gap-5 items-center'>
      <h1 className='font-bold md:text-3xl text-2xl'>Welcome To your Dashbard</h1>
      <div className="form">
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">Full Name</label>
            <input value={form && form.name ? form.name : ""} onChange={handleChange} type="text" className='bg-slate-700 rounded-md pl-4' name="name" id="name" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">Email</label>
            <input value={form && form.email ? form.email : ""} onChange={handleChange} type='email' className='bg-slate-700 rounded-md pl-4' name="email" id="email" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">Username</label>
            <input value={form && form.username ? form.username : ""} onChange={handleChange} type="text" className='bg-slate-700 rounded-md pl-4' name="username" id="username" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">Profile Pictue URL</label>
            <input value={form && form.profilepic ? form.profilepic : ""} onChange={handleChange} type="url" className='bg-slate-700 rounded-md pl-4' name="profilepic" id="profilepic" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">Cover Picture URL</label>
            <input value={form && form.coverpic ? form.coverpic : ""} onChange={handleChange} type="url" className='bg-slate-700 rounded-md pl-4' name="coverpic" id="coverpic" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">RazorPay ID</label>
            <input value={form && form.razorpayId ? form.razorpayId : ""} onChange={handleChange} type="text" className='bg-slate-700 rounded-md pl-4' name="razorpayId" id="razorpayId" />
          </div>
          <div className='flex flex-col md:w-96 w-64'>
            <label htmlFor="Full Name">RazorPay Secret</label>
            <input value={form && form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} type="text" className='bg-slate-700 rounded-md pl-4' name="razorpaySecret" id="razorpaySecret" />
          </div>
          <div>
            <button type="submit" className="text-white bg-gradient-to-r md:w-96 w-64 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">save
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Dashboard

