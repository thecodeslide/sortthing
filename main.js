console.log("this");

function main() {
        const entry = document.getElementById("submit");
        document.getElementById("sort").addEventListener('click', sort);

        entry.addEventListener('click', parseVal);
}

function parseVal() {
    let input = document.getElementById('entry').value;
    if (input.length === 0) {
        input = "45 78 34 23 3 6 8 76 12 5 0";
    }

    for(const value of input.split(" ")) {
        let nele = document.createElement("span");
        nele.classList.add("number");
        nele.classList.add("inline");
        nele.appendChild(document.createTextNode(value));
        document.getElementById("container").appendChild(nele);
    }
    setLength(document.getElementsByClassName("number"));
}

function setLength(input) {
    for(const el of input) {
        // if(parseInt(el.textContent) < 0) {
        //     el.classList.toggle("inline");
        //     el.setAttribute
        // } 
        // else {
                let size = parseInt(el.textContent) * 10;
                el.setAttribute("style", "height:" + size + "px");
            // }
    }
}

function toggle(el, names) {
    for (const name of names) {
        el.classList.toggle(name);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sort() {
    let changed = true;
    let current;
    const elems = document.getElementsByClassName("number")
    const container = document.getElementById("container")
    const display = document.getElementById("display");
    let j = 0;
    while (changed) {
        changed = false;
        let i = 1;

        while( i < elems.length - j) {

            current = elems[i];
            let previous = elems[i-1];
            toggle(previous, ["number", "active"]);
            toggle(current, ["number", "active"]);
            
            display.textContent = `Checking if ${previous.textContent} > ${current.textContent} and swap them if true. \n The current value of swapped = ${changed}`;

            if (parseInt(previous.textContent) > parseInt(current.textContent)) {
                changed = true;
                container.insertBefore(current, previous);
                // Checking if 5 > 15 and swap them if that is true.
                // The current value of swapped = true.
            }
            i++;
            await sleep(1000 - document.getElementById('speed').value)
            toggle(previous, ["number", "active"]);
            toggle(current, ["number", "active"]);
            }

            toggle(elems[elems.length - j - 1], ["finish"]);
            await sleep(350);
            toggle(elems[elems.length - j - 1], ["finish"]);
        j++;
    }
}

// function display() {
//     const dis = document.getElementById("display");
//     dis.textContent = 
// }

// function changeSpeed() {
//     document.getElementById("speed").addEventListener
// }


// function main() {
//         // const entry = document.getElementById("submit");
//         // document.getElementById("sort").addEventListener('click', sort);

//         // entry.addEventListener('click', parseVal);
//         document.getElementsByTagName("body")[0].addEventListener('click', parseClick);
// }

// function parseClick(event) {
//     if(event.target.id === "sort") {
//         sort();
//     }
//     else if(event.target.id === "submit") parseVal();
// }

