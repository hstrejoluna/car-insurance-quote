export function getYear(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "european":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
    case "asian":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}
