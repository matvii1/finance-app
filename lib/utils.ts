import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function isFirstDayOfSeason(
  currentDay: number,
  currentSeason: string
): boolean {
  if (currentSeason === 'autumn' && currentDay === 1) return true;
  if (currentSeason === 'winter' && currentDay === 1) return true;
  if (currentSeason === 'spring' && currentDay === 1) return true;
  if (currentSeason === 'summer' && currentDay === 1) return true;

  return false;
}

export function calculateDailyPoints(
  currentDay: number,
  currentSeason: string
): number {
  if (isFirstDayOfSeason(currentDay, currentSeason)) {
    return 2;
  }

  if (currentDay > 1 && isFirstDayOfSeason(currentDay - 1, currentSeason)) {
    return 3;
  }
  if (currentDay <= 0) {
    return 0;
  }

  if (currentDay > 2) {
    const pointsYesterday = calculateDailyPoints(currentDay - 1, currentSeason);
    const pointsTwoDaysAgo = calculateDailyPoints(
      currentDay - 2,
      currentSeason
    );

    const totalPoints = pointsYesterday + 0.6 * pointsTwoDaysAgo;

    return Math.round(totalPoints);
  } else {
    return currentDay + 1;
  }
}
export function formatPoints(points: number): string {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}K`;
  }
  return points.toString();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
