//jshint esversion:6

exports.get_Date = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-GB", options);
};

exports.get_Day = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return day = today.toLocaleDateString("en-GB", options);
};

exports.get_Month = function() {
  const today = new Date();
  const options = {
    month: "long"
  };
  return day = today.toLocaleDateString("en-GB", options);
};
