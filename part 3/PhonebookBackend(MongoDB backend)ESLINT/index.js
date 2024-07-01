const express = require('express')
const app = express()
const morgan = require('morgan')

const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
//Definingf a custom token for morgan to log the request body for POST requests
morgan.token('req-body',(req) => {
  if(req.method === 'POST'){
    return JSON.stringify(req.body)
  }
  return''
})

//MiddleWare for logging with custom format
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'))


app.get('/api/persons/', (request, response) => {
  Person.find({}).then(persons => {
    if(persons){

      response.json(persons)
    }else {
      response.status(404).end()
    }
  }).catch(error => {
    console.log(error)
    response.status(500).end()
  })
})

app.post('/api/persons/', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'Name missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number ,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => {
    console.log(error)
    response.status(500).json({ error: 'Failed to save Person' })
  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler)

//Port number is described here
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})

