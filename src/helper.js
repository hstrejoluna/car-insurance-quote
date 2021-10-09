export function getYear(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "European":
      increment = 1.30;
      break;
    case "American":
      increment = 1.15;
      break;
    case "Asian":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}

export function getPlan(plan) {
  return plan === "basic" ? 1.20 : 1.50;
}

export function firstUppercase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
