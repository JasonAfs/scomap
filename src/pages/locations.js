import { PrismaClient } from "@prisma/client"
import Card from "../../components/card";

const prisma = new PrismaClient();

export async function getServerSideProps() {
     
    const appartement = await prisma.batiment.findMany();
    console.log(appartement.toString() +"salut");
     return {
         props: {
                appartement: JSON.parse(JSON.stringify(appartement)),
            }
        }
};
    


export default function Locations({appartement =[]}) {
    
   


    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


        </div>
    )
}