Array.prototype.leftRot = function() { this.unshift(this.pop()); return this; }
Array.prototype.rightRot = function() { this.push(this.shift()); return this; }
const Lock = function(){
  var al = 0;
  for (; al<arguments.length; al++)
    Object.freeze(arguments[al]);
}

//    x,y,z = 90 deg
// xi,yi,zi = 90 deg rev
// x2,y2,z2 = 180 deg done by running x, y or z twice

const Edge = {
  x: [..."FUBD"],  xi: [..."DBUF"],
  y: [..."FLBR"],  yi: [..."RBLF"],
  z: [..."URDL"],  zi: [..."LDRU"]
};
const Midd = {
  x: ["E","S","E'","S'"],  xi: ["S'","E'","S","E"],
  y: ["S","M","S'","M'"],  yi: ["M'","S'","M","S"],
  z: ["E","M","E'","M'"],  zi: ["M'","E'","M","E"]
};
Lock(Edge,Edge.x,Edge.y,Edge.z,Edge.xi,Edge.yi,Edge.zi,
  Midd,Midd.x,Midd.y,Midd.z,Midd.xi,Midd.yi,Midd.zi);
