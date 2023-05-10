function inserirAluno(){
    var matricula = prompt('Insira a matricula do aluno:')
    var nome = prompt('Insira o nome completo do aluno:')
    var falta = parseInt(prompt('Insira as faltas totais do aluno:'))
    var b1 = parseFloat(prompt('Insira a nota do B1 do aluno:').replace(/,/, "."))
    var b2 = parseFloat(prompt('Insira a nota do B2 do aluno:').replace(/,/, "."))
    var media = (b1 + b2) / 2

    var tabela = document.querySelector("body > main > table")
    var adlinha = tabela.insertRow(-1)

    adlinha.insertCell(0).innerText = matricula
    adlinha.insertCell(1).innerText = nome
    adlinha.insertCell(2).innerText = falta
    adlinha.insertCell(3).innerText = b1
    adlinha.insertCell(4).innerText = b2
    adlinha.insertCell(5).innerText = media.toFixed(2)

    if (media < 7) {
        var pf = parseFloat(prompt('Insira a nota da prova final do aluno:'))
        adlinha.insertCell(6).innerText = pf
        var mediafinal = (media + pf) / 2
        adlinha.insertCell(7).innerText = mediafinal.toFixed(2)

        if (mediafinal < 7) {
            var reprovado = adlinha.insertCell(8)
            reprovado.innerText = 'Reprovado'
            reprovado.style.color = "#DE412F"
        } else if (falta > 16) {
            var reprovado = adlinha.insertCell(8)
            reprovado.innerText = 'Reprovado'
            reprovado.style.color = "#DE412F"
        } else {
            var aprovado = adlinha.insertCell(8)
            aprovado.innerText = 'Aprovado'
            aprovado.style.color = "#10914F"
        }

    } else if (falta > 16) {
        adlinha.insertCell(6).innerText = '.'
        adlinha.insertCell(7).innerText = '.'
        var reprovado = adlinha.insertCell(8)
        reprovado.innerText = 'Reprovado'
        reprovado.style.color = "#DE412F"
    } else {
        adlinha.insertCell(6).innerText = '.'
        adlinha.insertCell(7).innerText = '.'
        var aprovado = adlinha.insertCell(8)
        aprovado.innerText = 'Aprovado'
        aprovado.style.color = "#10914F"
    }
}