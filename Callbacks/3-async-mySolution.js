'use strict';

// Задача: переписать функцию `total`, чтобы она была асинхронной с таймерами JavaScript
// Используйте `setInterval` и `clearInterval` для проверки следующего элемента каждые 1 секунду
// Вычисления будут выполняться асинхронно из-за таймеров
// Запустите `total` дважды (как в примере ниже), но параллельно
// Вывести отладочный вывод для каждого шага вычислений (каждую секунду)

// Hint: example output:
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { money: 1610 }
// { money: 1610 }

const total = (items, callback) => {
  let result = 0;
  let i = 0;
  const interval = setInterval(() => {
    if (i < items.length) {
      console.log({ check: { item: items[i] } });
      if (items[i].price < 0) {
        clearInterval(interval);
        callback(new Error('Negative price is not allowed'));
      } else {
        result += items[i].price;
        i++;
      }
    } else {
      clearInterval(interval);
      callback(null, result);
    }
  }, 1000);
}

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});

total(electronics, (error, money) => {
   if (error) console.error({ error });
   else console.log({ money });
});
