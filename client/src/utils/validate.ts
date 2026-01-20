export const validateCartValueInput = (raw: string): string | null => {
  if (raw === "")
    return "Cart Value cannot be empty. Please start to type e.g 10";
  const num = Number(raw);
  if (num < 0) return "Cart Value cannot be negative";
  if (num < 0.1 || num > 1000000)
    return "The Cart Value must be between 0.1 and 1000000";
  return null;
};

export const validateVenueSlugInput = (raw: string): string | null => {
  const value = raw.trim();
  if (value === "") {
    return "Venue slug cannot be empty. Please enter e.g. home-assignment-venue-helsinki";
  }
  return null;
};

export const validateUserLatitudeInput = (raw: string): string | null => {
  if (raw === "")
    return "User Latitude cannot be empty.Please start to type e.g 60.17123";
  const [, decimals] = raw.split(".");

  if (decimals && decimals.length > 16) {
    return "Maximum 16 digits after decimal point";
  }
  const num = Number(raw);
  if (num < -90 || num > 90) return "Please enter a value between -90 and 90.";
  return null;
};

export const validateUserLongitudeInput = (raw: string): string | null => {
  if (raw === "")
    return "User Longitude cannot be empty.Please start to type e.g 20.90123";
  const [, decimals] = raw.split(".");

  if (decimals && decimals.length > 16) {
    return "Maximum 16 digits after decimal point";
  }
  const num = Number(raw);
  if (num < -180 || num > 180)
    return "Please enter a value between -180 and 180.";
  return null;
};
