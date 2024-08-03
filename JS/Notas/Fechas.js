// formato de fecha: 
// new Date(año, mes, día, hora, minuto, segundo, milisegundo, zonaHoraria);


var fechaHoy = new Date();
alert(fechaHoy);

var fechaString = new Date("2021-01-01");
var fechaString2 = new Date("2021/01/01");

fechaHoy.getDate(); // día del mes
fechaHoy.getDay(); // día de la semana
fechaHoy.getFullYear(); // año
fechaHoy.getHours(); // hora
fechaHoy.getMilliseconds(); // milisegundos
fechaHoy.getMinutes(); // minutos
fechaHoy.getMonth(); // mes
fechaHoy.getSeconds(); // segundos
fechaHoy.getTime(); // milisegundos desde 1970

