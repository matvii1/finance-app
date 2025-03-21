import Dashboard from '@/components/features/dashboard';
import fs from 'fs/promises';

export default async function TransactionsList() {
  const data = JSON.parse(
    await fs.readFile('./data/transactions.json', 'utf8')
  );

  return <Dashboard data={data} />;
}
