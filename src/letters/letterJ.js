import * as fp from 'fingerpose';

const letterJ = new fp.GestureDescription('letterJ');

letterJ.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterJ.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
letterJ.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
letterJ.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
letterJ.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9);
letterJ.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.9);

letterJ.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letterJ.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letterJ.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Middle]) {
  letterJ.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  letterJ.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  letterJ.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
  letterJ.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
}

export default letterJ;
