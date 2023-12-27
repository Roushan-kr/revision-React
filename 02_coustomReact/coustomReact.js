function coustomReander(reactElemnt, container) {
    const domElement = document.createElement(reactElemnt.type)
    domElement.innerHTML= reactElemnt.children
    for (const props in reactElemnt.props) {
       if(props == "children") continue;
       domElement.setAttribute(props, reactElemnt.props[props] )
    }
    console.log(`${domElement} added`);
    container.appendChild(domElement)
}   
document.setAttribute()
/**
     * crreate a coustom react like element.
     * @param elementName String that specifies the html tag.
     * @param elementProp object that specifies the object based artibute.
     * @param elementContent String that specifies the text content.
     */
function createRectElement(elementName, elementProp, elementContent , parrent) {
   const reactElemnt={
        type: elementName.toString(),
        props: {...elementProp},
        children:elementContent
    }
    coustomReander(reactElemnt, parrent)
}

const mainContainer = document.getElementById("root")

createRectElement("a", {href:"https://google.com", target:"_blank"},"link to google.com", mainContainer)

// refer ./01_vitr**/main.jsx

