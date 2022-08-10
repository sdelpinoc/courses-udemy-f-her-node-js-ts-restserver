const dbConfig = {
    'database': process.env.MYSQL_DB,
    'name': process.env.MYSQL_USER,
    'password': process.env.MYSQL_PASSWORD,
    'host': process.env.MYSQL_HOST,
};

export default dbConfig;