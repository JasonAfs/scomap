import { PrismaClient } from "@prisma/client"

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
        <p>{appartement.map(appartement => appartement.nom)}</p>
    )
}