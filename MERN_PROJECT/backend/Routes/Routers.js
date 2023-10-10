const express=require("express")
const { Createbook, Deletebook, Getbook, Bookupdate, getAllbooks, filterbyname, getAllbooksname } = require("../Folders/Bookcrud")
const signup = require("../Folders/signin")
const login = require("../Folders/Login")
const createadmin = require("../Folders/Createadmin")
const protect = require("../Middleware/Token");
const { Createclient, getAllclients, Deleteclient, Getclient, Clientupdate, filterbyclientname, getAllCLIENTsname } = require("../Folders/Clientcrud")
const { Createorders, getAllorders, DeleteOrder, Getorders, Orderupdate } = require("../Folders/Ordercrud")
const signup_USER = require("../Folders/Usersigin")
const login_USER = require("../Folders/Userlogin")
const { Createcart, getAllitemscart, Deletebookcart, increment, DeleteAll, Createcart1, getAllitemscart1,  } = require("../Folders/Cartcrud")



const router=express.Router()
const middleware=[protect]

router.route('/createadmin').post(createadmin)
router.route('/signin').post(signup)
router.route('/login').post(login)

router.route('/signin_user').post(signup_USER)
router.route('/login_user').post(login_USER)

router.route('/createbook').post(Createbook)
router.route('/deletebook/:id').delete(Deletebook)
router.route('/getbook/:id').get(Getbook)
router.route('/updatebook/:id').put(Bookupdate)
router.route('/getbooks').get(getAllbooks)
router.route('/filterbyname/:name').get(filterbyname)

router.route('/createclient').post(Createclient)
router.route('/getclients').get(getAllclients)
router.route('/deleteclient/:id').delete(Deleteclient)
router.route('/getclient/:id').get(Getclient)
router.route('/updateclient/:id').put(Clientupdate)
router.route('/filterbyclientname/:name').get(filterbyclientname)

router.route('/createorders').post(Createorders)
router.route('/getorders').get(getAllorders)
router.route('/deleteorder/:id').delete(DeleteOrder)
router.route('/getorder/:id').get(Getorders)
router.route('/updateorder/:id').put(Orderupdate)

router.route('/getAllbooksname').get(getAllbooksname)
router.route('/getAllclientsname').get(getAllCLIENTsname)

router.route('/addtocart').post(Createcart)
router.route('/getcart').get(getAllitemscart)
router.route('/deletebookcart/:id').delete(Deletebookcart)
router.route('/increment/:id').put(increment)
router.route('/delete_all').delete(DeleteAll)

router.route('/addtocart1/:id').post(Createcart1)
router.route('/getcart1/:id').get(getAllitemscart1)


module.exports = router;