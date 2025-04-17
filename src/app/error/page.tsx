'use client'

import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className='text-center mt-50 text-white'>
      <h1>Something went wrong</h1>
      <p>We encountered an error while processing your request.</p>

      
      <Link href="/image-upload" className='hover:underline'>Go back to Image Analysis</Link>
    </div>
  );
};

export default ErrorPage;