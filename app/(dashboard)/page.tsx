import { Skeleton } from '@/components/ui/skeleton';
import { wait } from '@/lib/wait';
import { UserButton, currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { Suspense } from 'react';

export default async function Home() {
    return(
    
    <Suspense fallback={<WelcomMsgFallback/>}>
      <WelcomMsg/>
    </Suspense>

 )
}

async function WelcomMsg(){
  const user = await currentUser();


  if(!user){
    return <div>error</div>
  }
  return (
    <div className='flex w-full'>
     <h1 className='text-4xl font-bold'> Welcome, <br/> {user.firstName} {user.lastName}</h1>
    </div>
  )
}

function WelcomMsgFallback(){
  return (
    <div className='flex w-full'>
    <h1 className='text-4xl font-bold'> 
      <Skeleton className='w-[180px] h-[36px]'/>
      <Skeleton className='w-[150px] h-[36px]'/>
    </h1>
   </div>
  )
}
