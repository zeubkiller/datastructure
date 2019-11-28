import psycopg2

class ListValuesToComputeDbSchema:
    PRIMARY_KEY = "ID INT PRIMARY KEU NOT NULL"
    LIST_VALUES = "VALUES INT[] NOT NULL"

    def name():
        return "LIST_VALUE_TO_SORT"

    def schema():
        return "{}, {}".format(ListValuesToComputeDbSchema.PRIMARY_KEY, ListValuesToComputeDbSchema.LIST_VALUES)

class DatabaseInterface:

    def __init__(self, database, user, password, host="localhost", port="5432"):
        self._database = database
        self._user = user
        self._password = password
        self._host = host
        self._port = port

    def deconnect_from_database(self):
        if connection:
            self.cursor.close()
            self.connection.close()
            print("Connection with database is closed") 

    def connect_to_database(self):
        try:
            #Open the database
            self.connection = psycopg2.connect(database="postgres", user="postgres", password="dru", host="localhost", port="5432")

            self.cursor = self.connection.cursor()
        except(Exception, psycopg2.Exception) as error:
            print("Error as occured: {}".format(error))

    def create_table_if_not_existing(self, name, schema):
        create_table = 'CREATE TABLE {} ({})'.format(schema.name(), schema.schema())

        cursor.execute(create_table)
        connection.commit()
        print("Succefully created a table {}".format(schema.name()))
    
    def select_item(self, id):

    def insert_item(self, id, values):
        insert_item = "INSERT INTO testDb (ID, VALUE) VALUES (%s, %s)"
        record_to_insert = (1, 12)

        cursor.execute(insert_item, record_to_insert)
        connection.commit()
        print("Element {} has been inserted".format(record_to_insert))

    def update_item(self, id, values):

    def delete_item(self, id, values):


