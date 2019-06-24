var store = { snack: 1000, flower: 5000, beverage: 2000 };

for (var item in store) {
    // 객체 안에 속성이 있는지 확인
    if (!store.hasOwnProperty(item))
        continue;

    console.log(item + '은(는) ' + store[item] + '원 입니다.')
}