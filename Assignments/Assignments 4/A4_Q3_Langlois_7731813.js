window.onload = () => {

    //For all of the nodes attach a click event handler
    [].forEach.call(document.getElementsByTagName('*'), item => item.onclick = event => {
        //prevent the click from propagating to elements below the current one
        event.stopPropagation();

        //check for modifier keys and display the appropriate alert
        if(event.shiftKey) {
            alert(event.type);
        } else if (event.ctrlKey) {
            //I think the tagName was meant to be displayed, since not all elements support the name attribute
            alert(event.target.tagName)
        }
    });

};