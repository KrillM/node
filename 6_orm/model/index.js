const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// 개발 중일 때는 development, 배포 중일 때는 production

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // sequelize 객체 생성

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// const Visitor = require("./Visitor")
// db.Visitor = Visitor.(sequelize, Sequelize); 두 코드를 합친 게 밑의 코드다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);
//db.Visitor에는 sequelize로 Visitor 테이블을 정의한 객체를 담는다.

module.exports = db;