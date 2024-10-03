
const date = new Date('2024-04-20T13:45:30');

const format1 = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
console.log(format1);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const format2 = `${days[date.getDay()]} ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}.${date.getMinutes().toString().padStart(2, '0')}`;
console.log(format2);

const hours12 = date.getHours() % 12 || 12;
const format3 = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${hours12}:${date.getMinutes().toString().padStart(2, '0')} ${days[date.getDay()]}`;
console.log(format3);

const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
const format4 = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}th, ${date.getFullYear()} ${hours12}.${date.getMinutes().toString().padStart(2, '0')}.${date.getSeconds().toString().padStart(2, '0')} ${ampm}`;
console.log(format4);

const format5 = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} at ${hours12}:${date.getMinutes().toString().padStart(2, '0')} ${ampm}`;
console.log(format5);
