function Visitor(Sequelize, DataTypes){
    return Sequelize.define(
      "crews", 
      { 
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        }, 
        nickname: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        introduction: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
      }, 
      { 
        tableName: "crews",
        freezeTableName : true, 
        timestamps: false
      } 
    );
  }
  
  module.exports=Visitor;