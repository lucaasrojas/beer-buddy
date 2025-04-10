export interface RoundItem {
    name: string;
    quantity: number;
  }
  
  export interface Round {
    created: string;
    items: RoundItem[];
  }
  
  export interface Order {
    id: string;
    created: string;
    paid: boolean;
    subtotal: number;
    taxes: number;
    discounts: number;
    items: RoundItem[];
    rounds: Round[];
  }