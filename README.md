# CRUD - Create, Read, Update, Delete (Car API)



## Instructions to Run

### Local Test
- `npm i` will install node_modules 
- `npx sequelize-cli db:migrate` will update the database
- `npm run dev` will run the database + api



### Routes
- base_url: http://localhost:3000

### Cars
 - POST `localhost:3000/cars/:id` -  Create one car on the database
```js
request body:

{
    Marca       string    `json:"marca"`
    Modelo      string    `json:"modelo"`
    Cor         string    `json:"cor"`
    Ano         number    `json:"ano"`
}
```
 - GET `localhost:3000/cars` - Get all cars on the database, return array

```js
response:

{
    Id          number    `json:"id"`
    Marca       string    `json:"marca"`
    Modelo      string    `json:"modelo"`
    Cor         string    `json:"cor"`
    Ano         number    `json:"ano"`
    Estoque     number    `json:"estoque"`
    CreatedAt   date      `json:"createdAt"`
    UpdatedAt   date      `json:"updatedAt"`
    
}
```
- DEL `localhost:3000/cars/:id` - Wipe the table line from the inserted id
```js
response:

{
    Sucess  boolean `json:"success"`
    Status  string  `json:"deleted"`

}
```
- POST `localhost:3000/cars/updateStock/:id/:amount` - Update car stock on database with the desired amount

```js
response:

{
    Sucess boolean `json:"success"`
}
```
- PUT `localhost:3000/cars/:id` - Generic update, update any desired status from the database
```js
request body:

{
    Marca       string    `json:"marca"`
    Modelo      string    `json:"modelo"`
    Cor         string    `json:"cor"`
    Ano         number    `json:"ano"`
}
```
```js
response:

{
    Sucess boolean `json:"success"`
}
```

## Dependencies
- [Sequelize](http://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [Sqlite](https://www.sqlite.org/index.html)
