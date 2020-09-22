let table;

function preload() {
  table = loadTable("assets/nasm.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  console.log(table);
  textAlign(CENTER, TOP);
  for (let r = 0;r < table.getRowCount(); r++) {
    const name = table.getString(r, "Country");
    const projectNum = table.getNum(r, "Project_Num");
    const aircraftNum = table.getNum(r, "Aircraft_Num");
    const x = random(0, width);
    const y = random(0, height);
    const size = map(projectNum, 0, 200, 0, 100);
    const fillColor = map(aircraftNum, 0, 130, 255, 0);
    noStroke();
    fill(fillColor, 50, 50, 80);
    circle(x, y, size);
    fill(0);
    text(name, x, y + size / 2 + 5);
  }
}

function draw() {
  
}