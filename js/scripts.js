
    function linkTovar(category) {
        return function (iden) {
            return `http://myshop.ru/${category}/${iden}`
        }
    }
    createPCLink = linkTovar ('pc');
    crateMonitorLink = linkTovar ('monitor');
    createNotebookLink = linkTovar ('notebook');
    console.log (crateMonitorLink(4004));

    function task2 (order) {
        return `Заказ покупателя ${order.fio} составил ${order.price*order.quantity}`}
        let orders= [
            {
                    fio:"Ivan",
                    tovar:"phone",
                    price:1000,
                    quantity:2
            },
            {
                fio:"Peter",
                tovar:"usb",
                price:2300,
                quantity:5
            },
            {
                fio:"Mary",
                tovar:"connector",
                price:100,
                quantity:100
            } ];
            for (elem of orders)
            console.log (task2(elem));

        