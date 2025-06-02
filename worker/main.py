import time

def main():
    print("Worker started and running...")
    while True:
        print("Worker is alive")
        time.sleep(10)

if __name__ == '__main__':
    main()
