// function canDrive(usr) {
//     console.log("user is", usr.name);
//     if(usr.age>16){
//         console.log("allow to drive");
//     }
//     else{
//         console.log("do not drive");
//     }

// }

// const Yuri = {
//     name: "Yuri"
// };

// canDrive(Yuri);


interface User {
    name: string;
    age: number;
}
function canDrive(usr: User) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    } else {
        console.log("do not allow to drive");
    }
}
// let's pretend sometime later someone else uses the
//function canDrive
const Yuri: User = {
    name: "Yuri",
    age: 37
}

canDrive(Yuri);

let test: string = "Yuri";

