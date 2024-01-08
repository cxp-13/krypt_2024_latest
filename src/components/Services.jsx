import { BsShieldFillCheck } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { RiHeart2Fill } from "react-icons/ri"


const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (<div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1 ">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>

  </div>)
}

const Services = () => {
  return (
    <div className="md:flex-row flex-col flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-end">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icons={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and mainting the quality of our products."
        />


      </div>

    </div>
  )
}

export default Services