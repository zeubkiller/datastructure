import falcon

from routes.InsertionSortRoutes import InsertionSortRoutes 


app = falcon.API()

insertion_sort_routes = InsertionSortRoutes()

app.add_route('/insertion_sort', insertion_sort_routes)