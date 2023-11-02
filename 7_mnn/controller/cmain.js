const { Customer, Orders, Sequelize } = require("../model")
const operator = Sequelize.Op;

exports.main = async(req, res) => {
    // user의 주문 목록 "custname"과 함께 join
    const customer = await Customer.findAll({
        attributes: ["custid", "addr"],
        where: { birth: { [operator.gte]:["2000-01-01"] } },
        include: [{
            model: Orders,
            attributes: { exclude: ["custid"]},
            // where: {}
        }],
        raw: true
    });
    res.send(customer);
}