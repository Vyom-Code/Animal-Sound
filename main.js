//**  Teachable Machine link: https://teachablemachine.withgoogle.com/models/70YSAOQ1S/ //** 

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/70YSAOQ1S/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var cow=0;
var birds=0;

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() *255)+1;
        random_number_g = Math.floor(Math.random() *255)+1;
        random_number_b = Math.floor(Math.random() *255)+1;
document.getElementById("results_label").innerHTML="I can hear -"+
results[0].label;
document.getElementById("results_confidence").innerHTMl="Accuracy -"+
(results[0].confidence*100).toFixed(2)+"%"
document.getElementById("results_label").style.color ="rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("results_confidence").style.color ="rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";


img = document.getElementById("dog")
img = document.getElementById("cat")
img = document.getElementById("cow")
img = document.getElementById("birds")

if(results[0].label =="dog"){
    img.src="Dog1.jpeg";
}else if (results[0].label =="cat"){
    img.src="Cat2.jpeg";
}else if (results[0].label =="cow"){
img.src="Cow3.jpeg";
}else if (results[0].label =="birds"){
img.src="Birds4.jpeg";
}



    }
}