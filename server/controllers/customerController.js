/**
 * Get /
 * Homepage
 */

exports.homePage = async (req, res) => {
    
    const locals = {
        title: 'NodeJs',
        description: 'Free NodeJs User Management System'
    }
    
    res.render('index', locals);

}

/**
 * Get /
 * New customer form
 */

exports.addCustomer = async (req, res) => {
    
    const locals = {
        title: 'Add New Customer - NodeJs',
        description: 'Free NodeJs User Management System'
    }
    
    res.render('customer/add', locals);

}