import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export function Star({ value }) {
  let stars = [];
  let rest =  5 - value

  for (let i = 0; i < value; i++) {
    stars.push(<AiFillStar color={'#FF859B'} />)
  
  }

   for (let i = 0; i < rest; i++) {
    stars.push(<AiOutlineStar color={'#FF859B'} />)
  }


  return (
    <>
    {
      stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))
    }

    </>
  )
}