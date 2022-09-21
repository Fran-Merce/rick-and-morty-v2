import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getSigleCharacter } from '../services/api';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { Character } from '../models/Character';

export const CharacterPage = () => {
  const {id} = useParams()
  // tODO ADD 404 PAGE COMPONENT
  if(!id) return <h1>NOT CHARACTER</h1>
  // !Todo Delete Type ANY
  const [character, setCharacter] = useState<any>(null)
  useEffect(() => {
    getSigleCharacter(id).then(res => setCharacter(res))
  }, [])
  
  return (
    <>
    {character && <div>{<CharacterCard {...character} />}</div>}
    <p>{JSON.stringify(character)}</p>
    </>
  )
}
