import React from 'react'

const footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className='bg-slate-700 h-20 text-white text-lg flex text-center justify-center items-center'>
      <p> Copyright &copy;{currentYear} Get Me a Chai - All Rights Reserved</p>
    </footer>
  )
}

export default footer
