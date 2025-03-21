import IconBase from '@/components/ui/icon-base';
import { Transaction } from '@/types/app-data';
import Link from 'next/link';
import { faApple, faAmazon } from '@fortawesome/free-brands-svg-icons';
const iconMap = {
  apple: faApple,
  amazon: faAmazon,
};

export default function TransactionsList({
  transactions,
}: {
  transactions: Transaction[];
}): React.JSX.Element {
  return (
    <section className="mt-4 px-4">
      <h2 className="mb-4 text-xl font-bold">Latest Transactions</h2>
      <ul className="divide-y rounded-lg bg-white shadow-sm">
        {transactions.slice(0, 10).map((transaction) => (
          <li key={transaction.id}>
            <Link
              className="flex cursor-pointer items-center p-4"
              href={`/transaction/${transaction.id}`}
            >
              <IconBase
                bgColor={transaction.iconBgColor}
                icon={
                  iconMap[transaction.icon as keyof typeof iconMap] || faApple
                }
              />
              <div className="flex flex-1 justify-between gap-1">
                <div>
                  <h3 className="font-semibold">{transaction.name}</h3>
                  <div className="text-sm text-gray-500">
                    {transaction.isPending && <span>Pending - </span>}
                    {transaction.description}
                  </div>
                  <div className="text-sm text-gray-500">
                    {transaction.authorizedUser &&
                      `${transaction.authorizedUser} – `}
                    {transaction.isLastWeek
                      ? transaction.dayName
                      : transaction.date}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-700">
                      {transaction.type === 'Payment' ? '+' : ''}$
                      {transaction.amount}
                    </p>
                    {transaction.percentageRate && (
                      <div className="w-max self-end rounded-sm bg-gray-300 px-1 text-xs text-gray-500">
                        {' '}
                        {transaction.percentageRate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ml-2 text-gray-400">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
