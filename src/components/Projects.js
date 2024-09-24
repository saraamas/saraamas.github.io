import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/pagination'; // Import Pagination module styles
import { Navigation, Pagination } from 'swiper/modules'; // Optional for navigation and pagination
import "../App.css";

const Projects = () => {
  return (
    <section id="projects" className="projects h-screen p-6 flex flex-col items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination]}  // Add optional modules
        spaceBetween={30}  // Space between slides
        slidesPerView={1}  // Number of visible slides
        navigation  // Enable navigation arrows
        pagination={{ clickable: true }}  // Enable pagination dots
        style={{
          color: '#f2a65a',  // Text color inside the swiper
        }}
        className="w-full col-6 max-w-5xl"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        <div className="shadow-lg rounded-lg p-6 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">SMARTfridge</h3>
            <p className="text-white mb-4">Manage your refrigerator smartly with real-time monitoring and ML integration.</p>
            <p className="text-white">Features: Stock consultation, shopping list generation, recipe suggestions.</p>
            <p className="text-white mt-2">Technologies: Arduino, Raspberry Pi, Scikit-Learn.</p>
          </div>
          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Paincare</h3>
            <p className="text-white mb-4">Empowering women with endometriosis through a dedicated platform.</p>
            <p className="text-white">Features: Symptom tracking, personalized diagnostics, and more.</p>
            <p className="text-white mt-2">Technologies: J2EE, Bootstrap.</p>
          </div>
          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">BigBand</h3>
            <p className="text-white mb-4">Microservices mobile cross-platform connecting music bands with event hosts,featuring real-time availability tracking for bands
            and event management for hosts.The application was fully containerized using Docker and deployed locally with
            plans for cloud deployment.</p>
            <p className="text-white mt-2">Technologies: SpringBoot,MongoDB, ReactNative.</p>
          </div>
          <div className="shadow-lg rounded-lg p-6 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Volunteer</h3>
            <p className="text-white mb-4">A platform connecting volunteers with associations.</p>
            <p className="text-white">Features: Event posting, volunteer applications, and interaction management.</p>
            <p className="text-white mt-2">Technologies: UML, JEE.</p>
          </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          
        <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">OneSmile</h3>
            <p className="text-white mb-4">A web application for dental clinic management.</p>
            <p className="text-white">Key Features: Patient management, medical data collection, appointment scheduling.</p>
            <p className="text-white mt-2">Technologies: Laravel (PHP), MySQL, HTML/CSS.</p>
        </div>
                  <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Task Manager Android App</h3>
            <p className="text-white mb-4">An Android app for task management and organization.</p>
            <p className="text-white">Key Features: Task creation, categorization, due date reminders, notifications.</p>
            <p className="text-white mt-2">Technologies: Java, Android SDK, SQLite.</p>
          </div>

          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Employee Manager</h3>
            <p className="text-white mb-4">A desktop application for managing employees and departments in a company.</p>
            <p className="text-white">Key Features: Employee data management, department tracking, salary calculation, role assignments.</p>
            <p className="text-white mt-2">Technologies: .NET, C#, SQL Server.</p>
          </div>

          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Moroccan Football Performance Prediction</h3>
            <p className="text-white mb-4">A neural network model for predicting Moroccan football team performances.</p>
            <p className="text-white">Key Features: Performance prediction, data preprocessing, model training, and evaluation.</p>
            <p className="text-white mt-2">Technologies: Python, TensorFlow, Neural Networks.</p>
          </div>


        </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
