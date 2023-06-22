export function alpha(hexCode, opacity) {
  // Remove the '#' character if present
  hexCode = hexCode.replace("#", "");

  // Check if the hex code is valid
  if (hexCode.length !== 6) {
    throw new Error("Invalid hex code");
  }

  // Convert the hex values to decimal
  const red = parseInt(hexCode.substr(0, 2), 16);
  const green = parseInt(hexCode.substr(2, 2), 16);
  const blue = parseInt(hexCode.substr(4, 2), 16);

  // Normalize the opacity value (between 0 and 1)
  const alpha = Math.max(0, Math.min(1, opacity));

  // Return the RGBA color as a string
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
