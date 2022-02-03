noseX = 0;
noseY = 0;

function preload() {
  lipstick = loadImage('https://i.postimg.cc/Z5fLDhjw/PNGPIX-COM-Lips-PNG-Transparent-Image-3.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipstick, noseX - 15, noseY + 12.5, 30, 30);
}

function take_snapshot() {
   save('MyFilter.png'); 
}

function modelLoaded() {
  console.log('poseNet is initialized');

}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    console.log('lip x =' + results[0].pose.nose.x);
    console.log('lip y =' + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
