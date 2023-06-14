// import * as React from "react";
import React, { useState } from "react";
import axiosConfig from "../../../axiosConfig";
// import './style.css';
import { getUserID } from "../astrologerdetail";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  // const [astroData, setAstroData] = useState("");
  const roomID = getUrlParams().get("roomID") || randomID(5);

  let myMeeting = async element => {
    // generate Kit Token
    const appID = 1011009319;
    const response = getUserID() || randomID(5).toString();
    const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5).toString(),
      response
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    let userID = JSON.parse(localStorage.getItem("user_id"));
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            "/#/VideoCall" +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      onJoinRoom: () => {
        // loca
        let obj = {
          astroid: localStorage.getItem("astroId"),
          videoLink:
            window.location.protocol +
            "//" +
            window.location.host +
            "/#/VideoCall" +
            window.location.pathname +
            "?roomID=" +
            roomID,
          userid: userID,
        };
        axiosConfig
          .post("user/send_VideoLink", obj)
          .then(response => {
            console.log("PostVideo Callll>>>>", response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      showScreenSharingButton: false,
      //       zg.on('roomUserUpdate', (roomID, updateType, userList) => {
      // console.log('roomUserUpdate roomID ', roomID, streamList);
      //     if (updateType === 'ADD') {
      //   // update view
      //     } else if(updateType == 'DELETE') {
      //   // update view
      //     }
      // });
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
