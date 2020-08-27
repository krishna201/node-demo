

module.exports = {
  // insert data quary
    insertdata: (db, data) => {
         console.log(data)
         let record = new db(data);
        return new Promise((resolve, reject) => {
            record.save((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result)
                }
            })
        })
    },
  // insert Many data quary
  insertManydata: (db, data) => {
         console.log(data)
        return new Promise((resolve, reject) => {
            db.insertMany(data, function(err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
        })
    },
    //get all data quary
     find : async(db, data = {}, mysort = {}) => {
        return new Promise((resolve, reject) => {
            console.log("mysort",mysort)
            db.find(data).sort(mysort).exec((err, result)=> {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
              });
        })
    },
    //delete data by id
    deletedata : (db, data = {}, ) => {
        return new Promise((resolve, reject) => {
            db.remove(data, function(err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
        })
    },
    // update data by id
    update : (db, checkData, updateData) => {
        return new Promise((resolve, reject) => {
            db.findOneAndUpdate(checkData, { $set: updateData }, { new: true }, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },
     findOne : (db, data) => {
        return new Promise((resolve, reject) => {
            db.findOne(data, function(err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
        })
    }
}