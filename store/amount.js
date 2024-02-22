export function reducer(amount = 0, action) {
  switch (action.type) {
    case "add":
      return amount + action.payload;

    case "take":
      return amount - action.payload;

    case "clear":
      return 0;

    default:
      return amount;
  }
}