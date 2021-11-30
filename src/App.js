// //Handpose
//1. Install dependencies
//2. Import dependencies
//3. Setup webcam and canvas
//4. Define references to those
//5. Load handpose
//6. Detect function
//7. Drawing utilities from tensorflow
//8. Draw functions

// //Fingerpose
//1. Install fingerpose npm install fingerpose
//2. Add Use State
//3. Import emojis and finger post import * as fp from "fingerpose"
//4. Update detect function for gesture handling
//5. Add emoji display to screen

import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import './App.css';
import { drawHand, drawRect } from './utilities';
import * as fp from 'fingerpose';

//images
// import victory from './letterImages/victory.png';
// import thumbs_up from './letterImages/thumbs_up.png';
// import letterA from './letterImages/letterA.png';
// import letterB from './letterImages/letterB.png';
// import letterC from './letterImages/letterC.png';
// import letterD from './letterImages/letterD.png';
// import letterE from './letterImages/letterE.png';
// import letterF from './letterImages/letterF.png';
// import letterG from './letterImages/letterG.png';
// import letterH from './letterImages/letterH.png';
// import letterI from './letterImages/letterI.png';
// import letterJ from './letterImages/letterJ.png';
// import letterK from './letterImages/letterK.png';
// import letterL from './letterImages/letterL.png';
// import letterM from './letterImages/letterM.png';
// import letterN from './letterImages/letterN.png';
// import letterO from './letterImages/letterO.png';
// import letterP from './letterImages/letterP.png';
// import letterQ from './letterImages/letterQ.png';
import letterR from './letterImages/letterR.png';
import letterS from './letterImages/letterS.png';
import letterT from './letterImages/letterT.png';
import letterU from './letterImages/letterU.png';

//gestures
// import letterAGesture from './letters/letterA';
// import letterBGesture from './letters/letterB';
// import letterCGesture from './letters/letterC';
// import letterDGesture from './letters/letterD';
// import letterEGesture from './letters/letterE';
// import letterFGesture from './letters/letterF';
// import letterGGesture from './letters/letterG';
// import letterHGesture from './letters/letterH';
// import letterIGesture from './letters/letterI';
// import letterJGesture from './letters/letterJ';
// import letterKGesture from './letters/letterK';
// import letterLGesture from './letters/letterL';
// import letterMGesture from './letters/letterM';
// import letterNGesture from './letters/letterN';
// import letterOGesture from './letters/letterO';
// import letterPGesture from './letters/letterP';
// import letterQGesture from './letters/letterQ';
import letterRGesture from './letters/letterR';
import letterSGesture from './letters/letterS';
import letterTGesture from './letters/letterT';
import letterUGesture from './letters/letterU';

function App() {
  const allLetters = ['letterR', 'letterS', 'letterT', 'letterU'];

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [currentLetter, setLetter] = useState('letterR');
  const [emoji, setEmoji] = useState(null);
  const images = { letterR, letterS, letterT, letterU }; //--------ADD NEW HERE--------

  const gestureAccuracyMany = 9.9;
  const gestureAccuracyOne = 9.5;

  const runHandpose = async () => {
    const net = await handpose.load();
    //console.log("Handpose model loaded");

    //Loop and detect hands
    let timerId = setInterval(async () => {
      let result = await detect(net);

      if (result === currentLetter) {
        clearInterval(timerId);

        const letterIndex = allLetters.indexOf(currentLetter) + 1;

        if (letterIndex < allLetters.length) {
          setTimeout(() => {
            setLetter(allLetters[letterIndex]);
          }, 3000);
        }
      }
    }, 100);
  };

  // const runCoco = async () => {
  //   const net = await cocossd.load()

  //   setInterval(() => {
  //     detect(net);
  //   }, 10)
  // }

  const detect = async (net) => {
    //Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections
      const hand = await net.estimateHands(video);
      //console.log(hand);

      // Gesture detections
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          //--------ADD NEW HERE--------
          letterRGesture,
          letterSGesture,
          letterTGesture,
          letterUGesture,
        ]);

        //second argument is the confidence level
        const gesture = await GE.estimate(hand[0].landmarks, 8);
        //console.log(gesture);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );

          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          console.log(gesture);

          const maxGesture = gesture.gestures[maxConfidence];

          if (
            (gesture.gestures.length === 1 &&
              maxGesture.score >= gestureAccuracyOne) ||
            maxGesture.score >= gestureAccuracyMany
          ) {
            setEmoji(maxGesture.name);
            return maxGesture.name;
          }
        }
      }

      //New-------
      //Make detections
      // const obj = await net.detect(video)
      // console.log(obj)

      //Draw mesh
      //const ctx = canvasRef.current.getContext("2d");
      //drawHand(hand, ctx);
      //drawRect(obj, ctx)
    }
  };
  console.log(emoji);

  useEffect(() => {
    runHandpose();
  }, [currentLetter]);
  //useEffect(()=>{runCoco()},[])

  let emojiPrint =
    emoji === currentLetter ? (
      <img
        src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 400,
          bottom: 50,
          right: 0,
          textAlign: 'center',
          height: 100,
        }}
      />
    ) : (
      ''
    );

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <div
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            top: 100,
            right: 0,
            textAlign: 'center',
            height: 100,
          }}>
          Copy gesture to complete
        </div>
        <img
          src={images[currentLetter]}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 100,
            bottom: 50,
            right: 0,
            textAlign: 'center',
            height: 100,
          }}
        />

        {emojiPrint}
      </header>
    </div>
  );
}

export default App;
