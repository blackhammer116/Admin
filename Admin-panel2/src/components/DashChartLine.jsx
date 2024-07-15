// 'use client';
import { Card, LineChart, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    date: 'Jan 23',
    Website_pentest: 232,
    Ransome_ware_test: 0,
    DB_exploit: 49,
  },
  {
    date: 'Feb 23',
    Website_pentest: 241,
    Ransome_ware_test: 0,
    DB_exploit: 61,
  },
  {
    date: 'Mar 23',
    Website_pentest: 291,
    Ransome_ware_test: 0,
    DB_exploit: 55,
  },
  {
    date: 'Apr 23',
    Website_pentest: 101,
    Ransome_ware_test: 0,
    DB_exploit: 21,
  },
  {
    date: 'May 23',
    Website_pentest: 318,
    Ransome_ware_test: 0,
    DB_exploit: 66,
  },
  {
    date: 'Jun 23',
    Website_pentest: 205,
    Ransome_ware_test: 0,
    DB_exploit: 69,
  },
  {
    date: 'Jul 23',
    Website_pentest: 372,
    Ransome_ware_test: 0,
    DB_exploit: 55,
  },
  {
    date: 'Aug 23',
    Website_pentest: 341,
    Ransome_ware_test: 0,
    DB_exploit: 74,
  },
  {
    date: 'Sep 23',
    Website_pentest: 387,
    Ransome_ware_test: 120,
    DB_exploit: 190,
  },
  {
    date: 'Oct 23',
    Website_pentest: 220,
    Ransome_ware_test: 0,
    DB_exploit: 89,
  },
  {
    date: 'Nov 23',
    Website_pentest: 372,
    Ransome_ware_test: 0,
    DB_exploit: 44,
  },
  {
    date: 'Dec 23',
    Website_pentest: 321,
    Ransome_ware_test: 0,
    DB_exploit: 93,
  },
];

const summary = [
  {
    name: 'Website pentest',
    value: 3273,
  },
  {
    name: 'Ransomware test',
    value: 120,
  },
  {
    name: 'DB exploit',
    value: 866,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
  Organic: 'bg-blue-500',
  Sponsored: 'bg-violet-500',
  Affiliate: 'bg-fuchsia-500',
};

export default function DashChartLine() {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-md">
        <h3 className="text-tremor-default font-medium  text-white">
          Top Services given
        </h3>
        <LineChart
          data={data}
          index="date"
          categories={['Website_pentest', 'Ransome_ware_test', 'DB_exploit']}
          colors={['blue', 'violet', 'fuchsia']}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          startEndOnly={true}
          className="mt-6 h-32 "
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2  ">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                  aria-hidden={true}
                />
                <span className='text-white'>{item.name}</span>
              </div>
              <span className="font-medium  text-white">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}