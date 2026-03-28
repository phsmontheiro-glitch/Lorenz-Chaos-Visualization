let sigma = 10, rho = 28, beta = 8/3 
let x = 0.01, y = 0, z = 0 
let pontos = [] 
let velocidade = 5 

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL) 
}

function draw() {
    background(0) 
    orbitControl() 
    scale(5) 

    let dt = 0.01 
    for (let i = 0; i < velocidade; i++) {
        let dx = (sigma * (y - x)) * dt 
        let dy = (x * (rho - z) - y) * dt 
        let dz = (x * y - beta * z) * dt 
        x += dx; y += dy; z += dz;
        
        //* Ponto original
        pontos.push(createVector(x, y, z)) 
    }

    if (pontos.length > 3000) pontos.shift() 

    noFill() 
    stroke(255) 
    
    //* Linha ou Ponto
    let modoDesenho = (pontos.length < 600) ? LINES : POINTS 
    strokeWeight(modoDesenho === POINTS ? 1.2 : 1) 

    beginShape(modoDesenho) 
    for (let v of pontos) {
        vertex(v.x, v.y, v.z) 
       // vertex(-v.x, v.y, v.z)  
    }
    endShape() 
}
