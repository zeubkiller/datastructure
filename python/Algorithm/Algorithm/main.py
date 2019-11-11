import falcon

class Ressources(object):
    def on_get(self, req, resp):
        #Handle GET request
        resp.status = falcon.HTTP_200
        resp.body = ('{"dru":"Dru mega dru"')


app = falcon.API()

ressource = Ressources()

app.add_route('/ressources', ressource)