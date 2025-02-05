import { Product } from "../../types";

export const products: Product[] = [
  // Tesla Models
  {
    id: 1,
    name: "Tesla Model S",
    price: 114179,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Tesla_Model_S_Japan_trimmed.jpg",
    manufacturer: "Tesla",
    isFeatured: true,
    description:
      "Tesla's flagship luxury sedan, featuring cutting-edge technology, impressive range, and exceptional performance with advanced autopilot capabilities.",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    price: 61900,
    imageUrl:
      "https://cdn.motor1.com/images/mgl/qpGBL/s1/tesla-model-3-gray-2.jpg",
    manufacturer: "Tesla",
    isFeatured: false,
    description:
      "Tesla's most affordable sedan, combining minimalist design with strong performance and long-range capability, perfect for daily commuting.",
  },
  {
    id: 3,
    name: "Tesla Model X",
    price: 121629,
    imageUrl:
      "https://www.automobilemag.com/uploads/sites/11/2018/06/TSportline-black-tesla-model-x-t-largo-carbon-fiber-wide-body-kit-wm-13.jpg",
    manufacturer: "Tesla",
    isFeatured: false,
    description:
      "A premium electric SUV featuring distinctive falcon-wing doors, spacious interior, and impressive towing capacity while maintaining high performance.",
  },
  {
    id: 4,
    name: "Tesla Model Y",
    price: 60900,
    imageUrl:
      "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg",
    manufacturer: "Tesla",
    isFeatured: false,
    description:
      "Compact SUV combining the practicality of an SUV with Tesla's signature performance and technology, perfect for families.",
  },
  {
    id: 5,
    name: "Tesla Roadster",
    price: 298000,
    imageUrl:
      "https://images.hdqwalls.com/wallpapers/tesla-roadster-2020-3p.jpg",
    manufacturer: "Tesla",
    isFeatured: false,
    description:
      "Tesla's ultra-high-performance sports car, promising record-breaking acceleration and top speed with revolutionary electric powertrain technology.",
  },

  // Honda Models
  {
    id: 6,
    name: "Honda Civic",
    price: 35000,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/2015_Honda_Civic_Si_Coupe_Orange.JPG",
    manufacturer: "Honda",
    isFeatured: true,
    description:
      "A reliable and sporty compact car offering excellent fuel economy, modern features, and Honda's renowned build quality.",
  },
  {
    id: 7,
    name: "Honda Accord",
    price: 52000,
    imageUrl:
      "https://www.tflcar.com/wp-content/uploads/2017/07/542240_08-2018-Honda-Accord-Touring.jpg",
    manufacturer: "Honda",
    isFeatured: false,
    description:
      "Mid-size sedan known for its refined driving experience, spacious interior, and advanced safety features.",
  },
  {
    id: 8,
    name: "Honda CR-V",
    price: 40000,
    imageUrl: "https://images.hgmsites.net/hug/honda-cr-v_100755452_h.jpg",
    manufacturer: "Honda",
    isFeatured: false,
    description:
      "Popular compact SUV offering excellent cargo space, fuel efficiency, and versatility for both urban and suburban lifestyles.",
  },
  {
    id: 9,
    name: "Honda HR-V",
    price: 36000,
    imageUrl:
      "https://i.gaw.to/content/photos/34/72/347249_2019_Honda_HR-V.jpg",
    manufacturer: "Honda",
    isFeatured: false,
    description:
      "Subcompact crossover SUV with innovative storage solutions, fuel efficiency, and city-friendly dimensions.",
  },
  {
    id: 10,
    name: "Honda Jazz",
    price: 25000,
    imageUrl:
      "https://www.wheelswithinwales.uk/wp-content/uploads/2018/09/Honda-jazz-1.5-Sport-Nav-side-front-action.jpg",
    manufacturer: "Honda",
    isFeatured: false,
    description:
      "Compact hatchback featuring Honda's versatile Magic Seats system and exceptional fuel economy, perfect for urban environments.",
  },

  // Toyota Models
  {
    id: 11,
    name: "Toyota Corolla",
    price: 30000,
    imageUrl: "https://fotos.perfil.com/2022/06/03/toyota-corolla-1366408.jpg",
    manufacturer: "Toyota",
    isFeatured: true,
    description:
      "World's best-selling car known for its reliability, fuel efficiency, and value retention, ideal for daily commuting.",
  },
  {
    id: 12,
    name: "Toyota Camry",
    price: 35000,
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.QQkZYZo3tCpoWmwiZTWK3AHaFj&pid=Api&P=0&h=180",
    manufacturer: "Toyota",
    isFeatured: false,
    description:
      "Mid-size sedan offering a perfect blend of comfort, performance, and reliability with premium features.",
  },
  {
    id: 13,
    name: "Toyota RAV4",
    price: 40000,
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.twJKcQGnJ5dECTpuclBkxQHaE8&pid=Api&P=0&h=180",
    manufacturer: "Toyota",
    isFeatured: false,
    description:
      "Popular compact SUV combining practicality with rugged styling, offering excellent safety features and versatile performance.",
  },
  {
    id: 14,
    name: "Toyota Hilux",
    price: 50000,
    imageUrl:
      "https://cdni.autocarindia.com/ExtraImages/20210531045746_Toyota_Hilux_2021.jpg",
    manufacturer: "Toyota",
    isFeatured: false,
    description:
      "Legendary pickup truck known for its unmatched durability and off-road capability, perfect for both work and adventure.",
  },
  {
    id: 15,
    name: "Toyota LandCruiser Prado",
    price: 72500,
    imageUrl:
      "https://www.carscoops.com/wp-content/uploads/2020/08/2020-Toyota-Land-Cruiser-Prado-Black-Edition-JDM-spec-0.jpg",
    manufacturer: "Toyota",
    isFeatured: false,
    description:
      "Premium SUV offering exceptional off-road capability with luxurious comfort and advanced safety features.",
  },

  // Ford Models
  {
    id: 16,
    name: "Ford Fiesta",
    price: 25000,
    imageUrl:
      "https://media.autoexpress.co.uk/image/private/s--LfbsjpVh--/v1566927596/autoexpress/2019/08/01_33.jpg",
    manufacturer: "Ford",
    isFeatured: true,
    description:
      "Compact car known for its engaging driving dynamics, fuel efficiency, and modern technology features.",
  },
  {
    id: 17,
    name: "Ford Focus",
    price: 30000,
    imageUrl:
      "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/rxP4JwYO--HsVZU37Vk-(edit)2-EecEF3fo6L.jpg?t=165350921988",
    manufacturer: "Ford",
    isFeatured: false,
    description:
      "Dynamic compact car offering sharp handling, practical space, and advanced driver assistance features.",
  },
  {
    id: 18,
    name: "Ford Escape",
    price: 40000,
    imageUrl:
      "https://www.mycarspecs.com/static/gallery_img/2017-ford-escape-6.jpg",
    manufacturer: "Ford",
    isFeatured: false,
    description:
      "Versatile compact SUV combining car-like handling with SUV practicality, perfect for urban adventures.",
  },
  {
    id: 19,
    name: "Ford Ranger",
    price: 50000,
    imageUrl:
      "https://media.autoexpress.co.uk/image/private/s--h55FmtJ0--/v1562245180/autoexpress/2017/09/ford-ranger-black-edtition.jpg",
    manufacturer: "Ford",
    isFeatured: false,
    description:
      "Capable pickup truck offering excellent towing capacity, off-road ability, and modern comfort features.",
  },
  {
    id: 20,
    name: "Ford Everest",
    price: 60000,
    imageUrl:
      "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/09/2023-ford-everest-sport-review-2.jpg",
    manufacturer: "Ford",
    isFeatured: false,
    description:
      "Rugged yet refined SUV based on the Ranger platform, offering excellent off-road capability with family-friendly features.",
  },
];
