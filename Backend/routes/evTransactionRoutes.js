const router = require('express').Router();
const controller = require('../controllers/evTransactionController');

router.post('/evtransaction', controller.createTransaction);
router.get('/evtransaction', controller.getAllTransactions);
router.get('/evtransaction/:id', controller.getTransactionById);
router.put('/evtransaction/:id', controller.updateTransaction);
router.delete('/evtransaction/:id', controller.deleteTransaction);
router.get('/by-ev/:ev_id', controller.getTransactionsByEvId);

module.exports = router;
