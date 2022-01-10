module.exports = {
  format_date: (date) => {
    newDate = Date.parse(date)
    return newDate.toLocaleTimeString();
  },
};