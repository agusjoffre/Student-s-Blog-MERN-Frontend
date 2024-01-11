export default function timeFormat(date) {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return newDate.toLocaleDateString('es-ES', options);
}
