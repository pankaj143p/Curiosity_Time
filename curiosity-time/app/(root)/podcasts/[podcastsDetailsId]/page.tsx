import React from 'react';

const PodcastsDetails = ({params} : {params : {podcastsDetailsId : string}}) => {
  return (
   
      <p className='text-white'>this is a podcasts id {params.podcastsDetailsId}</p>
  
  );
}

export default PodcastsDetails;
