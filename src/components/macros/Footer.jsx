import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();

    let bg;
    let border;
    let headsColor;
    let color;

    switch (location.pathname) {
        case '/products/fungigro':
            color= "text-primary-50"
            bg = "bg-green-950";
            border="border-primary-800/40"
            headsColor = "text-primary-100"
        break;
        case '/products/biomass':
            color= "text-black"
            bg = "bg-gray-300";
            border="border-primary-800/40"
            headsColor = "text-black"
        break;
        case '/about-leadfut':
            bg = "bg-white";
            border="border-gray-300 border-opacity-40"
            headsColor = "text-[#09141A]"
            color = "text-gray-700"
        break;
        case '/blog':
            bg = "bg-[#e5e1d8]";
            border="border-nude-500 border-opacity-30"
            headsColor = "text-[#09141A]"
            color = "text-gray-700"
        break;
        default:
            bg = "bg-nude-50";
            border="border-nude-100"
            headsColor = "text-nude-400"
            color = "text-stone-600"
    }

    function handleBookMeetingClick(event) {
        event.preventDefault();
        Calendly.initPopupWidget({url: 'https://calendly.com/dah4mulah/30min?background_color=e5e1d8&primary_color=2fb34c'});
    }

    return (
        <footer className={`pt-10 px-5 sm:px-10 ${bg} relative overflow-x-hidden`}>
            <div className={`py-6 border-y ${border}`}>
                <h1 className={`text-xl uppercase tracking-widest ${headsColor}`}>leadfut</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:mr-28 pt-10 gap-8 sm:gap-12 lg:gap-0 z-10">
                    <div className='flex flex-col justify-end sm:justify-start lg:justify-end order-last sm:order-none'>
                        <Link to={'/contactus'} className="bg-black sm:w-52 flex justify-between items-center py-2.5 px-2 sm:px-4 text-xs text-white">
                            Get in touch
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="space-y-2 lg:place-self-end">
                        <h1 className={`text-sm uppercase ${headsColor}`}>Product</h1>
                        <ul className={`space-y-1 font-light ${color}`}> 
                            <li className='hover:underline underline-offset-4'><Link to={'/products/fungigro'}>Fungigro</Link></li>
                            <li className='hover:underline underline-offset-4'><Link to={'/products/mushroom'}>Edible & medicinal mushroom</Link></li>
                            <li className='hover:underline underline-offset-4'><Link to={'##'} onClick={handleBookMeetingClick} >Consultations</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-2 lg:place-self-end">
                        <h1 className={`text-sm uppercase ${headsColor}`}>Company</h1>
                        <ul className={`space-y-1 font-light ${color}`}> 
                            <li className='hover:underline underline-offset-4'><Link to={'/about-leadfut'}>About</Link></li>
                            <li className='hover:underline underline-offset-4'><Link to={'/blog'}>Blog</Link></li>
                            <li className='hover:underline underline-offset-4'><Link to={'/contactus'}>Reach out</Link></li>
                        </ul>
                    </div>
                    
                    <div className="space-y-2 lg:place-self-end">
                        <h1 className={`text-sm uppercase ${headsColor}`}>Contact</h1>
                        <ul className={`space-y-1 font-light ${color}`}> 
                            <li className='hover:underline underline-offset-4 lg:max-w-[200px]'>
                                <Link to={''}>
                                    4 Akinola street, olowotedo Village, KM 48, Lagos-Ibadan Expressway
                                </Link>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <a href="mailto:leadfutresources@gmail.com">Send email</a>
                            </li>
                            <li className='hover:underline underline-offset-4'>
                                <a href="tel:234 818 396 4263">+234 906 1176 894</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center py-7 lg:mr-10">

                <div className={`flex gap-6 items-center z-10 ${color}`}>
                    <p className="uppercase text-sm">follow us</p>
                    <div className="inline-flex items-center gap-2">
                        <a href='https://www.facebook.com/profile.php?id=61557480955020&mibextid=PtKPJ9' target='_blank' className={`flex justify-center items-center h-7 w-7 rounded-md hover:bg-nude-100 ${color}`}>
                            <img src="/images/facebook.svg" className='w-4' alt="facebook icon" />
                        </a>
                        <a href='https://www.instagram.com/leadfutresourcesltd?igsh=NzBmMjdhZWRiYQ==' target='_blank' className="flex justify-center items-center h-7 w-7 rounded-md hover:bg-nude-100">
                            <img src="/images/instagram.svg" className='w-4' alt="instagram icon" />
                        </a>
                        <a href='' target='_blank' className="flex justify-center items-center h-7 w-7 rounded-md hover:bg-nude-100">
                            <img src="/images/x.svg" className='w-4' alt="twitter icon" />
                        </a>

                        <a href='' target='_blank' className="flex justify-center items-center h-7 w-7 rounded-md hover:bg-nude-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                        </a>

                    </div>
                </div>

                
                <p className={`text-sm z-10 ${color}`}>© 2024 Leadfut Resources Ltd. 
                    <br className='sm:hidden' /> 
                    <span className="inline-flex items-center gap-1.5 pt-2 sm:pt-0">
                        Made with ❤️ in Nigeria by 
                        <a href="https://bento.me/kitchen" target="_blank" rel="noopener noreferrer">
                            <img className='w-9 sm:w-10 pb-0.5' src="/images/bldn.png" alt="logo of BLDN INC a web design and development agency. that designed and developed this website" />
                        </a>
                    </span> 
                </p>    

            </div>
            <img src="/images/pleurotus-1ad272063cb9db5480b71b642ca14b05.svg" alt="" className="absolute -right-20 bottom-0 -z-0" />
        </footer>
    )
}

export default Footer