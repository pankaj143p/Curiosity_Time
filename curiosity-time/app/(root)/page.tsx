'use-client'
import PodcastCard from '@/components/cards/podcastCard';
import { Button } from '@/components/ui/button';
import { podcastData } from '@/constants';
import React from 'react';

const Home = () => {
  return (
    <div className='ml-9 mt-14 text-purple-400'>
    <section className='flex flex-col gap-5'>
     <h1 className='text-20 font-bold text-white-1'>tranding podcasts</h1> 
     <div className='podcast_grid'>
       {podcastData.map(({ id, title, description, imgURL }) => (
      <PodcastCard
        key={id} 
        imgUrl={imgURL} 
        tittle={title}
        description={description}
        podcastId={id}
      />
    ))}
     </div>
   
    </section>
    </div>
  );
}
export default Home;
