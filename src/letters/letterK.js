import * as fp from 'fingerpose';

const letterK = new fp.GestureDescription('letterK');

letterK.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
letterK.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
letterK.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
letterK.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
letterK.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9);
letterK.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.9);

letterK.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
letterK.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
letterK.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Ring, fp.Finger.Pinky, fp.Finger.Middle]) {
  letterK.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  letterK.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  letterK.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
  letterK.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
}

export default letterK;
