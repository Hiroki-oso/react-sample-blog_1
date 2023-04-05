import React from 'react';
import CountUp from 'react-countup';
// import CountUp from 'react-countup/build/CountUp'
import VisibilitySensor from "react-visibility-sensor";

const Numbers = () => {
  const data = [
    {
      text : "Aspirants",
      value : "1560",
    },
    {
      text : "Companies",
      value : "25",
    },
    {
      text : "locations",
      value : "13",
    }
  ]
  return (
    <div>
    <h1 className="text-3xl font-semibold my-10 text-primary text-center">Our statistics</h1>
       <div className="flex sm:flex-col sm:grid-cols-1 border-primary rounded p-10 border-2 justify-between hover:bg-primary">
          {data.map((item, index) => (
              <div>
                <h1 className="text-7xl text-secondary">
                  <CountUp start={0} end={item.value}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  </h1>
                  <h1 className="text-2xl font-semibold text-yellow-600">{item.text}</h1>
              </div>
            ))}
  
       </div>
    </div>
  );
}

export default Numbers