//Triangle -------------
function CalculateTriangleArea(){
    //TriangleBase Value--
    const triangleBaseInput = document.getElementById('triangleBase').value;
    const base = parseFloat(triangleBaseInput)
    console.log(base)
    //TriangleHeight Value--
    const triangleHeightInput = document.getElementById('triangleHeight').value;
    const height = parseFloat(triangleHeightInput)
    console.log(height)

    //Calculate Are-
    const area = 0.5 * base * height;
    console.log('Area Of The Triangle is :' , area)

    //Ans Show To The Display---
    const triangleAreaDisplay = document.getElementById('triangleArea')
    triangleAreaDisplay.innerText = area
}
//Rectangle ---------
function CalculateRectangale(){

const rectangleWidthInput = document.getElementById('rectangleleWidth').value;
const width =parseFloat(rectangleWidthInput)
const rectangleI = document.getElementById('rectangleI').value;
const Inces = parseFloat(rectangleI)
console.log(width , Inces)

//Calculate --
const ans = width * Inces
console.log(ans)

//ans Show ---

const AnsRectangle = document.getElementById('rectangleArea')
AnsRectangle.innerText = ans
}

//rhombus-----------

function  CalculaterhombusArea (){
    const rhombusd1 = document.getElementById('rhombusd1').value
    const d1 = parseFloat(rhombusd1)
    const rhombusd2 = document.getElementById("rhombusd2").value
    const d2 = parseFloat(rhombusd2)
    console.log(d1,d2)

    //calculate----
    const  ans = 0.5 * d1 * d2
    console.log(ans)

    //show ---------
    const show = document.getElementById('rhombusArea')
    show.innerText = ans
    console.log(ans)
}
 

//Ellipse-----------
function CalculateEllipseArea(){
const ellipseA = document.getElementById('ellipseA').value;
const A = parseFloat(ellipseA)
const ellipseB = document.getElementById('ellipseB').value;
const B = parseFloat(ellipseB)
console.log(A , B)

//Calculate---

const  ans = 3.14159 * A * B
console.log(ans)

//-Display

const display = document.getElementById('ellipseArea')
display.innerText = ans
console.log(display)
}
