/* DOCUMENTO CON LOS PRODUCTOS A CATALOGAR*/
const stockTakones = [
  {
      id: 1,
      title: "CATERPILLER",
      model: "ROCKET",
      img: "./img/borBerlina.jpg",
      stock: "20",
      price: "$40.000" 
  },
  {
      id: 2,
      title: "TIMBERLAND",
      model: "FEDEX",
      img: "./img/borcegoBlanco.jpg",
      stock: "14",
      price: "$30.000" 
  },
  {
      id: 3,
      title: "HUSH PUPPIE",
      model: "SALMOS",
      img: "./img/borChelseaHombre.jpg",
      stock: "30",
      price: "$33.000" 
  },
  {
      id: 4,
      title: "CATERPILLER",
      model: "POXITT",
      img: "./img/borColoradoHombre.jpg",
      stock: "11",
      price: "52.000" 
  },
  {
      id: 5,
      title: "TIMBERLAND",
      model: "LETTIE",
      img: "./img/borDina.jpg",
      stock: "7",
      price:"$40.000"  
  },
  {
      id: 6,
      title: "HUSH PUPPIE",
      model: "ZYAN",
      img: "./img/borFounderHombre.jpg",
      stock: "2",
      price: "$36.000" 
  },
  {
      id: 7,
      title: "CATERPILLER",
      model: "ROXANNE",
      img: "./img/borKeltonHombre.jpg",
      stock: "8",
      price: "45.000" 
  },
  {
      id: 8,
      title: "TIMBERLAND",
      model: "KILLER",
      img: "./img/borMolly.jpg",
      stock: "13",
      price: "$30.000" 
  },
  {
      id: 9,
      title: "HUSH PUPPIE",
      model: "GREYNN",
      img: "./img/borSegreHombre.jpg",
      stock: "15",
      price: "40.000" 
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
