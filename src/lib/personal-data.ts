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
  { name: "/personal/photos/IMG_7111.jpeg", alt: "Norway" },
  { name: "/personal/photos/IMG_5427.jpeg", alt: "Norway" },
  { name: "/personal/photos/IMG_5358.jpeg", alt: "Como" },
  { name: "/personal/photos/11.jpeg", alt: "On top of Hoverla" },
  { name: "/personal/photos/IMG_2306.jpeg", alt: "Home" },
  { name: "/personal/photos/DSC00292.jpeg", alt: "Love" },
  { name: "/personal/photos/DSC00273.jpeg", alt: "Together" },
  { name: "/personal/photos/3.jpeg", alt: "Before descending from the mountain in Dragobrat" },
  { name: "/personal/photos/IMG_4239.jpeg", alt: "Eve" },
  
];

export const movies: MediaItem[] = [
  {
    name: "Stranger Things",
    url: "https://www.imdb.com/title/tt4574334/",
    image: "/personal/movies/stranger-things.jpg",
    alt: "Stranger Things series poster"
  },
  {
    name: "Alien: Earth",
    url: "https://www.imdb.com/title/tt13623632",
    image: "/personal/movies/alien-earth.png",
    alt: "Alien: Earth series poster"
  },
  {
    name: "Foundation",
    url: "https://uk.wikipedia.org/wiki/Фундація_(телесеріал)",
    image: "/personal/movies/foundation.jpeg",
    alt: "Foundation series poster"
  },
  {
    name: "For All Mankind",
    url: "https://www.imdb.com/title/tt7772588/",
    image: "/personal/movies/for-all-mankind.png",
    alt: "For All Mankind series poster"
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
    name: "Ghost in the Shell",
    url: "https://www.imdb.com/title/tt0113568/",
    image: "/personal/movies/ghost-in-the-shell.png",
    alt: "Ghost in the Shell movie poster"
  },
  {
    name: "Aliens",
    url: "https://www.imdb.com/title/tt0090605/",
    image: "/personal/movies/aliens.png",
    alt: "Aliens movie poster"
  },
  {
    name: "Back to the Future",
    url: "https://www.imdb.com/title/tt0088763/",
    image: "/personal/movies/back-to-the-future.png",
    alt: "Back to the Future movie poster"
  }
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
    name: "No Man's Sky",
    url: "https://uk.wikipedia.org/wiki/No_Man%27s_Sky",
    image: "/personal/games/nms.jpg",
    alt: "No Man's Sky game cover"
  },
  {
    name: "Heartstone",
    url: "https://playhearthstone.com/en-us",
    image: "/personal/games/heartstone.jpg",
    alt: "Heartstone game cover"
  },
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