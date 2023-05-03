
import { fetcher } from "../../lib/api";
import Card from "../../components/card";


export async function getStaticProps() {
    
    const apartmentResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/apartments?populate=images`);
  
    
    return {
        props: {
            apartements: apartmentResponse 
        }
    }
}
    


export default function Locations({apartements}) {
 
   
    
    
    return (
        <><div class="max-w-screen-xl mx-auto px-4 py-15 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            {
        
                apartements.data.map((apartement) => {
                    console.log( JSON.stringify(apartement.attributes.images.data[0].attributes.formats.small.url ) + "jaaaaaaaaaaaaaaa")
                return (
                    
                        <Card key={apartement.id} myAppart={apartement.attributes} />
                        
                   
                    
                )
            }
            )
            }
            </div>
        </>
        
    )
}