import React, { useContext, useState, useEffect, useRef } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { ReactMediaRecorder } from "react-media-recorder";
import { FaRegCircleStop } from "react-icons/fa6";
import FormDataContext from "../FormDataContext";

const VoiceRecorder = ({ onRecordingComplete }) => {
  const { updateFormData } = useContext(FormDataContext);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  const handleStop = (blobUrl, blob) => {
    console.log(blobUrl, blob);
    updateFormData({ record: blob });
    setIsRecording(false);
  };

  const handleStartRecording = (startFn) => {
    setElapsedTime(0);
    setIsRecording(true);
    startFn();
  };

  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          {status !== "idle" && <p className="m-0 p-0">{status}</p>}
          {isRecording && <p>Recording Time: {elapsedTime}s</p>}
          <CiMicrophoneOn
            onClick={() => handleStartRecording(startRecording)}
            cursor="pointer"
            size={35}
            className="chat-icon"
          />
          {status === "recording" && (
            <FaRegCircleStop
              size={30}
              className="chat-icon"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                stopRecording();
              }}
            />
          )}
          {status === "stopped" && (
            <>
              <p className="m-0 p-0">Recorded Time: {elapsedTime}s</p>
              <audio src={mediaBlobUrl} controls />
            </>
          )}
        </div>
      )}
    />
  );
};

export default VoiceRecorder;
