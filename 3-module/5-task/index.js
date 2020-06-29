/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let min = +Infinity;
  let max = -Infinity;

  let arr = str.split(/\s+/)
    .flatMap(t => t.split(/,/))
    .filter(s => !isNaN(Number(s)))
    .map(t => Number(t));

  arr.forEach(elem => {
    if (elem < min) { min = elem; }
    if (elem > max) { max = elem; }
  });

  min = min === +Infinity ? undefined : min;
  max = max === -Infinity ? undefined : max;
  return { min: min, max: max };
}
