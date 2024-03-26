import food from '../assets/food.jpg'
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import biriyani from '../assets/biriyani.jpg'
import appDownload from '../assets/appDownload.png'
import SearchBar, { SearchForm } from '@/components/SearchBarHome/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardHeader } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
const HomePages = () => {
  const navigate =useNavigate()
  const handleSearchSubmit =(searchFormValues : SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`
    })
  }
  return (
    <div className="flex flex-col gap-12">
      <div className='md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className="text-5xl font-bold tracking-tighter text-purple-600">
          Enjoy a takeaway meal today.
        </h1>
        <span className="text-xl">Delicious food is just a click away!</span>
        <SearchBar placeHolder='search by [city name]' onSubmit={handleSearchSubmit}/>
      </div>
      <div className=" flex flex-wrap gap-6 justify-center" >
        <div className='w-64'>
          <Card>
            <CardHeader>
            <AspectRatio ratio={2/2.5}>
              <img src={biriyani} />
              <p className='text-xl font-bold mx-1'>Restaurant 40</p>
              <p className='text-[11px] font-serif mx-1 text-slate-400'>A delicious savory rice dish that is loaded with spicy marinated chicken.</p>
              <Button className='bg-purple-400 mt-1 mx-2'>
              <Dialog>
              <DialogTrigger>Click here</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    Use the search feature to find delicious food options based on your city's name.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
              </Button>
            </AspectRatio>
            </CardHeader>
          </Card>
        </div>
        <div className='w-64'>
          <Card>
            <CardHeader>
            <AspectRatio ratio={2/2.5}>
              <img src={biriyani} />
              <p className='text-xl font-bold mx-1'>Restaurant 40</p>
              <p className='text-[11px] font-serif mx-1 text-slate-400'>A delicious savory rice dish that is loaded with spicy marinated chicken.</p>
              <Button className='bg-purple-400 mt-1 mx-2'>
              <Dialog>
              <DialogTrigger>Click here</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    Use the search feature to find delicious food options based on your city's name.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
              </Button>
            </AspectRatio>
            </CardHeader>
          </Card>
        </div>
        <div className='w-64'>
          <Card>
            <CardHeader>
            <AspectRatio ratio={2/2.5}>
              <img src={biriyani} />
              <p className='text-xl font-bold mx-1'>Restaurant 40</p>
              <p className='text-[11px] font-serif mx-1 text-slate-400'>A delicious savory rice dish that is loaded with spicy marinated chicken.</p>
              <Button className='bg-purple-400 mt-1 mx-2'>
              <Dialog>
              <DialogTrigger>Click here</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    Use the search feature to find delicious food options based on your city's name.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
              </Button>
            </AspectRatio>
            </CardHeader>
          </Card>
        </div>
         <div className='w-64'>
         <Card>
            <CardHeader>
            <AspectRatio ratio={2/2.5}>
              <img src={biriyani} />
              <p className='text-xl font-bold mx-1'>Restaurant 40</p>
              <p className='text-[11px] font-serif mx-1 text-slate-400'>A delicious savory rice dish that is loaded with spicy marinated chicken.</p>
              <Button className='bg-purple-400 mt-1 mx-2'>
              <Dialog>
              <DialogTrigger>Click here</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    Use the search feature to find delicious food options based on your city's name.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
              </Button>
            </AspectRatio>
            </CardHeader>
          </Card>
         </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src={food}/>
            </CarouselItem>
            <CarouselItem>
              <img src={food1}/>
            </CarouselItem>
            <CarouselItem>
              <img src={food2}/>
            </CarouselItem>
            <CarouselItem>
              <img src={food2}/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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

