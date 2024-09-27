import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/pagination'; // Import Pagination module styles
import { Navigation, Pagination } from 'swiper/modules'; // Optional for navigation and pagination
import '../App.css';

const Projects = () => {
  return (
    <section id="projects" className="projects h-screen p-6 flex flex-col items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination]}  // Add optional modules
        spaceBetween={30}  // Space between slides
        slidesPerView={1}  // Number of visible slides   
        navigation={true} // Enables Navigation
        pagination={{ clickable: true }}  // Enable pagination dots
        className="w-full col-12 max-w-6xl"
      >

        <SwiperSlide>
        <div className="grid m-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 mb-10">
              {/* Project 1: SMARTfridge */}
              <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
                  <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">SMARTfridge</h3>
                  <p className="text-white mb-4">Manage your refrigerator smartly with real-time monitoring and ML integration.</p>
                  
                  <div className="mb-4">
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2 font-semibold">
                          <span className="text-white px-3 py-1 rounded-full">Stock Consultation</span>
                          <span className="text-white px-3 py-1 rounded-full">Shopping List Generation</span>
                          <span className="text-white px-3 py-1 rounded-full">Recipe Suggestions</span>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 font-mono">
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Arduino</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Raspberry Pi</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Scikit-Learn</button>
                      </div>
                  </div>
              </div>

              {/* Project 2: Paincare */}
              <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
                  <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Paincare</h3>
                  <p className="text-white mb-4">Empowering women with endometriosis through a dedicated platform.</p>
                  
                  <div className="mb-4">
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2 font-semibold">
                          <span className="text-white px-3 py-1 rounded-full">Symptom Tracking</span>
                          <span className="text-white px-3 py-1 rounded-full">Personalized Diagnostics</span>
                          <span className="text-white px-3 py-1 rounded-full">Community Support</span>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 font-mono">
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">J2EE</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Bootstrap</button>
                      </div>
                  </div>
              </div>

              {/* Project 3: BigBand */}
              <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000] ">
                  <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">BigBand</h3>
                  <p className="text-white mb-4">Microservices mobile cross-platform connecting music bands with event hosts, featuring real-time availability tracking.</p>
                  
                  <div className="mb-4">
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2 font-semibold">
                          <span className="text-white px-3 py-1 rounded-full">Real-Time Availability Tracking</span>
                          <span className="text-white px-3 py-1 rounded-full">Event Management</span>
                          <span className="text-white px-3 py-1 rounded-full">User Notifications</span>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 font-mono">
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">SpringBoot</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">MongoDB</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">ReactNative</button>
                      </div>
                  </div>
              </div>

        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="grid m-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 mb-10">

          {/* Project 4: Volunteer */}
          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000] ">
                  <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Volunteer</h3>
                  <p className="text-white mb-4">A platform connecting volunteers with associations.</p>
                  
                  <div className="mb-4">
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2 font-semibold">
                          <span className="text-white px-3 py-1 rounded-full">Event Posting</span>
                          <span className="text-white px-3 py-1 rounded-full">Volunteer Applications</span>
                          <span className="text-white px-3 py-1 rounded-full">Interaction Management</span>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 font-mono">
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">UML</button>
                          <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">JEE</button>
                      </div>
                  </div>
              </div>

          
          {/* Project 5: One Smile */}

          <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
            <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">OneSmile</h3>
            <p className="text-white mb-4">A web application for dental clinic management.</p>

            <div className="mb-4">
              <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-white px-3 py-1 rounded-full">Patient Management</span>
                <span className="text-white px-3 py-1 rounded-full">Medical Data Collection</span>
                <span className="text-white px-3 py-1 rounded-full">Appointment Scheduling</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2 font-mono">
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Laravel</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">MySQL</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">HTML</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">CSS</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">JS</button>
              </div>
            </div>
          </div>

          {/* Project 6: TaskManager */}
        <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
          <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Task Manager Android App</h3>
          <p className="text-white mb-4">An Android app for task management and organization.</p>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-white px-3 py-1 rounded-full">Task Creation</span>
              <span className="text-white px-3 py-1 rounded-full">Due Date Reminders</span>
              <span className="text-white px-3 py-1 rounded-full">Calendar Tracker</span>
            </div>
          </div>

            <>
              <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2 font-mono">
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Java</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">AndroidSDK</button>
                <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Firebase</button>
              </div>
            </>
        </div>
        </div>
        </SwiperSlide>
        
          <SwiperSlide>
              <div className="grid m-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-18 mb-10">

              {/* Project 1: Employee Manager */}
              <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
                <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Employee Manager</h3>
                <p className="text-white mb-4">A desktop application for managing employees and departments in a company.</p>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-white px-3 py-1 rounded-full">Employee Data Management</span>
                    <span className="text-white px-3 py-1 rounded-full">Department Tracking</span>
                    <span className="text-white px-3 py-1 rounded-full">Salary Calculation</span>
                    <span className="text-white px-3 py-1 rounded-full">Role Assignments</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 font-mono">
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Angular</button>
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">.NET</button>
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">C#</button>
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">SQL Server</button>
                  </div>
                </div>
              </div>

              {/* Project 2: Moroccan Football Performance Prediction */}
              <div className="shadow-lg rounded-lg p-4 border-4 border-[#e3d000]">
                <h3 className="project-title text-3xl font-semibold mb-4 text-[#e3d000]">Moroccan Football Performance Prediction</h3>
                <p className="text-white mb-4">A neural network model for predicting Moroccan football team performances.</p>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-white px-3 py-1 rounded-full">Performance Prediction</span>
                    <span className="text-white px-3 py-1 rounded-full">Data Preprocessing</span>
                    <span className="text-white px-3 py-1 rounded-full">Model Training</span>
                    <span className="text-white px-3 py-1 rounded-full">Model Evaluation</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#e3d000] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 font-mono">
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Python</button>
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">TensorFlow</button>
                    <button className="bg-[#e3d000] text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-500 transition duration-300">Neural Networks</button>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>






      </Swiper>
    </section>
  );
};

export default Projects;
