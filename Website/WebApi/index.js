const express = require('express');
const mysql = require('mysql2/promise');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
  const routeInfo = 
  `  <h1>Available Routes</h1>
    <ul>
      <li><strong>POST /create-account</strong>: Create a new user account</li>
      <ul>
        <li><strong>Body Parameters:</strong></li>
        <li><code>username</code> (string) - The username for the new account</li>
        <li><code>password</code> (string) - The password for the new account</li>
        <li><code>email</code> (string) - The email for the new account</li>
      </ul>
    </ul>
    `;
    res.send(routeInfo)
})
app.get('/serverinfo',(req,res)=>{
  const serverInfo =`
  <h1>Server Information </h1>
  <li><strong>Realm List</strong></li>
  <ul>
    <li><strong>Frostmane</strong></li>
  </ul>
  `;
  res.send(serverInfo)
})

app.get('/realms', (req, res) => {
  const realms = [
    { name: 'Frostmane', type: 'PVP', population: 'High' },
    { name: 'Silvermoon', type: 'PVE', population: 'Medium' },
    { name: 'Draenor', type: 'PVP', population: 'Low' }
  ];
  res.json(realms);
});


app.post('/create-account', async (req, res) => {
  const { username, password, email } = req.body;

  // Validate input
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Username, password, and email are required' });
  }

  try {
    // Generate salt and verifier
    const salt = crypto.randomBytes(32);
    const h1 = crypto.createHash('sha1').update(`${username.toUpperCase()}:${password.toUpperCase()}`).digest();
    const h2 = crypto.createHash('sha1').update(Buffer.concat([salt, h1])).digest();

    const g = BigInt(7);
    const N = BigInt('0x894B645E89E1535BBDAD5B8B290650530801B18EBFBF5E8FAB3C82872A3E9BB7');
    const h2Int = BigInt('0x' + h2.toString('hex'));
    const verifier = g ** h2Int % N;

    // Database connection
    const connection = await mysql.createConnection({
      host: 'your-database-host',
      user: 'your-database-user',
      password: 'your-database-password',
      database: 'acore_auth',
    });

    // Insert account into the database
    const [rows] = await connection.execute(
      'INSERT INTO account (username, salt, verifier, email, reg_mail) VALUES (?, ?, ?, ?, ?)',
      [username, salt, Buffer.from(verifier.toString(16), 'hex'), email, email]
    );

    await connection.end();

    if (rows.affectedRows === 1) {
      res.status(200).json({ message: 'Account created successfully!' });
    } else {
      res.status(500).json({ message: 'Failed to create account' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
