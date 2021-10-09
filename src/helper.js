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

export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function firstUppercase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
