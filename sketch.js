const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world

function  setup() {
    var canvas = createCanvas(1100, 600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500, 580, 1200, 10);
    ground2 = new Ground(450, 400, 265, 10);
    ground3 = new Ground(850, 150, 180, 10);

    // ground 2, level1

    box13 = new Box(575, 390, 20, 20);
    box1 = new Box(555, 390, 20, 20);
    box2 = new Box(535, 390, 20, 20);
    box3 = new Box(515, 390, 20, 20);
    box4 = new Box(495, 390, 20, 20);
    box5 = new Box(475, 390, 20, 20);
    box6 = new Box(455, 390, 20, 20);
    box7 = new Box(435, 390, 20, 20);
    box8 = new Box(415, 390, 20, 20);
    box9 = new Box(395, 390, 20, 20);
    box10 = new Box(375, 390, 20, 20);
    box11 = new Box(355, 390, 20, 20);
    box12 = new Box(335, 390, 20, 20);
    
    // ground 2, level 2
    box14 = new Box(350, 370, 20, 20);
    box15 = new Box(370, 370, 20, 20);
    box16 = new Box(390, 370, 20, 20);
    box17 = new Box(410, 370, 20, 20);
    box18 = new Box(430, 370, 20, 20);
    box19 = new Box(450, 370, 20, 20);
    box20 = new Box(470, 370, 20, 20);
    box21 = new Box(490, 370, 20, 20);
    box22 = new Box(510, 370, 20, 20);
    box23 = new Box(530, 370, 20, 20);
    box24 = new Box(550, 370, 20, 20);

    // ground 2, level 3
    box25 = new Box(370, 350, 20, 20);
    box26 = new Box(390, 350, 20, 20);
    box27 = new Box(410, 350, 20, 20);
    box28 = new Box(430, 350, 20 ,20);
    box29 = new Box(450, 350, 20, 20);
    box30 = new Box(470, 350, 20, 20);
    box31 = new Box(490, 350, 20, 20);
    box32 = new Box(510, 350, 20, 20);
    box33 = new Box(530, 350, 20, 20);

    // ground2, level 4
    box34 = new Box(390, 330, 20, 20);
    box35 = new Box(410, 330, 20, 20);
    box36 = new Box(430, 330, 20, 20);
    box37 = new Box(450, 330, 20, 20);
    box38 = new Box(470, 330, 20, 20);
    box39 = new Box(490, 330, 20, 20);
    box40 = new Box(510, 330, 20, 20);

    //ground 3, level 1
    box41 = new Box(780, 140, 20, 20);
    box42 = new Box(800, 140, 20, 20);
    box43 = new Box(820, 140, 20, 20);
    box44 = new Box(840, 140, 20, 20);
    box45 = new Box(860, 140, 20, 20);
    box46 = new Box(880, 140, 20, 20);
    box47 = new Box(900, 140, 20, 20);

    //ground 3, level2
    box48 = new Box(800, 120, 20, 20);
    box49 = new Box(820, 120, 20, 20);
    box50 = new Box(840, 120, 20, 20);
    box51 = new Box(860, 120, 20, 20);
    box52 = new Box(880, 120, 20, 20);

    //ground 3, level 3
    box53 = new Box(820, 100, 20, 20);
    box54 = new Box(840, 100, 20, 20);
    box55 = new Box(860, 100, 20, 20);

    //ground 3, level 4
    box56 = new Box(840, 80, 20, 20);

    polygon = new Polygon(200, 200, 50);

    sling = new Slingshot(polygon.body, {x:200, y:200});

}

function draw() {
    background("black");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    fill(rgb = 104, 188, 255);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    fill(rgb = 255, 47, 218);
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    fill(rgb = 17, 152, 255);
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    fill(rgb = 255, 255, 255);
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();

    fill(rgb = 104, 188, 255);
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();

    fill(rgb = 255, 47, 218);
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();

    fill(rgb = 17, 152, 255);
    box53.display();
    box54.display();
    box55.display();

    fill(rgb = 255, 255, 255);
    box56.display();

    polygon.display();  

    sling.display();


   // console.log(polygon.body.position.x, polygon.body.position.y)
    

   

    textSize(30);
    fill("white")
    text(mouseX+","+mouseY, mouseX, mouseY);

   
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly();
}   

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    }
}