export type Transaction = {
  id: string;
  type: 'Credit' | 'Payment';
  name: string;
  amount: number;
  description: string;
  isPending: boolean;
  authorizedUser: string;
  dayName: string;
  isLastWeek: boolean;
  date: string;
  fullDate: string;
  icon: string;
  iconBgColor: string;
  percentageRate?: string;
  status: string;
  paymentMethod: string;
  additionalDetails?: {
    TransactionID: string;
    Category: string;
    Receipt: string;
  };
};

export type AppData = {
  cardBalance: number;
  maximumLimit: number;
  paymentDueMessage: string;
  currentDay: number;
  currentSeason: string;
  transactions: Transaction[];
};
