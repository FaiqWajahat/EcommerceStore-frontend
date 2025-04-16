import React, { useRef, useState, useEffect, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Cart";

// const data = [
 
//   {
//     name: "Oversized Graphic T-Shirt",
//     description:
//       "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
//     price: 19.99,
//     discountPrice: 15.99,
//     countInStock: 40,
//     sku: "OVS-GRF-007",
//     category: "Top Wear",
//     brand: "Street Vibes",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Gray"],
//     collections: "Streetwear",
//     material: "Cotton",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/61Iz6OOcGGL._SY879_.jpg",
//         altText: "Oversized Graphic T-Shirt Front View",
//       },
      
//       {
//         url: "https://m.media-amazon.com/images/I/51oQXMNQRML._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.6,
//     numReviews: 30,
//   },
//   {
//     name: "Regular-Fit Henley Shirt",
//     description:
//       "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
//     price: 22.99,
//     discountPrice: 18.99,
//     countInStock: 35,
//     sku: "REG-HEN-008",
//     category: "Top Wear",
//     brand: "Heritage Wear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Gray", "Olive", "Black"],
//     collections: "Casual Wear",
//     material: "Cotton Blend",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/613OKhKqeHL._SY879_.jpg",
//         altText: "Regular-Fit Henley Shirt Front View",
//       },
      
//       {
//         url: "https://m.media-amazon.com/images/I/61T7uPhUzpL._SX679_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.5,
//     numReviews: 25,
//   },
//   {
//     name: "Long-Sleeve Thermal Tee",
//     description:
//       "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
//     price: 27.99,
//     discountPrice: 22.99,
//     countInStock: 20,
//     sku: "LST-THR-009",
//     category: "Top Wear",
//     brand: "Winter Basics",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Charcoal", "Dark Green", "Navy"],
//     collections: "Winter Essentials",
//     material: "Cotton",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/61Ds3ub3uSL._SY879_.jpg",
//         altText: "Long-Sleeve Thermal Tee Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/51F3ao94tQL._SX679_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.4,
//     numReviews: 18,
//   },
//   {
//     name: "V-Neck Classic T-Shirt",
//     description:
//       "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
//     price: 14.99,
//     discountPrice: 11.99,
//     countInStock: 60,
//     sku: "VNECK-CLS-010",
//     category: "Top Wear",
//     brand: "Everyday Comfort",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["White", "Black", "Navy"],
//     collections: "Basics",
//     material: "Cotton",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/71at+3Iy4wL._SY879_.jpg",
//         altText: "V-Neck Classic T-Shirt Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/710I2mhMdPL._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.7,
//     numReviews: 28,
//   },
//   {
//     name: "Slim Fit Joggers",
//     description:
//       "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
//     price: 40,
//     discountPrice: 35,
//     countInStock: 20,
//     sku: "BW-001",
//     category: "Bottom Wear",
//     brand: "ActiveWear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "Gray", "Navy"],
//     collections: "Casual Collection",
//     material: "Cotton Blend",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/81T5bT53BSL._SX679_.jpg",
//         altText: "Slim Fit Joggers Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/81r6cSGIaFL._SX679_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.5,
//     numReviews: 12,
//   },
//   {
//     name: "Relaxed Fit Sweatpants",
//     description:
//       "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
//     price: 35,
//     discountPrice: 30,
//     countInStock: 35,
//     sku: "BW-009",
//     category: "Bottom Wear",
//     brand: "LoungeWear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Gray", "Black", "Navy"],
//     collections: "Lounge Collection",
//     material: "Fleece",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/413uZI5SR9L.jpg",
//         altText: "Relaxed Fit Sweatpants Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/41Pm8Z2PDaL.jpg",
//         altText:"Relaxed Fit Sweatpants Back View",
//       },
//     ],
//     rating: 4.3,
//     numReviews: 14,
//   },
//   {
//     name: "Formal Dress Pants",
//     description:
//       "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
//     price: 70,
//     discountPrice: 60,
//     countInStock: 20,
//     sku: "BW-010",
//     category: "Bottom Wear",
//     brand: "ElegantStyle",
//     sizes: ["M", "L", "XL"],
//     colors: ["Black", "Navy"],
//     collections: "Formal Collection",
//     material: "Polyester",
//     gender: "Men",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/717-WaIUi9L._SY879_.jpg",
//         altText: "Formal Dress Pants Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/715AdtVcWEL._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.9,
//     numReviews: 8,
//   },
//   {
//     name: "High-Waist Skinny Jeans",
//     description:
//       "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
//     price: 50,
//     discountPrice: 45,
//     countInStock: 30,
//     sku: "BW-W-001",
//     category: "Bottom Wear",
//     brand: "DenimStyle",
//     sizes: ["XS", "S", "M", "L", "XL"],
//     colors: ["Dark Blue", "Black", "Light Blue"],
//     collections: "Denim Collection",
//     material: "Denim",
//     gender: "Women",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/71NHOEULmIL._SX679_.jpg",
//         altText: "High-Waist Skinny Jeans",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/71hsO0XD6iL._SX679_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.8,
//     numReviews: 20,
//   },
//   {
//     name: "Wide-Leg Trousers",
//     description:
//       "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
//     price: 60,
//     discountPrice: 55,
//     countInStock: 25,
//     sku: "BW-W-002",
//     category: "Bottom Wear",
//     brand: "ElegantWear",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige", "Black", "White"],
//     collections: "Formal Collection",
//     material: "Polyester",
//     gender: "Women",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/6159MbMsZIL._SY879_.jpg",
//         altText: "Wide-Leg Trousers Front View",
//       }
//       ,
//       {
//         url: "https://m.media-amazon.com/images/I/81ETaDoLgpL._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.7,
//     numReviews: 15,
//   },
  
  
 
//   {
//     name: "Pleated Midi Skirt",
//     description:
//       "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
//     price: 55,
//     discountPrice: 50,
//     countInStock: 20,
//     sku: "BW-W-004",
//     category: "Bottom Wear",
//     brand: "ChicStyle",
//     sizes: ["S", "M", "L"],
//     colors: ["Pink", "Navy", "Black"],
//     collections: "Spring Collection",
//     material: "Polyester",
//     gender: "Women",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/61KVZCJ5JHL._SY879_.jpg",
//         altText: "Pleated Midi Skirt Front View",
//       },
//       {
//         url: "https://m.media-amazon.com/images/I/71UjI0C7S5L._SY879_.jpg",
//         altText: "Pleated Midi Skirt Back View",
//       },
//     ],
//     rating: 4.6,
//     numReviews: 18,
//   },
//   {
//     name: "Flared Palazzo Pants",
//     description:
//       "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
//     price: 45,
//     discountPrice: 40,
//     countInStock: 35,
//     sku: "BW-W-005",
//     category: "Bottom Wear",
//     brand: "BreezyVibes",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["White", "Beige", "Light Blue"],
//     collections: "Summer Collection",
//     material: "Linen Blend",
//     gender: "Women",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/61wT6z1pBPL._SY879_.jpg",
//         altText: "Flared Palazzo Pants Front View",
//       },
//       {
//         url: "https://m.media-amazon.com/images/I/81U+QKfDtmL._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.4,
//     numReviews: 22,
//   },
//   {
//     name: "High-Rise Joggers",
//     description:
//       "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
//     price: 40,
//     discountPrice: 35,
//     countInStock: 30,
//     sku: "BW-W-006",
//     category: "Bottom Wear",
//     brand: "ActiveWear",
//     sizes: ["XS", "S", "M", "L"],
//     colors: ["Black", "Gray", "Pink"],
//     collections: "Loungewear Collection",
//     material: "Cotton Blend",
//     gender: "Women",
//     images: [
//       {
//         url: "https://m.media-amazon.com/images/I/61dpIRNhr5L._SY879_.jpg",
//         altText: "High-Rise Joggers Front View",
//       },
//       {
//         url: "https://m.media-amazon.com/images/I/61x2JKAWSNL._SY879_.jpg",
//         altText: "Polo T-Shirt Back View",
//       },
//     ],
//     rating: 4.3,
//     numReviews: 25,
//   },
// ];



const ImageScroller = () => {

  const state=useContext(CartContext)
const product=state.products

const data=product.slice(0,8)
  const scrollRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Function to update scroll indicators
  const updateScrollIndicators = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth);
  };

  // Function to scroll on button click
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9; // 90% of the container width

    let newScrollPosition =
      direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

    newScrollPosition = Math.max(
      0,
      Math.min(newScrollPosition, scrollWidth - clientWidth)
    );

    scrollRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setTimeout(updateScrollIndicators, 300); // Ensure indicators update after scroll
  };

  // Function to handle mouse wheel scrolling
  const handleWheel = (e) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    const scrollSpeed = 1.5; // Adjusted for a smoother scroll experience
    scrollRef.current.scrollBy({
      left: e.deltaY * scrollSpeed,
      behavior: "smooth",
    });

    setTimeout(updateScrollIndicators, 300);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateScrollIndicators);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateScrollIndicators);
    };
  }, []);

  return (
    <section className="mt-32">
      <div className="w-full flex flex-col justify-center px-4 ">
        <h2 className="text-black font-bold text-2xl text-center">
          New arrivals
        </h2>
        <p className="text-sm tracking-tight text-center mt-2 max-w-lg mx-auto">
          Discover the latest styles straight from the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="flex w-full justify-end mt-5">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => scroll("left")}
              className={`p-2 border border-black rounded active:bg-black active:text-white transition ${
                !showLeftScroll ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!showLeftScroll}
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-2 border border-black bg-black text-white rounded transition ${
                !showRightScroll ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!showRightScroll}
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Image Scroller */}
        <div
          ref={scrollRef}
          className="flex gap-4 w-full overflow-x-auto md:overflow-x-hidden scroll-smooth mt-5 cursor-pointer"
        >
          {data.map((item, index) => (
            <Link
              to={`${item.gender}/${item.category}/${item.sku}`}
              onClick={() => BsWindowSidebar.scrollTo(0, 0)}
            >
              <div key={index} className="relative w-auto shrink-0">
                <div className="w-[300px] md:w-[400px] h-[350px] md:h-[300px]">
                  <img
                    src={item.images[0].url}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full rounded-lg object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full backdrop-blur-lg py-2 px-3 text-white rounded-b-lg bg-black/50">
                    <p className="text-white text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-white text-sm">${item.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageScroller;
