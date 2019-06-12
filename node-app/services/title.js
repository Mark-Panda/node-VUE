let Title = require('../models/Title')

module.exports = async function () {
    await find(id){
        Title.find(id)
            .then( (title) => {
                return title
            })
    }

    await findAll(){
        Title.findAll()
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
}
