import React from "react";
import { Button } from "@material-tailwind/react";
import fanfinderSVG from "../images/fanfinderQR.svg";

import { Typography } from "@material-tailwind/react";

function FanfinderModalContent() {
  return (
    <div className="flex flex-col items-center justify-center p-2 text-center sm:p-10">
      <Typography color="blue-gray">
        Although Fan Finder has not been published on the Apple or Google Play
        store, there are two ways to see the app in action:
      </Typography>
      <br />
      <Typography>
        <b>Option One</b>
      </Typography>
      <Typography color="blue-gray">
        Simply download the{" "}
        <a className="text-highlight underline" href="https://expo.dev/expo-go">
          Expo Go app
        </a>
        , then either scan the QR code below or{" "}
        <a
          className="text-highlight underline"
          href="exp://exp.host/@jbhall4291/fan-finder?release-channel=default"
        >
          tap here
        </a>
        . Unfortunately, due to a change in Apple policy, this option is now
        only available to Android smart phone users.
      </Typography>

      <img
        className="w-32 sm:w-44"
        src={fanfinderSVG}
        alt="qr code for fan finder"
      />
      <br />
      <Typography color="blue-gray">
        <b>Option Two</b>
      </Typography>
      <Typography color="blue-gray">
        <a
          className="text-highlight underline"
          href="https://github.com/jbhall4291/fan-finder#option-two"
        >
          Head to the repo
        </a>{" "}
        and follow the step-by-step instructions for a local copy. This will
        allow you to build to your own device using the{" "}
        <a className="text-highlight underline" href="https://expo.dev/expo-go">
          Expo Go app
        </a>
        , or straight to a device simulator on your machine.
      </Typography>
    </div>
  );
}

function LiveAppModal({
  showLiveAppModal,
  setShowLiveAppModal,
  liveAppToShow,
}) {
  return (
    <>
      {showLiveAppModal && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800 bg-opacity-80">
          <div className="flex h-screen w-screen flex-col items-center justify-center ">
            <div className="relative w-full sm:w-3/5">
              <div
                className=" rounded bg-white"
                // style={{ paddingBottom: "56.25%" }}
              >
                {liveAppToShow === "FAN FINDER" ? (
                  <FanfinderModalContent />
                ) : null}
              </div>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="text"
                  className="mt-5 justify-center bg-highlight text-white hover:bg-highlight hover:shadow-xl"
                  onClick={() => setShowLiveAppModal(false)}
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

export default LiveAppModal;
