'use-client'
import podcastCard from '@/components/cards/podcastCard';
import { Button } from '@/components/ui/button';
import { podcastData } from '@/constants';
import React from 'react';

const Home = () => {
  return (
    <div className='ml-9 mt-14 text-purple-400'>
    <section className='flex flex-col gap-5'>
     <h1 className='text-20 font-bold text-white-1'>tranding podcasts</h1> 
     {podcastData.map((id, tittle , description, imgUrl) =>(
       <PodcastCard key={id} 
       imgUrl={imgUrl} 
       tittle={tittle}
       description={description}
       />
     ))}
    </section>
    </div>
  );
}
export default Home;
