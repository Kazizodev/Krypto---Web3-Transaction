import { BsShieldFillCheck as Check } from 'react-icons/bs';
import { BiSearchAlt as Search } from 'react-icons/bi';
import { RiHeart2Fill as Heart } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row justify-start items-center p-3 m-2 cursor-pointer hover:shadow-xl glassmorphism'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='m-5 flex flex-col flex-1 text-white'>
      <h3 className='text-lg font-[500]'>{title}</h3>
      <p className='mt-2 text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center services-bg'>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Services that we <br />continue to improve</h1>
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard color="bg-[#2952e3]" title="Security Guranteed" icon={<Check fontSize={21} className='text-white' />} subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products." />
        <ServiceCard color="bg-[#8945F8]" title="Best Exchange Rates" icon={<Search fontSize={21} className='text-white' />} subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products." />
        <ServiceCard color="bg-[#f84550]" title="Fastest Transactions" icon={<Heart fontSize={21} className='text-white' />} subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products." />
      </div>
    </div>
  )
}

export default Services