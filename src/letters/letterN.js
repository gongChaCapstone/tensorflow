import * as fp from 'fingerpose';

const letterN = new fp.GestureDescription('letterN');

letterN.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterN.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
letterN.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
letterN.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
letterN.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

letterN.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letterN.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
letterN.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letterN.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Middle]) {
  letterN.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  letterN.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  letterN.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
  letterN.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
  letterN.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.9);
  letterN.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.9);
}

export default letterN;
