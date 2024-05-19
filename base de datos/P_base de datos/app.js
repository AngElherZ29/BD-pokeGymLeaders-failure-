const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3306

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'angel',
    password        : '123456789',
    database        : 'gym\_leaders'
})

// Get all gyms
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gyms', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


// Get a gyms by ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gyms WHERE id = ?', [req.params.gym_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / gyms
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from gyms WHERE id = ?', [req.params.gym_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gyms with the Record ID: ${[req.params.gym_id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})


// Add a record / gyms
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO gyms SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gyms with the speciality: ${params.gym_type} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a record / gyms
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, gym_type, } = req.body

        connection.query('UPDATE gyms SET gym WHERE id = ?', [gym_id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym with the name: ${gym_type} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// Get all gym_battles
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gym_battles', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


// Get gym_battles  by ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gym_battles WHERE challenger_trainer_id && challenged_gym_leader_id= ?', [req.params.challenger_trainer_id,challenged_gym_leader_id	
        ], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / gym_battles
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from gym_battles WHERE challenger_trainer_id && challenged_gym_leader_id = ?', [req.params.challenged_gym_leader_id,challenger_trainer_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_battles with the Record ID: ${[req.params.challenged_gym_leader_id,challenger_trainer_id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})


// Add a record / gym_battles
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO gym_battles SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_battles with the result && date: ${params.result,date} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a record / gym_battles
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { challenger_trainer_id, date,result,challenged_gym_leader_id } = req.body

        connection.query('UPDATE gym_battle SET result WHERE challenger_trainer_id && challenged_gym_leader_id= ?', [challenger_trainer_id, date,result,challenged_gym_leader_id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_battle with the result: ${result} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

// Get all gym_leaders
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gym_leaders', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


// Get gym_Leaders  by ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from gym_Leaders WHERE gym_Leader_id= ?', [req.params.gym_Leader_i], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / gym_leaders
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from gym_leaders WHERE gym_Leader_id = ?', [req.params.gym_Leader_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_leader with the Record ID: ${[req.params.gym_Leader_id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})


// Add a record / gym_leaders
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO gym_leaders SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_leaders with the first_name, last_name, specialty: ${params.first_name, last_name, specialty} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a record / gym_leaders
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { gym_leader_id, first_name, last_name, specialty } = req.body

        connection.query('UPDATE gym_leader SET speciality WHERE gym_leader_id= ?', [gym_leader_id, first_name, last_name, specialty] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`gym_leader with the name: ${first_name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Get all trainers
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from trainers', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})


// Get a trainers by ID
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from trainers WHERE trainer_id = ?', [req.params.trainer_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / trainers
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from trainers WHERE trainer_id = ?', [req.params.trainer_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`trainer with the Record ID: ${[req.params.trainer_id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})


// Add a record / trainer
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO trainers SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`trainers with the name: ${params.first_name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a record / gyms
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { trainer_id, first_name,last_name, village, challenged_gym_id } = req.body

        connection.query('UPDATE trainers SET  WHERE trainer_id = ?', [trainer_id, first_name,last_name, village, challenged_gym_id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`trainer with the name: ${first_name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})





// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))