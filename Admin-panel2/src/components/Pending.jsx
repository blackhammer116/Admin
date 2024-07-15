// 'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
  const data = [
    {
      workspace: 'sales_by_day_api',
      owner: 'John Doe',
      status: 'Live',
      costs: '$3,509.00',
      region: 'US-West 1',
      capacity: '99%',
      lastEdited: '23/09/2023 13:00',
    },
    {
      workspace: 'marketing_campaign',
      owner: 'Jane Smith',
      status: 'Live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'test_environment',
      owner: 'David Clark',
      status: 'Inactive',
      costs: '$800.00',
      region: 'EU-Central 1',
      capacity: '40%',
      lastEdited: '25/09/2023 16:20',
    },
    {
      workspace: 'sales_campaign',
      owner: 'Jane Smith',
      status: 'Live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'development_env',
      owner: 'Mike Johnson',
      status: 'Inactive',
      costs: '$4,200.00',
      region: 'EU-West 1',
      capacity: '60%',
      lastEdited: '21/09/2023 14:30',
    },
    {
      workspace: 'new_workspace_1',
      owner: 'Alice Brown',
      status: 'Inactive',
      costs: '$2,100.00',
      region: 'US-West 2',
      capacity: '75%',
      lastEdited: '24/09/2023 09:15',
    },
  ];

  const data2 = await axios.post('http:localhost:5000/admin_view_pending').data
  
  export default function Pending() {
    return (
      <>
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
          <div>
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Pending
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Total Pending
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
          >
            Assign Task
          </button>
        </div>
        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Pending Id
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Data
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                User's ID
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Service ID
              </TableHeaderCell>  
            </TableRow>
          </TableHead>
          <TableBody>
            {data2.map((item) => (
              <TableRow
                key={item.P_id}
                className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
              >
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.P_id}
                </TableCell>
                <TableCell>{item.s_data}</TableCell>
                <TableCell>{item.U_id}</TableCell>
                <TableCell>{item.S_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }