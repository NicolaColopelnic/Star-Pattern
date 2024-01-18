function Hankin(a, v) {
  this.a = a;
  this.v = v;
  this.b = p5.Vector.add(a, v);

  this.show = function () {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}