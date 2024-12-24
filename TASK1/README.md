
## Build a Candidate List Viewer:

        > Use React to create a page that displays a list of candidates with mock data fetched from an API.

## Backened API
        > Use Node.js/Express to create a single API endpoint (/api/candidates) that serves a hardcoded list of 10 candidate objects.

## Frontend Requirements:
        > Fetch data from the API and display it in a table format.

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