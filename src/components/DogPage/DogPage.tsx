import React from 'react'
import { useParams } from 'react-router-dom'
import { useDogImage } from '../DogCard/DogCard'
import "./DogPage.css"


const DogPage = () => {
    const { dogBreed } = useParams()
    const image = useDogImage(dogBreed as string)
    


    return(
        <div className='dogPage'>
           <h1>{dogBreed?.toUpperCase()}</h1>
            <img src={image} alt={`${dogBreed}`} />  
        </div>
        
    )
    
}
export default DogPage