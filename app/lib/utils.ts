import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";
export const client = createClient({
    projectId: 'qe28p368',
    dataset: 'production',
    apiVersion: '2024-05-26',
    useCdn: true
});


const  builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    console.log(source, builder.image(source));
    
    return builder.image(source)
    
}