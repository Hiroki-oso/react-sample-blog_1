import React, {useState} from 'react'

function RecruitmentAreas() {
  const [indexHovered, setIndexHovered] = useState();
  const data = [
    {
      title : 'Remote',
      description : 'Remote work means working from anywhere other than the office, which can be your home, cafe, or just a coworking space.',
      image : 'https://sheyhiring.netlify.app/images/remote.png',
    },
    {
      title : 'Contact Based',
      description : "Contractual Jobs are where you have to work for a specific duration of time, like 1 month, 3 months, 6 months, or even a year, depending upon the hiring company's requirement.",
      image : 'https://sheyhiring.netlify.app/images/contract.png',
    },
    {
      title : 'Permanent',
      description : 'Permanent employment is an employment relationship where an individual works for an employer and receives payment directly from them',
      image: 'https://sheyhiring.netlify.app/images/permenent.png',
    },
  ]
  return (
    <div class="my-20">
    <h1 className="text-center text-3xl text-primary font-semibold">
    RecruitmentAreas
    </h1>

    <div className="flex gap-10 sm:flex-col items-center">

     <div className="flex flex-col gap-10">
        <p className="text-gray-600 text-md">
          Specialization, sometimes called business dexterity, refers to the
          ability to produce a good or a service using native resources and
          focus on understanding the production process of a product and its
          industry.Countries specialize in the production of certain goods and
          services, thereby gaining a competitive advantage.
        </p>
        <p className="text-gray-600 text-md">
          Productive 
          efficiency is the outcome of specialization because
          native resources are used effectively to produce a good or a service
          that foreign countries need more resources to produce or they cannot
          produce at all. In this context, specializing enables international
          trade, i.e. the exchange of goods between foreign countries.
        </p>
     </div>
     <img 
        className="h-[500px]" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fhm4NZcsCFnd78wF0qQCIa2WpauXDwZPag&usqp=CAU"
        alt="" 
     />
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-20 mt-20 items-start">
      {data.map((item, index) => {
        return (
          <div className="border-2 border-primary rounded flex flex-col gap-5 justify-center"
            onMouseEnter={() => setIndexHovered(index)}
            onMouseLeave={() => setIndexHovered(null)}
          >
          <h1 className="text-2xl font-semibold text-left bg-primary text-white px-5 py-2 rounded max-w-max -ml-7 mt-7">
            {item.title}
            </h1>         
            <div className='flex justify-center'>
              <img src={item.image} alt="" className="h-20 w-20" />
            </div>

              <p
                 className={`h-0 overflow-hidden transistion-all duration-500  ${
                 index===indexHovered && 'h-44 bg-primary text-white p-5 m-5 rounded'
                }`}
                  >{item.description}
              </p>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default RecruitmentAreas;