import psycopg2

con = psycopg2.connect(database="testdb", user="postgres", password="dru", host="localhost", port="5432")

print("Database opened successfully")