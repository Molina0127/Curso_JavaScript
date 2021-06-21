function tabuada() {
    
    var tab = document.getElementById('seltab')
    var num = document.getElementById('num')
    var n = Number(num.value)
    
    if(num.value.length == 0){
        window.alert('Por favor digite um número')
    }

    else{
        
        var mult = 1
        tab.innerText = ''
        for(var i = mult; i <= 10; i++){
            var item = document.createElement('option')
            var result = n * i
            item.text = `${n} x ${i} = ${result}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }

         
        /*
        for(var i = mult; i <= 10; i++){
            var result = i * n
            res.innerHTML += `${n} x ${i} = ${result}<br>`
        }
        */
    }

    
    
    

    
    
    
    
}
