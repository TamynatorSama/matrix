var column = screen.availHeight;
window.onresize = ()=>{
    column = screen.availHeight
}

for(let k = 0;k<column;k++){
    document.body.appendChild(createP())
}

function createP(){
    var p = document.createElement('p')
    var position = screen.availWidth/30
    var place = random(0,screen.availWidth*2)
    const delay = random(100,500)
    const duration = random(3000,10000) 
    var trasition = random(30,column*4)
    var content = []


    for(var i =0;i < random(30,Math.floor(column/15));i++){
        var symbol = getRandomChar()
        content.push(symbol)
    }
    var text = document.createTextNode(content)
    p.append(text);
    
    place%2 == 0 ? p.style.left = `${place}px` : p.style.right = `${place}px` 

    var animation = p.animate([
        {transform:'translateY(-1000px)'},
        {transform: `translateY(${trasition}px)`}
    ],
    {
        delay:delay,
        duration:duration,
        fill:'forwards',
    })
    p.className = `text${i}`
    animation.onfinish = ()=>{
        var elem = document.querySelector(`.text${i}`)
        elem.remove()
            document.body.appendChild(createP())
    }
    return p
}
function random(from,to){
    return Math.trunc(Math.random()*(to-from +1)+from)
}

function getRandomChar(){
    const charRange = [
        [0x3041,0x30ff],
        [0x0021,0x007a],
        [0x00bc,0x02af]
    ]
    const i = random(0,charRange.length-1)
    return String.fromCharCode(random(charRange[1][0],charRange[i][1]))
}
