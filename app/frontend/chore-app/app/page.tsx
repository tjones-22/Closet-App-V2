'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Person = {
  name: string;
  id: number;
};



export default function Home() {
  const [error, setError] = useState(false);
  const [dayPeople, setDayPeople] = useState<Person[]>([]);
  const [dishPeople, setDishPeople] = useState<Person[]>([]);

  const getPeopleList = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/day', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch people');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setError(true);
      return null;
    }
  };

  useEffect(() => {
    setError(false);
    getPeopleList().then((data) => {
      if (!data) return;
      setDayPeople(data);
     // setDishPeople(data);
    });
  }, []);

  return (
    <>
      {error ? <p>There was an error loading the page</p> : null}

      {/* <ul className=''>
        {dayPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <ul>
        {dishPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul> */}


      <div className="border-10 border-[rgb(247,247,247)] m-2.5 px-4 py-3 lg:py-2 bg-[rgb(28,145,139)]">
        <h1 className="text-center text-[64px] sm:text-[76px] lg:text-[84px] leading-none text-[rgb(96,224,207)]">Jones Family Chore Site</h1>

        <h2 className="text-center text-[28px] sm:text-[34px] lg:text-[38px] text-[rgb(96,224,207)]">This is where you will find your daily dish chore and weekly chore.</h2>
   
    </div>

      <div className="hidden lg:block fixed lg:bottom-0 lg:left-0 lg:w-[500px] lg:h-[500px]">
        <Image
          src="/designElement.svg"
          alt="New design element"
          fill
          sizes="500px"
          className="object-contain object-left-bottom"
        />
      </div>

      <div className="hidden lg:block fixed lg:-bottom-72 lg:-right-40 lg:w-[500px] lg:h-[700px]">
        <Image
          src="/Artboard 1.svg"
          alt="Another design element"
          fill
          sizes="500px"
          className="object-contain object-right-bottom"
        />
      </div>


    </>
  );
}
