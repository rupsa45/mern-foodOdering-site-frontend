import { Link } from "react-router-dom";

type Props={
    total:number;
    city:string;
}

const SerachResult = ({total,city}:Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Results for "{city}"
            <Link 
                to='/' 
                className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
            >
                change  location
            </Link>
        </span>
    </div>
  )
}

export default SerachResult
