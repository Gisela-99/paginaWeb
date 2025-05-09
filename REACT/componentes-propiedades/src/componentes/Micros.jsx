/*function Micros(propiedades) {
  console.log(propiedades)
  return (
    <div>
      <p>El micrordenador {propiedades.nombre} tiene {propiedades.memoria} Kb de Ram</p>
    </div>
  );
}*/

// Desestructuracion coger los atributos se convierte en una variable normal, su ventaja y se puede poner un valor por defecto
function Micros({nombre, memoria = '?'}) {
  return (
    <div>
      <p>El micrordenador {nombre} tiene {memoria} Kb de Ram</p>
    </div>
  );
} 
export default Micros;