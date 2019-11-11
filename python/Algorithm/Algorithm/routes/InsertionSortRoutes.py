import falcon
import json

import algorithm.Selection_sort as selection_sort

class InsertionSortRoutes(object):

    def on_post(self, req, resp):
        ''' Launch a new computation for this algorithm '''
        json_data = req.media
        print(json_data)

        sorted_array = selection_sort.selection_sort(json_data['data'])

        return_value = {"data":sorted_array}
        print("return value {}".format(return_value))
        resp.body = json.dumps(return_value)