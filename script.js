var tempo, aux = 0, aux2 = 0, minIn, segIn

function começou(){
    document.getElementsByClassName("title")[0].innerHTML = "<strong>counting...</strong>"
    document.getElementsByClassName("entradaDados")[0].style.display = "none"
    document.getElementById("btnConfig").innerHTML = "Setup"
    
    document.getElementById("btnConfig").removeAttribute("onclick")
    document.getElementById("btnConfig").setAttribute("onclick", "abrirConfig()")   

    document.getElementById("btnStart").innerHTML = "Pause"
    document.getElementById("btnStart").removeAttribute("onclick")
    document.getElementById("btnStart").setAttribute("onclick", "pausar()")

    if(aux2 == 0){
        let input = document.getElementsByClassName("hora")[0].textContent
        minIn = `${input[0]}${input[1]}`
        segIn = `${input[3]}${input[4]}`
        
        aux2++
    }

    tempo = setInterval(startado, 1000)
}

function startado(){
    let horario = document.getElementsByClassName("hora")[0].textContent
    
    let minuto = `${horario[0]}${horario[1]}`
    let segundo = `${horario[3]}${horario[4]}`
//        alert(`${minuto} ${segundo}`)
    if(Number(minuto) == 0 && Number(segundo) == 0){
        aux++
        if(aux > 1){
            restart()
        }
        else{
            document.getElementsByClassName("hora")[0].innerHTML = "05:00"
            document.getElementsByClassName("hora")[0].style.color = "rgb(255, 132, 132)"
        }
    }else{
        if(Number(segundo) == 0){
            minuto--
            if(Number(minuto) < 10){
                minuto = `0${minuto}`
            }
            segundo = 59
            document.getElementsByClassName("hora")[0].innerHTML = `${minuto}:${segundo}`
            document.querySelector("title").innerText = `${minuto}:${segundo}`
        }else{
            segundo--
            if(Number(segundo) < 10){
                segundo = `0${segundo}`
            }
            document.getElementsByClassName("hora")[0].innerHTML = `${minuto}:${segundo}`
            document.querySelector("title").innerText = `${minuto}:${segundo}`
        }
    }
}

function restart(){
    document.getElementsByClassName("title")[0].innerHTML = "<strong>Finished</strong>"

    document.getElementById("btnStart").innerHTML = "Reset"
    document.getElementById("btnStart").removeAttribute("onclick")
    document.getElementById("btnStart").setAttribute("onclick", "resetar()")
}

function pausar(){
    if(document.getElementsByClassName("entradaDados")[0].style.display != "none"){}
    else{
        document.getElementsByClassName("title")[0].innerHTML = "<strong>Pause</strong>"

        document.querySelector("title").innerText = "Pomodoro Clock"
        document.getElementById("btnStart").innerHTML = "Start"
        document.getElementById("btnStart").removeAttribute("onclick")
        document.getElementById("btnStart").setAttribute("onclick", "começou()")

        clearInterval(tempo) 
    }
}

function resetar(){
    document.getElementsByClassName("title")[0].innerHTML = "<strong>Go?</strong>"
    
    if(minIn.length < 2){
        minIn = `0${minIn}`
    }
    if(segIn.length < 2){
        segIn = `0${segIn}`
    }
    let input = document.getElementsByClassName("hora")[0]
    input.innerHTML = `${minIn}:${segIn}`

    aux = 0
    aux2 = 0

    document.querySelector("title").innerText = "Pomodoro Clock"
    document.getElementById("btnStart").innerHTML = "Start"
    document.getElementById("btnStart").removeAttribute("onclick")
    document.getElementById("btnStart").setAttribute("onclick", "começou()")
    document.getElementsByClassName("hora")[0].style.color = "white"

    clearInterval(tempo)   
}

function abrirConfig(){
    clearInterval(tempo)

    document.getElementsByClassName("entradaDados")[0].style.display = "block"
    document.getElementById("btnConfig").innerHTML = "Save"
    document.getElementById("btnConfig").removeAttribute("onclick")
    document.getElementById("btnConfig").setAttribute("onclick", "resetarConfig()")
}

function resetarConfig(){
    if(document.getElementById("inputMin").value == "" || document.getElementById("inputSeg").value == "" || document.getElementById("inputSeg").value.length > 2 || document.getElementById("inputMin").value.length > 2){
        alert("Tem parada errada ai irmão")
    }else{
        document.getElementsByClassName("entradaDados")[0].style.display = "none"
        document.getElementById("btnConfig").innerHTML = "Setup"
        
        document.getElementById("btnConfig").removeAttribute("onclick")
        document.getElementById("btnConfig").setAttribute("onclick", "abrirConfig()")

        minIn = document.getElementById("inputMin").value
        segIn = document.getElementById("inputSeg").value
        resetar()
    }
}