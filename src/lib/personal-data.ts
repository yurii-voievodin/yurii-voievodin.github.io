// Personal page data extracted from Rails blog

export interface PersonalPhoto {
  name: string;
  alt: string;
}

export interface MediaItem {
  name: string;
  url: string;
  image: string;
  alt: string;
}

export interface Book {
  name: string;
  url: string;
}

export const personalPhotos: PersonalPhoto[] = [
  { name: "/personal/photos/10.jpeg", alt: "Somewhere in the sands near Kyiv Sea, Vyshgorod" },
  { name: "/personal/photos/11.jpeg", alt: "On top of Hoverla" },
  { name: "/personal/photos/3.jpeg", alt: "Before descending from the mountain in Dragobrat" },
  { name: "/personal/photos/7.jpeg", alt: "Photo session with Eva, 5 years old" },
  { name: "/personal/photos/2.jpeg", alt: "Dragobrat, off the slopes" },
  { name: "/personal/photos/1.jpeg", alt: "Small houses on the mountain top" },
  { name: "/personal/photos/8.jpeg", alt: "Eva" },
  { name: "/personal/photos/9.jpeg", alt: "Lake in Sumy" },
];

export const movies: MediaItem[] = [
  {
    name: "Foundation",
    url: "https://uk.wikipedia.org/wiki/Фундація_(телесеріал)",
    image: "/personal/movies/foundation.jpeg",
    alt: "Foundation series poster"
  },
  {
    name: "Dune",
    url: "https://uk.wikipedia.org/wiki/Дюна_(фільм,_2021)",
    image: "/personal/movies/dune.jpg",
    alt: "Dune movie poster"
  },
  {
    name: "Love, Death & Robots",
    url: "https://uk.wikipedia.org/wiki/Любов,_смерть_і_роботи",
    image: "/personal/movies/ldr.jpg",
    alt: "Love, Death & Robots series poster"
  },

  {
    name: "Finch",
    url: "https://uk.wikipedia.org/wiki/Фінч_(фільм)",
    image: "/personal/movies/Finch.jpeg",
    alt: "Finch movie poster"
  },

  {
    name: "See",
    url: "https://uk.wikipedia.org/wiki/Бачити_(телесеріал)",
    image: "/personal/movies/see.jpg",
    alt: "See series poster"
  },
  {
    name: "The Morning Show",
    url: "https://uk.wikipedia.org/wiki/Ранкове_шоу_(телесеріал)",
    image: "/personal/movies/ms.png",
    alt: "The Morning Show series poster"
  },
];

export const books: Book[] = [
  {
    name: "Colony - New Dark Ages",
    url: "https://darkages.maxkidruk.com"
  },
  {
    name: "Foundation",
    url: "https://uk.wikipedia.org/wiki/Фундація_(цикл_творів)"
  },
  {
    name: "Dune Universe",
    url: "https://uk.wikipedia.org/wiki/Дюна_(франшиза)"
  },
  {
    name: "Ready Player One",
    url: "https://uk.wikipedia.org/wiki/Першому_гравцеві_приготуватися"
  },
  {
    name: "The Innovators",
    url: "https://uk.wikipedia.org/wiki/Інноватори_(книга)"
  }
];

export const games: MediaItem[] = [
  {
    name: "Battlefield V",
    url: "https://uk.wikipedia.org/wiki/Battlefield_V",
    image: "/personal/games/b5.jpg",
    alt: "Battlefield V game cover"
  },
  {
    name: "Heroes of the Storm",
    url: "https://uk.wikipedia.org/wiki/Heroes_of_the_Storm",
    image: "/personal/games/heroes_of_the_storm.jpg",
    alt: "Heroes of the Storm game cover"
  },
  {
    name: "Heartstone",
    url: "https://playhearthstone.com/en-us",
    image: "/personal/games/heartstone.jpg",
    alt: "Heartstone game cover"
  },
  {
    name: "Lineage 2",
    url: "https://uk.wikipedia.org/wiki/Lineage_II",
    image: "/personal/games/l2.jpg",
    alt: "Lineage 2 game cover"
  },
  {
    name: "Diablo 2",
    url: "https://uk.wikipedia.org/wiki/Diablo_II",
    image: "/personal/games/d2.jpg",
    alt: "Diablo 2 game cover"
  }
];