
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
        function task3 (newPrice) {
            let oldPrice = order.price * order.quantity;
            let skidka = ((oldPrice - newPrice)*100/oldPrice);
            return `Заказ покупателя ${order.fio} составил ${oldPrice}, скидка составила ${skidka}%`;
        }  
            return task3(1800);
    }
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
            
            function Menu(...navList) {
                this.navList = navList;
                
                this.wrapperA = function(...context) {
                  return this.navList.map((elem, index) => `<a href='${elem}'>${context[index]}</a>`);
                }
              }
              
              let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
              for (elem of mainMenu.navList)
                console.log(elem);
              console.log(mainMenu.wrapperA("Home", "Services", "Price", "About"));
              
              let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
              for (elem of footerMenu.navList)
                console.log(elem);
              console.log(footerMenu.wrapperA("New Page", "Check Page", "SEO Page"));
            