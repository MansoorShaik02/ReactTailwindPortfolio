import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import HelpCard from "../components/HelpCard";
import Repodetails from "./Repodetails";
import Timeline from "../components/Timeline";
import FloatingLinks from "../components/FloatingLinks";
import Navbar from "../components/Navbar";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import ResumeButton from "../components/ResumeButton";
// import Contact from "../components/Contact";
import { ContactForm } from "../components/ContactForm";
const Homepage = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const token = import.meta.env.VITE_GitToken;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const responserepo = await axios.get(
          "https://api.github.com/users/MansoorShaik02/repos",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setRepos(responserepo.data.slice(0, 5));
      } catch {
        console.log("error repos");
      }
    };
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/MansoorShaik02",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
    fetchRepos();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray flex flex-col md:flex-row min-h-screen text-left">
        <FloatingLinks />
        <div className="bg-gray md:w-3/5 w-full flex flex-col mt-20 md:mt-80px">
          <p className="mt-10 ml-5 md:ml-7 text-4xl md:text-6xl text-white ">
            Hi, I am
          </p>
          {/* add social links github */}
          <p className="text-6xl md:text-8xl text-white ml-5 mt-1">
            SHAIK MANSOOR
          </p>
          <p className="text-lg md:text-2xl text-white ml-5 mt-5 md:mt-10">
            I am a Full Stack Developer who focuses on building scalable web
            applications
          </p>
          <div className="mt-10 ml-5 md:ml-10 flex flex-wrap">
            <button className="btn mx-2 bg-yellow-300 text-black border-0 hover:text-white hover:bg-red-500 mb-2">
              React
            </button>
            <button className="btn mx-2 bg-yellow-300 text-black border-0 hover:text-white hover:bg-red-500 mb-2">
              Javascript
            </button>
            <button className="btn mx-2 bg-yellow-300 text-black border-0 hover:text-white hover:bg-red-500 mb-2">
              HTML
            </button>
            <button className="btn mx-2 bg-yellow-300 text-black border-0 hover:text-white hover:bg-red-500 mb-2">
              Tailwind CSS
            </button>
          </div>
          <div className="mt-10 ml-5 md:ml-10 flex flex-wrap">
            <button className="btn mx-2 w-full md:w-1/5 flex items-center text-white mb-2 hover:bg-blue-300 hover:text-black">
              <FaGithub className="mr-2" />
              <a
                href="https://github.com/MansoorShaik02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline decoration-2 "
              >
                VIEW GITHUB
              </a>
            </button>

            {/* button 2 */}

            <button className="btn no-animation mx-2 md:w-2/5 flex items-center text-white ml-1 hover:bg-blue-300 hover:text-black ">
              <RiAccountPinBoxLine className="hover:bg-white" />
              <a
                href="#contactme"
                className="inline-block hover:underline decoration-2 decoration-black"
              >
                CONTACT ME
              </a>
            </button>

            <ResumeButton></ResumeButton>
          </div>
        </div>
        <div className="bg-gray md:w-2/5 w-full flex flex-col items-center mt-20 md:mt-0">
          <div
            className="mt-20 ml-3 text-6xl inline-block mb-10
               text-black pt-1.5 pb-1 w-full"
          ></div>
          <div className="avatar">
            <div className="h-40 rounded-full">
              <a href="https://github.com/MansoorShaik02" target="_blank">
                <img src={profile.avatar_url} alt={profile.login} />
              </a>
            </div>
          </div>
          {<Timeline></Timeline>}
        </div>
      </div>
      <div
        className="bg-gray flex flex-col md:flex-row min-h-screen text-left"
        id="aboutme"
      >
        <div className="md:w-2/4 w-full flex flex-col justify-center">
          <p className="text-3xl md:text-5xl text-white ml-5 mt-10">About Me</p>
          <p className="text-lg md:text-xl text-white ml-5 mt-5 md:mt-10">
            MERN Stack Developer. <br />
            My experience includes creating responsive web applications with
            robust user authentication, as well as implementing computer vision
            applications. I am proficient in React, Python, and various
            front-end and back-end technologies, demonstrating strong
            problem-solving skills, team collaboration, and a quick learning
            ability.
          </p>
          <div>
            <div className="text-white mx-5 flex items-center mt-10">
              <RiGitRepositoryCommitsLine size={90} className="mt-6" />
              <p className="mt-6 ml-4"> Repos : {profile.public_repos} </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/4 w-full flex flex-col justify-center items-center mt-10 md:mt-0">
          <div>
            <div>
              <p className="text-3xl md:text-4xl text-white">
                Programming Languages
              </p>

              <div className="mt-10 ml-5 flex flex-wrap">
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  Javascript
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  HTML
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  CSS
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  Python
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl md:text-4xl text-white mt-10">Skills</p>
              <div className="mt-10 ml-5 flex flex-wrap">
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  React.js
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  Node.js
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  GitHub
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  Tailwind CSS
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  Express.js
                </button>
                <button className="btn mx-2 bg-white text-black border-0 hover:text-white hover:bg-red-500 mb-2">
                  MongoDB
                </button>
                <div className="mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gray flex flex-col min-h-screen text-left"
        id="featuredprojects"
      >
        <p className="text-nonPhotobLUE text-5xl mt-40 ml-10">
          Featured Projects
        </p>
        <div className="grid grid-cols-1 p-0 md:grid-cols-4 gap-4">
          <ProjectCard
            name="MERN-Anime_Tracker"
            link="https://mern-anime-tracker-front.vercel.app/"
            tech1="React.js"
            tech2="Node"
            tech3="Mongodb"
            imagelink="..\images\MERN-AnimeTracker.png"
            description={
              "An Anime site to keep track of your Watchlist and to check Anime Info"
            }
          ></ProjectCard>
          <ProjectCard
            name="Weather_Info"
            link="https://weather-react-tailwind-lake.vercel.app"
            tech1="React.js"
            tech2="Tailwind"
            tech3="OpenWeatherMap API"
            imagelink="..\images\weather.png"
            description={"Site to check Weather related information"}
          ></ProjectCard>
          <ProjectCard
            name="React Movie Website"
            link="https://mansoorshaik02.github.io/React-Movie-Website/"
            tech1="React.js"
            tech2="Firebase"
            imagelink="..\images\React-Movie-Website.png"
            description={"An Movie Website to know more about Movies"}
          ></ProjectCard>
        </div>
        <div className="w-full flex justify-center center mt-10 hover:text-white">
          <div>
            <a
              href="https://github.com/MansoorShaik02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn  bg-white text-black hover:text-white hover:text-decoration-line:none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.815 1.103.815 2.222 0 1.604-.014 2.897-.014 3.293 0 .32.218.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View more on Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen text-left bg-red flex flex-col justify-center items-center">
        <div></div>
        <Repodetails></Repodetails>
      </div>
      <div
        className="flex  text-left bg-red flex-col justify-center items-center"
        id="contactme"
      >
        <ContactForm></ContactForm>
      </div>
    </>
  );
};

export default Homepage;
