function sortPackage(a, b) {
  const desiredOrder = ['DAILY', 'WEEKLY', 'MONTHLY', 'H3', 'H50'];

  const indexA = desiredOrder.indexOf(a);
  const indexB = desiredOrder.indexOf(b);

  if (indexA !== -1 && indexB !== -1) {
    return indexA - indexB;
  }
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.localeCompare(b);
}

export default sortPackage;
