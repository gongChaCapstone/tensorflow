import * as fp from 'fingerpose';

const letterI = new fp.GestureDescription('letterI');

letterI.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterI.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
letterI.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
letterI.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
letterI.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9);
letterI.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.9);

letterI.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letterI.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letterI.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Middle]) {
  letterI.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  letterI.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  letterI.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
  letterI.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
}

export default letterI;
