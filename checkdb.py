import sqlite3

conn= sqlite3.connect("instance/users.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM user")
print(cursor.fetchall())

conn.close()