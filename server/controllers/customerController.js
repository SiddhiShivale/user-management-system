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