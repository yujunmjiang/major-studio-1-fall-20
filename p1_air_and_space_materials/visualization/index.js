/*************
Data
**************/
var colors = [
  [ 0, 0, 0 ],            // year (0)
  [ 124, 192, 255],       // cover (1)
  [ 132, 135, 137],       // materials: aluminum (2)
  [ 176, 102, 80],        // materials: copper (3)
  [ 0, 0, 0],             // materials: cord (4)
  [ 191, 186, 175],       // materials: cotton (5)
  [ 255, 189, 238],       // materials: fabric (6)
  [ 238, 238, 238],       // materials: plastic (7)
  [ 214, 87, 32],         // materials: rubber (8)
  [ 202, 191, 187],       // materials: silk (9)
  [ 67, 70, 75],          // materials: steel (10)
  [ 133, 94, 66],         // materials: wood (11)
];

// var dataset = [ 
// [{color: colors[0], intensity: 0.1}, {color: colors[3], intensity: 0.5}, {color: colors[3], intensity: 0.75}],
// [{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
// [{color: colors[0], intensity: 0.25}, {color: colors[1], intensity: 0.2}, {color: colors[2], intensity: 0.9}],
// [{color: colors[3], intensity: 0.84}, {color: colors[0], intensity: 0.5}, {color: colors[1], intensity: 0.75}],
// [{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
// ];

var dataset = [ 
  [{title: "Lockheed U-2C", colorYear: colors[0], intensity: 0.5, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}, 
   {title: "Boeing FB-5 Hawk", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Story Little Gee Bee", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Pitts S-1S Special", colorYear: colors[0], intensity: 0.5, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]}],

  [{title: "Boeing 247-D", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}, 
   {title: "Huff-Daland Duster", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]},  
   {title: "Wills Wing Talon 150", colorYear: colors[0], intensity: 0.7, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]},
   {title: "Douglas World Cruiser Chicago", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[11], colorMaterial3: colors[5], colorMaterial4: colors[10], colorMaterial5: colors[2]}],

  [{title: "Nakajima Ki-115a  Tsurugi (Sabre)", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[11]},
   {title: "Boeing B-29 Superfortress 'Enola Gay'", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}, 
   {title: "Rutan Quickie", colorYear: colors[0], intensity: 0.6, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}],

  [{title: "Fairchild FC-2", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[5]}, 
   {title: "Bücker Bü-133C Jungmeister", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[10], colorMaterial5: colors[6]}, 
   {title: "Northrop 4A Alpha", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[2]}],

  [{title: "Douglas SBD-6 Dauntless", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[10], colorMaterial4: colors[7], colorMaterial5: colors[6]}, 
   {title: "1903 Wright Flyer", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[11], colorMaterial4: colors[6], colorMaterial5: colors[2]}, 
   {title: "Grumman F6F-3K Hellcat", colorYear: colors[0], intensity: 0.4, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[1]}],

  [{title: "Boeing F4B-4", colorYear: colors[0], intensity: 0.3, colorCover: colors[1], colorMaterial1: colors[10], colorMaterial2: colors[11], colorMaterial3: colors[6], colorMaterial4: colors[7], colorMaterial5: colors[8]}, 
   {title: "Curtiss Model E Flying Boat (hull only)", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[1], colorMaterial2: colors[1], colorMaterial3: colors[1], colorMaterial4: colors[1], colorMaterial5: colors[11]},  
   {title: "Langley Aerodrome Number 5", colorYear: colors[0], intensity: 0.2, colorCover: colors[1], colorMaterial1: colors[11], colorMaterial2: colors[9], colorMaterial3: colors[10], colorMaterial4: colors[3], colorMaterial5: colors[4]}],
  ];



/*************
Params
**************/

var cols = dataset.length;
var rows = dataset[0].length;
var gap = 50;
var margin = 50;
var cellSize = ( gap * 2 ) + margin;



/*************
D3.js
**************/

var grid = d3.select("#d3-container")
  .append("svg")
  .attr("width", cols * cellSize )
  .attr("height", rows * cellSize + 200 );
  
grid.selectAll("g")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  // .selectAll("circle")
  // .data(function(d) {return d;})
  // .enter().append("circle")
  // .attr("fill", function(d) {
  //   return "rgb(" + d.color[0] + "," + d.color[1] + "," + d.color[2] + ")"
  // })
  // .attr("fill-opacity", function (d) {
  //   return d.intensity;
  // })
  
  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorYear + ")"
  })
  .attr("fill-opacity", function (d) {
    return d.intensity;
  })
  
  // .attr("r", radius)
  // .attr("cx", radius)
  // .attr("cy", function(d, i) {
  //   return radius + i * cellSize + 50;
  // });
  .attr("x", 0)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 0;
  })
  .attr("width", 100)
  .attr("height", 100);



/*************
Year Cover
**************/
// year: top left cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 0;
  })
  .attr("width", 50)
  .attr("height", 30);

// year: top right cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 70)
  .attr("y", function(d, i) {
    return gap + i * cellSize + 0;
  })
  .attr("width", 30)
  .attr("height", 30);

// year: bottom left cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 50)
  .attr("height", 30);

// year: bottom right cover
grid.selectAll("year-cover")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorCover + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 70)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 30)
  .attr("height", 30);



/*************
Materials
**************/
// material 1
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial1 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 0)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 2
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial2 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 10)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 3
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial3 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 20)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 4
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial4 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 30)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 10)
  .attr("height", 10);

// material 5
grid.selectAll("material")
  .data(dataset)
  .enter().append("g")
  .attr("transform", function (d, i) {
    return "translate(" + i * cellSize + ")"
  })

  .selectAll("rect")
  .data(function(d) {return d;})
  .enter().append("rect")
  .attr("fill", function(d) {
    return "rgb(" + d.colorMaterial5 + ")"
  })
  .attr("fill-opacity", 1)
  
  .attr("x", 40)
  .attr("y", function(d, i) {
    return 70 + gap + i * cellSize + 0;
  })
  .attr("width", 10)
  .attr("height", 10);



/*************
Legends
**************/
// select the svg area
var svg = d3.select("#d3-legends")

// legend: color sample
svg.append("rect").attr("x", 40).attr("y", 130).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.8)
svg.append("rect").attr("x", 40).attr("y", 145).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.7)
svg.append("rect").attr("x", 40).attr("y", 160).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.6)
svg.append("rect").attr("x", 40).attr("y", 175).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.5)
svg.append("rect").attr("x", 40).attr("y", 190).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.4)
svg.append("rect").attr("x", 40).attr("y", 205).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.3)
svg.append("rect").attr("x", 40).attr("y", 220).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.2)
svg.append("rect").attr("x", 40).attr("y", 235).attr("width", 15).attr("height", 15).style("fill", "#000000").attr("fill-opacity", 0.1)

svg.append("rect").attr("x", 40).attr("y", 330).attr("width", 15).attr("height", 15).style("fill", "#848789")
svg.append("rect").attr("x", 40).attr("y", 350).attr("width", 15).attr("height", 15).style("fill", "#b06650")
svg.append("rect").attr("x", 40).attr("y", 370).attr("width", 15).attr("height", 15).style("fill", "#000000")
svg.append("rect").attr("x", 40).attr("y", 390).attr("width", 15).attr("height", 15).style("fill", "#bfbaaf")
svg.append("rect").attr("x", 40).attr("y", 410).attr("width", 15).attr("height", 15).style("fill", "#ffbdee")
svg.append("rect").attr("x", 40).attr("y", 430).attr("width", 15).attr("height", 15).style("fill", "#eeeeee")
svg.append("rect").attr("x", 40).attr("y", 450).attr("width", 15).attr("height", 15).style("fill", "#d65720")
svg.append("rect").attr("x", 40).attr("y", 470).attr("width", 15).attr("height", 15).style("fill", "#cabfbb")
svg.append("rect").attr("x", 40).attr("y", 490).attr("width", 15).attr("height", 15).style("fill", "#43464b")
svg.append("rect").attr("x", 40).attr("y", 510).attr("width", 15).attr("height", 15).style("fill", "#855e42")
// France
svg.append("rect").attr("x", 40).attr("y", 600).attr("width", 15).attr("height", 15).style("fill", "#ef4135")
svg.append("rect").attr("x", 40).attr("y", 615).attr("width", 15).attr("height", 15).style("fill", "#ffffff")
svg.append("rect").attr("x", 40).attr("y", 630).attr("width", 15).attr("height", 15).style("fill", "#0050a4")
// Germany
svg.append("rect").attr("x", 40).attr("y", 650).attr("width", 15).attr("height", 15).style("fill", "#ffce00")
svg.append("rect").attr("x", 40).attr("y", 665).attr("width", 15).attr("height", 15).style("fill", "#dd0000")
svg.append("rect").attr("x", 40).attr("y", 680).attr("width", 15).attr("height", 15).style("fill", "#000000")
// Italy
svg.append("rect").attr("x", 40).attr("y", 700).attr("width", 15).attr("height", 15).style("fill", "#cd212a")
svg.append("rect").attr("x", 40).attr("y", 715).attr("width", 15).attr("height", 15).style("fill", "#f4f5f0")
svg.append("rect").attr("x", 40).attr("y", 730).attr("width", 15).attr("height", 15).style("fill", "#008c45")
// Japan
svg.append("rect").attr("x", 40).attr("y", 750).attr("width", 15).attr("height", 15).style("fill", "#be0029")
svg.append("rect").attr("x", 40).attr("y", 765).attr("width", 15).attr("height", 15).style("fill", "#ffffff")
// Netherland
svg.append("rect").attr("x", 40).attr("y", 785).attr("width", 15).attr("height", 15).style("fill", "#21468b")
svg.append("rect").attr("x", 40).attr("y", 800).attr("width", 15).attr("height", 15).style("fill", "#ffffff")
svg.append("rect").attr("x", 40).attr("y", 815).attr("width", 15).attr("height", 15).style("fill", "#ae1c28")
// Spain
svg.append("rect").attr("x", 40).attr("y", 835).attr("width", 15).attr("height", 15).style("fill", "#aa151b")
svg.append("rect").attr("x", 40).attr("y", 850).attr("width", 15).attr("height", 15).style("fill", "#f1bf00")
svg.append("rect").attr("x", 40).attr("y", 865).attr("width", 15).attr("height", 15).style("fill", "#aa151b")
// Union of Soviet Socialist Republics (USSR)
svg.append("rect").attr("x", 40).attr("y", 885).attr("width", 15).attr("height", 15).style("fill", "#ffd900")
svg.append("rect").attr("x", 40).attr("y", 900).attr("width", 15).attr("height", 15).style("fill", "#cd0000")
// United Kingdom (UK)
svg.append("rect").attr("x", 40).attr("y", 920).attr("width", 15).attr("height", 15).style("fill", "#ffffff")
svg.append("rect").attr("x", 40).attr("y", 935).attr("width", 15).attr("height", 15).style("fill", "#c8102e")
svg.append("rect").attr("x", 40).attr("y", 950).attr("width", 15).attr("height", 15).style("fill", "#012169")
//United States of America
svg.append("rect").attr("x", 40).attr("y", 970).attr("width", 15).attr("height", 15).style("fill", "#3c3b6e")
svg.append("rect").attr("x", 40).attr("y", 985).attr("width", 15).attr("height", 15).style("fill", "#b22234")
svg.append("rect").attr("x", 40).attr("y", 1000).attr("width", 15).attr("height", 15).style("fill", "#ffffff")

// legend: text
svg.append("text").attr("x", 40).attr("y", 100).text("FIRST SERVICE YEAR").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")

svg.append("text").attr("x", 60).attr("y", 130).text("Later").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 145).text("2010").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 160).text("1990").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 175).text("1970").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 190).text("1950").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 205).text("1930").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 220).text("1910").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 235).text("1890").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 250).text("Earlier").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")

svg.append("text").attr("x", 40).attr("y", 300).text("MATERIAL").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")

svg.append("text").attr("x", 60).attr("y", 338).text("Aluminum").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 358).text("Copper").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 378).text("Cord").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 398).text("Cotton").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 418).text("Fabric").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 438).text("Plastic").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 458).text("Rubber").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 478).text("Silk").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 498).text("Steel").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 518).text("Wood").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")

svg.append("text").attr("x", 40).attr("y", 570).text("COUNTRY OF ORIGIN").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")

svg.append("text").attr("x", 60).attr("y", 623).text("France").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 673).text("Germany").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 723).text("Italy").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 765).text("Japan").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 808).text("Netherland").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 858).text("Spain").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 900).text("USSR").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 943).text("UK").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")
svg.append("text").attr("x", 60).attr("y", 993).text("USA").style("font-size", "10px").attr("alignment-baseline","middle").style("fill", "#ffffff")