import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './DogCard.css'

type Props = {
    dogName: string
}

export const useDogImage = (dogName: string) => {
    const [image, setImage] = useState<string>("")
    const getDogImage = async () => {
       const res = await axios.get(`https://dog.ceo/api/breed/${dogName}/images/random`)
       setImage(res.data.message)
    }
    useEffect(() => {
      getDogImage()
    }, [])
    return image
}

const DogCard = ({ dogName }: Props) => {
    const image = useDogImage(dogName)
    const navigate = useNavigate()
    
    function onClick() {
        navigate(dogName)
      
    }

    return (
        <div className='dogCard'>
            <h1>{dogName}</h1>
            <img onClick={onClick} className='img' src={image} alt={`${dogName}`} />
        </div>
    )
}

export default DogCard