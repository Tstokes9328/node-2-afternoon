module.exports = {
    //Create Product Funciton
    create: (req, res) => {
        let {name, description, price, image_url} = req.body;
        console.log(req.app)

        req.app.get('db').create_product([name, description, price, image_url]).then(() => {
            res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    },

    //Read Product Function
    getOne: (req, res) => {
        let {id} = req.params;

        req.app.get('db').read_product([id]).then((product) => {
            res.status(200).send(product);
        }).catch((error) => {
            res.status(500).send('Could not get product');
            console.log(error);
        });
    },

    //Read All Products Function
    getAll: (req, res) => {
        req.app.get('db').read_products().then((products) => {
            res.status(200).send(products);
        }).catch((error) => {
            res.status(500).send('Could not get products');
            console.log(error);
        });
    },

    //Update Product Function
    update: (req, res) => {
        let {id} = req.params;
        let {desc} = req.query;

        req.app.get('db').update_product([desc, id]).then(() => {
            res.status(200).send('Updated');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    },

    //Delete Product Funciton
    delete: (req, res) => {
        let {id} = req.params;

        req.app.get('db').delete_product([id]).then(() => {
            res.status(200).send('Deleted');
        }).catch(() => {
            res.status(500).send('Failed');
        });
    }
}