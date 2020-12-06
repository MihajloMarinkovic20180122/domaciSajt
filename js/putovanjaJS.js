var date2 = new Date();
document.getElementById("datum_futer_putovanja").innerHTML = date2.toLocaleDateString();


$(function(){

    var $registerForm = $("#formZaRegistraciju");
        $.validator.addMethod("bezRazmaka",function(value,element){
            return value == '' || value.trim().length!=0
        }, "Razmaci nisu dozvoljeni");
        if($registerForm.length){
            $registerForm.validate({

                rules:{

                    ime:{
                        required: true,
                        bezRazmaka: true

                    },
                    prezime:{
                        required: true,
                        bezRazmaka: true
                    },
                    destinacije:{
                        required: true
                    },
                    email:{
                        required: true,
                        email:true,
                        bezRazmaka: true
                    },
                    prevoz:{
                        required: true
                    },
                  
                },
                messages:{

                    ime:{
                        required:'Ime je obavezno'
                    },
                    prezime:{
                        required:'Prezime je obavezno'
                    },
                    destinacije:{
                        required:'Odaberite destinaciju'
                    },
                    email:{
                        required:'Unesite e-mail',
                        email: 'Unesite ispravan e-mail'
                    },
                    prevoz:{
                        required:'Odaberite prevoz'
                    }



                },
                errorPlacement: function(error, element){
                    if(element.is(":radio")){
                        error.appendTo(element.parents(".prevoz"));
                    }else if(element.is(":checkbox")){
                        error.appendTo(element.parents(".zahtevi"))
                    }
                    else{
                        error.insertAfter(element);
                    }
                }
            })
        }
})

