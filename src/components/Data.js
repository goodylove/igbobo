import Tree1 from "./assets/tree1.png";
import Gold from "./assets/gold.png";
import plant from "./assets/plant.png";
import leaf from "./assets/leaf.png";
import Part1 from "./assets/Group 21.png";
import Part2 from "./assets/Group 20.png";
import Part3 from "./assets/Group 19.png";
import Part4 from "./assets/Group 18.png";
import Part5 from "./assets/Group 17.png";
import room1 from "./assets/details-1.jpeg";
import room2 from "./assets/details-2.jpeg";
import room3 from "./assets/details-3.jpeg";
import room4 from "./assets/details-4 (1).jpeg";

export const itemsCon = [
  {
    id: "plant",
    plantItems: [
      {
        img: Tree1,
        images: [Part1, Part2, Part3, Part4, Part5],
        description:
          "Monstera Vr are well know for their beautiful looks, long split leaves and their nice smell. they are widely popular all over east Europe.",
        id: 1,
        price: 390,
        name: "Monster vr",
      },
      {
        img: Gold,
        images: [Part1, Part2, Part3, Part4, Part5],
        description:
          "Monstera Delicious  are well know for their beautiful looks, long split leaves and their nice smell. they are widely popular all over east Europe.",
        id: 2,
        price: 300,
        name: "Monster Delicious",
      },
      {
        img: leaf,
        images: [Part1, Part2, Part3, Part4, Part5],
        description:
          "Monstera tree  are well know for their beautiful looks, long split leaves and their nice smell. they are widely popular all over east Europe.",
        id: 3,
        price: 290,
        name: "Monster tree",
      },
      {
        img: plant,
        images: [Part1, Part2, Part3, Part4, Part5],
        description:
          "Monstera Vr are well know for their beautiful looks, long split leaves and their nice smell. they are widely popular all over east Europe.",
        id: 4,
        price: 390,
        name: "Monster vr",
      },
    ],
  },

  {
    id: "room",
    plantItems: [
      {
        img: room1,
        images: [room1, room1, room1, room1, room1],
        description:
          "street art edison bulb glutem-free tofu try-hard lumbersexual brooklyn tattooed pickled chambray Actually humlebran next leve",
        id: 1,
        price: 1290,
        name: "dulux room",
      },
      {
        img: room2,
        images: [room2, room2, room2, room2, room2],
        description:
          "street art edison bulb glutem-free tofu try-hard lumbersexual brooklyn tattooed pickled chambray Actually humlebran next leve",
        id: 2,
        price: 300,
        name: "single room",
      },
      {
        img: room3,
        images: [room3, room3, room3, room3, room3],
        description:
          "street art edison bulb glutem-free tofu try-hard lumbersexual brooklyn tattooed pickled chambray Actually humlebran next leve",
        id: 3,
        price: 290,
        name: "visitor room",
      },
      {
        img: room4,
        images: [room4, room4, room4, room4, room4],
        description:
          "street art edison bulb glutem-free tofu try-hard lumbersexual brooklyn tattooed pickled chambray Actually humlebran next leve",
        id: 4,
        price: 390,
        name: "presidential room",
      },
    ],
  },
];
