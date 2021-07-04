const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
 backgroundImg = loadImage("sunrise1.png")
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    
        var response =  await fetch ('http://worldtimeapi.org/api/timezone/America/New_York')  
        var responseJSON = await response.json()
        console.log(responseJSON)
       
        var dt = responseJSON.datetime
        console.log(dt)
       
        var gt = dt.slice(11,13)
        console.log(gt)
       if(gt >= 04 && gt <= 06){
           bg="sunrise1.png"
       }
           
       else if (gt >= 06 && gt <= 08){
               bg = "sunrise2.png"
           }
       else if (gt >= 08 && gt <= 10) {
            bg = "sunrise3.png"
        }
        else if (gt >= 10 && gt <= 12){
            bg = "sunrise4.png"
        }
        else if (gt >= 12 && gt <= 14){
            bg = "sunrise5.png"
        }
        else if (gt >= 14 && gt <= 16){
            bg = "sunrise6.png"
        }
        else if (gt >= 16 && gt <= 18){
            bg = "sunset7.png"
        }
        else if (gt >= 18 && gt <= 20){
            bg = "sunset8.png"
        }
        else if (gt >= 20 && gt <= 22){
            bg = "sunset9.png"
        }
        else if (gt >= 22 && gt <= 00){
            bg = "sunset10.png"
        }
        else if (gt >= 00 && gt <= 23){
            bg = "sunset11.png"
        }
        else {
            bg = "sunset12.png"
        }
       backgroundImg = loadImage(bg)
       
       
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
