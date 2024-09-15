import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.webp"
import Image from "next/image";
import PythonIcon from "@/assets/icons/python.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import TensorFlowIcon from "@/assets/icons/tensorflow.svg";
import ScikitLearnIcon from "@/assets/icons/scikit-learn-seeklogo.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import myEmoji from "@/assets/images/memoji-smile.png"
const toolboxItems = [
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Mysql",
    iconType: MysqlIcon,
  },
  {
    title: "TensorFlow",
    iconType: TensorFlowIcon,
  },
  {
    title: "Scikit Learn",
    iconType: ScikitLearnIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  }
]

const hobbies = [
  {
    title:"Reading",
    emoji:"📖",
  },
  {
    title:"Writing",
    emoji:"📝",
  },
  {
    title:"Cycling",
    emoji:"🚵",
  },
  {
    title:"Cooking",
    emoji:"🍳",
  },
  {
    title:"Hiking",
    emoji:"⛰️",
  },
  {
    title:"Gaming",
    emoji:"🎮",
  },
  {
    title:"Music",
    emoji:"🎧",
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn More about who I am, what I do, and what inspires me"/>
      <div className="mt-20">
        <Card>
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
              <StarIcon className="size-9 text-emerald-300"/>
              <h3 className="font-serif text-3xl ">My Reads</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">Explore the books shaping my perspective.</p>
          </div>
          <div className="">
            <Image src={bookImage} alt="book cover" />
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon/>
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools I use to Craft exeptional digitals experiences.</p>
          </div>
          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType}/>
                <samp>{item.title}</samp>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon/>
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm</p>
          </div>
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="mapimg"/>
          <Image src={myEmoji} alt="myemoji"/>
        </Card>
      </div>
    </div>
    </div>
  );
};
