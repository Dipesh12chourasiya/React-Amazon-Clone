import React from 'react'
import FotterMiddleList from './FotterMiddleList'
import { logo, inFlag } from "../../assets/index"

const FooterMiddle = () => {
    const MiddleList = [
        {
            _id: 1111,
            title: "Get to Know Us",
            ListItem: [
                {
                    _id: "001",
                    ListData: [
                        "Careers",
                        "Blog",
                        "About Amazon",
                        "Investor Relations",
                        "Amazon Devices",
                        "Amazon Science",
                    ],
                },
            ],
        },
        {
            _id: 2222,
            title: "Make Money with Us",
            ListItem: [
                {
                    _id: "002",
                    ListData: [
                        "Sell products on Amazon",
                        "Sell on Amazon Business",
                        "Sell apps Amazon",
                        "Become an Affiliate",
                        "Advertise Your Products",
                        "Sell Product With Us",
                        "Host an Amazon Hub",
                    ],
                },
            ],
        },
        {
            _id: 3333,
            title: "Amazon Payment Products",
            ListItem: [
                {
                    _id: "003",
                    ListData: [
                        "Amazon Business Card",
                        "Shop with Points",
                        "Reload Your Balance",
                        "Amazon Currency Converter",
                    ],
                },
            ],
        },
        {
            _id: 4444,
            title: "Let Us Help You",
            ListItem: [
                {
                    _id: "001",
                    ListData: [
                        "Amazon",
                        "Your Account",
                        "Your Orders",
                        "Shipping Rates & Policies",
                        "Returns & Replacements",
                        "Manage Your Content and Devices",
                        "Amazon Assistant",
                        "FAQ & Help",
                    ],
                },
            ],
        },

    ]
    return (
        <div className='w-full bg-amazon_light text-white'>

            {/* ======================= Top Start here ======================= ===*/}
            <div className='w-full border-b-[1px] border-gray-500 p-10'>
                <div className='max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6  md:place-items-center md:items-start'>
                        {
                            MiddleList.map((item) => (
                                <FotterMiddleList
                                    key={item._id}
                                    title={item.title}
                                    ListItem={item.ListItem}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* ======================= Top End here ============================ */}

            {/* ======================= Bottom Start here ======================= */}
            <div className='w-full flex gap-6 items-center justify-center py-6'>
                <div>
                    <img className='w-20 pt-3' src={logo} alt='logo'/>
                </div>
                <div className='flex gap-2'>
                    <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
                </div>
                <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
                    <img className='w-6' src={inFlag} alt='India'/>
                    <p>India</p>
                </div>
            </div>
            {/* ======================= Bottom End here ======================= ==*/}
        </div>
    )
}

export default FooterMiddle
