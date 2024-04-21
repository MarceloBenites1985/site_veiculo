$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    })
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                 required: false
            }


        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor insira o seu telefone',
            email: 'coloque o seu email corretamente',
            veiculoInteresse: 'Insira letras e numeros no veiculo corretamente',
            mensagem: 'Insira a mensagem corretamente'

        },
        submitHandler : function(form){
            console.log(form)
        },
        invalidHandler : function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
               if(camposIncorretos){
                   alert(`Existem ${camposIncorretos} campos incorretos`)
               }
        }

    })

    $('.lista-veiculos button').click(function(){
        const destIno = $('#contato');

       const nomeVeiculo = $(this).parent().find('h3').text();

       $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destIno.offset().top
        }),10000
    })

})