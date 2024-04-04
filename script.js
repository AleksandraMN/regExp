// #1
const array = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const getNewArray = (array) => {
  const str = array.join(', ');
  console.log('str', str);
  const reg = /([\w-]+\.)+(jsx*|ts)/gi;
  console.log(reg);
  const arr = str.match(reg);
  return arr;
};
console.log('getNewArray:', getNewArray(array));

// #2
const regexp2 = /\w+@[a-z]{3,}\.[a-z]{2,5}/gi;

const str2 = 'info@methed.ru, max24@mail.com, java_script@google.io';
const str3 = 'my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz'; 
console.log('str2', str2);
console.log('str3', str3);
const result1 = str2.match(regexp2);
console.log('result1', result1);
const result2 = str3.match(regexp2);
console.log('result2', result2);

// #3
const string = `Здоровый (праздничный) ужин вовсе не ` +
`обязательно должен состоять из шпината, гречки и вареной ` +
`куриной грудки. Самыми лучшими способами приготовления еды ` +
`(по мнению моей мамы) являются следующие: варка на пару, ` +
`запекание или варка в воде. Помимо стандартных мандаринов и ` +
`ананасов, отличным украшением любого стола станут необычные, ` +
`экзотические фрукты(например: личи, рамбутан, тамаринд). ` +
`Здоровой может быть даже выпечка, если она приготовлена на пару.`;

const regexp3 = /\(.*?\)/gi;
const result3 = string.match(regexp3);
console.log('result3', result3);

// #4

const str4 = 'https://methed.ru';
const a = `<a href="https://methed.ru">methed.ru</a>`;

const replaceWithTag = (str) => {
  const reg = /(http[s]{0,1}\:\/\/(\S{4,})\s{0,})/ims;
  console.log(str);
  const result = str.replace(reg, `<a href="$1">$2</a>`);
  return result;
};
console.log(replaceWithTag(str4));

