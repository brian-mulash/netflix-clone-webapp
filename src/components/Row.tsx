import { Movie } from "../../typings"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import ThumbNail from "./ThumbNail"
import { useRef, useState } from "react"

interface Props {
  title: String,
  movies: Movie[]
}

const Row = ({title, movies}: Props) => {
  
  const rowRef = useRef<HTMLDivElement>(null)

  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)

    if(rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current

      const scrollTo = 
        direction === "left" 
          ? scrollLeft - clientWidth 
          : scrollLeft + clientWidth
        
          rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
  }

  return (
    <div className="h-40 spaxe-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm  text-[#e5e5e5] transition duration-200 hover:text-white md:text-xl">
        {title}
      </h2>

      <div className="group relative md:-ml-2">
        <FiChevronLeft className={`absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} onClick={() => handleClick("left")}/>

        <div ref={rowRef} className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <ThumbNail key={movie.id} movie={movie}/>
          ))}
        </div>

        <FiChevronRight className={`absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default Row
