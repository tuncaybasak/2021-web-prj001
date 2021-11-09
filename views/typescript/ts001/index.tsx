import * as React from 'react';
import { useEffect } from 'react';
import { dSorumlu, IContact } from './helper';

export const MyTSComp001 = () => {
  const data = [
    {
      date: '2012-02-22',
      city: 'San Francisco',
      value: 53.4
    },
    {
      date: '2012-02-22',
      city: 'Austin',
      value: 68.8
    },
    {
      date: '2012-02-23',
      city: 'New York',
      value: 50.6
    }
  ];

  useEffect(() => {
    console.log('*** String Array ***');
    const arrStr: string[] = ['smp1'];
    arrStr.push('text1');
    arrStr.push(undefined);
    arrStr.push(null);

    console.log(arrStr[0]);
    console.log(arrStr[1]);
    console.log(arrStr[2]);
    console.log(arrStr[3]);

    console.log('*** Number Array ***');
    const arrInt: Array<number> = [2, 3];
    arrInt.push(5);
    arrInt.push(undefined);
    arrInt.push(null);

    console.log(arrInt[0]);
    console.log(arrInt[1]);
    console.log(arrInt[2]);

    console.log('*** Multi Type Array ***');
    const arrMulti: (string | number)[] = ['Apple', 2, null, undefined];

    for (var i = 0; i < arrMulti.length; i++) {
      console.log(arrMulti[i]);
    }

    console.log('*** Interface Array ***');
    const arrContact: IContact[] = [];
    arrContact.push({
      ContactID: 1,
      Name: 'tuncay',
      Email: 'tuncaybasak@gmail.com',
      RecordaDate: new Date(),
      IsActive: true
    });

    const contact: IContact = {
      ContactID: 2,
      Name: 'ozgur',
      Email: 'okara@gmail.com',
      RecordaDate: new Date(),
      IsActive: true
    };
    arrContact.push(contact);
    console.log(arrContact);

    console.log('*** Object Array ***');
    const arrSorumlu: dSorumlu[] = [];

    const sorumlu1 = new dSorumlu();
    sorumlu1.No = 1;
    sorumlu1.Eposta = 'tb@fdd.com';
    sorumlu1.Isim = 'tuncay';
    sorumlu1.AktifMi = true;
    sorumlu1.KayitZaman = new Date();
    arrSorumlu.push(sorumlu1);

    const sorumlu2: dSorumlu = {
      No: 2,
      Eposta: 'ozg@fdd.com',
      Isim: 'ozgur',
      AktifMi: true,
      KayitZaman: new Date()
    };
    arrSorumlu.push(sorumlu2);

    for (var index in arrSorumlu) {
      console.log(arrSorumlu[index]);
    }

    console.log('*** Any Array ***');
    const arrAny: any = [];
    arrAny.push('tuncay');
    arrAny.push(3);
    arrAny.push(false);
    arrAny.push({ name: 'tuncay', surname: 'başak', age: 35 });
    arrAny.push([
      { name: 'tuncay', surname: 'başak', age: 35 },
      { name: 'özgür', surname: 'karataş', age: 35 }
    ]);

    for (var index in arrAny) {
      console.log(arrAny[index]);
    }

    console.log('*** Any Array Object ***');
    const arrAnyObj: any = [];

    data.forEach(item => {
      arrAnyObj.push({
        tarih: item.date,
        sehir: item.city,
        deger: item.value
      });
    });

    for (var index in arrAnyObj) {
      console.log(arrAnyObj[index]);
    }
  });

  return <h3>MyTSComp001</h3>;
};
