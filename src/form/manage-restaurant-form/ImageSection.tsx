import { AspectRatio } from "@/components/ui/aspect-ratio"
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"


const ImageSection = () => {
    const {control,watch}=useFormContext()
    const existingImageUrl=watch("imageUrl")
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-serif font-bold">Image</h2>
        <FormDescription>
            Upload an image that will display on search result.
            Add a new image  to replace the current one .
        </FormDescription>
      </div>
      <div className='flex flex-col gap-8 md:w-[50%]'>
        {
          existingImageUrl && <AspectRatio ratio={16/9}>
            <img  
              src={existingImageUrl}  
              className='rounded-sm object-cover h-full w-full'/>
          </AspectRatio>
        }
        <FormField 
            control={control} 
            name="imageUrl"
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Input 
                            className="bg-white " 
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif, .avif"  
                            onChange={(event)=>  field.onChange(event.target.files ? event.target.files[0] : null)}
                        />    
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
      </div>
    </div>
  )
}

export default ImageSection
