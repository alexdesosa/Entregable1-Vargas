
function entradaBoliche () {
    bienvenida();
};

function bienvenida() {
    let preguntarNombre = prompt('Bienvenido al boliche, ¿Cómo te llamas?');
    let preguntarEdad = parseInt(prompt('¿Y tú edad?'));
    console.log(`Perfecto, ${preguntarNombre}. Tú edad es ${preguntarEdad} cierto?. Ahora veo tu DNI para ver si te dejo pasar a la lista y de páso veo si estas en la lista`);
    if(true) {
        buscarNombre();
    };
};

function buscarNombre() {
    let preguntarNombre = prompt('Podrías volver a decirme tu nombre?');
    console.log(`Perfecto ${preguntarNombre}, ahora voy a fijarme si estás en la lista.`);
    const nombresLista = ["Raul", "Javier", "Carlos", "Santiago", "Facundo", "Pedro", "Octavio", "Alejandro"];
    for(i=0;i<nombresLista.length;i++) {
        if(preguntarNombre === nombresLista[i]){
            console.log(`Perfecto ${preguntarNombre}, tu nombre esta en la lista.`);
            console.log('Ahora veamos si tienes el DNI');
            pedirDNI();
        };        
    };
    console.log(`Disculpa ${preguntarNombre}, pero no apareces en la lista. Vete a casa. `);
    return false;
};

function pedirDNI() {
    let preguntarEdad = prompt('Cuántos años tenías?');
    let preguntarDNI = prompt('¿Tienes el DNI en mano?');

    if(preguntarDNI === "Si"){
        if(preguntarEdad >= 18 ){
            console.log('Perfecto, sos mayor de edad. ¡Podes pasar!');
            preguntasBoliche();
        } else {
            console.log('Veo que sos menor de edad, regresa a tu casa');
            return false;
        }     
    } else {
        console.log('Veo que no tienes DNI, regresa a tu casa.');
        return false;
    };
};

function preguntasBoliche(){
    let preguntarNacionalidad = prompt('Veo que pasaste, ¿De dónde eres?');
    if(preguntarNacionalidad === "Argentina"){
        console.log('Veo que sos argentino');
    } else {
        console.log('Ah, que bien. ¡Un gusto!');
    };
    let preguntarTrabajo = prompt('¿Y de que trabajas?');
    console.log(`Ya veo.El trabajo de ${preguntarTrabajo} es muy buen trabajo, tus padres deben estar felices por tí.`);
    preguntasPrograma();
};

function preguntasPrograma (){
    let usuario = [];
    let contraseña = [];
    console.log('¿Alguna vez haz escuchado de Operaciones Calc? Venga, es hora de mostrartela. Te dice cuanto ganas al año, mes, día y hora. ¡Es increible!');
    function calcularSalario(){
        const meses = 12;
        const dias = 30;
        const horasPorDia = 8;
        let salario = prompt ('¿Cuánto ganas al mes?');
        let salarioAnual = salario * meses;
        const salarioMensual = salarioAnual / meses;
        const salarioDiario = salarioMensual / horasPorDia;
        const salarioPorHora = salarioDiario * horasPorDia;
        console.log(`Bien, aquí dice que tu salario anual es de ${salarioAnual}, tu salario mensual es de ${salarioMensual}, tu salario diario es de ${salarioDiario} y por hora ganas ${salarioPorHora}.`);
    };   
    calcularSalario();
    let pregunta = prompt('¿Te gusto la aplicación?');
    if(pregunta === "Si"){
        console.log('Perfecto ¡Vamos hacerte la cuenta!');
        let login = prompt('Crea el nombre de tu usuario');
        let password = prompt('Crea tu password');
        console.log('Felicitaciones haz creado tu usuario');
        login = usuario;
        password = contraseña;
    };
    console.log('Perfecto, espero que nos veamos dentro de poco. ¡Cuidate!');
};


entradaBoliche();