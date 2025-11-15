import {PrismaClient} from '@prisma/client'


const prisma= new PrismaClient();

async function main(){
    const demoUserId = 'a98f22b3-3c77-456e-aaf7-d90c9be21d89'
// create demo products
    await prisma.product.createMany({
        data: Array.from({length:25}).map((_,i)=>({
            userId: demoUserId,
            name: `Product ${i+1}`,
            price: (Math.random()* 90+10).toFixed(2),
            quantity: Math.floor(Math.random()*20),
            lowStockAt:5,
            createdAt : new Date(Date.now()- 1000 * 60 * 60 * 24 * (i*5))
        }))
    })
    console.log("seed data created succefully")
    console.log(`created 25 products for user Id : ${demoUserId}`)
}


main()
.catch((e)=>{
    console.error(e);
    process.exit(1)
})
.finally( async ()=>{
    await prisma.$disconnect()})