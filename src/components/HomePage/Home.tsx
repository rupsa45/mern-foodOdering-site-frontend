import hero from '../../assets/hero.avif'
const Home = () => {
  return (
    <div>
      <img src={hero} className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}

export default Home
