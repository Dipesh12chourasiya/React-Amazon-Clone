import React, { useRef, useState, useEffect } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../../assets/index";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../../redux/amazonSlice";

function Header() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const allItems = [
    { _id: 112, title: "Health & Household" },
    { id: 113, title: "Home & Kitchen" },
    { _id: 114, title: "Industrial & Scientific" },
    { _id: 115, title: "Kindle Store" },
    { _id: 116, title: "Luggage" },
    { _id: 117, title: "Men's Fashion" },
    { _id: 118, title: "Movies & V" },
    { _id: 119, title: "Music, CDs & Vinyl" },
    { _id: 120, title: "Pet Supplies" },
    { _id: 121, title: "Prime Video" },
    { _id: 122, title: "Software" },
    { _id: 123, title: "Sports & Outdoors" },
    { _id: 124, title: "Tools & Home" },
    { _id: 125, title: "Toys & Games" },
    { _id: 126, title: "Video Games" },
    { _id: 127, title: "Women's Fashion" },
  ];

  const products = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  // console.log(userInfo);
  // console.log(products);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);

  const handleLogout=()=>{
    signOut(auth)
      .then(()=>{
        //siignout successfully
        console.log("Sign Out successfully");
        dispatch(userSignOut());
      })
      .catch((error)=>{
        // An error Occured
      })

  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* ============ Image Start here ================ */}
        <Link to="/">
          <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* ============ Image End here ====== ======== */}

        {/* ============ Deliver Start here ============== */}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden md:inline-flex">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Location
            </span>
          </p>
        </div>
        {/* ============ Deliver End here ================ */}

        {/* ============ == Search Start here =============== */}
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide fort-titleFont border-b-[1px] border-b-transparent hover:bg-blue-600 hover:text-white cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />

          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* ====== ==== Search End here ============ */}

        {/* ======== Signin Start here =============== */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100">
            {userInfo ? (
              <p className="text-sm text-gray-100 font-medium  md:text-xs md:text-lightText">
                {userInfo.userName}
              </p>
            ) : (
              <p className="text-sm text-white  md:text-xs md:text-lightText font-light">
                Hello, sign in
              </p>
            )}

            <p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* ============ Signin End here ================= */}

        {/* ===== ==== Orders Start here =============== */}
        <div className="hidden lgl:flex flex-col items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ============ Orders End here ================= */}

        {/* ============ Cart Start here================= */}
        <Link to="/cart">
          <div className="flex items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100 relative">
            <ShoppingCart />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {userInfo && (
          <div onClick={handleLogout} className="flex flex-col justify-center items-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100 relative">
            <LogoutIcon />
            <p className="hidden md:inline-flex text-xs font-semibold text-whiteText">
              Log Out
            </p>
          </div>
        )}
        {/* ============ Cart End here =================== */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;

// hover effect tailwind css for div's
// px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100
