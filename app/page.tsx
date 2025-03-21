import Dashboard from '@/components/features/dashboard';
import fs from 'fs/promises';
import path from 'path';

export default async function TransactionsList() {
  const filePath = path.join(
    process.cwd(),
    'public',
    'data',
    'transactions.json'
  );
  const data = JSON.parse(await fs.readFile(filePath, 'utf8'));

  return <Dashboard data={data} />;
}
