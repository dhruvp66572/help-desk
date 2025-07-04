import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white shadow-md py-4 mt-5">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Helpdesk System. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Developed by Dhruv Prajapati
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer