Array.prototype.rightRot = function() { this.unshift(this.pop()); return this; }
Array.prototype.leftRot  = function() { this.push(this.shift()); return this; }
Array.prototype.inv = function(){ this[2]+="'"; this[3]+="'"; }
const Lock = function(){
  var al = 0;
  for (; al<arguments.length; al++)
    Object.freeze(arguments[al]);
}

/* modify Lock() with this type of loop also could be used to lessen needed calls
   also mod inv() to shorten the number of calls needed for it
(function() {
  for (let arg of arguments) {
    console.log(arg);
  }
})(1, 2, 3);
*/

//    x,y,z = 90 deg
// xi,yi,zi = 90 deg rev
// x2,y2,z2 = 180 deg done by running x, y or z twice

const Edge = {
  "x": [..."FUBD"],  "x'": [..."DBUF"],
  "y": [..."FLBR"],  "y'": [..."RBLF"],
  "z": [..."URDL"],  "z'": [..."LDRU"]
};
const Midd = {
  "x": [..."ESES"],  "x'": [..."SESE"],
  "y": [..."SMSM"],  "y'": [..."MSMS"],
  "z": [..."EMEM"],  "z'": [..."MEME"]
};
Midd["x"].inv(),  Midd["y"].inv(),  Midd["z"].inv(),
Midd["x'"].inv(), Midd["y'"].inv(), Midd["z'"].inv()

Lock(
  Edge, Edge["x"], Edge["y"], Edge["z"], Edge["x'"], Edge["y'"], Edge["z'"],
  Midd, Midd["x"], Midd["y"], Midd["z"], Midd["x'"], Midd["y'"], Midd["z'"]
);


trans = (alg, ax)=>{
  var ac, ed, mi, edsh,  edmi;

  alg = alg.split(" ");
  ac = 0, // loop counter for alg reconstruction

  ed = Edge[ax],
  mi = Midd[ax],
  edsh = Edge[ax],
  edmi = Midd[ax];
  edsh.rightRot();
  edmi.rightRot();

  for (; ac<alg.length; ac++){
    // check if inverted move first

    // check if move is an outer layer move
    if (ed.indexOf(alg[ac])>-1) // not finished
  }
}



