import pool from "../db/db.js";

const persontest = (req, res) => {
  const bla = req.query.bla;
  const meat = req.query.meat;
  res.send(`Hello World! this ${bla} is eating ${meat}`);
};

const pgTestPerson = async (req, res) => {
  const FIRSTNAME = req.query.firstName;
  const LASTNAME = req.query.lastName;

  try {
    const result = await pool.query(
      // `SELECT
      // businessentityid,
      // persontype,
      // title,
      // firstname,
      // middlename,
      // lastname,
      // suffix,
      // additionalcontactinfo,
      // modifieddate FROM person.person

      `SELECT
      businessentityid,
      firstname,
      lastname,
      phonenumber,
      phonenumbertype,
      emailaddress,
      emailpromotion,
      addresstype,
      addressline1,
      addressline2,
      city,
      stateprovincename,
      postalcode,
      countryregionname
      FROM sales.vindividualcustomer WHERE firstname ILIKE $1 || '%' AND lastname ILIKE $2 || '%'`,
      [FIRSTNAME, LASTNAME]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
  }
};

export default { persontest, pgTestPerson };
