// orm은 객체와 데이터베이스의 테이블을 맵핑하며 테이블의 구조를 정의한다.
// sequelize를 통해 테이블의 구조를 정의할 필요가 있다.

function Visitor(Sequelize, DataTypes){
  return Sequelize.define( // 테이블(모델) 정의, sequelize define 함수를 이용한다.
    "visitor", // 테이블 이름을 적는다.
    { // 컬럼을 정의한다.
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }, 
      username: {
        type: DataTypes.STRING(10),
        allowNull: false
      }, 
      comment: {
        type: DataTypes.TEXT("medium")
      }
    }, 
    { // 부가적인 것을 정의한다.
      tableName: "visitor",
      freezeTableName : true, 
      // 가끔 단수형인 테이블 이름을 sql문을 전송할 때 복수형으로 변경되는 경우를 방지한다.
      // 직접 sql 코드를 작성하지 않기 때문에 생기는 문제점이다.
      timestamps: false
      // 기본값 중 하나가 데이터의 등록, 변경할 때 시간을 자동으로 저장한다. 
      // 등록시간을 지정하지 않은 테이블일 경우 insert error 발생한다.
    },
  );
}
module.exports=Visitor;