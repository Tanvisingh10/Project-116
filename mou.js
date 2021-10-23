noseX=0;
noseY=0;
function preload(){
    mou = loadImage("https://i.postimg.cc/5NBp1JZY/m.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(750,150);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mou,noseX - 20,noseY ,45,40);
}
function take_snapshot(){
    save('myFilterImage.png');
}