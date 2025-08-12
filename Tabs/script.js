const tabList = [{
    id : 1,
    title : "Tab 1",
    content : "This is the content of Tab 1."
}, {
    id : 2,
    title : "Tab 2",
    content : "This is the content of Tab 2."
}, {
    id : 3,
    title : "Tab 3",
    content : "This is the content of Tab 3."
}]

const header = document.querySelector(".tabs-list");
const tabContent = document.querySelector(".tab-content")

const showData = (index) => {
    // tabContent.textContent = "";
    const tab = tabList?.find((tab) => { 
        console.log(tab, index);
        return tab.id === index})
    console.log(tab)
    tabContent.textContent = tab?.content

    const buttons = document.querySelectorAll(".tab-button");
    buttons?.forEach((button)=> {
        button.classList.toggle('active', button.dataset.id == index);
    })
}


tabList.forEach((tab)=>{
    const tabButton = document.createElement("button");
    tabButton.classList.add("tab-button");
    tabButton.setAttribute("data-id", tab.id);
    tabButton.textContent = tab.title
    // tabButton.addEventListener('click', () => showData(tab.id));
    console.log(tabButton)
    console.log(header)
    header.appendChild(tabButton);

})

 header.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('button');
        if(!clickedButton) return;

        const id = parseInt(clickedButton.dataset.id)
        console.log(id)
        showData(id);
    })
showData(1)