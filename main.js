let root = document.documentElement

let showAdvancedOption = false
let unit = localStorage.getItem('unit') 

if(unit === ""){
    unit = "px"
}

function copy(){

    const topleft = root.style.getPropertyValue('--top-left') || "0" + unit
    const topright = root.style.getPropertyValue('--top-right') || "0" + unit
    const bottomright = root.style.getPropertyValue('--bottom-right') || "0" + unit
    const bottomleft = root.style.getPropertyValue('--bottom-left')|| "0" + unit

    const advancedtopleft = root.style.getPropertyValue('--advanced-top-left') || "0" + unit
    const advancedtopright = root.style.getPropertyValue('--advanced-top-right') || "0" + unit
    const advancedbottomright = root.style.getPropertyValue('--advanced-bottom-right') || "0" + unit
    const advancedbottomleft = root.style.getPropertyValue('--advanced-bottom-left') || "0" + unit




    let text = ""
    text = "border-radius: " + topleft + " " + topright + " " + bottomright + " " + bottomleft 


    if(showAdvancedOption){
        text +=   " / " + advancedtopleft + " " + advancedtopright + " " + advancedbottomright + " " + advancedbottomleft
        
    }

    console.log(text)

    let copytext = document.createElement(`input`)
    copytext.value = text
    copytext.id = "copy"
    document.body.append(copytext)


    let inputCopy = document.getElementById('copy')
    inputCopy.select()
    document.execCommand('copy')
    inputCopy.remove()
}

function displayAdvancedOption(checked){
    //alert(checked)
    showAdvancedOption = checked
    if(checked){
       root.style.setProperty('--advanced-visibility','visible') 
       
    } else {
        root.style.setProperty('--advanced-visibility','hidden') 
        dimencion()
    }
}

function changeUnit(event){
    localStorage.setItem("unit", event.value)
    location.reload()
}



function borderchange(event) {

    newvalue = event.value
    direction = event.id
    cssvar = "--" + direction 
    console.log({cssvar,newvalue})
    root.style.setProperty(cssvar, newvalue + unit)
    if(!showAdvancedOption){
        dimencion()
    }
}


function dimencion(){

    const topleft = root.style.getPropertyValue('--top-left') || "0" + unit
    const topright = root.style.getPropertyValue('--top-right') || "0" + unit
    const bottomright = root.style.getPropertyValue('--bottom-right') || "0" + unit
    const bottomleft = root.style.getPropertyValue('--bottom-left') || "0" + unit



    root.style.setProperty('--advanced-top-left', topleft) || "0" + unit
    root.style.setProperty('--advanced-top-right', topright) || "0" + unit 
    root.style.setProperty('--advanced-bottom-right', bottomright) || "0" + unit 
    root.style.setProperty('--advanced-bottom-left', bottomleft) || "0" + unit

    document.getElementById('advanced-top-left').value = parseInt(topleft)
    document.getElementById('advanced-top-right').value = parseInt(topright)
    document.getElementById('advanced-bottom-left').value = parseInt(bottomright)
    document.getElementById('advanced-bottom-right').value = parseInt(bottomleft)
    
}   

document.getElementById('select-unit').value = unit
dimencion()