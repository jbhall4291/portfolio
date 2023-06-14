import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../config/firebase";

import { collection, query, where, getDocs } from "firebase/firestore";

import { newsbuzz } from "../images/";
import SkillsCardSmall from "./Projects/SkillsCardSmall";

import ExternalLink from "./Projects/ExternalLink";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

import { Typography, Button } from "@material-tailwind/react";

function ProjectPage() {
  const [showModal, setShowModal] = useState(false);

  const [projectData, setProjectData] = useState([]);
  const projectsCollectionRef = collection(db, "projects");

  const { project_id } = useParams();

  console.log(project_id);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "projects"), where("title", "==", project_id))
        );

        if (querySnapshot.empty) {
          console.log("No document found with the specified title.");
          return;
        }

        const documentData = querySnapshot.docs[0].data();
        const documentId = querySnapshot.docs[0].id;

        setProjectData({ ...documentData, id: documentId });
      } catch (err) {
        console.error(err);
      }
    };

    getProjectData();
  }, []);

  const exampleFormat = [
    { name: "thing 1", icon: "devthing" },
    { name: "thing 2", icon: "devthing2" },
  ];

  // console.log(projectData.techUsed)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="container"
    >
      <VideoModal
        showModal={showModal}
        setShowModal={setShowModal}
        videoToPlay="NEWSBUZZ"
      />

      <div className="flex flex-col items-center justify-evenly gap-y-4 lg:flex-row ">
        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
          <h1 className="headline-font text-5xl text-highlight md:text-7xl">
            {projectData.title?.toUpperCase()}
          </h1>
          <h2 className="text-lg font-bold">{projectData.tagline}</h2>
          <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
            {console.log(
              projectData.techUsed?.map((item) => console.log(item.icon))
            )}

            {projectData.techUsed?.map((tech) => {
              return (
                <SkillsCardSmall
                  key={tech.name}
                  label={tech.name}
                  icon={tech.icon}
                />
              );
            })}

            <SkillsCardSmall
              //  label={projectData.techUsed[0].name}

              icon="devicon-javascript-plain colored"
            />
            {/*
            <SkillsCardSmall
              label="React"
              icon="devicon-react-original colored"
            />
            <SkillsCardSmall
              label="node.js"
              icon="devicon-nodejs-plain colored"
            />
            <SkillsCardSmall
              label="PostgreSQL"
              icon="devicon-postgresql-plain colored"
            />
            <SkillsCardSmall
              label="express.js"
              icon="devicon-express-original colored"
            />
            <SkillsCardSmall label="Jest" icon="devicon-jest-plain colored" /> */}
          </div>
        </div>

        <img
          className="order-2 h-[248px] w-[350px]  sm:h-[376px] sm:w-[528px]"
          alt="newsbuzz screenshot"
          src={projectData.fullScreenshotURL}
        />
      </div>
      <Typography
        color="blue-gray"
        className="w-max-w mx-auto justify-center px-4 py-4 text-center sm:w-4/6 lg:text-lg"
      >
        {projectData.description}
      </Typography>

      <div className="mx-auto flex flex-col items-center justify-center gap-5 text-center  sm:flex-row  sm:gap-10">
        <Button
          size="lg"
          variant="text"
          className="text-md flex items-center  gap-2 bg-highlight text-white
          hover:bg-highlight hover:shadow-xl "
          onClick={() => {
            setShowModal(true);
          }}
        >
          VIDEO DEMO
          <i className="fa-brands fa-youtube fa-2xl" />
        </Button>

        <ExternalLink
          label="LIVE APP"
          href="https://newsbuzz-jbhall4291.netlify.app"
          type="liveApp"
        />
        <ExternalLink
          label="GITHUB REPO"
          href="https://github.com/jbhall4291/newsbuzz"
          type="repo"
        />
      </div>
    </motion.div>
  );
}

export default ProjectPage;
