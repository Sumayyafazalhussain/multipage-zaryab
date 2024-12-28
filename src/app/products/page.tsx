
import React from 'react'

const page = () => {
  const watchData = [
    {id: 1, name: " Dell Inspiron 15 3000", price: 550, description: "15.6-inch HD display with anti-glare.", image: "/p1.jpeg"},   
    {id: 2, name: "MSI Katana GF66", price: 1.199, description: "15.6-inch FHD 144Hz display.", image: "/p2.jpeg"}, 
    {id: 3, name: " Acer Aspire 5", price: 25000, description: "15.6-inch FHD IPS display.", image: "/p3.jpeg"}, 
    {id: 4, name: "Alienware Aurora R15 (Desktop)", price: 4500, description: "Intel Core i9-13900KF, NVIDIA RTX 4080, 32GB RAM, 1TB SSD.", image: "/p4.jpeg"}, 
    {id: 5, name: "Lenovo IdeaPad Flex 5", price: 25000, description: "14-inch 2-in-1 touchscreen display.", image: "/p5.jpeg"}, 
    {id: 6, name: "HP Omen 16", price: 6500, description: "16.1-inch QHD display with 165Hz refresh rate.", image: "/p6.jpeg"},
    {id: 7, name: " ASUS VivoBook 15", price: 100, description: "15.6-inch FHD NanoEdge display.", image: "/p7.jpeg"},
    {id: 8, name: "Apple iMac 24", price: 100, description: "24-inch 4.5K Retina display.", image: "/p8.jpeg"},

    {id: 9, name: " HP EliteDesk 800 G8 Mini (Desktop)", price: 100, description: "Intel Core i5-11500T, 16GB RAM, 512GB SSD.", image: "/p9.jpeg"},

];
return ( 
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id} className='watch-card'>
           <img src={watch.image} alt={watch.name}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
         <div>${watch.price}</div>
         <button>Add to Cart</button>

          </div>

        ))}
      </div>

    </div>
  )
}

export default page