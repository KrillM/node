const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./customer")(sequelize, Sequelize);
db.Orders = require("./orders")(sequelize, Sequelize);

// join: 1대다
db.Customer.hasMany(db.Orders, {
  // onDelete: 'cascade', <- 뒤에 조건 더 적었을 때
  foreignKey: 'custid', // <- 참조 무결성을 준수할 때
  //sourceKey: 'orderNumber' <- 참조 무결성을 준수하지 않을 때
});
db.Orders.belongsTo(db.Customer, {
  // onDelete: 'cascade', <- 뒤에 조건 더 적었을 때
  foreignKey: 'custid', // <- 참조 무결성을 준수할 때
  //targetKey: 'customerid' <- 참조 무결성을 준수하지 않을 때
});

/** 다대다 관계일 때 관계를 맺어주는 중계 테이블이 생성된다.
 * 그러므로 둘 다 비슷하게 작성한다.
 * db.Student.belongsToMany(Sam, {
 *  through: StudentSamRelation
 * });
 * 
 * db.Sam.belongsToMany(Student, {
 *  through: StudentSamRelation
 * });
 */

module.exports = db;