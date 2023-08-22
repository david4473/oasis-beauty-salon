import React from "react";
import Image from "next/image";
import pricing from "../../utils/pricing.json";

const page = () => {
  return (
    <section>
      <h1 className="text-4xl mt-12 text-center">Pricing</h1>
      <div className="mx-auto w-3/4 p-16">
        <div>
          <h3>Nova Glam</h3>
          <div className="pricing__section">
            {pricing.glam.map((g) => (
              <div key={g.id} className="pricing__cards">
                <Image src={g.image} className="object-cover" fill priority />
                <p>{g.name}</p>
                <span>{g.price}</span>
                <span>{g.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Nova Bridal Makeup</h3>
          <div className="pricing__section">
            {pricing.bridal.map((b) => (
              <div key={b.id} className="pricing__cards">
                <Image src={b.image} className="object-cover" fill priority />
                <p>{b.name}</p>
                <span>{b.price}</span>
                <span>{b.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Nova Photoshoot Glam</h3>
          <div className="pricing__section">
            {pricing.photoshoot.map((p) => (
              <div key={p.id} className="pricing__cards">
                <Image src={p.image} className="object-cover" fill priority />
                <p>{p.name}</p>
                <span>{p.price}</span>
                <span>{p.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
