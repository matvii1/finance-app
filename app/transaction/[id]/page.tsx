import TransactionDetails from '@/components/features/transaction-details';
import { AppData } from '@/types/app-data';
import fs from 'fs/promises';
import path from 'path';

export default async function TransactionDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const filePath = path.join(
    process.cwd(),
    'public',
    'data',
    'transactions.json'
  );
  const data = JSON.parse(await fs.readFile(filePath, 'utf8')) as AppData;
  const foundTransaction = data.transactions.find((el) => el.id === id);

  if (!foundTransaction) {
    return <div>Transaction not found</div>;
  }

  return <TransactionDetails transaction={foundTransaction} />;
}
