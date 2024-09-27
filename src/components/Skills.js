import React from 'react';
import { useState } from 'react';
import { FaPython, FaJava, FaPhp, FaReact, FaLaravel, FaGitAlt,FaAndroid, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpring, SiMysql, SiMongodb, SiFirebase, SiKubernetes,  SiJenkins, SiFlutter } from 'react-icons/si';
import '../App.css';
import { DiAngularSimple, DiJavascript } from 'react-icons/di';
import { SiCplusplus } from "react-icons/si";



const SkillCategory = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`skill-category ${open ? 'open' : 'collapsible'}`}>
      <h3 onClick={() => setOpen(!open)}>{title}</h3>
      <div className="skills-list">
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="h-screen p-6 text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory title="Programming Languages">
          <FaPython title="Python" />
          <FaJava title="Java" />
          <FaPhp title="PHP" />
          <DiJavascript title='js'/> 
          <SiCplusplus />
 
          {/* Add other relevant icons */}
        </SkillCategory>
        <SkillCategory title="Frameworks">
          <FaReact title="ReactJS" />
          <DiAngularSimple title="angular"/>
          <FaLaravel title="Laravel" />
          <SiSpring title="Spring Boot" />
          {/* Add other relevant icons */}
        </SkillCategory>
        <SkillCategory title="Mobile">
          <FaAndroid title="Android Studio" />
          <SiFlutter title="Flutter"/>
          {/* Add other relevant icons */}
        </SkillCategory>
        <SkillCategory title="Version Control">
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
        </SkillCategory>
        <SkillCategory title="Databases">
          <SiMysql title="MySQL" />
          <SiMongodb title="MongoDB" />
          <SiFirebase title="Firebase" />
        </SkillCategory>
        <SkillCategory title="DevOps Tools">
          <FaDocker title="Docker" />
          <FaAws title='Aws'/>
          <SiKubernetes title="Kubernetes" />
          <SiJenkins title="Jenkins" />
        </SkillCategory>
      </div>
    </section>
  );
};

export default Skills;
