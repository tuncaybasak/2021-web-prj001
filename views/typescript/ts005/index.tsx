import * as React from 'react';
import { useEffect } from 'react';
import { dIslem, IAccountDetail } from './helper';

export const MyTSComp005 = ({ data }) => {
  useEffect(() => {
    console.log('*** map & Map ***');
    console.log('Pure data');
    console.log(data);

    console.log('Convert to untyped data');
    const arrUnTyped: any = [];
    data.forEach((item: any) => {
      arrUnTyped.push({
        islemTr: item.islemTr,
        islemNo: Number(item.islemNo),
        bakiyeTtr: Number(item.bakiyeTtr)
      });
    });
    console.log(arrUnTyped);

    console.log('Convert to untyped data 2');
    const arrUnTyped2 = data.map(item => {
      return {
        ISLEM_TR: item.islemTr,
        ISLEM_NO: Number(item.islemNo)
      };
    });
    console.log(arrUnTyped2);

    console.log('Convert to class');
    const arrDto = data.map(item => {
      const dto: dIslem = new dIslem();
      dto.islemTr = item.islemTr;
      dto.islemNo = Number(item.islemNo);
      dto.altIslemAd = item.altIslemAd;
      dto.bakiyeTtr = Number(item.bakiyeTtr);
      dto.islemMkt = Number(item.islemMkt);
      return dto;
    });
    console.log(arrDto);

    console.log('Convert to interface');
    const arrIntDto: IAccountDetail[] = data.map(item => {
      const dto: IAccountDetail = {
        transactionDate: item.islemTr,
        transactionNumber: Number(item.islemNo),
        subTransactionName: item.altIslemAd,
        balance: Number(item.bakiyeTtr),
        transactionTotalNumber: Number(item.islemMkt)
      };
      return dto;
    });
    console.log(arrIntDto);

    console.log('* Map *');
    const teamStore = new Map([
      [1, 'Fenerbahce'],
      [2, 'Galatasaray'],
      [3, 'Besiktas'],
      [4, 'Trabzon']
    ]);

    console.log(teamStore.get(1));

    teamStore.set(5, 'Bursaspor');
    console.log(teamStore.get(5));

    if (teamStore.has(2)) {
      console.log(teamStore.get(2));
      teamStore.delete(2);
      console.log(teamStore.get(2));
    }

    console.log('keys');
    for (const key of teamStore.keys()) {
      console.log(key);
    }

    console.log('values');
    for (const val of teamStore.values()) {
      console.log(val);
    }
  });

  return <h3>MyTSComp005</h3>;
};
