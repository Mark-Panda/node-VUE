let Title = require('../models/Title')


async function findById(id) {
    await Title().findById(id)
        .then( (title) => {
            return title[0].dataValues
        })
}


async function findALl(){
    let result = []
    await Title().findAll()
            .then( (title) => {
                let result = []
                (title instanceof Array) ? title = title : title = [title]
                title.forEach( v => {
                  console.log('sss',v.dataValues);
                  result.push(v.dataValues)
                })
                return result
            })
}

async function all(){
    console.log('hhhhhhh');
    let result = []
    await Title().findAll()
            .then((title) => {
              (title instanceof Array) ? title = title : title = [title]
              title.forEach( v => {
                console.log('sss',v.dataValues);
                result.push(v.dataValues)
              })
            })
    return result
}

async function findByname(titleName,limits,offsets){
    await Title().findAll({
        where: {
            title: titleName
        },
        limit:limits,
        offset: offsets
    }).then( (title) => {
        console.log('----',title[0].dataValues);
    })
}

module.exports = {findALl, all, findById, findByname}
/* module.exports = async function insert(titleObject){
    await Title.create(titleObject)
} */


