const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Get all bootcamps'})
});
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Get one bootcamp'})
});
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp'})
});
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Update one bootcamp'})
});
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Delete one bootcamp'})
});

module.exports = router;