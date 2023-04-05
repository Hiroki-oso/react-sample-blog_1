import Header from './components/Header';
import Intro from './components/Intro';
import CompanyInfo from './components/CompanyInfo';
import Specializations from './components/Specializations';
import RecruitmentAreas from './components/RecruitmentAreas';
import Numbers from './components/Numbers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';


function App() {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setshowSplashScreen(false);
      sessionStorage.setItem("showSplashScreen", "false");
    }, 5000)
  }, [])
  return (
    <>
    {!JSON.parse(sessionStorage.getItem("showSplashScreen")) !== false && showSplashScreen && (
      <div className="absolute inset-0 bg-[#1C1C1C] h-screen w-screen flex-items-center justify-center overflow-hidden">
        <SplashScreen />
      </div>
    )}

    {!showSplashScreen && (<div className="mx-20 sm:mx-0">
    <div className="p-5">
      <Header />
      <Intro />
      <CompanyInfo />
      <Specializations />
      <RecruitmentAreas />
      <Numbers />
      <ContactUs />
      </div>
    </div>)}
    <Footer />
    </>
  );
}

export default App;
