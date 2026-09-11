// Datos iniciales para poblar localStorage la primera vez que se abre la app
import type { Game } from "../interfaces";
import { seedUsers } from "./usuarios";

export { seedUsers };

export const seedGames: Game[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description:
      "Un RPG de mundo abierto y acción ambientado en Night City, una megalópolis obsesionada con el poder, la modificación corporal y el glamour.",
    price: 59.99,
    category: "RPG",
    genre: "Acción / Cyberpunk",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1784714077",
    trailerUrl: "https://www.youtube.com/embed/vjF9GgrY9c0",
    developer: "CD Projekt Red",
    systemRequirements: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-3570K / AMD FX-8310",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 1060 6GB / AMD RX 580",
      storage: "70 GB disponibles",
    },
    upvotes: 854,
    downvotes: 92,
  },
  {
    id: 2,
    title: "Counter-Strike 2",
    description:
      "El shooter táctico por excelencia. Enfrentamientos estratégicos de 5v5 donde la precisión, la economía del equipo y la utilidad definen cada ronda.",
    price: 0.0,
    category: "Shooter",
    genre: "FPS / Táctica",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/162664aa5da85f418105350c5d67ca565f6c3713/header.jpg?t=1784564069",
    trailerUrl: "https://www.youtube.com/embed/edYCtaNueQY",
    developer: "Valve",
    systemRequirements: {
      os: "Windows 10 (64-bit)",
      processor: "CPU de 4 hilos físicos - Intel Core i5-750 o superior",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 970 / AMD RX 570",
      storage: "85 GB disponibles",
    },
    upvotes: 1250,
    downvotes: 140,
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    description:
      "Un action-RPG ambientado en el Lejano Oeste. Explora el mundo abierto a caballo, combate contra forajidos y desentraña los misterios del Oeste.",
    price: 59.99,
    category: "RPG",
    genre: "Acción / Western",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1759502961",
    trailerUrl: "https://www.youtube.com/embed/eaW0tIObfcU",
    developer: "Rockstar Games",
    systemRequirements: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i7-6700K / AMD Ryzen 5 1500X",
      memory: "12 GB RAM",
      graphics: "NVIDIA GTX 1060 3GB / AMD RX 580 4GB",
      storage: "60 GB disponibles",
    },
    upvotes: 2150,
    downvotes: 65,
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    description:
      "Conduce cientos de autos de ensueño a través de los vibrantes y cambiantes paisajes de un mundo abierto inspirado en México, con clima dinámico y eventos constantes.",
    price: 39.99,
    category: "Racing",
    genre: "Carreras / Mundo Abierto",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1787677939",
    trailerUrl: "https://www.youtube.com/embed/FYH9n37B7Yw",
    developer: "Playground Games",
    systemRequirements: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i5-8400 / AMD Ryzen 5 1500X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GTX 1070 / AMD RX 590",
      storage: "110 GB disponibles",
    },
    upvotes: 940,
    downvotes: 52,
  },
  {
    id: 5,
    title: "Hogwarts Legacy",
    description:
      "Una experiencia RPG ambientada en el universo de Harry Potter. Crea tu propio personaje, explora Hogwarts y sus alrededores, y desentraña los misterios del mundo mágico.",
    price: 39.99,
    category: "RPG",
    genre: "Acción / Fantasía",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/a3cdc6f40d97df8ac993679c2dd1edeb5222421e/header.jpg?t=1788224492",
    trailerUrl: "https://www.youtube.com/embed/1O6Qstncpnc",
    developer: "WB Games",
    systemRequirements: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i5-7500 / AMD Ryzen 3 1200",
      memory: "12 GB RAM",
      graphics: "NVIDIA GTX 1060 3GB / AMD RX 580 4GB",
      storage: "60 GB disponibles",
    },
    upvotes: 1820,
    downvotes: 45,
  },
  {
    id: 6,
    title: "Grand Theft Auto V",
    description:
      "Sumérgete en el soleado estado de San Andreas en esta historia criminal entrelazada de tres protagonistas, con un modo multijugador masivo y activo.",
    price: 29.99,
    category: "Action",
    genre: "Acción / Mundo Abierto",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1781187782",
    trailerUrl: "https://www.youtube.com/embed/QkkoHAzjinY",
    developer: "Rockstar Games",
    systemRequirements: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i5-3470 / AMD X8 FX-8350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
      storage: "110 GB disponibles",
    },
    upvotes: 3400,
    downvotes: 210,
  },
  {
    id: 7,
    title: "Deltarune",
    description:
      "¡Sumérgete en la historia paralela de UNDERTALE! Lucha o perdona en intensas batallas mientras exploras un mundo misterioso junto a un entrañable elenco de personajes nuevos y conocidos. Los capítulos 1 al 5 ya están disponibles, ¡y pronto habrá más en actualizaciones gratuitas!",
    price: 24.99,
    category: "RPG",
    genre: "Indie/Rol",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/7ccda5b1631d2e60cc756a3271e845dbb9168821/header.jpg?t=1782314340",
    trailerUrl: "https://www.youtube.com/embed/yDzgiGdekas?si=Lwj-_9_39Bz9Fgra",
    developer: "Toby Fox",
    systemRequirements: {
      os: "Windows 10",
      processor: "Intel i2",
      memory: "2 GB de RAM",
      graphics: "128 mb",
      storage: " 1 GB de espacio disponible",
    },
    upvotes: 4000,
    downvotes: 2,
  },
];
