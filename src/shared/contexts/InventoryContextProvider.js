import React, { createContext, useReducer } from "react";

export const InventoryContext = createContext();

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD":
      return { ...state, products: [...state.products, action.payload] };
    case "EDIT":
      //TODO: add edit product statement
      return newState;
    case "DELETE":
      //TODO: add remove product statement
      return newState;
    case "RATE":
      let product = newState.products.find(
        (item) => item.productId === action.payload.productId
      );
      product.ratings[action.payload.userId] = action.payload.rating;
      return newState;
    default:
      return state;
  }
};

const InventoryContextProvider = ({ children }) => {
  const [inventory, inventoryDispatch] = useReducer(reducer, {
    products: [
      {
        productId: "1",
        name: "Samsung Inverter Refrigerator",
        description: "Product description",
        price: 17495,
        ratings: null,
        badge: { label: "NEW!", color: "orange" },
        uri: "https://ansons.ph/wp-content/uploads/2013/10/RT20FARVDSA.jpg",
        stocks: 2,
        promo: "SALE",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },
      {
        productId: "2",
        name: "Samsung Side by Side Refrigerator",
        description: "Product description",
        price: 81213,
        ratings: null,
        badge: {},
        uri: "https://images.samsung.com/is/image/samsung/ph-ref-sbs-rs63r5591b4-rs63r5591b4-tc-frontblack-174311833?$720_576_PNG$",
        stocks: 2,
        promo: "SALE",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },
      {
        productId: "3",
        name: "4-Door French Refrigerator",
        description: "Product description",
        price: 122990,
        ratings: null,
        badge: null,
        uri: "https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-french-door/pdp/rf24r7201sr-aa/gallery/01-7201-stainless-022019.jpg?$product-details-jpg$",
        stocks: 5,
        promo: "SALE",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },
      {
        productId: "4",
        name: "BESPOKE 4-Door Flex French Door Refrigerator w/ Customizable Panel",
        description: "Product description",
        price: 158928,
        ratings: null,
        badge: { label: "HOT", color: "red" },
        uri: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451234cv21d.jpg",
        stocks: 10,
        promo: "SALE",
        comment: [],
        brand: "1",
        tags: [
          "kitchen",
        ],
      },
      {
        productId: "5",
        name: "LG UN73 43 inch 4K Smart UHD TV",
        description: "",
        price: 22990,
        ratings: null,
        badge: {},
        uri: "https://www.lg.com/ph/images/tvs/md06251146/gallery/1100-1.jpg",
        stocks: 3,
        promo: "HOT",
        comment: [],
        brand: "2",
        tags: [
          "bedroom",
          "livingroom",
        ],
      },
      {
        productId: "6",
        name: "Series 7 55in RU7100 4K UHD TV",
        description: "Product description",
        price: 30000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "https://images.samsung.com/is/image/samsung/au-ru7100-ua55ru7100wxxy-rperspectiveblack-152560884?$720_576_PNG$",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "bedroom",
          "livingroom"],
      },
      {
        productId: "7",
        name: "LG Washing Machine Twin-Tub 14kg P1400RT",
        description: "Product description",
        price: 16500,
        ratings: null,
        badge: null,
        uri: "https://saversappliances.com.ph/wp-content/uploads/2021/01/1400RT.png",
        stocks: 3,
        promo: "HOT",
        comment: [],
        brand: "2",
        tags: [
          "bathroom",
          "outdoors",
        ],
      },
      {
        productId: "8",
        name: "Plastic LG Portable Air Cooler",
        description: "",
        price: 18000,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "https://4.imimg.com/data4/GF/UA/MY-10549957/portable-air-cooler-500x500.jpg",
        stocks: 5,
        promo: "HOT",
        comment: [],
        brand: "2",
        tags: [
          "kitchen",
          "bathroom",
          "bedroom",
          "livingroom"
        ],
      },
      {
        productId: "9",
        name: "LG HS12ISW Inverter Air Conditioning unit",
        description: "",
        price: 26997,
        ratings: null,
        badge: { label: "SURPLUS", color: "brown" },
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/173772_2020.jpg",
        stocks: 1,
        promo: "HOT",
        comment: [],
        brand: "1",
        tags: [
          "bedroom",
          "livingroom",
        ],
      },

      {
        productId: "10",
        name: "PANASONIC F409LS 16in Stand Fan Invertor",
        description: "",
        price: 3698,
        ratings: null,
        badge: { label: "HOT!", color: "red" },
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/6/169956.jpg",
        stocks: 5,
        promo: "HOT",
        comment: [],
        brand: "3",
        tags: [
          "kitchen",
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "11",
        name: "Panasonic Ceiling Mount Bathroom Exhaust Fan",
        description: "",
        price: 10253,
        ratings: null,
        badge: {},
        uri: "https://rexel-cdn.com/products/fv-0810vss1.jpg?i=5CE410C8-142E-42B6-9974-640BBE4F2122&f=420",
        stocks: 10,
        promo: "HOT",
        comment: [],
        brand: "3",
        tags: [
          "kitchen",
          "bathroom",
          "utility",
        ],
      },

      {
        productId: "12",
        name: "Panasonic PZ Standard CS-PZ25-VKE R32",
        description: "",
        price: 27532,
        ratings: null,
        badge: {label: "SURPLUS!", color: "brown" },
        uri: "https://klivago.com/media/image/product/3590/md/panasonic-pz-standard-cs-pz25-vke-r32-wall-air-conditioner-set-25-kw.jpg",
        stocks: 2,
        promo: "",
        comment: [],
        brand: "3",
        tags: [
          "kitchen",
          "bathroom",
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "13",
        name: "Hitachi R-W660PG7 GBK French Door Refrigerator",
        description: "",
        price: 71900,
        ratings: null,
        badge: {label: "HOT!", color: "red" },
        uri: "https://ansons.ph/wp-content/uploads/2021/04/W660PG7-BGK_01.png",
        stocks: 2,
        promo: "",
        comment: [],
        brand: "4",
        tags: [
          "kitchen"],
      },

      {
        productId: "14",
        name: "REPLACEMENT Hitachi air purifier HEPA Filter Activated carbon deodorizing filter",
        description: "",
        price: 2669,
        ratings: null,
        badge: {},
        uri: "https://m.media-amazon.com/images/I/51nJ708m5iL._AC_SY780_.jpg",
        stocks: 5,
        promo:"",
        comment: [],
        brand: "4",
        tags: [
          "kitchen",
          "utility"],
      },

      {
        productId: "15",
        name: "REPLACEMENT Hitachi Induction Motor Single Phase 4-Pole",
        description: "",
        price: 1540,
        ratings: null,
        badge: {},
        uri: "https://media.karousell.com/media/photos/products/2020/7/28/hitachi_induction_motor_single_1595899686_ad3ad9c7",
        stocks: 10,
        promo: "SALE",
        comment: [],
        brand: "4",
        tags: [
          "utility"],
      },

      {
        productId: "16",
        name: "Hitachi R-V400PG8 BSL 2-Door Refrigerator",
        description: "",
        price: 31995,
        ratings: null,
        badge: {label: "NEW", color: "orange" },
        uri: "https://cdn.shopify.com/s/files/1/0255/5782/7658/products/VNR-F450PGV8_01_1080x.jpg?v=1595581428",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "4",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },

      {
        productId: "17",
        name: "GE ENERGY STAR 24.7 Cu. Ft. French-Door Refrigerator",
        description: "",
        price: 93409,
        ratings: null,
        badge: {label: "NEW", color: "orange" },
        uri: "https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/1280x1280/products/2693/265937/Dispatcher_RequestType_Image&Name_R48944__14322.1615245416.jpg?c=2",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "5",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },

      {
        productId: "18",
        name: "GE 30in Free-Standing Gas Range",
        description: "",
        price: 36963,
        ratings: null,
        badge: {label: "NEW", color: "orange" },
        uri: "https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/335x350/products/3259/261189/Dispatcher_RequestType_Image&Name_R48163__65888.1615241391.jpg?c=2",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "5",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },

      {
        productId: "19",
        name: "GE Blender with personal cups",
        description: "",
        price: 5075,
        ratings: null,
        badge: {label: "NEW", color: "orange" },
        uri: "https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/1280x1280/products/137406/382023/Dispatcher_RequestType_Image&Name_GEA_BlenderCups_G8BCAASSPSS_1alt__91437.1631193660.jpg?c=2",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "5",
        tags: [
          "kitchen"
        ],
      },
      
      {
        productId: "20",
        name: "Yamaha C112V-12 350-Watt 2-Way PA Speaker",
        description: "",
        price: 22198,
        ratings: null,
        badge: {label: "SURPLUS", color: "brown" },
        uri: "https://www.bhphotovideo.com/images/images2000x2000/Yamaha_C112V_C112V_12_2_Way_312919.jpg",
        stocks: 12,
        promo: "",
        comment: [],
        brand: "6",
        tags: [
          "livingroom",
          "bedroom",
          "outdoors"
        ],
      },

      {
        productId: "21",
        name: "Yamaha Portable Generator",
        description: "",
        price: 6000,
        ratings: {},
        badge: {label: "SURPLUS", color: "brown" },
        uri: "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/all/005d2d16-6786-4630-a056-0df4525cde6e.png",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "6",
        tags: [
          "utility",
          "outdoors"
        ],
      },

      {
        productId: "22",
        name: "Yamaha EF4500iSE Generator",
        description: "",
        price: 184511,
        ratings: {},
        badge: {},
        uri: "https://cdn3.volusion.com/fwden.lwkem/v/vspfiles/photos/EF4500iSE-2T.jpg?v-cache=1642065783",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "6",
        tags: [
          "utility",
          "outdoors"
        ],
      },

      {
        productId: "24",
        name: "Whirlpool LHB802",
        description: "",
        price: 16898,
        ratings: {},
        badge: {label: "HOT!", color: "red" },
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/4/145702_2020.jpg",
        stocks: 1,
        promo: "",
        comment: [],
        brand: "7",
        tags: [
          "outdoors"
        ],
      },

      {
        productId: "25",
        name: "Whirlpool LFP580 GR 5.8 kg. Top Load Washing Machine",
        description: "",
        price: 9998,
        ratings: {},
        badge: {label: "HOT!", color: "red" },
        uri: "https://ansons.ph/wp-content/uploads/2018/05/LFP-580-GR.jpg",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "7",
        tags: [
          "outdoors"
        ],
      },

      {
        productId: "26",
        name: "Whirlpool 5.1 cu. ft. Gas Range in Stainless Steel WFG505M0BS",
        description: "",
        price: 33221,
        ratings: {},
        badge: {label: "HOT!", color: "red" },
        uri: "https://images.thdstatic.com/productImages/6d72b40c-cbad-4daa-8182-eb1a54fc8e67/svn/stainless-steel-whirlpool-single-oven-gas-ranges-wfg505m0bs-64_600.jpg",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "7",
        tags: [
          "kitchen",
          "outdoors"
        ],
      },
      
      {
        productId: "27",
        name: "Ace 32in Slim LED TV Black LED-808 DN4",
        description: "",
        price: 6999,
        ratings: {},
        badge: {label: "NEW!", color: "orange" },
        uri: "https://ph-test-11.slatic.net/p/f0385957a8c99cd6b21b538f47a3b868.jpg",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "8",
        tags: [
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "28",
        name: "ACE 32in Slim HD Smart TV with Wall Bracket",
        description: "",
        price: 9999,
        ratings: {},
        badge: {},
        uri: "https://tapandshop.ph/public/uploads/all/R7QunH0DDWzstAJGQaVL8omDHrEdUztmdQo0T1Mc.jpg",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "8",
        tags: [
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "29",
        name: "Ace 43in Slim Full HD LED Smart TV Black LED-909",
        description: "",
        price: 15499,
        ratings: {},
        badge: {label: "NEW!", color: "orange" },
        uri: "https://cf.shopee.ph/file/9784fbee1e716bdf61f9f68c37173702",
        stocks: 5,
        promo: "",
        comment: [],
        brand: "8",
        tags: [
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "30",
        name: "Sharp FP-J30E-P Air Purifier",
        description: "",
        price: 5998,
        ratings: {},
        badge: {label: "HOT!", color: "red" },
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/5/157539_2020.jpg",
        stocks: 25,
        promo: "",
        comment: [],
        brand: "9",
        tags: [
          "bathroom",
          "bedroom",
          "livingroom"
        ],
      },

      {
        productId: "31",
        name: "Sharp R 380F Microwave",
        description: "",
        price: 8998,
        ratings: {},
        badge: {},
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/4/142146_2020.jpg",
        stocks: 10,
        promo: "",
        comment: [],
        brand: "10",
        tags: [
          "Kitchen"
        ],
      },

      {
        productId: "32",
        name: "Sharp R-20A (S) 20 Liters Microwave Oven",
        description: "",
        price: 3498,
        ratings: {},
        badge: {label: "SURPLUS", color: "brown" },
        uri: "https://ansons.ph/wp-content/uploads/2019/09/R-20A.jpg",
        stocks: 10,
        promo: "",
        comment: [],
        brand: "10",
        tags: [
          "Kitchen"
        ],
      },

      {
        productId: "33",
        name: "Sharp EO259RTF Electric Oven",
        description: "",
        price: 3598,
        ratings: {},
        badge: {label: "SURPLUS", color: "brown" },
        uri: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/174363_2020.jpg",
        stocks: 3,
        promo: "",
        comment: [],
        brand: "10",
        tags: [
          "Kitchen"
        ],
      },






    ],
    brands: [
      {
        brandId: "1",
        name: "Samsung",
        brandUri:
          "https://marketingweek.imgix.net/content/uploads/2014/10/Samsung_logo.jpg",
      },
      {
        brandId: "2",
        name: "LG",
        brandUri:
          "https://www.lgnewsroom.com/wp-content/uploads/2021/07/lg-logo_.png",
      },
      {
        brandId: "3",
        name: "Panasonic",
        brandUri:
          "https://i.pinimg.com/originals/a3/7d/9d/a37d9d116de85133d17bc691f8b263ab.jpg",
      },
      {
        brandId: "4",
        name: "Hitachi",
        brandUri:
          "https://yt3.ggpht.com/ytc/AKedOLR06SaIzikoXAf-fd76cB5RWoeSBekJB1hx0DWx=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        brandId: "5",
        name: "General Electric",
        brandUri:
          "https://images.successstory.com/img_company/company_1435925461.jpg",
      },
      {
        brandId: "6",
        name: "Yamaha",
        brandUri: "https://www.yamaha-motor.com.ph/yamaha-official-logo.jpg",
      },
      {
        brandId: "7",
        name: "Whirlpool",
        brandUri:
          "https://mma.prnewswire.com/media/1439279/Whirlpool_EDC_Logo.jpg",
      },
      {
        brandId: "8",
        name: "ACE",
        brandUri:
          "https://pbs.twimg.com/profile_images/884779803185827840/MfvHiD5G_400x400.jpg",
      },
      {
        brandId: "9",
        name: "Sharp",
        brandUri:
          "https://primer.com.ph/business/wp-content/uploads/sites/9/2016/10/sharp-brand.jpg",
      },
    ],
  });

  return (
    <InventoryContext.Provider value={{ inventory, inventoryDispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextProvider;
