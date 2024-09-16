/* eslint-disable */
import darkSaasLandingPage from "@/assets/images/damagp.png";
import lightSaasLandingPage from "@/assets/images/cccs.png";
import aiStartupLandingPage from "@/assets/images/gramar.png";
import Image from "next/image";
import CheckCircleIcom from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcom from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import edu from "@/assets/images/eddu.png";

const portfolioProjects = [
  {
    company: "Project Damag",
    year: "2024",
    title: "Damag",
    results: [
      { title: "Interactive knowledge-sharing platform" },
      { title: "Designed to foster collaborative learning and idea exchange" },
      { title: "enables users to engage in meaningful discussions" },
    ],
    link: "https://damag-msyk.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    company: "Project Thesis Checker",
    year: "2024",
    title: "Thesis-Similarity-Checker-SVM",
    results: [
      { title: "SVM-based Similarity Checking" },
      { title: "Contains unit tests to ensure the accuracy and reliability of the similarity checking process." },
      { title: " Implements various similarity metrics to evaluate the similarity between documents" },
    ],
    link: "https://github.com/delosreyesjohnpaul/Thesis-Similarity-Checker-SVM-V2",
    image: lightSaasLandingPage,
  },
  {
    company: "Project Grammar Checker",
    year: "2023",
    title: "Grammar and Spell Checker using Machine Learning",
    results: [
      { title: "Leverages machine learning techniques to analyze and correct text." },
      { title: "Enhance the quality of written content by identifying and suggesting corrections." },
      { title: "Utilizes advanced machine learning models for accurate analysis and corrections." },
    ],
    link: "https://github.com/delosreyesjohnpaul/Grammar-and-Spell-Checker-App-using-Machine-Learning",
    image: aiStartupLandingPage,
  },
  {
    company: "Project Education Recommendation",
    year: "2024",
    title: "Education Recommendation System",
    results: [
      { title: "Machine learning model built to predict and recommend potential career paths." },
      { title: "Provides top career recommendations with probabilities using a trained classification model." },
      { title: "The dataset is scaled and encoded where necessary." },
    ],
    link: "https://github.com/delosreyesjohnpaul/Education-Recommendation-System-using-Machine-Learning",
    image: edu,
  },
];

export const ProjectsSection = () => {
  return ( 
  <section id="projects" className="pb-16 lg:py-24">
    <div className="container ">
      <SectionHeader eyebrow="Real-World-Results" title="Featured Projects" description="See how I use machine learning to turn data into actionable insights and engaging experiences."/>
      <div className=" mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
            top: `calc(64px + ${projectIndex * 40}px)`
          }}>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-5">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            
            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li className="flex gap-2  text-sm md:text-base text-white/50">
                  <CheckCircleIcom className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button 
                className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                 <span>Visit Project</span> 
                 <ArrowUpRightIcom className="size-4"/>
              </button>
            </a>
            </div>
            <div className="relative">
            <Image  src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>
          </div>
        </Card>
          
        ))}
      </div>
    </div>
  </section>
  );
};
