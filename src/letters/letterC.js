import * as fp from 'fingerpose';

const letterC = new fp.GestureDescription('letterC');

letterC.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1);
letterC.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1);
letterC.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1);
letterC.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1);
letterC.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1);

for (let finger of [
  fp.Finger.Index,
  fp.Finger.Middle,
  fp.Finger.Ring,
  fp.Finger.Pinky,
]) {
  letterC.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
  // letterC.addCurl(finger, fp.FingerCurl.NoCurl, 0.9);
  letterC.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1);
  letterC.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1);
}

export default letterC;
