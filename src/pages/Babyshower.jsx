import React from 'react';
import BabyshowerCard from '../components/BabyshowerCard';
import BabyshowerData from '../pages/BabyshowerData';

function Babyshower() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {BabyshowerData.map((item) => (
        <BabyshowerCard
          key={item.id}
          img={item.img}
          name={item.name}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Babyshower;
