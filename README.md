# ACN-Monitor
This project monitors sACN (E 1.31) traffic on a local network which is used to transmit show control data in
theatrical and film environments. It is a stack of html, Javascript, and Python that runs on a server like Apache
with MySQL. To setup the back end, install the web server and MySQL. The default database that the data will be routed
to is "DMX_DATA". DMX uses "universes" as a term for each set of 512 bytes of values. This project currently monitors
4 universes, each one stored as a table in the DMX_DATA database. The tables follow "UNIVERSE_X", where X is the universe number,
as the convention for naming and start at 1.
<p>CONFIGURE THE DATA BASE BEFORE USE<p>
Each table needs to be setup with 512 rows and two collums, VALUE and CHANNEL.<p>
The Python script also requires the MySQLconnector for python module to function. For best results the script should also
be setup to run at startup. 
