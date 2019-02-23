module.exports = {
    //Create Product Funciton
    create: (req, res) => {
        req.app.db.create_product().then(() => {
            res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    },

    //Read Product Function
    getOne: (req, res) => {
        req.app.db.read_product().then((product) => {
            res.status(200).send(product);
        }).catch((error) => {
            res.status(500).send('Could not get product');
            console.log(error);
        });
    },

    //Read All Products Function
    getAll: (req, res) => {
        req.app.db.read_products().then((products) => {
            res.status(200).send(products);
        }).catch((error) => {
            res.status(500).send('Could not get products');
            console.log(error);
        });
    },

    //Update Product Function
    update: (req, res) => {
        req.app.db.update_product().then(() => {
            res.status(200).send('Updated');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    },

    //Delete Product Funciton
    delete: (req, res) => {
        req.app.db.delete_product().then(() => {
            res.status(200).send('Deleted');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    }
}