import time
import random
from db import get_connection

STATUSES = ['Wysłana', 'W drodze', 'Dostarczona']

def update_statuses():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, status FROM parcels")
    for row in cursor.fetchall():
        parcel_id, status = row
        if status in STATUSES and status != 'Dostarczona':
            next_status = STATUSES[STATUSES.index(status) + 1]
            cursor.execute("UPDATE parcels SET status=%s, last_updated=NOW() WHERE id=%s", (next_status, parcel_id))
    conn.commit()
    cursor.close()
    conn.close()

if __name__ == '__main__':
    print("Worker started")
    while True:
        update_statuses()
        time.sleep(random.randint(30,120))
