/* DOCUMENTO CON LOS PRODUCTOS A CATALOGAR*/
const stockTakones = [
  {
      id: 1,
      title: "CATERPILLER",
      model: "ROCKET",
      img: "../../public/img/borBerlina.jpg",
      stock: "20",
      price: "$40.000" 
  },
  {
      id: 2,
      title: "TIMBERLAND",
      model: "FEDEX",
      img: "../../public/img/borBerlina.jpg",
      stock: "14",
      price: "$40.000" 
  },
  {
      id: 3,
      title: "HUSH PUPPIE",
      model: "SALMOS",
      img: "../../public/img/borBerlina.jpg",
      stock: "30",
      price: "$40.000" 
  },
  {
      id: 4,
      title: "CATERPILLER",
      model: "POXITT",
      img: "../../public/img/borBerlina.jpg",
      stock: "11",
      price: "40.000" 
  },
  {
      id: 5,
      title: "TIMBERLAND",
      model: "LETTIE",
      img: "",
      stock: "7",
      price:"$40.000"  
  },
  {
      id: 6,
      title: "HUSH PUPPIE",
      model: "ZYAN",
      img: "",
      stock: "2",
      price: "$40.000" 
  },
  {
      id: 7,
      title: "CATERPILLER",
      model: "ROXANNE",
      img: "",
      stock: "8",
      price: "40.000" 
  },
  {
      id: 8,
      title: "TIMBERLAND",
      model: "KILLER",
      img: "",
      stock: "13",
      price: "$40.000" 
  },
  {
      id: 9,
      title: "HUSH PUPPIE",
      model: "GREYNN",
      img: "",
      stock: "15",
      price: "40.000" 
  },
  {
      id: 10,
      title: "CATERPILLER",
      model: "ORIGINS",
      img: "",
      stock: "9",
      price: "40.000" 
  },
  {
      id: 11,
      title: "TIMBERLAND",
      model: "MTILLAK",
      img: "",
      stock: "3",
      price: "40.000" 
  },
  {
      id: 12,
      title: "HUSH PUPPIE",
      model: "IOSA",
      img: "",
      stock: "6",
      price: "$40.000" 
  },
]

export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stockTakones);
    }, 2000);
  });
}

export function getSingleItemFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stockTakones[4]);
    }, 2000);
  });
}
