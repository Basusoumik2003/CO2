const pool = require('../db');

// ✅ Helper to generate unique ev_tran_id
const generateEVTranId = () => {
  return 'EVT' + Math.floor(100000 + Math.random() * 900000); // Example: EVT123456
};

// ✅ Create new EV transaction
exports.createTransaction = async (req, res) => {
  try {
    const ev_tran_id = generateEVTranId(); // Unique ID generate yahan
    const { ev_id, active_distance } = req.body;
    
    // created_date backend se default current date set
    const created_date = new Date();

    const query = `
      INSERT INTO ev_transaction (ev_tran_id, ev_id, active_distance, created_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [ev_tran_id, ev_id, active_distance, created_date];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

// ✅ Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ev_transaction');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

// ✅ Get single transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM ev_transaction WHERE ev_tran_id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transaction' });
  }
};

// ✅ Update transaction
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { active_distance } = req.body;

    // Update ke time bhi created_date ko current date set kar diya (if needed)
    const created_date = new Date();

    const query = `
      UPDATE ev_transaction
      SET active_distance = $1, created_date = $2
      WHERE ev_tran_id = $3
      RETURNING *;
    `;
    const values = [active_distance, created_date, id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};

// ✅ Delete transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM ev_transaction WHERE ev_tran_id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};
// ✅ Get all transactions by ev_id
exports.getTransactionsByEvId = async (req, res) => {
  try {
    const { ev_id } = req.params;

    const query = 'SELECT * FROM ev_transaction WHERE ev_id = $1';
    const result = await pool.query(query, [ev_id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No transactions found for this ev_id' });
    }

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch transactions by ev_id' });
  }
};
