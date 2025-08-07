const pool = require('./config/db');

const setupDatabase = async () => {
  try {
    console.log('🔧 Setting up database tables...');

    // Create EV_Master_Data table
    const createEVTable = `
      CREATE TABLE IF NOT EXISTS EV_Master_Data (
        EV_ID SERIAL PRIMARY KEY,
        VUID VARCHAR(255) NOT NULL,
        U_ID VARCHAR(255) NOT NULL,
        Category VARCHAR(100) NOT NULL,
        Manufacturers VARCHAR(255) NOT NULL,
        Model VARCHAR(255) NOT NULL,
        Purchase_Year INTEGER NOT NULL,
        Energy_Consumed DECIMAL(10,2) NOT NULL,
        Primary_Charging_Type VARCHAR(100) NOT NULL,
        Range INTEGER NOT NULL,
        Grid_Emission_Factor DECIMAL(10,2) NOT NULL,
        Top_Speed INTEGER,
        Charging_Time INTEGER,
        Motor_Power VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createEVTable);
    console.log('✅ EV_Master_Data table created/verified');

    // Create Solar_Panel_Master_Data table
    const createSolarTable = `
      CREATE TABLE IF NOT EXISTS Solar_Panel_Master_Data (
        Solar_ID SERIAL PRIMARY KEY,
        SUID VARCHAR(255) NOT NULL,
        U_ID VARCHAR(255) NOT NULL,
        Installed_Capacity VARCHAR(100) NOT NULL,
        Installation_Date DATE NOT NULL,
        Energy_Generation_Value DECIMAL(10,2) NOT NULL,
        Grid_Emission_Factor DECIMAL(10,2) NOT NULL,
        Inverter_Type VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createSolarTable);
    console.log('✅ Solar_Panel_Master_Data table created/verified');

    // Create Tree_Plantation table
    const createTreeTable = `
      CREATE TABLE IF NOT EXISTS Tree_Plantation (
        Tree_ID SERIAL PRIMARY KEY,
        TID VARCHAR(255) NOT NULL,
        UID VARCHAR(255) NOT NULL,
        TreeName VARCHAR(255) NOT NULL,
        BotanicalName VARCHAR(255) NOT NULL,
        PlantingDate DATE NOT NULL,
        Height DECIMAL(10,2),
        Location TEXT NOT NULL,
        ImageURL TEXT,
        CreatedBy VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await pool.query(createTreeTable);
    console.log('✅ Tree_Plantation table created/verified');

    console.log('🎉 Database setup completed successfully!');
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    throw error;
  }
};

// Run setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
    .then(() => {
      console.log('✅ Database setup completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Database setup failed:', error);
      process.exit(1);
    });
}

module.exports = setupDatabase; 