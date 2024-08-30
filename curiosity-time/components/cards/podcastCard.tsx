import React from 'react';
import Image from 'next/image';
const PodcastCard = ({
    imgUrl, tittle, description, podcastId
} : {
    imgUrl: string;
    tittle: string;
    description: string;
    podcastId: number;
}) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
        <Image src={imgUrl}
        height={174}
        width={174}   
        alt={tittle}
        className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'></Image>
        <figcaption className='text-14 font-bold text-white-1'>{tittle}</figcaption>
        <figcaption className='text-14 font-normal text-white-1'>{description}</figcaption>

        </figure>
      
    </div>
  );
}

export default PodcastCard;
