import image1 from "../img/arena-cobra-ultra-swipe.webp";
import image2 from "../img/arena-the-one-mirror.webp";
import image3 from "../img/gorra-natacion-arena.webp";
import image4 from "../img/gorra-natación-speedo-fastskin.webp";
import image5 from "../img/malla-competición-arena-powerskin-hombre.webp";
import image6 from "../img/malla-competición-arena-powerskin-mujer.webp";
import image7 from "../img/aletas-speedo-fury-train.webp";
import image8 from "../img/aletas-arena-powerfin.webp";

const products = [
    {
      id: 1,
      name: "Antiparras Arena Cobra Ultra Swipe Mirror",
      stock: 14,
      cost: 16669,
      description: "Las antiparras arena Cobra Ultra Swipe Mirror producidas en Japón son la perfección hidrodinámica. Con lentes de perfil bajo espejados, molduras de alta tecnología y una silueta afilada, las nuevas Cobra Ultra Swipe Mirror minimizan la resistencia contra el agua con un diseño ultra elegante y super hermético; son ideales para nadadores de nivel intermedio y expertos. No solo vas a nadar mas rápido, sino que además vas a contar con una visión ampliada hacia los laterales gracias a sus lentes curvos que permiten expandir el campo visual.",
      image: [
        image1
      ],
      sales: 8,
      categoryId: 101,
      brandId: 1001,
      packingId: null,
      category: {
        name: "antiparras",
        id: 101
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Antiparras Arena The One Mirror",
      stock: 320,
      cost: 6499,
      description: "Arena The One Mirror ha sido diseñada para nadadores fitness que disfrutan de largas sesiones de pileta para mantenerse en forma y su diseño está inspirado en la linea de antiparras Powerskin de competición con un estilo atlético y deportivo. Arena The One Mirror cuentan con tratamiento anti-empañado en sus lentes espejadas optimizando así una mejor visión delantera y periférica.",
      image: [
        image2
      ],
      sales: 143,
      categoryId: 101,
      brandId: 1001,
      packingId: null,
      category: {
        name: "antiparras",
        id: 101
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: [
        {
          "comment": "Muy cómodas y resistentes",
          "rating": "4"
        }
      ]
    },
    {
      id: 3,
      name: "Gorra De Natación Arena Classic Silicone",
      stock: 165,
      cost: 1799,
      description: "Las gorras de natación de silicona arena Classic son un clásico que no pasa de moda. Gracias a la silicona, proporciona mayor hidrodinamia y además protegen tu cabello contra el daño del agua clorada. Tip: Extendé la vida útil de tu gorra de silicona enjuagándola en agua dulce después de cada uso y secándola al aire libre a la sombra.",
      image: [
        image3
      ],
      sales: 52,
      categoryId: 102,
      brandId: 1001,
      packingId: null,
      category: {
        name: "Gorras",
        id: 102
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Gorra natación Speedo FastSkin",
      stock: 40,
      cost: 4799,
      description: "Gorra con tecnología IQFit. Diseñada utilizando un sistema de escaneo global de formas de cabezas, lo que crea un óptimo confort y una excelente performance hidrodinámica. De fácil utilización y calce. Reduce la resistencia al agua entre un 3,4% y un 6%.",
      image: [
        image4
      ],
      sales: 27,
      categoryId: 102,
      brandId: 1002,
      packingId: null,
      category: {
        name: "Gorras",
        id: 102
      },
      brand: {
        id: 1002,
        name: "Speedo"
      },
      reviews: []
    },
    {
      id: 5,
      name: "Malla Traje Competición Arena Powerskin Carbon Glide Jammer",
      stock: 15,
      cost: 94999,
      description: "Cuando estás totalmente concentrado en la competición, siente como fluyes con nuestro bañador de última tecnología para hombre. Nuestro Powerskin Carbon Glide Jammer está creado para los nadadores que sienten la necesidad de la velocidad en el traje con el que compiten. Hecho de una tela hidrodinámica ultra ligera, este bañador realmente reduce la resistencia y turbulencias. La combinación de tela de carbono especial y el vendaje interior comprimen y activan inmediatamente los músculos. Con un corte optimizado para garantizar mayor energía corporal y una natación sin restricciones.",
      image: [
        image5
      ],
      sales: 2,
      categoryId: 103,
      brandId: 1001,
      packingId: null,
      category: {
        name: "Mallas",
        id: 103
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: []
    },
    {
      id: 6,
      name: "Malla Arena Competicion Powerskin Carbon Glide Mujer",
      stock: 20,
      cost: 108499,
      description: "Arena Powerskin Carbon Glide es ideal para quienes buscan mayor velocidad en el agua gracias al tejido hidrodinamico Hydroglide ultra liviano, este traje de competición realmente reduce la resistencia y las turbulencias en el agua",
      image: [
        image6
      ],
      sales: 3,
      categoryId: 103,
      brandId: 1001,
      packingId: null,
      category: {
        name: "Mallas",
        id: 103
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: []
    },
    {
      id: 7,
      name: "Aletas Patas De Rana Arena Powerfin Pro",
      stock: 89,
      cost: 17999,
      description: "Estas son las aletas que todos los nadadores profesionales estaban esperando. Su diseño innovador presenta una superficie inclinada y ranuras hidrodinámicas en la parte superior para permitirle nadar con una patada más rápida y un mejor control. El talón abierto asegura la mejor flexibilidad posible del tobillo, lo que permite una noción hacia arriba más rápida y una patada de pierna hacia abajo más potente.",
      image: [
        image7
      ],
      sales: 13,
      categoryId: 104,
      brandId: 1001,
      packingId: null,
      category: {
        name: "Aletas",
        id: 104
      },
      brand: {
        id: 1001,
        name: "Arena"
      },
      reviews: []
    },
    {
      id: 8,
      name: "Patas De Rana Speedo Fury Train Adulto Cortas",
      stock: 33,
      cost: 22999,
      description: "Las aletas de entrenamiento crean una mayor resistencia en el agua, lo que ayuda a mejorar la fuerza y la resistencia. Los rieles dobles que se encuentran al costado de la aleta le dan propulsión en el ritmo ascendente y descendente de la patada, lo que le deja libre para incurrir en la técnica correcta.",
      image: [
        image8
      ],
      sales: 13,
      categoryId: 104,
      brandId: 1002,
      packingId: null,
      category: {
        name: "Aletas",
        id: 104
      },
      brand: {
        id: 1002,
        name: "Speedo"
      },
      reviews: []
    }
  ];

  export default products;

