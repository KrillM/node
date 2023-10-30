let users = `krille//1234//크릴
yena//1111//예나
jisu//1212//지수`

    let infos = users.split('\n');
    // console.log(infos);

    // for(let i=0;i<infos.length;i++){
    //     console.log(infos[i]);
    // }

    let account1 = infos[0].split("//")
    // for(let i=0;i<account1.length;i++){
    //     console.log(account1[i]);
    // }

    let account2 = infos[1].split("//")
    // for(let i=0;i<account2.length;i++){
    //     console.log(account2[i]);
    // }

    let account3 = infos[2].split("//")
    // for(let i=0;i<account3.length;i++){
    //     console.log(account3[i]);
    // }


exports.checkAccount = (req, res) => {
    const name1 = account1[0];
    const password1 = account1[1];
    const nickname1 = account1[2];

    const name2 = account2[0];
    const password2 = account2[1];
    const nickname2 = account2[2];

    const name3 = account3[0];
    const password3 = account3[1];
    const nickname3 = account3[2];

    return {name1,password1,nickname1,name2,password2,nickname2,name3,password3,nickname3}
}