const mockData = [
  { bgColor: "red", width: "33%" },
  { bgColor: "blue", width: "33%" },
  { bgColor: "green", width: "34%" },
  { bgColor: "yellow", width: "50%" },
  { bgColor: "pink", width: "50%" },
  { bgColor: "orange", width: "20%" },
  { bgColor: "cyan", width: "50%" },
  { bgColor: "lime", width: "30%" },
];

const container = document.querySelector(".container");

mockData.forEach((item)=> {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = item.bgColor;
    box.style.width = item.width;
    box.style.height = "100px"; // Set a fixed height for the boxes

    container.appendChild(box);
})

container.addEventListener("click", (e)=> {
    const clickedElement = e.target;
    if(clickedElement.classList.contains("box")){
        const index = Array.from(container.children).indexOf(clickedElement)
        const color = mockData[index].bgColor;
        alert(`
Box color: ${color}
Box width: ${mockData[index].width}
Box number : ${index + 1}
            `);
    }
})