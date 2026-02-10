import React, { useState } from 'react'
import { Tab } from '@headlessui/react'


const ProductFeatures = () => {
    let [categories] = useState({
        Affordability: [
          {
            id: 1,
            title: 'How affordable is Fungigro?',
            details: [
                'Cost-effective solution for pathogen detection and isolation.',
                'Enables businesses and institutions to implement biosecurity measures without breaking the bank.',
                'Affordable pricing structure makes Fungigro accessible to a wide range of industries and applications.',
            ]
          },
          
        ],
        Sustainability: [
          {
            id: 1,
            title: 'Health and Sustainability',
            details: [
                'Promotes environmental health by utilizing locally-sourced raw materials.',
                'Enhances food safety by providing a reliable method for detecting contaminants.',
                'Supports sustainable practices by reducing reliance on traditional, resource-intensive methods.',
            ]
          },
          
        ],
        'Uses': [
          {
            id: 1,
            title: 'Who can use it?',
            details: [
                <div>
                    <p>Our innovative product is useful to</p>
                    <br />
                    <ul className=''>
                        <li className='list-disc'>Research student</li>
                        <li className='list-disc'>Cosmetic industries</li>
                        <li className='list-disc'>Food and beverage industries</li>
                        <li className='list-disc'>Pharmaceutical industries</li>
                        <li className='list-disc'>Mushroom growers</li>
                    </ul>
                </div>
            ]
          },
        ],
    })
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-primary-100/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'focus:outline-none',
                                    selected
                                        ? 'bg-green-950/90 text-primary-50 shadow'
                                        : 'text-green-900'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-green-950/90 p-3',
                                'ring-white/60 ring-offset-2 focus:outline-none'
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="relative p-3"
                                    >
                                        <h3 className="text-base font-medium leading-5 text-primary-100">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-5 text-sm font-normal text-primary-50 space-y-2">
                                            {post.details.map((detail, index) => {
                                                return <li key={index}>{detail}</li>
                                            })}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ProductFeatures
  