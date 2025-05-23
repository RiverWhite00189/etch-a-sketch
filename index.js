//main grid 
let grid = document.querySelector("div");
const MAXPX = 600;

function gridMaker(numBoxes) {
    let boxPx = MAXPX / numBoxes;

    for (let i = 0; i < numBoxes; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", i + 1);
        row.setAttribute("class", "row");
        grid.appendChild(row);

        for (let j = 0; j < numBoxes; j++) {
            let box = document.createElement("div");
            //let newId = i + 1 + "-" + (j + 1);
            //box.setAttribute("id", newId);
            box.setAttribute("class", "box");
            box.style.width = boxPx +"px";
            box.style.height = boxPx +"px";
            row.appendChild(box);

            box.addEventListener("mouseover", (e) => {
                //box.removeAttribute("class", "clean-box");
                //box.setAttribute("class", "box dirty-box");
                let curr = box.style.opacity;
                curr = Number(curr) + 0.1;
                if (curr <= 1) {
                    box.style.opacity = curr;
                }
            });
        }
    }
}

function gridKiller() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(element => element.remove());
}

let reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {
    let numBoxes = prompt("How many squares per side?");
    while (numBoxes > 100) {
        numBoxes = prompt("My friend let's pick a smaller number please...")
    }

    gridKiller();
    gridMaker(numBoxes);
});



gridMaker(16)