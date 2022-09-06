class car {
  name: string;

  disp(): void {
    console.log("car name: " + this.name);
  }
}

var obj = new car();
obj.name = "Thar";
console.log("accessing property :" + obj.name);
obj.disp();
