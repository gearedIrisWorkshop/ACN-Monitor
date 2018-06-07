import socket
import struct
import sys 
import mysql.connector
#mysql login 
USER = 'PYTHON_PROGACN'
PASSWORD = 'PYTHON'
HOST = '127.0.0.1'
DATABASE = 'DMX_DATA'
###

SIZE_OF_ACN = 638
NUM_OF_UNI = 4
MC = ('239.255.0.')
uni = '3'
PORT = 5568
MCip = MC + uni
TIMEOUT = 1
acn = []
conx = mysql.connector.connect(user=USER,password=PASSWORD,
                                   host=HOST, database=DATABASE)


cursor = conx.cursor(buffered=True)
#sql objects to handle table name and purge old data
sqlUNI = "UNIVERSE_"+ uni
sqlCLEARDATA = ("UPDATE %s"
                " SET VALUE='0'")

#x is the universe number to pull data from
def getBroadcast(x):
  # creat socket object AF_INET type of ip, SOCK_DGRAM type of proto
  sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  sock.settimeout(TIMEOUT)
  sock.bind(('',PORT))
  #create an ip address object for group to join
  group = socket.inet_aton(x)
  #now join the multicast group on all network interfaces 
  mreq = struct.pack('4sL', group,socket.INADDR_ANY)
  sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP,mreq)
  data = []
  try:
    data = bytearray(sock.recv(1024))
  except:
    #close the socket if there is a time out
    #so it does not block the next call
    sock.close()
    return -1
    #return -1 to indicate a failed socket read
  return data

def updateSQL(UNIVERSE, DATA):
  ###SQL WORK
  
  if len(DATA) == SIZE_OF_ACN and DATA[125] == 0:
    #if valid acn packet drop non DMX data
    DATA = bytearray(DATA[125:])
    for i in range(1,512):
      #loop to update database
      buf = int(DATA[i])
      sqlUPDATE = ("UPDATE UNIVERSE_%s" " SET VALUE=%s"
               " WHERE CHANNEL=%s" % (UNIVERSE,DATA[i],i))
      cursor.execute(sqlUPDATE)
    conx.commit()
  
  ###END OF SQL WORK
  ###blankSQL clears old data and resets the database to all 0's
def blankSQL(UNIVERSE):
  sqlNULLDATA = ("UPDATE UNIVERSE_%s"
                " SET VALUE=0" % (UNIVERSE))
  cursor.execute(sqlNULLDATA)
  conx.commit()

  
def main():
  
  while (True):
    
    for i in range( 1, NUM_OF_UNI + 1):  

      uni = str(i)        #get string of i in loop
      pulledACN = False   #set this iteration's pull status
      
      try:
        #connect the socket
        acn = getBroadcast((MC+uni))
        if acn != -1:
          pulledACN = True
          #if acn valid then set pull status
      
      except:
        #make sure the pulled status is false if
        #any error happens
        pulledACN = False



      if pulledACN == True:
        #if pull status is true then initiate the SQL functions
        try:
          #update sql for this iteration
          updateSQL(uni, acn)
        except:
          print("OOPS!, SQL database problem.",sys.exc_info()[0])
          
      else:
       #If the pull status is False then populate the DB
       #with zeroes and wipe old data 
        try:
         
          blankSQL(uni)
        except:
          print("OOPS! SQL database problem.",sys.exc_info()[0])
        
        #end of IF branch
      #end of for loop
          
          
        
      
     
  
if __name__ =="__main__":
  main()
