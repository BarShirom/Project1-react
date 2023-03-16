import React,{useEffect,useState} from 'react'
import './Views.css'
import axios from 'axios'
import DogCard from '../DogCard/DogCard'


const Views = () => {
  const [dogs, setDogs] = useState<any>("")
  useEffect( () => {
    getDogsAndDisplay('https://dog.ceo/api/breeds/list/all')
  }, [])
  
  /**
   * 1. call dogs api and save it in res variable.
   * 2. change data to contain the list of the dogs.
   */
  const getDogsAndDisplay = async(url:string) => {
    const res:any = await axios.get(url)
    setDogs(res.data.message)
    }


  return (
    <div className='views'>
      {Object.keys(dogs).map((dogName:string)=> (
        <DogCard key={dogName} dogName={dogName}></DogCard>
      ) )}

    </div>
  )
}

export default Views