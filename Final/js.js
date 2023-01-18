

var dar=document.getElementById('pais')
const prueba=()=>console.log(dar.value)
const estados=[
    {Mexico:["aguas","meli"]}
]

const newEstados=()=>{
    for(let i=0;i<8;i++){
    bloque = document.getElementById('Estados');
        bloque.remove(bloque.children)
    } 
    for(let i=0;i<8;i++){
        var Estados = document.getElementById("Estados");
        var inputAficion = document.getElementById("inputAficion").value;
        var option = document.createElement("option");
        option.text = inputAficion;
        Estados.add(option);
    }
}

console.log(estados[0].Mexico.length)


dar.addEventListener('click',()=>{
    console.log(dar.value)
    newEstados()

})

function añadirAficion(){
    var Estados = document.getElementById("Estados");
    var inputAficion = document.getElementById("inputAficion").value;
    var option = document.createElement("option");
    option.text = inputAficion;
    Estados.add(option);
    }





