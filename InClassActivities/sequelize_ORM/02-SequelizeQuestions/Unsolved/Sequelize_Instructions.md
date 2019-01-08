* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.


  	- Answer: What advantages does it offer?

  	- Answer: How do I install it? How do I incorporate it into my app?

	  npm sequelize 
	  To get the ball rollin' you first have to create an instance of Sequelize. Use it the following way:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql'
});
This will save the passed database credentials and provide all further methods.

Furthermore you can specify a non-default host/port:

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: "my.server.tld",
  port: 9821,
})
If you just don't have a password:

const sequelize = new Sequelize({
  database: 'db_name',
  username: 'username',
  password: null,
  dialect: 'mysql'
});
You can also use a connection string:

const sequelize = new Sequelize('mysql://user:pass@example.com:9821/db_name', {
  // Look to the next section for possible options
})


  	- Answer: What the heck is a Sequelize model? What role will it play?

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
