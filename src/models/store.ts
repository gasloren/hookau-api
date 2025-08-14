
// --

export interface Data {
  country: "AR",
  city: "8370",
  address: "Av. San Martin 705",
  brand: "By the Way - Patagonian Burger",
  genre: "FAST-FOOD",
  logourl: "https://res.cloudinary.com/dxz0lfdma/image/upload/v1748209888/stores-logos/cxtuerrsqpf3mzlicc6h.jpg",
  genres: "01",
  index: 2,
  others: ""
}

export interface Store {
  "_id": "uWkthbL5P8RAhzSEx",
  "ownerId": "zP8gpA4KDrhfZ4oj7",
  "marketFee": 5,
  "chargeFrom": "2020-10-01",
  "charges": {
    "external": 1500,
    "takeaway": 5,
    "delivery": 5
  },
  "status": {
    "active": false,
    "message": "",
    "minimun": "",
    "unseen": [
      "CJYw7xMGTGyKdfNjn-3-sin aros de cebolla fritos",
      "PT2daGsMGeQXbAYCz",
      "rwkFbEghFrjZMGJBX",
      "DznT2j6tPmwz3PTQi",
      "BfBnQEBZRTFYvrCBk",
      "omt2wdFjyKNLheRGi",
      "M6yqaKpMZMMozDkzu",
      "Ja4YyxPkdH9avTNdh"
    ],
    "payments": "GOOD",
    "deliveryWarning": "",
    "operative": "",
    "oauth": "enabled",
    "delay": "20"
  },
  "publication": "FULL",
  "createdAt": {
    "$date": "2020-05-09T02:08:59.807Z"
  },
  "data": Data,
  "info": {
    "promoted": "",
    "products": "Burgers, sandwichs, Snacks",
    "schedule": "Lunes a sabados de 11:30 a 15:00 hs y de 18:00 a 21:30 hs",
    "modality": "Delivery o take away",
    "takeaway": {
      "enabled": true,
      "payment": {
        "ef": true,
        "tj": true,
        "mp": true,
        "ol": true,
        "ol_aproved": true
      },
      "discount": {
        "ef": 0,
        "tj": 0,
        "mp": 0,
        "ol": 0
      }
    },
    "delivery": {
      "granted": true,
      "enabled": true,
      "payment": {
        "ef": true,
        "tj": false,
        "mp": true,
        "ol": true,
        "ol_aproved": true
      },
      "discount": {
        "ef": 10,
        "tj": 0,
        "mp": 0,
        "ol": 0
      }
    },
    "keywords": "hamburguesas, hamburgueserias, fast food, comidas rapidas"
  },
  "menu": {
    "categories": [
      {
        "_id": "wJCBC4AWZrq2Twatw",
        "name": "BURGERS"
      },
      {
        "_id": "CWpwsW2uNfxcZQ7gF",
        "name": "BURRITOS"
      },
      {
        "_id": "kSY3zBaJydP5YEjff",
        "name": "SANDWICHES"
      },
      {
        "_id": "xmmn9QvfdcxLGDdzs",
        "name": "SNACKS"
      },
      {
        "_id": "wERfjMKqmExhZ52AG",
        "name": "BEBIDAS"
      }
    ],
    "products": {
      "wJCBC4AWZrq2Twatw": [
        {
          "_id": "kySF7hHjX4eZac5ca",
          "title": "RIVERA",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591150609/hookau/stores-products/rqmwq5ggsueu9kkeheqw.jpg",
          "detail": "Medallon de carne vacuna-lechuga-tomate-cheddar- jamon cocido-huevo ( incluye papas fritas )",
          "options": "sin lechuga, sin tomate, sin cheddar, sin jamon, sin huevo",
          "price": 12300,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar unos o mas ingredientes."
        },
        {
          "_id": "MCji5xXwQ8YMQFXCK",
          "title": "BIG WAY",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716328967/stores-products/ygntpidhjlzvj93pfjsp.jpg",
          "detail": "Doble medallon de carne vacuna-doble cheddar-doble bacon-pepinillos-salsa by the way\n( incluye papas fritas )",
          "options": "Sin cheddar, sin bacon, sin pepinillos, sin salsa by the way",
          "price": 16300,
          "minimun": 0,
          "maximun": 4,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "CJYw7xMGTGyKdfNjn",
          "title": "JESSE JAMES",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329082/stores-products/vyg7s4xjverong4lq4ck.jpg",
          "detail": "Medallon de cerdo-lechuga-cheddar-bacon-aros de cebolla fritos-salsa BBQ \n( incluye papas fritas )",
          "options": "Sin Lechuga, sin cheddar, sin bacon, sin aros de cebolla fritos, sin BBQ, con medallon vacuno",
          "price": 13700,
          "minimun": 0,
          "maximun": 6,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "fLdXmNSQYs6xFrmcR",
          "title": "CORSARIO",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329000/stores-products/bfjffikipdvrz3hxqvpq.jpg",
          "detail": "Medallón de carne vacuna-portobellos-rúcula-alioli de hongos-queso a la cerveza negra- (incluye papas fritas)",
          "options": "Sin queso, sin rucula, sin portobellos",
          "price": 13700,
          "minimun": 0,
          "maximun": 3,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "uskPXG9sfPmoS3TC4",
          "title": "LACAR",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329046/stores-products/svm9erwcs8aywbf3qtsp.jpg",
          "detail": "Medallon de carne vacuna-cebolla caramelizada-lechuga -queso azul-bacon\n( incluye papas fritas )",
          "options": "Sin cebolla, sin lechuga, sin queso azul, con queso gouda, sin bacon",
          "price": 13100,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "b2Q4rXtFeMhq6hpis",
          "title": "BONAVENA",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151019/hookau/stores-products/fankhl0pgiuf1oliwwnh.jpg",
          "detail": "Medallon de carne vacuna-Provolone grillado-Lechuga-Morron asado-Huevo-Chimichurri\n( incluye papas fritas )",
          "options": "Sin provolone, con cheddar, sin lechuga, sin morron, sin huevo, sin chimichurri",
          "price": 13700,
          "minimun": 0,
          "maximun": 6,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "NWY6PG5sHbx3LehQr",
          "title": "GIPSY KING",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329067/stores-products/wowfj70o5ux7sngiqz5k.jpg",
          "detail": "Medallon de pollo crispy, lechuga,cheddar fundido y salsa by the way (incluye papas fritas)",
          "options": "sin lechuga, sin cheddar, sin salsa by the way",
          "price": 13700,
          "minimun": 0,
          "maximun": 3,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "BMfCrvyPNpzSjaQyH",
          "title": "CHEWEL",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151182/hookau/stores-products/zcq0ceuuf9enap402uvi.jpg",
          "detail": "Medallon de ciervo-Merken Mayo ahumada-Rucula-Queso fundido en hierbas-tomates confitados ( incluye papas fritas )",
          "options": "Sin Merken mayo, sin queso, sin tomates confitados, sin rucula",
          "price": 17100,
          "minimun": 0,
          "maximun": 4,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "FwdW9BxbiQJ3iwtSi",
          "title": "GREEN WAY",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151749/hookau/stores-products/k9fkrl09rrob4mpdrku4.jpg",
          "detail": "Medallon 100% vegetal -Tomates cherry-rucula -Zanahoria vegan mayo-pan vegano\n( incluye papas fritas )",
          "options": "Sin tomates cherry, sin rucula, sin zanahoria mayo",
          "price": 13700,
          "minimun": 0,
          "maximun": 3,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "QsWsoLHyG3eyYsjLF",
          "title": "RANCHERA",
          "detail": "Medallón de cordero - cebolla crispy - rúcula - queso ahumado - alioli de olivas (incluye papas fritas)",
          "options": "Sin rúcula , sin cebolla crispy, sin alioli de olivas, sin queso ahumado",
          "minimun": 0,
          "maximun": 4,
          "counter": 0,
          "comment": "Podes quitar uno o mas ingredientes.",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329237/stores-products/wq1uclmqpjbi7dnnjrvh.jpg",
          "price": 17100,
          "denyNotes": false
        },
        {
          "_id": "F4tBY5YCS42h5dodJ",
          "title": "CHESSEBURGER",
          "detail": "Hamburguesa clasica con queso cheddar (incluye papas fritas)",
          "options": "Sin queso",
          "minimun": 0,
          "maximun": 1,
          "counter": 0,
          "comment": "Podes quitar el ingrediente.",
          "image": "",
          "price": 10200,
          "denyNotes": false
        },
        {
          "_id": "nzrT5rDPxeYP8DmWr",
          "title": "MALIBU ",
          "detail": "Medallon de carne vacuna - Lechuga - Tomate - cebolla fresca - palta - salsa cesar (incluye papas fritas)",
          "options": "Sin lechuga, sin tomate, sin cebolla, sin palta, sin salsa cesar ",
          "minimun": 0,
          "maximun": 5,
          "counter": 0,
          "comment": "Podes quitar uno o mas ingredientes.",
          "image": "",
          "price": 14200,
          "denyNotes": false
        }
      ],
      "CWpwsW2uNfxcZQ7gF": [
        {
          "_id": "62mrzPx8sWgJEY8tS",
          "title": "POLLO MARINADO",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151806/hookau/stores-products/ba4veoommvjxd7n2g0nt.jpg",
          "detail": "Con pure de frijoles negros, arroz yamani, choclo, mix de quesos, palta, vegetales salteados- (incluye papas fritas)",
          "options": "Sin pure de frijoles, sin arroz yamani, sin choclo, sin mix de quesos, sin palta",
          "price": 12600,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "37PKNvKu6w2GGCvrv",
          "title": "CERDO GLASEADO",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151819/hookau/stores-products/p2qoqsi8rnc9x0utc2rl.jpg",
          "detail": "Con pure de frijoles negros, arroz yamani, choclo,mix de quesos, palta, vegetales salteados-(incluye papas fritas)-",
          "options": "Sin pure de frijoles, sin arroz yamani, sin choclo, sin mix de quesos, sin palta",
          "price": 12600,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "9y6mxynpW4cffNDQe",
          "title": "SOJA TEXTURIZADA",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151831/hookau/stores-products/qxkuqkp0dobazfz6dmld.jpg",
          "detail": "Con pure de frijoles negros, arroz yamani, choclo,mix de quesos, palta, vegetales salteados-(incluye papas fritas)",
          "options": "Sin pure de frijoles, sin arroz yamani, sin choclo, sin mix de quesos, sin palta",
          "price": 12600,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        }
      ],
      "kSY3zBaJydP5YEjff": [
        {
          "_id": "Diu9ohyHZe53mRsZw",
          "title": "TUNA KUNA",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152411/hookau/stores-products/nmyy2ufzotfmepevyrru.jpg",
          "detail": "Suave baguette de campo-Atun en mayo y especias-Rucula-Tomate-Palta-Queso de hierbas ( incluye papas fritas )",
          "options": "Sin rucula, sin tomate, sin palta, sin queso",
          "price": 13700,
          "minimun": 0,
          "maximun": 4,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "jcQcpNjKYfmpfnjsY",
          "title": "PULLED PORK",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329119/stores-products/mmkmhlfvwzxltxcz2cva.jpg",
          "detail": "Pan By The Way-Bondiola desmechada a coccion lenta en salsa BBQ-coleslaw salad \n( incluye papas fritas )",
          "options": "Sin coleslaw",
          "price": 14500,
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "comment": "Podes quitar el ingrediente."
        },
        {
          "_id": "FNtXoNnEfKfr5MpwP",
          "title": "CHICKEN FIT SANDWICH",
          "image": "",
          "detail": "pande figazza integral, pechuga grillada,queso portsalut, lechuga, tomate y palta",
          "options": "sin palta, sin lechuga, sin tomate, sin queso",
          "price": 13700,
          "isPromo": false,
          "minimun": 0,
          "maximun": 4,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "zutZFx2kb7hP56YLc",
          "title": "NAPOLES",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329139/stores-products/djv6cefisk2zvnh1trtw.jpg",
          "detail": "Baguette de campo, Milanesa napolitana(mozzarella, salsa de  tomate italiana,albahaca) , lechuga, cherries, (incluye papas fritas)",
          "options": "sin albahaca, sin tomate, sin muzza, sin salsa, sin lechuga",
          "price": 14200,
          "isPromo": false,
          "minimun": 0,
          "maximun": 5,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "y2bZwWi7GGSvjHxDT",
          "title": "CLUB SANDWICH",
          "detail": "Triple pan tostado, jamon cocido, palta, queso tybo, lechuga, tomate, pollo, mayonesa.",
          "options": "Jamon, Palta, Queso, Lechuga, Tomate, Pollo, Mayonesa,",
          "minimun": 0,
          "maximun": 0,
          "counter": 0,
          "comment": "",
          "image": "",
          "price": 12200,
          "denyNotes": true
        }
      ],
      "xmmn9QvfdcxLGDdzs": [
        {
          "_id": "7BHn9aQfHwXHcQoE5",
          "title": "PAPAS CON CHEDDAR Y BACON",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152655/hookau/stores-products/idtr3immopupa10wvz1h.jpg",
          "detail": "Papas fritas bañadas en cheddar fundido con bacon y ciboullette",
          "options": "Sin bacon, sin ciboullette",
          "price": 10600,
          "minimun": 1,
          "maximun": 2,
          "counter": false,
          "comment": "Podes quitar uno o mas ingredientes."
        },
        {
          "_id": "c9ioDsDAWdQQfP9HT",
          "title": "PAPAS FRITAS",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152633/hookau/stores-products/tpf9d8s1z2aw1lqjt9wc.jpg",
          "detail": "Porcion",
          "options": "",
          "price": 8400
        },
        {
          "_id": "fNifJswbquK9rqCT4",
          "title": "AROS DE CEBOLLA",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152994/hookau/stores-products/b6znwgghxo2bdlonogbn.jpg",
          "detail": "con salsa by the way ",
          "options": "",
          "price": 11000
        },
        {
          "_id": "EMXPY6YqqZGpaHMeH",
          "title": "NACHOS",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153016/hookau/stores-products/zlcau9ra1oae7q3bb0sx.jpg",
          "detail": "con cheddar fundido ",
          "options": "",
          "price": 8600,
          "minimun": 0,
          "maximun": 0,
          "counter": false,
          "comment": ""
        },
        {
          "_id": "pvhc8b5Hz6sdcA8Dm",
          "title": "NUGGETS X 6 UNIDADES CON FRITAS",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153035/hookau/stores-products/aigcbceftdkjxkp56u7f.jpg",
          "detail": "",
          "options": "",
          "price": 9100
        },
        {
          "_id": "Skqv3yCLdBggNJTFg",
          "title": "RABAS",
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153056/hookau/stores-products/deu6mgp9wix5jes1snrz.jpg",
          "detail": "",
          "options": "",
          "price": 12500
        },
        {
          "_id": "rwkFbEghFrjZMGJBX",
          "title": "MUZZARELLA STICKS",
          "image": "",
          "detail": "bastoncitos de muzarella con alioli mayo ",
          "options": "",
          "price": 10700
        }
      ],
      "wERfjMKqmExhZ52AG": [
        {
          "_id": "CdCosRk9ws2nMbmRA",
          "title": "GASEOSAS X 500 CC.",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1665416143/stores-products/groc02b6zm6i9xydxb4n.jpg",
          "detail": "Línea Coca-cola ",
          "options": "Coca, coca zero, fanta, scheppes pomelo, sprite, ",
          "price": 3500,
          "minimun": 1,
          "maximun": 1,
          "counter": false,
          "comment": ""
        },
        {
          "_id": "56ErPnmYojWKnwfWG",
          "title": "AGUAS  X 500 CC.",
          "detail": "Pomelo, pera, naranja, manzana, agua s/gas, agua c/gas ",
          "options": "",
          "minimun": 0,
          "maximun": 0,
          "counter": 0,
          "comment": "",
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1665416207/stores-products/egegeu4khpagw3y6kkcw.jpg",
          "price": 3500,
          "denyNotes": false,
          "short": "LINEA AQUARIUS "
        },
        {
          "_id": "apKvbPTxSvoKJeXFY",
          "title": "CERVEZAS LATA X 473CC",
          "detail": "Consultar por variedades.",
          "options": "",
          "minimun": 0,
          "maximun": 0,
          "counter": 0,
          "comment": "",
          "image": "",
          "price": 5000,
          "denyNotes": false
        }
      ],
      "FvXznTgryjrFRnknK": [],
      "hQNHciJnH6pqvDqAD": [],
      "k73LSYZqB4YAsXpQc": [],
      "qZwK7z6q8WowvJocv": []
    }
  },
  "config": {
    "timeoff": "23:30",
    "emails": ""
  },
  "phoneCharge": 1500,
  "menue": {
    "promoted": 0,
    "categories": [
      {
        "id": "wJCBC4AWZrq2Twatw",
        "name": "BURGERS"
      },
      {
        "id": "CWpwsW2uNfxcZQ7gF",
        "name": "BURRITOS"
      },
      {
        "id": "kSY3zBaJydP5YEjff",
        "name": "SANDWICHES"
      },
      {
        "id": "xmmn9QvfdcxLGDdzs",
        "name": "SNACKS"
      },
      {
        "id": "wERfjMKqmExhZ52AG",
        "name": "BEBIDAS"
      }
    ],
    "products": {
      "wJCBC4AWZrq2Twatw": [
        {
          "id": "kySF7hHjX4eZac5ca",
          "name": "RIVERA",
          "code": "",
          "info": "Medallón de carne vacuna, lechuga, tomate, cheddar, jamón cocido y huevo. Incluye papas fritas.",
          "price": 14200,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591150609/hookau/stores-products/rqmwq5ggsueu9kkeheqw.jpg",
          "stacc": false,
          "fixed": 0,
          "editing": false
        },
        {
          "id": "MCji5xXwQ8YMQFXCK",
          "name": "BIG WAY",
          "code": "",
          "info": "Doble medallón de carne vacuna, doble cheddar, doble bacon, pepinillos, salsa by the way. Incluye papas fritas.",
          "price": 18500,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716328967/stores-products/ygntpidhjlzvj93pfjsp.jpg",
          "stacc": false
        },
        {
          "id": "CJYw7xMGTGyKdfNjn",
          "name": "JESSE JAMES",
          "code": "",
          "info": "Medallón de cerdo, lechuga, cheddar, bacon, aros de cebolla fritos y salsa BBQ. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329082/stores-products/vyg7s4xjverong4lq4ck.jpg",
          "stacc": false
        },
        {
          "id": "fLdXmNSQYs6xFrmcR",
          "name": "CORSARIO",
          "code": "",
          "info": "Medallón de carne vacuna, portobellos, rúcula, alioli de hongos y queso a la cerveza negra. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329000/stores-products/bfjffikipdvrz3hxqvpq.jpg",
          "stacc": false,
          "editing": false
        },
        {
          "id": "uskPXG9sfPmoS3TC4",
          "name": "LACAR",
          "code": "",
          "info": "Medallón de carne vacuna, cebolla caramelizada, lechuga, queso azul y bacon. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329046/stores-products/svm9erwcs8aywbf3qtsp.jpg",
          "stacc": false,
          "editing": false
        },
        {
          "id": "b2Q4rXtFeMhq6hpis",
          "name": "BONAVENA",
          "code": "",
          "info": "Medallón de carne vacuna, provolone grillado, lechuga, morrón asado, huevo y chimichurri. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151019/hookau/stores-products/fankhl0pgiuf1oliwwnh.jpg",
          "stacc": false,
          "editing": false
        },
        {
          "id": "NWY6PG5sHbx3LehQr",
          "name": "GIPSY KING",
          "code": "",
          "info": "Medallón de pollo crispy, lechuga, cheddar fundido y salsa by the way. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329067/stores-products/wowfj70o5ux7sngiqz5k.jpg",
          "stacc": false
        },
        {
          "id": "BMfCrvyPNpzSjaQyH",
          "name": "CHEWEL",
          "code": "",
          "info": "Medallón de ciervo, merken, mayo ahumada, rúcula, queso fundido en hierbas y tomates confitados. Incluye papas fritas.",
          "price": 19500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151182/hookau/stores-products/zcq0ceuuf9enap402uvi.jpg",
          "stacc": false
        },
        {
          "id": "FwdW9BxbiQJ3iwtSi",
          "name": "GREEN WAY",
          "code": "",
          "info": "Medallón 100% vegetal, tomates cherry, rúcula, zanahoria vegan mayo y pan vegano. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151749/hookau/stores-products/k9fkrl09rrob4mpdrku4.jpg",
          "stacc": false
        },
        {
          "id": "QsWsoLHyG3eyYsjLF",
          "name": "RANCHERA",
          "code": "",
          "info": "Medallón de cordero, cebolla crispy, rúcula, queso ahumado y alioli de olivas. Incluye papas fritas.",
          "price": 19500,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329237/stores-products/wq1uclmqpjbi7dnnjrvh.jpg",
          "stacc": false
        },
        {
          "id": "F4tBY5YCS42h5dodJ",
          "name": "CHEESEBURGER",
          "code": "",
          "info": "Hamburguesa clásica con queso cheddar. Incluye papas fritas.",
          "price": 11800,
          "promo": 0,
          "image": "",
          "stacc": false
        },
        {
          "id": "nzrT5rDPxeYP8DmWr",
          "name": "MALIBU",
          "code": "",
          "info": "Medallón de carne vacuna, lechuga, tomate, cebolla fresca, palta y salsa cesar. Incluye papas fritas.",
          "price": 16500,
          "promo": 0,
          "image": "",
          "stacc": false,
          "editing": false
        }
      ],
      "CWpwsW2uNfxcZQ7gF": [
        {
          "id": "62mrzPx8sWgJEY8tS",
          "name": "POLLO MARINADO",
          "code": "",
          "info": "Con puré de frijoles negros, arroz yamani, choclo, mix de quesos, palta y vegetales salteados. Incluye papas fritas.",
          "price": 14500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151806/hookau/stores-products/ba4veoommvjxd7n2g0nt.jpg",
          "stacc": false
        },
        {
          "id": "37PKNvKu6w2GGCvrv",
          "name": "CERDO GLASEADO",
          "code": "",
          "info": "Con pure de frijoles negros, arroz yamani, choclo,mix de quesos, palta, vegetales salteados-(incluye papas fritas)-",
          "price": 14500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151819/hookau/stores-products/p2qoqsi8rnc9x0utc2rl.jpg",
          "stacc": false
        },
        {
          "id": "9y6mxynpW4cffNDQe",
          "name": "SOJA TEXTURIZADA",
          "code": "",
          "info": "Con puré de frijoles negros, arroz yamani, choclo, mix de quesos, palta y vegetales salteados. Incluye papas fritas.",
          "price": 14500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591151831/hookau/stores-products/qxkuqkp0dobazfz6dmld.jpg",
          "stacc": false
        }
      ],
      "kSY3zBaJydP5YEjff": [
        {
          "id": "Diu9ohyHZe53mRsZw",
          "name": "TUNA KUNA",
          "code": "",
          "info": "Suave baguette de campo, atún en mayo y especias, rúcula, tomate, palta y queso de hierbas. Incluye papas fritas.",
          "price": 15800,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152411/hookau/stores-products/nmyy2ufzotfmepevyrru.jpg",
          "stacc": false
        },
        {
          "id": "FNtXoNnEfKfr5MpwP",
          "name": "CHICKEN FIT SANDWICH",
          "code": "",
          "info": "Pan de figazza integral, pechuga grillada, queso portsalut, lechuga, tomate y palta.",
          "price": 15800,
          "promo": 0,
          "image": "",
          "stacc": false
        },
        {
          "id": "zutZFx2kb7hP56YLc",
          "name": "NAPOLES",
          "code": "",
          "info": "Baguette de campo, milanesa napolitana (mozzarella, salsa de  tomate italiana y albahaca), lechuga y cherrys. Incluye papas fritas.",
          "price": 16800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329139/stores-products/djv6cefisk2zvnh1trtw.jpg",
          "stacc": false
        },
        {
          "id": "y2bZwWi7GGSvjHxDT",
          "name": "CLUB SANDWICH",
          "code": "",
          "info": "Triple pan tostado, jamón cocido, palta, queso tybo, lechuga, tomate, pollo y mayonesa.",
          "price": 14000,
          "promo": 0,
          "image": "",
          "stacc": false
        },
        {
          "id": "jcQcpNjKYfmpfnjsY",
          "name": "PULLED PORK",
          "code": "",
          "info": "Pan By The Way, bondiola desmechada a cocción lenta en salsa BBQ y coleslaw salad. Incluye papas fritas.",
          "price": 16800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1716329119/stores-products/mmkmhlfvwzxltxcz2cva.jpg",
          "stacc": false
        }
      ],
      "xmmn9QvfdcxLGDdzs": [
        {
          "id": "7BHn9aQfHwXHcQoE5",
          "name": "PAPAS CON CHEDDAR Y BACON",
          "code": "",
          "info": "Papas fritas bañadas en cheddar fundido con bacon y ciboullette.",
          "price": 11600,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152655/hookau/stores-products/idtr3immopupa10wvz1h.jpg",
          "stacc": false
        },
        {
          "id": "c9ioDsDAWdQQfP9HT",
          "name": "PAPAS FRITAS",
          "code": "",
          "info": "",
          "price": 9200,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152633/hookau/stores-products/tpf9d8s1z2aw1lqjt9wc.jpg",
          "stacc": false
        },
        {
          "id": "fNifJswbquK9rqCT4",
          "name": "AROS DE CEBOLLA",
          "code": "",
          "info": "Con salsa by the way.",
          "price": 15000,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591152994/hookau/stores-products/b6znwgghxo2bdlonogbn.jpg",
          "stacc": false
        },
        {
          "id": "EMXPY6YqqZGpaHMeH",
          "name": "NACHOS",
          "code": "",
          "info": "Con cheddar fundido.",
          "price": 10500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153016/hookau/stores-products/zlcau9ra1oae7q3bb0sx.jpg",
          "stacc": false
        },
        {
          "id": "pvhc8b5Hz6sdcA8Dm",
          "name": "NUGGETS X 6 UNIDADES CON FRITAS",
          "code": "",
          "info": "",
          "price": 11000,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153035/hookau/stores-products/aigcbceftdkjxkp56u7f.jpg",
          "stacc": false
        },
        {
          "id": "Skqv3yCLdBggNJTFg",
          "name": "RABAS",
          "code": "",
          "info": "",
          "price": 15500,
          "promo": 0,
          "image": "https://res.cloudinary.com/diybygwql/image/upload/v1591153056/hookau/stores-products/deu6mgp9wix5jes1snrz.jpg",
          "stacc": false
        },
        {
          "id": "rwkFbEghFrjZMGJBX",
          "name": "MUZZARELLA STICKS",
          "code": "",
          "info": "Bastoncitos de muzzarella con alioli mayo.",
          "price": 12500,
          "promo": 0,
          "image": "",
          "stacc": false
        }
      ],
      "wERfjMKqmExhZ52AG": [
        {
          "id": "CdCosRk9ws2nMbmRA",
          "name": "GASEOSA X 500 CC.",
          "code": "",
          "info": "Línea Coca-cola.",
          "price": 3800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1665416143/stores-products/groc02b6zm6i9xydxb4n.jpg",
          "stacc": false
        },
        {
          "id": "56ErPnmYojWKnwfWG",
          "name": "AGUA SABORIZADA X 500 CC.",
          "code": "",
          "info": "Línea aquarius.",
          "price": 3800,
          "promo": 0,
          "image": "https://res.cloudinary.com/dxz0lfdma/image/upload/v1665416207/stores-products/egegeu4khpagw3y6kkcw.jpg",
          "stacc": false
        },
        {
          "id": "apKvbPTxSvoKJeXFY",
          "name": "LATA CERVEZA IMPERIAL",
          "code": "",
          "info": "",
          "price": 5000,
          "promo": 0,
          "image": "",
          "stacc": false
        },
        {
          "id": "PT2daGsMGeQXbAYCz",
          "name": "LATA CERVEZA HEINEKEN",
          "code": "",
          "info": "",
          "image": "",
          "price": 5000,
          "promo": 0,
          "stacc": false
        }
      ]
    },
    "pickers": {
      "kySF7hHjX4eZac5ca": [
        {
          "id": "DS6YQC99MCFW6zuHZ",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        },
        {
          "id": "WypwibSCJjZMSkfvM",
          "detail": "Si querés, agregale un medallón extra",
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "editing": true
        }
      ],
      "MCji5xXwQ8YMQFXCK": [
        {
          "id": "L68T8ehsotuAZwB9Y",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 4,
          "counter": false
        }
      ],
      "CJYw7xMGTGyKdfNjn": [
        {
          "id": "WHbdeyscDQ8K72Aov",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 6,
          "counter": false
        },
        {
          "id": "J5GrLhiRuZDy6R374",
          "detail": "Si querés, podés cambiar el medallón.",
          "minimun": 0,
          "maximun": 1,
          "counter": false
        }
      ],
      "fLdXmNSQYs6xFrmcR": [
        {
          "id": "smsgFoB6s8uftumx8",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 3,
          "counter": false
        },
        {
          "id": "vNmo7JzKZnHenzx94",
          "detail": "Si querés, agregale un medallón extra",
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "editing": true
        }
      ],
      "uskPXG9sfPmoS3TC4": [
        {
          "id": "YhHFGrWY88o672usp",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        },
        {
          "id": "yderGjCxMaN4cHfzk",
          "detail": "Si querés, agregale un medallón extra.",
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "editing": true
        }
      ],
      "b2Q4rXtFeMhq6hpis": [
        {
          "id": "ExsafxRH96gPaNweM",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        },
        {
          "id": "M9t99L55EG7XYXcNY",
          "detail": "Si querés, agregale un medallón extra.",
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "editing": true
        }
      ],
      "NWY6PG5sHbx3LehQr": [
        {
          "id": "ZxowuDAiGRHjvA8CQ",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 3,
          "counter": false
        }
      ],
      "BMfCrvyPNpzSjaQyH": [
        {
          "id": "h9beuDm4FSayWJ7S5",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 4,
          "counter": false
        }
      ],
      "FwdW9BxbiQJ3iwtSi": [
        {
          "id": "ig3T96HNwF4BsFY5q",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 3,
          "counter": false
        }
      ],
      "QsWsoLHyG3eyYsjLF": [
        {
          "id": "L6E7Mr9pRxDZcLZ6r",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 4,
          "counter": false
        },
        {
          "id": "grzn5AMH6vXoTAjwS",
          "detail": "Si querés, podés cambiar el medallón.",
          "minimun": 0,
          "maximun": 0,
          "counter": false
        }
      ],
      "F4tBY5YCS42h5dodJ": [
        {
          "id": "86gNJWrcvMrkoc9qP",
          "detail": "Si querés, pedila sin queso.",
          "minimun": 0,
          "maximun": 1,
          "counter": false
        }
      ],
      "nzrT5rDPxeYP8DmWr": [
        {
          "id": "EsPwaqXCivHPdvXmW",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        },
        {
          "id": "5oGHjKskKWdHDmSN3",
          "detail": "Si querés, agregale un medallón extra",
          "minimun": 0,
          "maximun": 1,
          "counter": false,
          "editing": true
        }
      ],
      "62mrzPx8sWgJEY8tS": [
        {
          "id": "YYEjsFEjW6eBwDFZP",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        }
      ],
      "37PKNvKu6w2GGCvrv": [
        {
          "id": "8PfJ3ibMxWeEEXQeA",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        }
      ],
      "9y6mxynpW4cffNDQe": [
        {
          "id": "Z5v8DTn3Gqm93jNpE",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        }
      ],
      "Diu9ohyHZe53mRsZw": [
        {
          "id": "K5zuibSJmpoPmghgR",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 4,
          "counter": false
        }
      ],
      "jcQcpNjKYfmpfnjsY": [
        {
          "id": "iDo6gtN4q6WZwsdxY",
          "detail": "Si querés, pedila sin coleslaw.",
          "minimun": 0,
          "maximun": 1,
          "counter": false
        }
      ],
      "FNtXoNnEfKfr5MpwP": [
        {
          "id": "XDQG66iHFEnzfCfxr",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 4,
          "counter": false
        }
      ],
      "zutZFx2kb7hP56YLc": [
        {
          "id": "tPPvpSdaJ7ZbJYR69",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 5,
          "counter": false
        }
      ],
      "y2bZwWi7GGSvjHxDT": [
        {
          "id": "iq4JvvMRaQXDffDFh",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 7,
          "counter": false
        }
      ],
      "7BHn9aQfHwXHcQoE5": [
        {
          "id": "kX7wnZMakJQPXS3WE",
          "detail": "Si querés, podés quitar ingredientes.",
          "minimun": 0,
          "maximun": 2,
          "counter": false
        }
      ],
      "CdCosRk9ws2nMbmRA": [
        {
          "id": "7HahAvTfZNJY7MaNy",
          "detail": "Seleccioná tu bebida.",
          "minimun": 1,
          "maximun": 1,
          "counter": false
        }
      ],
      "56ErPnmYojWKnwfWG": [
        {
          "id": "SLrBr7mYNytCvyerv",
          "detail": "Seleccioná tu bebida.",
          "minimun": 1,
          "maximun": 1,
          "counter": false
        }
      ]
    },
    "options": {
      "DS6YQC99MCFW6zuHZ": [
        {
          "id": "sCTwzqsk6kmfejbFd",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "xeCmCzHtmhfym7Mn4",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "78qzQ4E8yPqKpdSS8",
          "name": "sin cheddar",
          "code": "",
          "cost": 0
        },
        {
          "id": "9HS9RSpoc3t7ikLqW",
          "name": "sin jamon",
          "code": "",
          "cost": 0
        },
        {
          "id": "87ndmWNJEAL9CcW95",
          "name": "sin huevo",
          "code": "",
          "cost": 0
        }
      ],
      "sA63QC99dCFW6z17x": [
        {
          "id": "sCTwzqsk6kmfejbFd",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "xeCmCzHtmhfym7Mn4",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "78qzQ4E8yPqKpdSS8",
          "name": "sin cheddar",
          "code": "",
          "cost": 0
        },
        {
          "id": "9HS9RSpoc3t7ikLqW",
          "name": "sin jamon",
          "code": "",
          "cost": 0
        },
        {
          "id": "87ndmWNJEAL9CcW95",
          "name": "sin huevo",
          "code": "",
          "cost": 0
        }
      ],
      "L68T8ehsotuAZwB9Y": [
        {
          "id": "HDMCEPWDc2S3Ebyx6",
          "name": "sin cheddar",
          "code": "",
          "cost": 0
        },
        {
          "id": "8JnNcMLbrYbB9zLFM",
          "name": "sin bacon",
          "code": "",
          "cost": 0
        },
        {
          "id": "rhjGucqXfiNk9eLsj",
          "name": "sin pepinillos",
          "code": "",
          "cost": 0
        },
        {
          "id": "WsqSASP3xotmWomhz",
          "name": "sin salsa by the way",
          "code": "",
          "cost": 0
        }
      ],
      "WHbdeyscDQ8K72Aov": [
        {
          "id": "G4wu86zirWjzKeXr9",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "akZp9Wt75yvrKcSDu",
          "name": "sin cheddar",
          "code": "",
          "cost": 0
        },
        {
          "id": "T7Bs3fDnwgEfeYWQb",
          "name": "sin bacon",
          "code": "",
          "cost": 0
        },
        {
          "id": "pKtQ8jaiDodwFSZPy",
          "name": "sin aros de cebolla fritos",
          "code": "",
          "cost": 0
        },
        {
          "id": "SXiaMYEqmHajKYeeT",
          "name": "sin bbq",
          "code": "",
          "cost": 0
        }
      ],
      "smsgFoB6s8uftumx8": [
        {
          "id": "PW6gPB76AqdoaCW8b",
          "name": "sin queso",
          "code": "",
          "cost": 0
        },
        {
          "id": "DznT2j6tPmwz3PTQi",
          "name": "sin rucula",
          "code": "",
          "cost": 0
        },
        {
          "id": "MF49YcpXLLEuKdb8c",
          "name": "sin portobellos",
          "code": "",
          "cost": 0
        }
      ],
      "YhHFGrWY88o672usp": [
        {
          "id": "WMgRxCbYJ5t3so4tG",
          "name": "sin cebolla",
          "code": "",
          "cost": 0
        },
        {
          "id": "NhPwB6H7iJSM6w8HY",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "TMsp3EC4um5rEv4Yp",
          "name": "sin queso azul",
          "code": "",
          "cost": 0
        },
        {
          "id": "73ansYgFxjtbS22AN",
          "name": "con queso gouda",
          "code": "",
          "cost": 0
        },
        {
          "id": "NHsECS8Py34dkzGH9",
          "name": "sin bacon",
          "code": "",
          "cost": 0
        }
      ],
      "ExsafxRH96gPaNweM": [
        {
          "id": "MNfb2n24NknFGzxG6",
          "name": "sin provolone",
          "code": "",
          "cost": 0
        },
        {
          "id": "FTmqSWq25v8w6WQmm",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "X4AnNT4gLeiLLaGL2",
          "name": "sin morron",
          "code": "",
          "cost": 0
        },
        {
          "id": "uvqz9nexXJXHYH7ew",
          "name": "sin huevo",
          "code": "",
          "cost": 0
        },
        {
          "id": "H8pJK4mq7MJLCNDm9",
          "name": "sin chimichurri",
          "code": "",
          "cost": 0
        }
      ],
      "ZxowuDAiGRHjvA8CQ": [
        {
          "id": "LvbYiMRySXW4L4Z8b",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "4JFnZCCNqLWFo38aK",
          "name": "sin cheddar",
          "code": "",
          "cost": 0
        },
        {
          "id": "gn8qszp7JeLZvsEMy",
          "name": "sin salsa by the way",
          "code": "",
          "cost": 0
        }
      ],
      "h9beuDm4FSayWJ7S5": [
        {
          "id": "EHJSWDnQXmR4sWrvM",
          "name": "sin merken mayo",
          "code": "",
          "cost": 0
        },
        {
          "id": "ociRPqBDLijKjpBrh",
          "name": "sin queso",
          "code": "",
          "cost": 0
        },
        {
          "id": "ts4BZ42mYdEFegN8x",
          "name": "sin tomates confitados",
          "code": "",
          "cost": 0
        },
        {
          "id": "BfBnQEBZRTFYvrCBk",
          "name": "sin rúcula",
          "code": "",
          "cost": 0
        }
      ],
      "ig3T96HNwF4BsFY5q": [
        {
          "id": "t7Y9KNuRvq4xNSeiz",
          "name": "sin tomates cherry",
          "code": "",
          "cost": 0
        },
        {
          "id": "omt2wdFjyKNLheRGi",
          "name": "sin rúcula",
          "code": "",
          "cost": 0
        },
        {
          "id": "iZDNcXS78LPtmggt6",
          "name": "sin zanahoria mayo",
          "code": "",
          "cost": 0
        }
      ],
      "L6E7Mr9pRxDZcLZ6r": [
        {
          "id": "M6yqaKpMZMMozDkzu",
          "name": "sin rúcula",
          "code": "",
          "cost": 0
        },
        {
          "id": "YFqpcgaZbjFs64Q6G",
          "name": "sin cebolla crispy",
          "code": "",
          "cost": 0
        },
        {
          "id": "4oTvGDCJWzTcpXhT8",
          "name": "sin alioli de olivas",
          "code": "",
          "cost": 0
        },
        {
          "id": "x8LnJuQ3mGmxq3Wrb",
          "name": "sin queso ahumado",
          "code": "",
          "cost": 0
        }
      ],
      "86gNJWrcvMrkoc9qP": [
        {
          "id": "M2wbDvhFNh5vG6fP6",
          "name": "sin queso",
          "code": "",
          "cost": 0
        }
      ],
      "EsPwaqXCivHPdvXmW": [
        {
          "id": "59ERgRXwLNdPqK89g",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "WWndKNskvKs6qzPgP",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "CHzYBuRMcrKgwFqPd",
          "name": "sin cebolla",
          "code": "",
          "cost": 0
        },
        {
          "id": "4i2tnRyck7E9o72x7",
          "name": "sin palta",
          "code": "",
          "cost": 0
        },
        {
          "id": "EapyRWvp2MZCBahBN",
          "name": "sin salsa cesar",
          "code": "",
          "cost": 0
        }
      ],
      "YYEjsFEjW6eBwDFZP": [
        {
          "id": "L6bPdPf5Bo4e2NDhY",
          "name": "sin puré de frijoles",
          "code": "",
          "cost": 0
        },
        {
          "id": "7NsAD25j8fxd69Kbm",
          "name": "sin arroz yamani",
          "code": "",
          "cost": 0
        },
        {
          "id": "jjS2KjcTgezfF8mEL",
          "name": "sin choclo",
          "code": "",
          "cost": 0
        },
        {
          "id": "XgWcFYoLF8SrMbKcP",
          "name": "sin mix de quesos",
          "code": "",
          "cost": 0
        },
        {
          "id": "tzECdyqGxMxx3cTMa",
          "name": "sin palta",
          "code": "",
          "cost": 0
        }
      ],
      "8PfJ3ibMxWeEEXQeA": [
        {
          "id": "N7ziWSDsachjEeTHw",
          "name": "sin puré de frijoles",
          "code": "",
          "cost": 0
        },
        {
          "id": "4a3JdCz3qnyv2K8pi",
          "name": "sin arroz yamani",
          "code": "",
          "cost": 0
        },
        {
          "id": "nWhtkLvrQDiYkSeDD",
          "name": "sin choclo",
          "code": "",
          "cost": 0
        },
        {
          "id": "hbGGFHLwcLiKJwJLf",
          "name": "sin mix de quesos",
          "code": "",
          "cost": 0
        },
        {
          "id": "tjbBdXqfAzcvJJ8vM",
          "name": "sin palta",
          "code": "",
          "cost": 0
        }
      ],
      "Z5v8DTn3Gqm93jNpE": [
        {
          "id": "uuFpJqS4nQQhpgRkX",
          "name": "sin puré de frijoles",
          "code": "",
          "cost": 0
        },
        {
          "id": "3KnZjEu2T6YgtLhox",
          "name": "sin arroz yamani",
          "code": "",
          "cost": 0
        },
        {
          "id": "7xpt22pLj2QKTbsY3",
          "name": "sin choclo",
          "code": "",
          "cost": 0
        },
        {
          "id": "A6gWryk3itCQwpRNC",
          "name": "sin mix de quesos",
          "code": "",
          "cost": 0
        },
        {
          "id": "gvbSp8RfdLxZhGzxc",
          "name": "sin palta",
          "code": "",
          "cost": 0
        }
      ],
      "K5zuibSJmpoPmghgR": [
        {
          "id": "Ja4YyxPkdH9avTNdh",
          "name": "sin rucula",
          "code": "",
          "cost": 0
        },
        {
          "id": "EbDXdJAtjxF7vpQb8",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "P39jo3NMB53FSANfq",
          "name": "sin palta",
          "code": "",
          "cost": 0
        },
        {
          "id": "2Jq8odkLb2QseAbuE",
          "name": "sin queso",
          "code": "",
          "cost": 0
        }
      ],
      "iDo6gtN4q6WZwsdxY": [
        {
          "id": "h5wMTrY3yjNdy5QB3",
          "name": "sin coleslaw",
          "code": "",
          "cost": 0
        }
      ],
      "XDQG66iHFEnzfCfxr": [
        {
          "id": "JmJoTqfQhAuJZwCZq",
          "name": "sin palta",
          "code": "",
          "cost": 0
        },
        {
          "id": "PLdbRuE2jokXix5oT",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "4xpHCM8RKjFwYuTT5",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "4yDAiKDGqqqDr6Hso",
          "name": "sin queso",
          "code": "",
          "cost": 0
        }
      ],
      "tPPvpSdaJ7ZbJYR69": [
        {
          "id": "YK68Q8TsAK5XvNX6N",
          "name": "sin albahaca",
          "code": "",
          "cost": 0
        },
        {
          "id": "SWJkJ5wWFhwpCmRup",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "SM9DZgAZth5Y2voSy",
          "name": "sin muzza",
          "code": "",
          "cost": 0
        },
        {
          "id": "GYfzfoJ3kzA4r9owH",
          "name": "sin salsa",
          "code": "",
          "cost": 0
        },
        {
          "id": "gy7ScCHrwaYdXvGzB",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        }
      ],
      "iq4JvvMRaQXDffDFh": [
        {
          "id": "6S8WKoyzPyDaRcfjs",
          "name": "sin jamón",
          "code": "",
          "cost": 0
        },
        {
          "id": "MkwESodckPBhLWcYK",
          "name": "sin palta",
          "code": "",
          "cost": 0
        },
        {
          "id": "dBtWScT79uj56NEZ6",
          "name": "sin queso",
          "code": "",
          "cost": 0
        },
        {
          "id": "3Mmow86nk9BSrhRXm",
          "name": "sin lechuga",
          "code": "",
          "cost": 0
        },
        {
          "id": "ikRk2RqYoyjRTGGSH",
          "name": "sin tomate",
          "code": "",
          "cost": 0
        },
        {
          "id": "ihWWPrXGC7tzwnZrG",
          "name": "sin pollo",
          "code": "",
          "cost": 0
        },
        {
          "id": "ReP7X3HYNbKFDaTjL",
          "name": "sin mayonesa",
          "code": "",
          "cost": 0
        }
      ],
      "kX7wnZMakJQPXS3WE": [
        {
          "id": "JreLqHH8zCDWKGmu9",
          "name": "sin bacon",
          "code": "",
          "cost": 0
        },
        {
          "id": "jjRXv4pmXWWEJJoEQ",
          "name": "sin ciboullette",
          "code": "",
          "cost": 0
        }
      ],
      "7HahAvTfZNJY7MaNy": [
        {
          "id": "fLCyan8nNwYanXKQi",
          "name": "coca cola",
          "code": "",
          "cost": 0
        },
        {
          "id": "ffS3MbMaoQEEGPbAJ",
          "name": "coca cola zero",
          "code": "",
          "cost": 0
        },
        {
          "id": "jygRTb9so2PEteCEc",
          "name": "fanta",
          "code": "",
          "cost": 0
        },
        {
          "id": "fhMCKnFwAc6faFC4y",
          "name": "schweppes pomelo",
          "code": "",
          "cost": 0
        },
        {
          "id": "qBhLTtJPoEASkpf7w",
          "name": "sprite",
          "code": "",
          "cost": 0
        }
      ],
      "J5GrLhiRuZDy6R374": [
        {
          "id": "eksB5MLpXPxWfFnCW",
          "name": "Con medallón vacuno",
          "code": "",
          "cost": 0
        }
      ],
      "grzn5AMH6vXoTAjwS": [
        {
          "id": "TdETrvScN5Pynhc78",
          "name": "Con medallón vacuno",
          "code": "",
          "cost": 0
        }
      ],
      "SLrBr7mYNytCvyerv": [
        {
          "id": "yCcPJ9hR9T5sZq7hz",
          "name": "pomelo",
          "code": "",
          "cost": 0
        },
        {
          "id": "SYca8xTsnjdxcBAvT",
          "name": "pera",
          "code": "",
          "cost": 0
        },
        {
          "id": "Pa2EYGrm2biiJPiqp",
          "name": "naranja",
          "code": "",
          "cost": 0
        },
        {
          "id": "XsSPqMzXBYn3jHKNh",
          "name": "manzana",
          "code": "",
          "cost": 0
        },
        {
          "id": "s32GLXo53P7iw9CEz",
          "name": "agua sin gas",
          "code": "",
          "cost": 0
        },
        {
          "id": "Z9JpXzYi7xMLhkap5",
          "name": "agua con gas",
          "code": "",
          "cost": 0
        }
      ],
      "WypwibSCJjZMSkfvM": [
        {
          "id": "FbJix5NjmwZYyqKAn",
          "name": "Medallón de res",
          "code": "",
          "cost": 3500,
          "editing": true
        }
      ],
      "vNmo7JzKZnHenzx94": [
        {
          "id": "pJG3kZgTrj7aETtPe",
          "name": "medallón de res",
          "code": "",
          "cost": 3500,
          "editing": true
        }
      ],
      "yderGjCxMaN4cHfzk": [
        {
          "id": "JLYiQwzKo9bqYvsjv",
          "name": "medallón de res",
          "code": "",
          "cost": 3500,
          "editing": true
        }
      ],
      "M9t99L55EG7XYXcNY": [
        {
          "id": "teJ6vwXNxsMCBJrGs",
          "name": "medallón de res",
          "code": "",
          "cost": 3500,
          "editing": true
        }
      ],
      "5oGHjKskKWdHDmSN3": [
        {
          "id": "zfAjFWbLekr47yiTk",
          "name": "medallón res",
          "code": "",
          "cost": 3500,
          "editing": true
        }
      ]
    }
  },
  "city": "AR8370",
  "promo2x1": false,
  "afip": {
    "facturaTipo": "A",
    "razonSocial": "BY THE WAY BURGER",
    "domicilioLegal": "ALAMOS 32, 5 - SAN MARTIN DE LOS ANDES - NEUQUÉN",
    "condicionIva": "IVA Responsable Inscripto",
    "tipoDeDocumento": "CUIT",
    "numeroDocumento": "20247790269",
    "direccionEmail": "alemacordon@gmail.com",
    "referencia": "BY THE WAY BURGER"
  },
  "published": "SHOW"
}
