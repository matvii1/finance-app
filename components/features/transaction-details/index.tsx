'use client';

import Card from '@/components/ui/card';
import { Transaction } from '@/types/app-data';
import Link from 'next/link';

type TransactionDetailsProps = {
  transaction: Transaction;
};

export default function TransactionDetails({
  transaction,
}: TransactionDetailsProps): React.JSX.Element {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-gray-100">
      <div className="flex items-center p-4">
        <Link href=".." className="text-blue-500">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </div>
      <div className="flex flex-col items-center p-6">
        <h1 className="mb-2 text-4xl font-bold">${transaction.amount}</h1>
        <p className="text-gray-500">{transaction.name}</p>
        <p className="text-sm text-gray-500">{transaction.fullDate}</p>
      </div>
      <div className="px-4">
        <Card className="mt-4">
          <div className="px-4 pb-4">
            <h2 className="mb-2 font-semibold">Status: {transaction.status}</h2>
            <p className="text-gray-500">{transaction.paymentMethod}</p>
          </div>

          <div className="border-t px-4 pt-3">
            <div className="flex justify-between">
              <h3>Total</h3>
              <p className="font-semibold">${transaction.amount}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
