// Removing style using script
// Turns off or disables a particular style property

var styles = $('link[href*="filename.css"]')[0].sheet.cssRules;
for (i = 0; i < styles.length; i++) {
    if (styles[i].selectorText == '<css selector>') { // eg: .class #id h1
        styles[i].style.removeProperty('<propery name>') // eg: display/position/color
    }
}