

const MENU = [
  {
    title: "Os mais vendidos",
    data: [
      {
        id: "1",
        title: "Cimento Tupi CPII",
        price: 50.0,
        description:
          "",
        cover: "assets/products/cover/1.png",
        thumbnail: "assets/products/thumbnail/1.png",
        ingredients: [],
      },
      {
        id: "2",
        title: "Areia média (metro)",
        price: 200.0,
        description:
          "",
        cover: "assets/products/cover/1.png",
        thumbnail: "assets/products/thumbnail/1.png",
        ingredients: [],
      },
    ],
  },
  {
    title: "Blocos e tijolos",
    data: [
      {
        id: "3",
        title: "Tijolo furado 14x19x29cm",
        price: 1.90,
        description:
          "Bloco Cerâmico Vedação 14x19x29cm Braunas",
        cover: "assets/products/cover/2.png",
        thumbnail: "assets/products/thumbnail/2.png",
        ingredients: [],
      },
      {
        id: "4",
        title: "Bloco concreto 19x14x39cm",
        price: 5.00,
        description:
          "Bloco de Concreto Estrutural Fundo Fechado 19x14x39cm Blojaf",
        cover: "assets/products/cover/3.png",
        thumbnail: "assets/products/thumbnail/3.png",
        ingredients: [],
      },
      
    ],
  },
  {
    title: "Telhas",
    data: [
      {
        id: "5",
        title: "Telha Cerâmica 26x43,5cm",
        price: 3.50,
        description:
          "Telha Cerâmica 26x43,5cm Americana Resinada Vermelha Artplan",
        cover: "assets/products/cover/5.jpg",
        thumbnail: "assets/products/thumbnail/5.png",
        ingredients: [],
      },
      {
        id: "6",
        title: "Telha de PVC Colonial Cerâmica 2,30mx86cm",
        price: 150,
        description:
          "Telha de PVC Colonial Cerâmica 2,30mx86cm Permatti",
        cover: "assets/products/cover/5.png",
        thumbnail: "assets/products/thumbnail/5.png",
        ingredients: [],
      },
    ],
  },
  {
    title: "Caixas d'água",
    data: [
      {
        id: "7",
        title: "Caixa d'água Polietileno 1.000L Azul Fortlev",
        price: 380,
        thumbnail: "assets/products/thumbnail/7.png",
        cover: "assets/products/cover/7.png",
        description:
          "Caixa d'água Polietileno 1.000L Azul Fortlev",
        ingredients: [],
      },
      {
        id: "8",
        title: "Caixa d'água Polietileno 500L Azul Fortlev",
        price: 220,
        thumbnail: "assets/products/thumbnail/7.png",
        cover: "assets/products/cover/7.png",
        description:
          "Caixa d'água Polietileno 500L Azul Fortlev",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

export type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES }
