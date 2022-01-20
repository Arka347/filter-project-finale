upperlipx=130;
upperlipy=150;
function preload(){
mustach = loadImage('https://i.postimg.cc/x8w3MwMT/m.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('poses', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("upperlip x ="+ results[0].pose.nose.x);
        console.log("upperlip y ="+ results[0].pose.nose.y);
    }
}

function draw(){
  image(video, 0, 0, 300, 300);
  image(mustach, upperlipx, upperlipy, 30, 30);
}

function takesnapshot(){
    save('myFilterImage.png');
}

