import TransactionDetails from '@/components/features/transaction-details';
import { AppData } from '@/types/app-data';
import fs from 'fs/promises';
export default async function TransactionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const transaction = JSON.parse(
    await fs.readFile('./data/transactions.json', 'utf8')
  ) as AppData;
  const foundTransaction = transaction.transactions.find((el) => el.id === id);

  if (!foundTransaction) {
    return <div>Transaction not found</div>;
  }

  return <TransactionDetails transaction={foundTransaction} />;
}
