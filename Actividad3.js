function aumentarSalario (salario, porcentaje){
    return salario.map(porcentaje); 
 }
 
 sueldos = [30000, 400000, 500000, 600000, 700000];
 
 diezPorciento = x => x + x * 0.1;
 
 console.log(aumentarSalario (sueldos, diezPorciento))
 