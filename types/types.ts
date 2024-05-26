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
