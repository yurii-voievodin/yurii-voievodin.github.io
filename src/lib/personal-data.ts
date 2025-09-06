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
  { name: "/personal/photos/10.jpeg", alt: "Особисте фото 1" },
  { name: "/personal/photos/11.jpeg", alt: "Особисте фото 2" },
  { name: "/personal/photos/3.jpeg", alt: "Особисте фото 3" },
  { name: "/personal/photos/7.jpeg", alt: "Особисте фото 4" },
  { name: "/personal/photos/2.jpeg", alt: "Особисте фото 5" },
  { name: "/personal/photos/1.jpeg", alt: "Особисте фото 6" },
  { name: "/personal/photos/8.jpeg", alt: "Особисте фото 7" },
  { name: "/personal/photos/9.jpeg", alt: "Особисте фото 8" },
];

export const movies: MediaItem[] = [
  {
    name: "Вторгнення",
    url: "https://uk.wikipedia.org/wiki/Вторгнення_(телесеріал,_2021)",
    image: "/personal/movies/Invasion.jpeg",
    alt: "Постер серіалу Вторгнення"
  },
  {
    name: "Фінч",
    url: "https://uk.wikipedia.org/wiki/Фінч_(фільм)",
    image: "/personal/movies/Finch.jpeg",
    alt: "Постер фільму Фінч"
  },
  {
    name: "Фундація",
    url: "https://uk.wikipedia.org/wiki/Фундація_(телесеріал)",
    image: "/personal/movies/foundation.jpeg",
    alt: "Постер серіалу Фундація"
  },
  {
    name: "Бачити",
    url: "https://uk.wikipedia.org/wiki/Бачити_(телесеріал)",
    image: "/personal/movies/see.jpg",
    alt: "Постер серіалу Бачити"
  },
  {
    name: "Ранкове шоу",
    url: "https://uk.wikipedia.org/wiki/Ранкове_шоу_(телесеріал)",
    image: "/personal/movies/ms.png",
    alt: "Постер серіалу Ранкове шоу"
  },
  {
    name: "Дюна",
    url: "https://uk.wikipedia.org/wiki/Дюна_(фільм,_2021)",
    image: "/personal/movies/dune.jpg",
    alt: "Постер фільму Дюна"
  },
  {
    name: "Любов, смерть і роботи",
    url: "https://uk.wikipedia.org/wiki/Любов,_смерть_і_роботи",
    image: "/personal/movies/ldr.jpg",
    alt: "Постер серіалу Любов, смерть і роботи"
  }
];

export const books: Book[] = [
  {
    name: "Колонія - Нові Темні Віки",
    url: "https://darkages.maxkidruk.com"
  },
  {
    name: "Фундація",
    url: "https://uk.wikipedia.org/wiki/Фундація_(цикл_творів)"
  },
  {
    name: "Всесвіт Дюни",
    url: "https://uk.wikipedia.org/wiki/Дюна_(франшиза)"
  },
  {
    name: "Першому гравцеві приготуватися",
    url: "https://uk.wikipedia.org/wiki/Першому_гравцеві_приготуватися"
  },
  {
    name: "Інноватори",
    url: "https://uk.wikipedia.org/wiki/Інноватори_(книга)"
  }
];

export const games: MediaItem[] = [
  {
    name: "Battlefield V",
    url: "https://uk.wikipedia.org/wiki/Battlefield_V",
    image: "/personal/games/b5.jpg",
    alt: "Обкладинка гри Battlefield V"
  },
  {
    name: "Heroes of the Storm",
    url: "https://uk.wikipedia.org/wiki/Heroes_of_the_Storm",
    image: "/personal/games/heroes_of_the_storm.jpg",
    alt: "Обкладинка гри Heroes of the Storm"
  },
  {
    name: "Heartstone",
    url: "https://playhearthstone.com/en-us",
    image: "/personal/games/heartstone.jpg",
    alt: "Обкладинка гри Heartstone"
  },
  {
    name: "Lineage 2",
    url: "https://uk.wikipedia.org/wiki/Lineage_II",
    image: "/personal/games/l2.jpg",
    alt: "Обкладинка гри Lineage 2"
  },
  {
    name: "Diablo 2",
    url: "https://uk.wikipedia.org/wiki/Diablo_II",
    image: "/personal/games/d2.jpg",
    alt: "Обкладинка гри Diablo 2"
  }
];