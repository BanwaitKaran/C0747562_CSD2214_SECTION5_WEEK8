// my code here!

//const circle = {
//    radius: 1,
//    location: {
//        x: 1,
//        y: 1
//    },

//    draw: function () {
//        console.log('draw');
//    }
//};
//circle.draw();


//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw circle with factory function and radius:' + radius);
        }
    };
}

const circle = createCircle(1);
circle.draw();

function Circle(radius) {
    console.log('this',this)
    this.radius = radius;
    this.draw =function () {
            console.log('draw circle with constructor and radius:' + radius);
   }
}

const anotherCircle = new Circle(1);
anotherCircle.draw();