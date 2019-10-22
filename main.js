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
        let size = parseInt(el.textContent) * 10;
        el.setAttribute("style", "height:" + size + "px");
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
    let j = 0;
    while (changed) {
        changed = false;
        let i = 1;

        while( i < elems.length - j) {

            current = elems[i];
            let previous = elems[i-1];
            toggle(previous, ["number", "active"]);
            toggle(current, ["number", "active"]);

            if (parseInt(previous.textContent) > parseInt(current.textContent)) {
                changed = true;
                container.insertBefore(current, previous);
            }
            i++;
            await sleep(500)
            toggle(previous, ["number", "active"]);
            toggle(current, ["number", "active"]);
            }

            toggle(elems[elems.length - j - 1], ["finish"]);
            await sleep(350);
            toggle(elems[elems.length - j - 1], ["finish"]);
        j++;
    }
}
