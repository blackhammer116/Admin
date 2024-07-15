import React from 'react'

const DashCard = () => {
  return (
    <div className=''>
        <div class="max-w-sm p-6 bg-neutral-700 border border-neutral-500  rounded-lg shadow ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-400 text-sm">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border bg-neutral-700 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500  ">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
    </div>
  )
}

export default DashCard