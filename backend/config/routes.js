const express = require('express')
const authenticateUser = require('../app/middlewares/authenticateUser')
const usersCtlr = require('../app/controllers/users-Ctlr')
const expensesCtlr = require('../app/controllers/expenses-Ctlr')
const categoryCtlr = require('../app/controllers/categories-Ctlr')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest:'image/'})
    

router.post('/api/register', usersCtlr.register)
router.post('/api/login', usersCtlr.login)
router.get('/api/users', authenticateUser, usersCtlr.account)
router.put('/api/users', authenticateUser, usersCtlr.update)
router.delete('/api/users', authenticateUser, usersCtlr.destroy)
router.post('/api/profile', authenticateUser, upload.single('avatar'), usersCtlr.profile)
router.post('/api/users/deletAccount',authenticateUser,usersCtlr.deleteAccount)

router.post('/api/category', authenticateUser, categoryCtlr.create)
router.get('/api/category', authenticateUser, categoryCtlr.list)

router.get('/api/expense', authenticateUser, expensesCtlr.list)
router.post('/api/expense', authenticateUser, expensesCtlr.create)
router.get('/api/expense/:id', authenticateUser, expensesCtlr.read)
router.put('/api/expense/:id', authenticateUser, expensesCtlr.update)
router.delete('/api/expense', authenticateUser, expensesCtlr.handleDestory)
router.get('/api/search',authenticateUser, expensesCtlr.search)
router.get('/api/check',authenticateUser, expensesCtlr.check)
router.get('/api/sort',authenticateUser,expensesCtlr.filter)

module.exports = router