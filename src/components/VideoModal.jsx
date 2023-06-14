import React from "react";
import { Button } from "@material-tailwind/react";

function VideoModal({ showModal, setShowModal, videoToPlay }) {
  
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="flex h-screen w-screen flex-col items-center justify-center ">
            <div className="relative w-full sm:w-3/5">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                {videoToPlay === "coming-soon" ? (
                  <div className=" bg-white text-center align-middle ">
                    <p className="headline-font text-center  text-5xl text-highlight md:text-7xl">
                      video coming soon!
                    </p>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={videoToPlay}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  variant="text"
                  className="justify-center bg-highlight text-white hover:bg-highlight hover:shadow-xl"
                  onClick={() => setShowModal(false)}
                >
                  CLOSE
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoModal;
