import * as React from 'react';
import { useEffect } from 'react';
import moment from 'moment';

export const MyJSComp001 = () => {
  useEffect(() => {
    console.log('*** Reduce ***');

    const items = [
      { name: 'Rice', price: 5 },
      { name: 'Book', price: 20 },
      { name: 'Chicken', price: 10 },
      { name: 'Monitor', price: 100 },
    ];

    console.log('* forEach *');
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price;
    });
    console.log(totalPrice);

    console.log('* Reduce 1 *');
    const totalPrice2 = items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    console.log(totalPrice2);

    console.log('* Reduce 2 *');
    const people = [
      { name: 'Kyle', age: 26 },
      { name: 'John', age: 31 },
      { name: 'Sally', age: 42 },
      { name: 'Jill', age: 42 },
    ];

    const result1 = people.reduce((groupedPeople, person) => {
      const age = person.age;
      if (groupedPeople[age] == null) {
        groupedPeople[age] = [];
      }

      groupedPeople[age].push(person);
      return groupedPeople;
    }, {});
    console.log(result1);

    console.log('* Reduce 3 *');

    const graphicData = [
      { date: '13.09.2021', category: 'Vadeli', bakiye: 100 },
      { date: '14.09.2021', category: 'Vadeli', bakiye: 110 },
      { date: '12.09.2021', category: 'Vadesiz', bakiye: 90 },
      { date: '11.09.2021', category: 'Vadesiz', bakiye: 70 },
      { date: '10.09.2021', category: 'Vadesiz', bakiye: 60 },
    ];

    //find max date by category
    const result2 = graphicData.reduce((acc, row) => {
      if (!acc[row.category]) {
        acc[row.category] = row;
      } else if (
        moment(row.date, 'DD.MM.YYYY') >
        moment(acc[row.category].date, 'DD.MM.YYYY')
      ) {
        acc[row.category] = row;
      }
      return acc;
    }, {});
    console.log(Object.values(result2));
  });

  return <h3>MyJSComp001</h3>;
};
