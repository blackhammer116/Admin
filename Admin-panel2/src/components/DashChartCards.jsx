import { Card } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Recurring revenue',
    value: '$34.1K',
    change: '+6.1%',
    changeType: 'positive',
  },
  {
    name: 'Total users',
    value: '500.1K',
    change: '+19.2%',
    changeType: 'positive',
  },
  {
    name: 'User growth',
    value: '11.3%',
    change: '-1.2%',
    changeType: 'negative',
  },
];

export default function DashChartCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item) => (
          <Card key={item.name} >
            <p className="flex items-start justify-between ">
              <span className="text-tremor-metric font-semibold  text-white">
                {item.value}
              </span>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? ' text-emerald-500'
                    : 'text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span>
            </p>
            <p className="mt-1 text-neutral-400">
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}