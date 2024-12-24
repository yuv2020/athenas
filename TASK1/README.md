* Backened Project:- 
    
    > Setup the project:
        >> Install express to handle the API endpoint.
        
* Frontend: React
    > Setup the project:
        >> Create a new React app using create-react-app.
        >> Install axios to fetch data from the backend.

    > Fetch API Data:
        >> Use useEffect to fetch data when the component mounts.
        
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | http://localhost:5000 |

#### Get item

```http
  GET /api/candidates/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |