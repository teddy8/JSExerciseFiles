var date = {
    'year': 0,
    'month': 0,
    'day': 0,
    date: function (year, month, day) {
        this.members[role] = {
            year: year,
            month: month,
            day: day
        };
    },
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
};

var a = date(30, 20, 10);

console.log(a.month);