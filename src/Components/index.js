import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.css";

export default function Data() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [copy, setcopy] = useState(false);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setcopy(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [copy]);

  return (
    <div className="complete">
      <div className="word-section">{transcript}</div>
      {copy ? (
        <span style={{ color: "red" }} className="copied">
          Copied.
        </span>
      ) : null}
      <div className="button-section">
        <button
          onClick={() => {
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-IN"
            });
          }}
          className="btn"
        >
          Start
        </button>
        <button
          onClick={() => {
            SpeechRecognition.stopListening();
          }}
          className="btn"
        >
          Stop
        </button>
        <CopyToClipboard text={transcript} onCopy={() => setcopy(true)}>
          <button className="btn">Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
