export const addCommaOnNum = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
