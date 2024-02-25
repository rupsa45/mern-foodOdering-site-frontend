import food from '../assets/food.avif'
import appDownload from '../assets/appDownload.png'
const HomePages = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className='bg-white rounded-lg shadow-lg py-8 fleax flex-col gap-5 text-center -mt-16'>
        <h1 className="text-5xl font-bold tracking-tighter text-purple-600">
          Enjoy a takeaway meal today.
        </h1>
        <span className="text-xl">Delicious food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={food}/>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Get your takeaway even quicker!
          </span>
          <span className='text-purple-800 font-semibold'>
            Get the Foodie App for quicker ordering and personalized recommendations.
          </span>
          <img src={appDownload} alt=""  />
        </div>
      </div>
    </div>
  )
}

export default HomePages
