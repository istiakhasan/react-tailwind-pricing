import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions=[
        {id:1,name:'Free',price:0},
        {id:2,name:'Regular',price:9.99},
        {id:3,name:'Premium',price:19.99}

    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deals of the town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, asperiores natus autem ipsum ratione veniam accusamus itaque consequuntur possimus aliquid!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option=><PricingOption key={option.id} option={option} />)
                }
            </div>
            
        </div>
    );
};

export default Pricing;