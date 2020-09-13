Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qpsrLw5F7/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        emotion_name = result[0].label;
        emotion_name2 = result[1].label;
        document.getElementById("result_emotion_name").innerHTML = emotion_name;
        document.getElementById("result_emotion_name2").innerHTML = emotion_name2;       
        if(emotion_name == "Happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        } 
        if(emotion_name == "Sad"){
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(emotion_name == "Angry"){
            document.getElementById("update_emoji").innerHTML = "&#128545;";
        } 
        if(emotion_name == "Laughing"){
            document.getElementById("update_emoji").innerHTML = "&#128512;";
        }
        if(emotion_name2 == "Happy"){
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if(emotion_name2 == "Sad"){
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if(emotion_name2 == "Angry"){
            document.getElementById("update_emoji2").innerHTML = "&#128545;";
        }
        if(emotion_name2 == "Laughing"){
            document.getElementById("update_emoji2").innerHTML = "&#128512;";
        }
    }
}