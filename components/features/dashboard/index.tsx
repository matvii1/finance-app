import TransactionsList from './transactions-list';
import Header from './header';
import { AppData } from '@/types/app-data';

export default function Dashboard({
  data,
}: {
  data: AppData;
}): React.JSX.Element {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-gray-100 pb-8">
      <Header
        cardBalance={data.cardBalance}
        currentDay={data.currentDay}
        currentSeason={data.currentSeason}
        paymentDueMessage={data.paymentDueMessage}
      />
      <TransactionsList transactions={data.transactions} />
    </div>
  );
}
