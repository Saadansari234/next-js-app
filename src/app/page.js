import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router= useRouter()
  const navigate= (name) =>{
    return router.push(name)
  }
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <button onClick={()=> navigate()} ></button>
       
    </main>
  );
}
