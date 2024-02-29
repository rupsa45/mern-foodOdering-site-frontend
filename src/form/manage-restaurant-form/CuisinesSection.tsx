import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { cuisineList } from "@/config/restuarant-options-config"
import { useFormContext } from "react-hook-form"
import CuisineCheckBox from "./CuisineCheckBox"


const CuisinesSection = () => {
    const {control}=useFormContext()
  return (
    <div className='space-y-2'>
      <div>
        <h2 className='text-2xl font-bold'> Cuisine Preference</h2>
        <FormDescription>
            Please select the cuisine(s)
        </FormDescription>
      </div>
      <FormField control={control} name="cuisines" render={({field})=>(
        <FormItem>
            <div className='grid md:grid-cols-5 gap-1'>
                {
                    cuisineList.map((cuisineItem)=>(
                        <CuisineCheckBox cuisine={cuisineItem} field={field}/>
                    ))
                }
            </div>
            <FormMessage/>
        </FormItem>
      )}/>
    </div>
  )
}

export default CuisinesSection
