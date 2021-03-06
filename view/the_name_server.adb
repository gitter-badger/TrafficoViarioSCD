with Text_IO;
with Ada.Calendar;
with remote_types;

use Text_IO;
use Ada.Calendar;
use remote_types;

package body the_name_server is

   procedure registra_webserver(my_web: Access_WebServer_Remote_Interface) is
   begin
      web:= my_web;
   end registra_webserver;

   function get_webServer return Access_WebServer_Remote_Interface is
   begin
      loop
         delay until (Clock + 1.0);
         exit when web/=null;
      end loop;
      return web;
   end get_webServer;

   function get_num_quartieri return Integer is
   begin
      return num_quartieri;
   end get_num_quartieri;

end the_name_server;
