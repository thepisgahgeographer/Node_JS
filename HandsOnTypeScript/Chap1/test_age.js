// function canDrive(usr) {
//     console.log("user is", usr.name);
//     if(usr.age>16){
//         console.log("allow to drive");
//     }
//     else{
//         console.log("do not drive");
//     }
function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    }
    else {
        console.log("do not allow to drive");
    }
}
// let's pretend sometime later someone else uses the
//function canDrive
var Yuri = {
    name: "Yuri",
    age: 37
};
canDrive(Yuri);
