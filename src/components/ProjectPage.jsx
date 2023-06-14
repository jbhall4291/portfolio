import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import SkillsCardSmall from "./Projects/SkillsCardSmall";
import ExternalLink from "./Projects/ExternalLink";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { Typography, Button } from "@material-tailwind/react";
import LoadingSpinner from "../components/LoadingSpinner";
import LiveAppModal from "./LiveAppModal";

function ProjectPage() {
  const [projectLoading, setProjectLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [showLiveAppModal, setShowLiveAppModal] = useState(false);

  const { project_id } = useParams();

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
        setProjectLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectData();
  }, []);

  if (projectLoading) {
    return <LoadingSpinner />;
  }

  

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
        videoToPlay={projectData.youtubeURL}
      />

      <LiveAppModal
        showLiveAppModal={showLiveAppModal}
        setShowLiveAppModal={setShowLiveAppModal}
        liveAppToShow="FAN FINDER"
      />

      <div className="flex flex-col items-center justify-evenly gap-y-4 lg:flex-row ">
        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
          <h1 className="headline-font text-4xl text-highlight md:text-5xl">
            {projectData.displayName.toUpperCase()}
          </h1>
          <h2 className="text-lg ">{projectData.fullTagline}</h2>
          <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">
            {projectData.techUsed?.map((tech) => {
              return (
                <SkillsCardSmall
                  key={tech.name}
                  label={tech.name}
                  icon={tech.icon}
                />
              );
            })}
          </div>
        </div>

        <img
          className="order-2 h-[248px] w-[350px]  sm:h-[376px] sm:w-[528px]"
          alt={`${
            projectData.displayName
              ? projectData.displayName + " screenshot"
              : "screenshot"
          }`}
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

        {projectData.liveAppURL && (
          <ExternalLink
            label="LIVE APP"
            href={projectData.liveAppURL}
            type="liveApp"
          />
        )}

        {/* {projectData.teamShowcaseURL && (
          <ExternalLink
            label="TEAM SHOWCASE!!"
            href={projectData.teamShowcaseURL}
            type="showcase"
          />
         */}

        {projectData.liveAppExpoURL && (
          <Button
            size="lg"
            variant="text"
            className="text-md flex items-center  gap-2 bg-highlight text-white
          hover:bg-highlight hover:shadow-xl "
            onClick={() => {
              setShowLiveAppModal(true);
            }}
          >
            LIVE APP
            <i className="fa-solid fa-circle fa-beat-fade fa-lg" />
          </Button>
        )}

        {projectData.teamShowcaseURL && (
          <ExternalLink
            label="TEAM SHOWCASE"
            href={projectData.teamShowcaseURL}
            type="showcase"
          />
        )}

        <ExternalLink
          label="GITHUB REPO"
          href={projectData.githubRepo}
          type="repo"
        />
      </div>
    </motion.div>
  );
}

export default ProjectPage;
