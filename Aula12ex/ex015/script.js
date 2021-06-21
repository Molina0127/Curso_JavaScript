function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNas = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(anoNas.value.length < 4 || anoNas.value > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'BabyMan.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'YoungMan.png') 
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultMan.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'OldMan.png')
            }
        }

        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'BabyWoman.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'YoungWoman.png')
            }
            else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'AdultWoman.png')
            }
            else{
                //Idosa
                img.setAttribute('src', 'OldWoman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
    

    

}