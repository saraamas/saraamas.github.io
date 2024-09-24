import React from 'react';
import Header from './Header';

const LandingPage = () => {
  return (
    <section className="LandingPage h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
        <Header />
      <div className="animation absolute w-full h-full inset-0 flex items-center justify-center">
      <div className="justify-center flex">
      <img
          src="/images/Me.png"
          style={{height:250,width:250}}
          alt="Sara Masmoudi"
        />
      </div>      
      </div>
      <div className="intro text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-bounce font-poppins">Hi! I'm Sara M</h1>
        <h3 className="text-2m md:text-3l font-extrabold mb-7  font-mono">Deeply passionate about DevOps, cloud technologies, and software development.<p> I aim to
        drive innovative solutions<p/> that contribute to the success of forward-thinking organizations.</p></h3>
      </div>
    </section>
  );
};

export default LandingPage;
