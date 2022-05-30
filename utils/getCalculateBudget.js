export const calculateBuget = (salary) => {
  const fifty = salary * (50 / 100);
  const twenty = salary * (20 / 100);
  const thirty = salary * (30 / 100);
  return { fiftyPercent: fifty, twentyPercent: twenty, thirtyPercent: thirty };
};
