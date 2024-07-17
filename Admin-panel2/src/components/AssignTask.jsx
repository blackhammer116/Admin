// 'use client';

import { Divider, TextInput } from '@tremor/react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function AssignTask() {

    const [formData, setFormData] = useState({
   P_id: '',
   E_id: '',
  });
	const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
	const handleAssignTask = async () => {
          const response = await axios.post('http://127.0.0.1:5000/assign_task', formData);
	  setFormData({
		  P_id: '',
		  E_id: '',
	  })
        };
    


  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Assign talent
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          Enter the Pending ID and the employee's Id you wish to assign
        </p>
        <form onSubmit={handleAssignTask} method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Pending ID
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="P_id"
                name="P_id"
                placeholder="Pending Id"
	        value = {formData.P_id}
	        onChange={handleInputChange}
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="last-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Employee's ID
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="E_id"
                name="E_id"
                placeholder="Employee's ID"
	        value = {formData.E_id}
	        onChange={handleInputChange}
                className="mt-2"
                required
              />
            </div>
            </div>
            
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Cancel
            </button>
            <button
              type="submit"
	      onClick={handleAssignTask}
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
