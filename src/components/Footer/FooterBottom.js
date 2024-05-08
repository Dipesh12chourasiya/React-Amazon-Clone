import React from 'react'


const FooterBottom = () => {
    const footerBottomItem = [
        {
            _id : 1001,
            title: "Amazon music",
            des: "Stream millions of Song",
        },
        {
            _id : 1002,
            title: "Amazon Advertising",
            des: "Find, attract, and engage customers",
        },
        {
            _id : 1003,
            title: "Amazon Drive",
            des: "Cloud storage from Amazon",
        },
        {
            _id : 1004,
            title: "6pm",
            des: "Score deals on fashion brands",
        },
        {
            _id : 1005,
            title: "AbeBooks",
            des: "Books , art & collectbles",
        },
        {
            _id : 1006,
            title: "ACK",
            des: "Audiobook Publishing Made Easy",
        },
        {
            _id : 1007,
            title: "Sell on Amazon",
            des: "Start a Selling Account",
        },
        {
            _id : 1008,
            title: "Amazon Business",
            des: "Everything for Your Business",
        },
        {
            _id : 1009,
            title: "Amazon Global",
            des: "Ship Orders Intenationally",
        },
        {
            _id : 1010,
            title: "Home Services",
            des: "Experienced Pros appiness Gurantee",
        },
        {
            _id : 1011,
            title: "Amazon Ignite",
            des: "Sell your original Digital Educational Resources",
        },
        {
            _id : 1012,
            title: "Amazon Web Services",
            des: "Scalable Cloud Computing Services",
        },
        {
            _id : 1013,
            title: "Audible",
            des: "Listen to Books & Original Audio Performances",
        },
        {
            _id : 1014,
            title: "Book Depository",
            des: "Books with Free Delivery Worldwide",
        },
        {
            _id : 1015,
            title: "Box office Mojo",
            des: "Find Movie Box Office Data",
        },
        {
            _id : 1016,
            title: "Comixology",
            des: "Thousands of Digital Comics",
        },
        {
            _id : 1017,
            title: "DpReview",
            des: "Digital Photography",
        },
        {
            _id : 1018,
            title: "Fabric",
            des: "Sewing, Quilting & Knitting",
        },
        {
            _id : 1019,
            title: "Goodreads",
            des: "Book reviews & recommendations",
        },
        {
            _id : 1020,
            title: "IMDB",
            des: "Movies, TV & Celebrities",
        },
        {
            _id : 1021,
            title: "IMDB Pro",
            des: "Get Info Entertainment Professionals Need",
        },
    ]
  return (
    <div className='w-full bg-footerBottom py-8'>
        <div className='max-w-5xl mx-auto px-9 xl:px-0'>
            <div className='w-full grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-3 place-content-center text-gray-400'>
                {
                    footerBottomItem.map((item)=>(
                        <div className='group cursor-pointer' key={item._id}>
                            <h3 className='w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px];'>{item.title}</h3>
                            <p className='w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3'>{item.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FooterBottom
