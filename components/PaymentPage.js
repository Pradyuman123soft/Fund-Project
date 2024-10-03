"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
// import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'


const PaymentPage = ({ username }) => {
  // const {  } = useSession()
  // const { data: session } = useSession()
  const searchParams = useSearchParams()
  const [paymentform, setpaymentform] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([])
  const router = useRouter()
  useEffect(() => {
    getdata();
  }, [])

  useEffect(() => {
    const paymentDone = searchParams.get("paymentdone");

    if (paymentDone === "true") {
      console.log('Triggering toast');
      toast('Payment Done!', {
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
    router.push(`/${username}`)
  }, [searchParams]);


  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getdata = async (params) => {
    let u = await fetchuser(username)
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)
  }
  const pay = async (amount) => {
    // get the orderid
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get Me A chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }


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
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    <div className='relative w-full'>
      <img src={currentUser.coverpic} className='object-cover w-full md:h-[55vh] h-48' alt="Bcakground" />
      <img className='md:w-[6vw] w-[17vw] absolute -bottom-[51px] md:right-[45%] right-[40%]' src={currentUser.profilepic} alt="" />
    </div>
    <div className="info flex justify-center items-center flex-col pt-14 pl-8">
      <span className='text-xl font-bold'>@{username}</span>
      <span className='text-center'>lets help {username} to get a chai</span>
      <span>{payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised</span>
    </div>
    <div className="paymentinfo container mx-auto py-10 gap-5 flex flex-col md:flex-row justify-center items-center">
      <div className="donator md:w-[40vw] w-[80vw] rounded-md bg-slate-800 overflow-auto scrollbar-thumb-gray-950 scrollbar-thin scrollbar-track-gray-600 p-5 h-[45vh]">
        <h2 className='font-bold text-2xl'>Suppoters</h2>
        <ul className='mx-5 flex flex-col gap-3 text-sm py-4'>
          {payments.length == 0 && <li>No Payments have done Yet</li>}
          {payments.map((p, i) => {
            return <li key={i} className='flex gap-3 items-center'>
              <span><img className='w-10' src="/profile.webp" alt="" /></span>
              {p.name} donates ₹{p.amount} with message"{p.message}"</li>
          })}



        </ul>
      </div>
      <div className="payment md:w-[40vw] w-[80vw] bg-slate-800 rounded-md p-5 h-[45vh]">
        <h2 className='font-bold text-2xl'>Make a Payment</h2>
        <div className='mx-5 flex flex-col py-4 gap-2'>
          <input onChange={handlechange} className='bg-slate-700 w-full rounded-lg pl-4' value={paymentform && paymentform.name ? paymentform.name : ""} placeholder='Enter Name' type="text" name="name" id="Name" />
          <input onChange={handlechange} className='bg-slate-700 w-full rounded-lg pl-4' value={paymentform && paymentform.message ? paymentform.message : ""} placeholder='Enter Message' type="text" name="message" id="Name" />
          <input onChange={handlechange} className='bg-slate-700 w-full rounded-lg pl-4' value={paymentform && paymentform.amount ? paymentform.amount : ""} placeholder='Enter amount' type="number" name="amount" id="amount" />
          <button
            onClick={() => {
              pay(Number.parseInt(paymentform.amount));
            }}
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 disabled:bg-slate-500 disabled:from-slate-600"
            disabled={
              paymentform.name?.length < 3 ||
              paymentform.message?.length < 4 ||
              !paymentform.amount || isNaN(Number(paymentform.amount))
            }
          >
            Pay
          </button>


          <div className='flex gap-3'>
            <button className='bg-slate-700 rounded-lg h-9 w-24' onClick={() => { pay(10) }}>Pay ₹10</button>
            <button className='bg-slate-700 rounded-lg h-9 w-24' onClick={() => { pay(20) }}>Pay ₹20</button>
            <button className='bg-slate-700 rounded-lg h-9 w-24' onClick={() => { pay(30) }}>Pay ₹30</button>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default PaymentPage
