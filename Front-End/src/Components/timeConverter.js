//this function takes in the timezone from the company, and generates "morning/afternoon/evening" for message
export const TimeConverter = (timezone) => {
  let current = new Date();

  let timezoneOffset;

  if (timezone === "US/Pacific") {
    timezoneOffset = 8;
  } else if (timezone === "US/Mountain") {
    timezoneOffset = 7;
  } else if (timezone === "US/Central") {
    timezoneOffset = 6;
  } else if (timezone === "US/Eastern") {
    timezoneOffset = 5;
  }

  current = current.setHours(current.getHours() - timezoneOffset);
  let adjusted = new Date(current);
  adjusted = adjusted.getUTCHours();

  if (adjusted > 0 && adjusted <= 11) {
    return "morning";
  } else if (adjusted > 11 && adjusted <= 16) {
    return "afternoon";
  } else if (adjusted > 16 && adjusted <= 23) {
    return "evening";
  }
};
