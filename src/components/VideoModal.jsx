import React from "react";
import { Button } from "@material-tailwind/react";

function VideoModal({ showModal, setShowModal, videoToPlay }) {
  let youtubeURL = "";
  if (videoToPlay === "NEWSBUZZ")
    youtubeURL = "https://www.youtube.com/embed/CnuN6rD8j8w";
  if (videoToPlay === "FAN FINDER")
    youtubeURL = "https://www.youtube.com/embed/kQ7weiOZzHM";

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="flex h-screen w-screen flex-col items-center justify-center ">
            <div className="relative w-full sm:w-3/5">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={videoToPlay}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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
