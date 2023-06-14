import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { oneHundredPressUpsCard, newsbuzzCard, fanfinderCard } from "../images";
import { Typography } from "@material-tailwind/react";
import VideoModal from "../components/VideoModal";
import { motion } from "framer-motion";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import LoadingSpinner from "../components/LoadingSpinner";

function Projects() {
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [videoToPlay, setVideoToPlay] = useState("");
  const [projectList, setProjectList] = useState([]);
  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProjectList(filteredData);
        setProjectsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectList();
  }, []);

  console.log(projectList);

  if (projectsLoading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      id="projects"
      className="mx-auto flex flex-col px-3 sm:px-5  md:mt-10 "
    >
      <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoToPlay={videoToPlay}
      />
      <Typography
        color="blue-gray"
        className="w-max-w mx-auto justify-center px-5 text-center sm:w-4/6 lg:text-lg "
      >
        These projects are the culmination of my journey on the amazing{" "}
        <a className="text-highlight" href="https://northcoders.com/">
          Northcoders bootcamp
        </a>
        , and continue to be developed, polished & refactored as I continue to
        learn.
      </Typography>

      <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-x-10 sm:flex-row sm:gap-y-4  ">
        {projectList.map((project) => (
          <ProjectCard
            setVideoToPlay={setVideoToPlay}
            setShowModal={setShowModal}
            key={project.title}
            youtubeURL={project.youtubeURL}
            title={project.title}
            image={project.cardScreenshotURL}
            description={project.cardTagline}
            learnMorePage={`/projects/${project.title}`}
            displayName={project.displayName}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
