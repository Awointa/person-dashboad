import React from 'react';
import {ShoppingBag, Heart, Utensils, Tv} from "lucide-react";

export const SpendingCategories = () => {
  const categories = [
    {
        name: 'Entertainment',
        icon: Tv,
        spent: 230,  
        budget: 500,
        color: 'bg-purple-500'
    },
    {
        name: 'Shopping',
        icon: ShoppingBag,
        spent: 450,  
        budget: 600,
        color: 'bg-pink-500'
    },
    {
        name: 'Health',
        icon: Heart,
        spent: 300, 
        budget: 600,
        color: 'bg-red-500'
    },
    {
        name: 'Food & Drink',
        icon: Utensils,
        spent: 85,  
        budget: 100,
        color: 'bg-orange-500'
    }
];
     const getPercentage = (spent: number, budget: number) => {
        return Math.min((spent / budget) * 100, 100);
     };

    //  const getRemainingPercentage = (spent: number, budget: number) => {
    //   return Math.max(100 - (spent / budget) * 100, 0);
    //   };
  
     return(
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-sm font-semibold text-gray-700 mb-4 border-2 border-zinc-200 w-fit px-2 rounded-full">Top Categories</h2>

            <div className="space-y-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const percentage = getPercentage(category.spent, category.budget);
                // const remainingPercentage = getRemainingPercentage(category.spent, category.budget)s
                
                return(
                  <div key={index} className='space-y-4'>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center justify-betweeen">
                          <div className='flex justify-center items-center gap-2'>
                            <div className={`bg-zinc-200 bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center`}>
                            <Icon className={`w-4 h-4 ${category.color.replace('bg-', 'text')}`}/>
                            </div>   

                            <span className="text-sm font-semibold text-gray-700">
                              {category.name}
                            </span>
                          </div>
                      
                          
                        </div>
                        <span className="text-sm font-semibold text-gray-800">
                          ${category.spent.toLocaleString()} / ${category.budget.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-orange-500 rounded-full overflow-hidden">
                        <div className='absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300' style={{width: `${percentage}%`}}/>
                        {/* <div className="absolute top-0 right-0 h-full bg-black rounded-full transition-all duration-300" style={{width: remainingPercentage}}/> */}
                      </div>
                  </div> 
                )
              })}
            </div>
        </div>
     )
}
