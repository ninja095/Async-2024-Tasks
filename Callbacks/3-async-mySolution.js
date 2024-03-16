'use strict';

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
