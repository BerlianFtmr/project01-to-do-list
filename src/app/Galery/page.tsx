import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

function Galery() {
  return (
    <main>
        <Navbar />
      <div className='mt-15'>
        <h1>ini galery</h1>
      </div>
      <div>
        <img src="/profile.jpg" alt="gambar 1"/>
        <Image src="/profile.jpg" alt="gambar 2" width={500} height={500}/>
      </div>
    </main>
  );
};

export default Galery;