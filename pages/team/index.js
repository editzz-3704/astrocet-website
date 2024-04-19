import React from 'react'
import Background from '@/components/particles/bg'
import Navigation from '@/components'
import Structure from './structure'; 
import Execom from './execom';
import PO from './programOfficers';

const teams = [
  {
    name: 'WEB DESIGN',
    head: {
      designation: 'Team Head',
      image: '/images/Team/Webdev/Head/Ranjana C J.jpg',
    },
    members: [
      { image: "/images/Team/Webdev/Members/Abhinav M V.jpg" },
      { image: "/images/Team/Webdev/Members/Akshay K V.jpg" }
    ]
  },
  {
    name: 'MEDIA',
    head: {
      designation: 'Team Head',
      image: '/images/Team/Media/Head/Lekshmi R Nair.jpg',
    },
    members: [
      { image: "/images/Team/Media/Members/Aneena Arshad.jpg" }, 
      { image: "/images/Team/Media/Members/S Suvedha.jpg" },
      { image: "/images/Team/Media/Members/Sarang V Subrahmanyan .jpg" },    
      { image: "/images/Team/Media/Members/Malavika P M.jpg" },
      { image: "/images/Team/Media/Members/Amita Wilfred .jpg" }
    ]
  },
  {
    name: 'MARKETING',
    head: {
      designation: 'Team Head',
      image: '/images/pageicon.png',
    },
    members: [
      { image: "/images/Team/Marketing/Members/Aslam Arif K A.jpg" }, 
      { image: "/images/Team/Marketing/Members/Sreepriya Asokan.jpg" },
      { image: "/images/Team/Marketing/Members/Joachim B Kattookaran.jpg" },
      { image: "/images/Team/Marketing/Members/Ajith Jeejo.jpg" }
    ]
  },
  {
    name: 'CONTENT',
    head: {
      designation: 'Team Head',
      image: '/images/Team/Content/Head/Saurav S.jpg'
    },
    members:[
      { image: "/images/Team/Content/Members/Amith S.jpg" }, 
      { image: "/images/Team/Content/Members/Neha Naarayan.jpg" },
      { image: "/images/Team/Content/Members/Sarah Abraham.jpg" },
      { image: "/images/Team/Content/Members/Keshav Nair.jpg" },
      { image: "/images/Team/Content/Members/S Neelashri.jpg" }
    ]
  }
];

const Team = () => {
  return (
    
    <div className='bg-transparent z-10' >
      <Navigation />
      <Execom/>
      <PO/>
      <Structure teamdata={teams} />
      <Background/>
    </div>
  )
}


export default Team