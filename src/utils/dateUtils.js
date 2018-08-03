const numberFormater = (n) => {
    return n < 10 ? "0" + n : n;
};

const dateFormater = (date) => {
    let dat = new Date(date);
    var result = numberFormater(dat.getFullYear() + "-" + numberFormater(dat.getMonth() + 1) + "-" + numberFormater(dat.getDate()));
    return result;
};

export default dateFormater