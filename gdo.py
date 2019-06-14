#!/usr/bin/python
#Simple script to test if the relay is functional
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
# init list with pin numbers

GPIO.setup(4, GPIO.OUT)
print "THE RELAY IS ON FOR 30 SECONDS"
GPIO.output(4, GPIO.LOW)
time.sleep(30)

print "THE RELAY SHOULD BE OFF NOW"
GPIO.output(4, GPIO.HIGH)
