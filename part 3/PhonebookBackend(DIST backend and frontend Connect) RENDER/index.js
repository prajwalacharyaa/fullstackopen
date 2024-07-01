const express = require('express');
const app = express();
const morgan = require("morgan")
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use(express.static('dist'))
app.use(morgan('tiny'));

//Definingf a custom token for morgan to log the request body for POST requests
morgan.token('req-body',(req)=>{
    if(req.method === 'POST'){
        return JSON.stringify(req.body)
    }
    return"";
});

//MiddleWare for logging with custom format
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :req-body"))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Phonebook API');
  });
  

app.get('/info', (request, response) => {
    const currentTime = new Date()
    response.send(
        `<p>Phonebook has info for ${persons.length} people</br>${currentTime}</p>`
    );
})

app.get('/api/persons/', (request, response) => {
    response.json(persons);
}); 

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(p => p.id === id);

    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
})

app.post('/api/persons', (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    const person = {
        id: Math.floor(Math.random() * 10000),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

