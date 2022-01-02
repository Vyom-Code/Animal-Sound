//**  Teachable Machine link: https://teachablemachine.withgoogle.com/models/70YSAOQ1S/ //** 

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/70YSAOQ1S/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}