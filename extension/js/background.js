//Run background process to automatically capture an image of user when chrome launches everytime

//Send the captured image to my node js server for facial recognition

//run facial recognition API on the captured image over the sample images belonging to the user in firestore

//If facial recognition does not match, send owner of the computer a notification (email, push, sms, e.t.c)
//that an unauthorized person is accessing their browser

//BONUS:: User can take action to remotely shut down (or other possible options) their computer ******

chrome.runtime.onStartup.addListener(function () {
  console.log('chrome started');
});

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Default background color set to %cgreen', `color: ${color}`);
  chrome.alert('background up');
});
