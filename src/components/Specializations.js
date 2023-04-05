import React, {useState} from 'react'

function Specializations() {
  const [indexHovered, setIndexHovered] = useState();
  const data = [
    {
      title : 'It / Software',
      description : 'We have a team of dedicated IT professionals who are experts in IT and software development.',
      image : 'https://sheyhiring.netlify.app/images/it.png',
    },
    {
      title : 'Medical',
      description : 'Medical is the care of the body, especially the internal organs.',
      image : 'https://sheyhiring.netlify.app/images/medical.png',
    },
    {
      title : 'Manufacturing',
      description : 'Manufacturing is the process of producing a product from raw material',
      image: 'https://sheyhiring.netlify.app/images/manufacture.png',
    },
    {
      title : 'Ecommerce',
      description : 'Ecommerce is the buying and selling of goods and services through a web site.',
      image: "https://sheyhiring.netlify.app/images/ecommerce.png"
    }
  ]
  return (
    <div class="my-20">
    <h1 className="text-center text-3xl text-primary font-semibold">
    Specialization
    </h1>
    <div className="flex gap-10 sm:flex-col items-center">
    <img className="h-[500px]" src="https://media.istockphoto.com/id/1024602890/ja/%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC/%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E5%9B%B3%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88%E4%BC%9A%E8%AD%B0%E3%82%B3%E3%83%BC%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%AD%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%83%E3%83%95%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E4%BC%9A%E7%A4%BE%E4%BA%BA%E6%9D%90%E5%B0%82%E9%96%80%E6%80%A7%E3%82%B0%E3%83%A9%E3%83%95%E5%88%86%E6%9E%90%E5%BE%93%E6%A5%AD%E5%93%A1%E6%95%99%E8%82%B2%E7%9F%A5%E8%AD%98%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97.jpg?s=612x612&w=0&k=20&c=PiWJPasO3XBLf5ch3GpEgikvDMhTM8Y1XkFdrkqZjsQ="
     alt="" 
     />
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
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-1 gap-20 mt-20 items-start">
      {data.map((item, index) => {
        return (
          <div className="border-2 border-secondary rounded flex flex-col gap-5 items-center justify-center"
            onMouseEnter={() => setIndexHovered(index)}
            onMouseLeave={() => setIndexHovered(null)}
          >
            <div className="bg-white -mt-10 p-10 border-2 border-primary rounded-full">
              <img src={item.image} alt="" className="h-20 w-20" />
            </div>
              <h1 className="text-2xl font-semibold text-primary">{item.title}</h1>
                <p
                 className={`h-0 overflow-hidden transistion-all duration-500 ${index===indexHovered && 'h-32 p-5'}`}>{item.description}</p>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Specializations;