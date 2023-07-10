const incomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = incomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required.' })
        } else if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive value' })
        }
        await income.save()
        res.status(200).json({ message: 'Income Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server error: ', error })
    }

    console.log(income)
}