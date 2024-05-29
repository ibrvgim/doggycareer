//  FILTERS TYPE
export interface FilterCardType {
  options: CardItemsType[];
  title: string;
}

interface CardItemsType {
  label: string;
  value: string;
  name: string;
}

// FETCHING CITIES TYPE
export interface Cities {
  cities: {
    cities: string[];
  };
}
