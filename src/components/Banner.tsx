import Image from "next/image"
import { Movie } from "../../typings"
import { useEffect, useState } from "react"
import { baseUrl } from "../../constants/movie"
import { FaPlay, FaInfoCircle } from "react-icons/fa"
import { modalState, movieState } from "../../atoms/modalAtom"
import { useRecoilState } from 'recoil'
interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {

  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-[100%] -z-10">
        <Image 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          alt="Banner_img"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="banner-btn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-6 md:w-6"/>
          Play
        </button>
        
        <button className="banner-btn bg-[gray]/70" onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
            >
          More Info
          <FaInfoCircle className="h-5 w-5 md:h-6 md:w-6"/>
        </button>
      </div>
    </div>
  )
}

export default Banner


