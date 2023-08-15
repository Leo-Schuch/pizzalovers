type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Siciliana",
      desc: "Feita com pepperoni apimentado, jalapeño e queijo. Prove essa delícia!",
      img: "/temporary/p1.jpeg",
      price: 79.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Bacon Deluxe",
      desc: "Feita com tiras de bacon, molho barbecue, cebolas roxas e queijo fresco.",
      img: "/temporary/p2.png",
      price: 79.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "Clássica Italiana com molho de tomate, queijo mussarela fresco, cogumelos, extratos de especiarias, ervas aromáticas e salame italiano",
      img: "/temporary/p3.png",
      price: 74.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Spicy Arrabbiata",
      desc: "Instigue seu paladar com esta criação. Combinando penne com molho de tomate picante infundido com alho, flocos de pimenta vermelha e manjericão fresco.",
      img: "/temporary/p4.jpeg",
      price: 76.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Jalapeño Fiesta",
      desc: "Acenda seu paladar com um chute de fogo! Este hambúrguer apresenta um suculento hambúrguer de carne, jalapeños ardentes, queijo pepper jack e um picante molho de maionese chipotle e todos os ingredientes clássicos em um pão torrado.",
      img: "/temporary/p5.png",
      price: 39.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Margherita Mágica",
      desc: "Um favorito atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e um fiozinho de glacê balsâmico.",
      img: "/temporary/p6.png",
      price: 74.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Garlic Parmesan Linguine",
      desc: "Uma delícia para os amantes de alho, com linguine envolto em molho cremoso de parmesão, infundido com alho e guarnecido com salsa picada, pimentão e tomate cereja.",
      img: "/temporary/p7.png",
      price: 48.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Delícia mediterrânea",
      desc: "Embarque em uma jornada culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano",
      img: "/temporary/p8.png",
      price: 72.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Teriyaki Havaiana",
      desc: "Experimente o sabor dos trópicos com um suculento hambúrguer de carne coberto com molho teriyaki picante, coberto com abacaxi grelhado, bacon crocante e alface fresca e todos os acompanhamentos clássicos em um pão torrado.",
      img: "/temporary/p9.png",
      price: 49.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Siciliana",
      desc: "Feita com pepperoni apimentado, jalapeño e queijo. Prove essa delícia!",
      img: "/temporary/p1.png",
      price: 74.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Delícia mediterrânea",
      desc: "Embarque em uma jornada culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano",
      img: "/temporary/p8.png",
      price: 72.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "Clássica Italiana com molho de tomate, queijo mussarela fresco, cogumelos, extratos de especiarias, ervas aromáticas e salame italiano",
      img: "/temporary/p3.png",
      price: 76.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante.",
      img: "/temporary/p10.png",
      price: 78.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Vegana Suprema",
      desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e um montão de maionese picante",
      img: "/temporary/p11.png",
      price: 74.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Fantasia de quatro queijos",
      desc: "Experimente a pura felicidade de queijo com uma mistura derretida de queijos mussarela, cheddar, provolone e parmesão, criando uma experiência de pizza rica e indulgente.",
      img: "/temporary/p12.png",
      price: 72.9,
      options: [
        {
          title: "Pequena",
          additionalPrice: 0,
        },
        {
          title: "Media",
          additionalPrice: 4,
        },
        {
          title: "Grande",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Siciliana",
    desc: "Feita com pepperoni apimentado, jalapeño e queijo. Prove essa delícia!",
    img: "/temporary/p1.png",
    price: 74.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Media",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Pastas italianas",
      desc: "Saboreie o sabor da perfeição com nosso requintado menu de massas artesanais italianas.criando uma experiência de pizza rica e indulgente.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Hambúrgueres suculentos",
      desc: "Burguer Dos deuses: rissóis suculentos, sabores arrojados e coberturas gourmet em abundância.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Pizzas com queijo",
      desc: "Pizza Do paraíso: fatias irresistíveis, coberturas de dar água na boca e queijo perfeito.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];
  