const sellerData = [
  {
    label: "Shop",
    desc: [
      {
        image: "https://picsum.photos/200",
        name: "Robert",
        purchase: "73 purchases",
      },
      {
        image: "https://picsum.photos/200",
        name: "Ronan",
        purchase: "70 purchases",
      },
      {
        image: "https://picsum.photos/200",
        name: "Hann",
        purchase: "65 purchases",
      },
      {
        image: "https://picsum.photos/200",
        name: "Honar",
        purchase: "60 purchases",
      },
    ],
  },
  {
    label: "Categories",
    desc: [
      {
        title: "Kitchen, pets",
      },
      {
        title: "Health, Grocery",
      },
      {
        title: "Electronics",
      },
      {
        title: "Movies, Music",
      },
    ],
  },
  {
    label: "Total",
    desc: [
      {
        price: "$ 1000",
      },
      {
        price: "$ 2000",
      },
      {
        price: "$ 3000",
      },
      {
        price: "$ 4000",
      },
    ],
  },
];

const categororiesData = [
  {
    title: "Kitchen, pets",
  },
  {
    title: "Health, Grocery",
  },
  {
    title: "Electronics",
  },
  {
    title: "Movies, Music",
  },
];

const totalData = [
  {
    price: "$ 1000",
  },
  {
    price: "$ 2000",
  },
  {
    price: "$ 3000",
  },
  {
    price: "$ 4000",
  },
];

export { sellerData, categororiesData, totalData };

export type SellerDataType = typeof sellerData;
export type CategoryDataType = typeof categororiesData;
export type TotalDataType = typeof totalData;
