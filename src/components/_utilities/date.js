export const dateformatter = (datetime) => {
  if (datetime != null) {
    let date = new Date(datetime.toString());
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //january is 0
    let yyyy = date.getFullYear();
    let norwegianDate = `${dd}.${mm}.${yyyy}`;
    return norwegianDate;
  }
  return "";
};
