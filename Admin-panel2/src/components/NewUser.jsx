// 'use client';

import { Divider, TextInput } from '@tremor/react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function NewUser() {
  return (
    <>
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Register a New user
        </h3>
        <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
          fill the neccessary information
        </p>
        <form action="#" method="post" className="mt-8">
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
                id="last-name"
                name="last-name"
                autoComplete="last-name"
                placeholder="Last name"
                className="mt-2"
                required
              />
              <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="first-name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Middle name
                <span className="text-red-500">*</span>
              </label>
              <TextInput
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="first-name"
                placeholder="First name"
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
                className="mt-2"
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
                className="mt-2"
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
                id="password"
                name="password"
                placeholder="password"
                className="mt-2"
              />
            </div>
          </div>
          <Divider />
        </form>
        <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Cancel
            </button>
            <Link to={'/users'}>
            <button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Submit
            </button>
            </Link>
          </div>
      </div>
    </>
  );
}