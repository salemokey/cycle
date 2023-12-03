
    function linkTovar(category) {
        return function (iden) {
            return `http://myshop.ru/${category}/${iden}`
        }
    }
    createPCLink = linkTovar ('pc');
    crateMonitorLink = linkTovar ('monitor');
    createNotebookLink = linkTovar ('notebook');
    console.log (crateMonitorLink(4004));
