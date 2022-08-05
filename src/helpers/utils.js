export function generateColumnTitle(name) {
  const splitName = name.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
  const finalName = splitName.charAt(0).toUpperCase() + splitName.slice(1);

  return finalName;
}
