import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-400 h-[1px]"></div>

      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 footer-bg">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
          <div className='flex flex-[0.5] justify-center items-center'>
            <img src={logo} alt="logo" className="w-16 cursor-pointer" />
          </div>

          <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
            <p className='text-white text-base text-center mx-2 cursor-pointer hover:underline hover:underline-offset-2'>Market</p>
            <p className='text-white text-base text-center mx-2 cursor-pointer hover:underline hover:underline-offset-2'>Exchange</p>
            <p className='text-white text-base text-center mx-2 cursor-pointer hover:underline hover:underline-offset-2'>Tutorial</p>
            <p className='text-white text-base text-center mx-2 cursor-pointer hover:underline hover:underline-offset-2'>Wallets</p>
          </div>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
          <p className='text-slate-400 text-sm text-center'>@kazizo 2020</p>
          <p className='text-slate-400 text-sm text-center'>All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer