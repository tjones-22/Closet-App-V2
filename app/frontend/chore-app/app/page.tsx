'use client';

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

      <ul className=''>
        {dayPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <ul>
        {dishPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}
