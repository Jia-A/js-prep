const accordionItems = [
    {
        title : "Accordion Item 1",
        content : "This is the content of Accordion Item 1."
    },
    {
        title : "Accordion Item 2",
        content : "This is the content of Accordion Item 2."
    },
    {
        title : "Accordion Item 3",
        content : "This is the content of Accordion Item 3."
    }
]

const accordionContainer = document.querySelector(".accordion")

accordionItems?.forEach((item)=> {
    const sectionItem = document.createElement("div")
    sectionItem.classList.add("sectionItem")


    const sectionHeader = document.createElement("div")
    sectionHeader.classList.add("sectionHeader")
    sectionHeader.textContent = item?.title

    const sectionContent = document.createElement("div")
    sectionContent.classList.add("sectionContent")
    sectionContent.textContent = item?.content

    sectionItem.appendChild(sectionHeader)

    // sectionItem.appendChild(sectionContent)

    accordionContainer.appendChild(sectionItem)

})

