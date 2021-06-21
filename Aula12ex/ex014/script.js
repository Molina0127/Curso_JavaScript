function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12){
        //Bom dia
        img.src = "MorningImage.png"
        document.body.style.background = '#f8c493'
    }
    else if(hora > 12 && hora <= 18){
        //Boa tarde
        img.src = "AfternoomImage.png"
        document.body.style.background = '#fc7443'
    }
    else{
        //Boa noite
        img.src = "NightImage(1).png"
        document.body.style.background = '#193643'
    }
    
} 
