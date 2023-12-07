import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import jogger1 from "./jogger1.jpeg"
import jogger2 from "./jogger2.jpeg"
import jogger3 from "./jogger3.jpeg"
import bodysuit1 from "./bodysuit1.jpeg"
import bodysuit2 from "./bodysuit2.jpeg"
import bodysuit3 from "./bodysuit3.jpeg"
import baggyjeans1 from "./baggyjeans1.jpeg"
import baggyjeans2 from "./baggyjeans2.jpeg"
import baggyjeans3 from "./baggyjeans3.jpeg"
import maxidress1 from "./maxidress1.jpeg"
import maxidress2 from "./maxidress2.jpeg"
import maxidress3 from "./maxidress3.jpeg"
import croptop1 from "./croptop1.png"
import croptop2 from "./croptop2.png"
import croptop3 from "./croptop3.jpg"
import denimtop1 from "./denimtop1.jpeg"
import denimtop2 from "./denimtop2.jpeg"
import denimtop3 from "./denimtop3.jpeg"
import dress1 from "./dress1.jpeg"
import dress2 from "./dress2.jpeg"
import dress3 from "./dress3.jpeg"
import sidepocketskirt1 from "./sidepocketskirt1.jpeg"
import sidepocketskirt2 from "./sidepocketskirt2.jpeg"
import sidepocketskirt3 from "./sidepocketskirt3.jpeg"
import maxiskirt1 from "./maxiskirt1.jpeg"
import maxiskirt2 from "./maxiskirt2.jpeg"
import maxiskirt3 from "./maxiskirt3.jpeg"
import cargopants from "./cargopants.jpeg"
import cargopants2 from "./cargopants2.jpeg"
import cargopants1 from "./cargopants1.jpeg"


let all_product = [
  {
    id: 1,
    name: "Sleek and Chic Bodysuits for the Modern Woman",
    category: "women",
    image: bodysuit1,
    image1: bodysuit2 ,
    image2: bodysuit3,
    new_price: 65.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Stunning, Flawless and Fashioned Forward Dresses",
    category: "women",
    image: dress1,
    image1: dress2,
    image2: dress3,
    new_price: 120.0,
    old_price: 150.5,
  },
  {
    id: 5,
    name: "Stylish Baggy Jeans to Elevate Your Wardrobe ",
    category: "women",
    image: baggyjeans1,
    image1:baggyjeans2,
    image2: baggyjeans3,
    new_price: 90.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Flattering Cargo Pants for the Fashion Woman",
    category: "women",
    image: cargopants,
    image2: cargopants1,
    image1: cargopants2,
    new_price: 110.0,
    old_price: 130.5,
  },
  {
    id: 7,
    name: "Glamorous and Chic Dennim Tops to Make a Statemen",
    category: "women",
    image: denimtop1,
    image2: denimtop2,
    image1: denimtop3,
    new_price: 75.0,
    old_price: 105.5,
  },
  {
    id: 8,
    name: "Classy Side Pocket Skirt to Amp Up Your Fashion Game",
    category: "women",
    image: sidepocketskirt1,
    image1: sidepocketskirt3,
    image2: sidepocketskirt2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "On-Trend Joggers for the Modern-Day Style Icon",
    category: "women",
    image: jogger1,
    image1: jogger2 ,
    image2: jogger3,
    new_price: 65.0,
    old_price: 90.5,
  },
  {
    id: 10,
    name: "Sophisticated Maxi Dress For Perfection",
    category: "women",
    image: maxidress1,
    image1: maxidress2,
    image2: maxidress3,
    new_price: 90.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Fashionable Crop Top for Fashion Enthusiast",
    category: "women",
    image: croptop3,
    image1: croptop1,
    image2: croptop2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Effortless Maxi Skirt for the Fashion-Savvy Woman",
    category: "women",
    image: maxiskirt1,
    imag2: maxiskirt2,
    image1: maxiskirt3,
    new_price: 45.0,
    old_price: 55.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: " Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  
];

export default all_product;
