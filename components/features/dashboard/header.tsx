import Card from '@/components/ui/card';
import { calculateDailyPoints, formatPoints } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
type HeaderProps = {
  cardBalance: number;
  paymentDueMessage: string;
  currentDay: number;
  currentSeason: string;
};

export default function Header({
  cardBalance,
  currentDay,
  currentSeason,
  paymentDueMessage,
}: HeaderProps): React.JSX.Element {
  return (
    <header className="grid grid-cols-2 grid-rows-[200px,200px] gap-2.5 p-4">
      <Card className="row-span-1">
        <h2 className="text-sm font-medium text-gray-600">Card Balance</h2>
        <p className="text-3xl font-bold">${cardBalance.toFixed(2)}</p>
        <p className="text-sm font-semibold text-gray-400">
          ${(1500 - cardBalance).toFixed(2)} Available
        </p>
      </Card>

      <Card className="row-span-2 flex flex-col justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-600">
            No Payment Due
          </h2>
          <p className="text-sm text-gray-400">{paymentDueMessage}</p>
        </div>

        <div className="mt-2 flex justify-end">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <FontAwesomeIcon icon={faCheck} className="text-gray-700" />
          </div>
        </div>
      </Card>

      <Card className="row-span-1">
        <h2 className="text-sm font-medium text-gray-600">Daily Points</h2>
        <p className="text-base font-semibold text-gray-400">
          {formatPoints(calculateDailyPoints(currentDay, currentSeason))}
        </p>
      </Card>
    </header>
  );
}
