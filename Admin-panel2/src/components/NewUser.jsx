// 'use client';

import { Divider, TextInput } from '@tremor/react';
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function NewUser() {

    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        m_name: '',
        dob: '',
        email: '',
        p_number: '',
        username: '',
        password: '',
      });
    const [stat, setStat] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://127.0.0.1:5000/signup', formData);
          // Reset the form data after successful submission
          setFormData({ 
            f_name: '',
            l_name: '',
            m_name: '',
            dob: '',
            email: '',
            p_number: '',
            username: '',
            password: '', });
	  if (response.data){
		  setStat(response.data)
	  }
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Register a New user
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          fill the neccessary information
        </p>
        <form  onSubmit={handleSubmit} method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                First name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="f_name"
                name="f_name"
                autoComplete="first-name"
                placeholder="First name"
                value={formData.f_name}
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
                Last name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="l_name"
                name="l_name"
                autoComplete="last-name"
                placeholder="Last name"
                value={formData.l_name}
                onChange={handleInputChange}
                className="mt-2"
                required
              />
              <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="Middle-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Middle name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="m_name"
                name="m_name"
                autoComplete="middle-name"
                placeholder="middle name"
                value={formData.m_name}
                onChange={handleInputChange}
                className="mt-2"
              />
            </div>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="dob"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                DOB
              </label>
              <TextInput
                type="date"
                id="dob"
                name="dob"
                className="mt-2"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="p_number"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Phone number
              </label>
              <TextInput
                type="tel"
                id="p_number"
                name="p_number"
                placeholder='+251-*******'
                value={formData.p_number}
                onChange={handleInputChange}
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="username"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Username
              </label>
              <TextInput
                type="text"
                id="username"
                name="username"
                autoComplete="address-level1"
                placeholder="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                password
              </label>
              <TextInput
	        type="password"
                id="password"
                name="password"
                placeholder="password"
                className="mt-2"
                value={formData.password}
                onChange={handleInputChange}
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
