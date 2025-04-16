const products = [
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,

    stock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://www.surfstitch.com/dw/image/v2/BBCN_PRD/on/demandware.static/-/Sites-ss-master-catalog/default/dwe095bb37/images/AQYWT03400-WBK9/SNOWWHITE-DNA-DESTINA-ISLANDSS-MENS-CLOTHING-QUIKSILVER-SHIRTS-AQYWT03400-WBK9_1.JPG?sw=460&sh=575&sm=fit",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://www.surfstitch.com/dw/image/v2/BBCN_PRD/on/demandware.static/-/Sites-ss-master-catalog/default/dwc612144c/images/AQYWT03400-WBK9/SNOWWHITE-DNA-DESTINA-ISLANDSS-MENS-CLOTHING-QUIKSILVER-SHIRTS-AQYWT03400-WBK9_5.JPG?sw=460&sh=575&sm=fit",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    price: 29.99,

    stock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["OLIVE", "BROWN", "RED"],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/624016/20/mod01/fnd/IND/fmt/png/MMQ-Men's-Seersucker-Shirt",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/624016/20/mod04/fnd/IND/fmt/png/MMQ-Men's-Seersucker-Shirt",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 49.99,

    stock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["OLIVE", "BROWN", "RED"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/629392/87/mod01/fnd/IND/fmt/png/PALAIS-ARTISAN-Men's-Relaxed-Fit-Shirt",
        altText: "Casual Denim Shirt Front View",
      },
      {
        url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/629392/87/mod03/fnd/IND/fmt/png/PALAIS-ARTISAN-Men's-Relaxed-Fit-Shirt",
        altText: "Casual Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Printed Resort Shirt",
    description:
      "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    price: 29.99,

    stock: 25,
    sku: "PRNT-RES-004",
    category: "Top Wear",
    brand: "Beach Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["OLIVE", "BROWN", "RED"],
    collections: "Vacation Wear",
    material: "Viscose",
    gender: "Men",
    images: [
      {
        url: "https://image.hm.com/assets/hm/8b/c0/8bc081e4565b9c6144a413fd555c2fefb26aabfb.jpg?imwidth=657",
        altText: "Printed Resort Shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/8c/42/8c42a32e4de4e1a02fe3897f6348eca4c98251a8.jpg?imwidth=657",
        altText: "Printed Resort Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Slim-Fit Easy-Iron Shirt",
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    price: 34.99,

    stock: 30,
    sku: "SLIM-EIR-005",
    category: "Top Wear",
    brand: "Urban Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Gray"],
    collections: "Business Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/1665032/original.jpg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/1665033/original.jpg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
    ],
    rating: 5,
    numReviews: 14,
  },
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 24.99,

    stock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["OLIVE", "BROWN", "RED"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/5138XUPro3L._SY879_.jpg",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/51XJpGpgCcL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    price: 19.99,

    stock: 40,
    sku: "OVS-GRF-007",
    category: "Top Wear",
    brand: "Street Vibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    collections: "Streetwear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61Iz6OOcGGL._SY879_.jpg",
        altText: "Oversized Graphic T-Shirt Front View",
      },

      {
        url: "https://m.media-amazon.com/images/I/51oQXMNQRML._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Regular-Fit Henley Shirt",
    description:
      "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    price: 22.99,

    stock: 35,
    sku: "REG-HEN-008",
    category: "Top Wear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Olive", "Black"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/613OKhKqeHL._SY879_.jpg",
        altText: "Regular-Fit Henley Shirt Front View",
      },

      {
        url: "https://m.media-amazon.com/images/I/61T7uPhUzpL._SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Long-Sleeve Thermal Tee",
    description:
      "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    price: 27.99,

    stock: 20,
    sku: "LST-THR-009",
    category: "Top Wear",
    brand: "Winter Basics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Dark Green", "Navy"],
    collections: "Winter Essentials",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61Ds3ub3uSL._SY879_.jpg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/51F3ao94tQL._SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "V-Neck Classic T-Shirt",
    description:
      "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    price: 14.99,

    stock: 60,
    sku: "VNECK-CLS-010",
    category: "Top Wear",
    brand: "Everyday Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    collections: "Basics",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71at+3Iy4wL._SY879_.jpg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/710I2mhMdPL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 40,

    stock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81T5bT53BSL._SX679_.jpg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/81r6cSGIaFL._SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Cargo Joggers",
    description:
      "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    price: 45,

    stock: 15,
    sku: "BW-002",
    category: "Bottom Wear",
    brand: "UrbanStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71vyiR-ffAL._SY879_.jpg",
        altText: "Cargo Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/71vDwcOGH6L._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 35,

    stock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "ChillZone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Charcoal", "Blue"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/614vHBCN3qL._SY879_.jpg",
        altText: "Tapered Sweatpants Front View",
      },

      {
        url: "https://m.media-amazon.com/images/I/718Sp6BpJPL._SY879_.jpg",
        altText: "Back View",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 60,

    stock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81WzIbilc9L._SY879_.jpg",
        altText: "Denim Jeans Front View",
      },

      {
        url: "https://m.media-amazon.com/images/I/8137Bu8s4jL._SY879_.jpg",
        altText: "Denim Jeans Back View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 55,

    stock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "CasualLook",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/51b2ENMIAPL._SX679_.jpg",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61YVy6hiPyL._SY879_.jpg",
        altText: "Chino Pants Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Track Pants",
    description:
      "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    price: 40,

    stock: 20,
    sku: "BW-006",
    category: "Bottom Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    collections: "Activewear Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61OXWnxR8lL._SY879_.jpg",
        altText: "Track Pants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61lIBfiOITL._SY879_.jpg",
        altText: "Track Pants Side View",
      },
    ],
    rating: 4.2,
    numReviews: 17,
  },
  {
    name: "Slim Fit Trousers",
    description:
      "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    price: 65,

    stock: 15,
    sku: "BW-007",
    category: "Bottom Wear",
    brand: "ExecutiveStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Black"],
    collections: "Office Wear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61+cMGwwvEL._SX679_.jpg",
        altText: "Slim Fit Trousers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61UiShETt9L._SX679_.jpg",
        altText: "Slim Fit Trousers Back View",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Cargo Pants",
    description:
      "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    price: 50,

    stock: 25,
    sku: "BW-008",
    category: "Bottom Wear",
    brand: "StreetWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Brown", "Black"],
    collections: "Street Style Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61JmT1iY3CL._SY879_.jpg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/71-Q2DU5C-L._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 13,
  },
  {
    name: "Relaxed Fit Sweatpants",
    description:
      "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    price: 35,

    stock: 35,
    sku: "BW-009",
    category: "Bottom Wear",
    brand: "LoungeWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/413uZI5SR9L.jpg",
        altText: "Relaxed Fit Sweatpants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/41Pm8Z2PDaL.jpg",
        altText: "Relaxed Fit Sweatpants Back View",
      },
    ],
    rating: 4.3,
    numReviews: 14,
  },
  {
    name: "Formal Dress Pants",
    description:
      "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    price: 70,

    stock: 20,
    sku: "BW-010",
    category: "Bottom Wear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/717-WaIUi9L._SY879_.jpg",
        altText: "Formal Dress Pants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/715AdtVcWEL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 50,

    stock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71NHOEULmIL._SX679_.jpg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://m.media-amazon.com/images/I/71hsO0XD6iL._SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Wide-Leg Trousers",
    description:
      "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    price: 60,

    stock: 25,
    sku: "BW-W-002",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "White"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/6159MbMsZIL._SY879_.jpg",
        altText: "Wide-Leg Trousers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/81ETaDoLgpL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },

  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 55,

    stock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Navy", "Black"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61KVZCJ5JHL._SY879_.jpg",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/71UjI0C7S5L._SY879_.jpg",
        altText: "Pleated Midi Skirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 45,

    stock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61wT6z1pBPL._SY879_.jpg",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/81U+QKfDtmL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 22,
  },
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 40,

    stock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Pink"],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61dpIRNhr5L._SY879_.jpg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61x2JKAWSNL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Paperbag Waist Shorts",
    description:
      "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    price: 35,

    stock: 20,
    sku: "BW-W-007",
    category: "Bottom Wear",
    brand: "SunnyStyle",
    sizes: ["S", "M", "L"],
    colors: ["White", "Khaki", "Blue"],
    collections: "Summer Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/619TXlCTyQL._SY879_.jpg",
        altText: "Paperbag Waist Shorts Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/61OIE8RW7OL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Stretch Denim Shorts",
    description:
      "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    price: 40,

    stock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "White"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81YMOj8HjuL._SX679_.jpg",
        altText: "Stretch Denim Shorts Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/31AJFhljgHL.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Culottes",
    description:
      "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    price: 50,

    stock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81nxB75vlkL._SY879_.jpg",
        altText: "Culottes Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/71mkbort3nL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 23,
  },
  {
    name: "Classic Pleated Trousers",
    description:
      "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    price: 70,

    stock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61ejVBSEaYL._SY879_.jpg",
        altText: "Classic Pleated Trousers Front View",
      },
      {
        url: "https://m.media-amazon.com/images/I/71cfsWMYbSL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 40,

    stock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71dP1hF0x6L._SY879_.jpg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://m.media-amazon.com/images/I/71ux0SS2loL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Boho Floral Blouse",
    description:
      "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    price: 50,

    stock: 30,
    sku: "TW-W-002",
    category: "Top Wear",
    brand: "BohoVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71NSUzYyLaL._SY879_.jpg",
        altText: "Boho Floral Blouse",
      },
      {
        url: "https://m.media-amazon.com/images/I/71x1qi3xoRL._SY879_.jpg",
        altText: "Back View",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Casual T-Shirt",
    description:
      "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    price: 25,

    stock: 50,
    sku: "TW-W-003",
    category: "Top Wear",
    brand: "ComfyTees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    collections: "Essentials",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/41NA5BaQd+L._SY879_.jpg",
        altText: "Casual T-Shirt",
      },
      {
        url: "https://m.media-amazon.com/images/I/41dCIpP8rVL._SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 45,

    stock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Blue"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81STuYnXshL._SY879_.jpg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://m.media-amazon.com/images/I/81etD5gsJaL._SY879_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Lace-Trimmed Cami Top",
    description:
      "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    price: 35,

    stock: 40,
    sku: "TW-W-005",
    category: "Top Wear",
    brand: "DelicateWear",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    collections: "Lingerie-Inspired",
    material: "Silk Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81t8Q6jhuML._AC_SY741_.jpg",
        altText: "Lace-Trimmed Cami Top",
      },
      {
        url: "https://m.media-amazon.com/images/I/81PCXaDR+UL._AC_SY741_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Graphic Print Tee",
    description:
      "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    price: 30,

    stock: 45,
    sku: "TW-W-006",
    category: "Top Wear",
    brand: "StreetStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71ABOKI15LS._AC_SX679_.jpg",
        altText: "Graphic Print Tee",
      },
      {
        url: "https://m.media-amazon.com/images/I/71mW7wPGSCL._AC_SX679_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 55,

    stock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Pink", "Brown"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71Fcd58E1VL._AC_SX569_.jpg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://m.media-amazon.com/images/I/71fVJNqrOJL._AC_SX569_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Ruffle-Sleeve Blouse",
    description:
      "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    price: 45,

    stock: 20,
    sku: "TW-W-008",
    category: "Top Wear",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["White", "Navy", "Lavender"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71OiTUtElUL._AC_SX569_.jpg",
        altText: "Ruffle-Sleeve Blouse",
      },
      {
        url: "https://m.media-amazon.com/images/I/81NCb+vYz9L._AC_SX569_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Classic Button-Up Shirt",
    description:
      "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    price: 60,

    stock: 25,
    sku: "TW-W-009",
    category: "Top Wear",
    brand: "ClassicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Black"],
    collections: "Office Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61QSWaS43WL._AC_SY741_.jpg",
        altText: "Classic Button-Up Shirt",
      },
      {
        url: "https://m.media-amazon.com/images/I/71um7Uy8uxL._AC_SX569_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 50,

    stock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "ChicWrap",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Black", "White"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81XX786EZNL._AC_SX569_.jpg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://m.media-amazon.com/images/I/81+LoILUzKL._AC_SX569_.jpg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
];

export default products;
