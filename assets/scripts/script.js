let but = document.getElementById('puzzle-button')

var counter = 1;
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24, 25];

function work () {

    var num = Math.floor(Math.random() * array.length);
    var roll = array.splice(num, 1);


    if (counter == 26) {
        document.getElementById("pyro").style.display = "block";
        document.getElementById("model").style.display = "block";
        console.log("finished")
    } else {
        document.getElementById(`${roll[0]}`).style.display = "block";
        counter++
        console.log("counter:"+ counter)
    }
}

but.onclick = work