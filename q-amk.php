<?php
$mids1=$_POST['ids1'];
$mdate1=$_POST['date1'];
$mdate2=$_POST['date2'];
$hagk=pg_connect("host=192.168.114.199 port=5432 dbname=ektov user= password=") or die("Could not connect to Database!");
$queryst = "select distinct p.platformname,a.ids, a.date_obs, a.dd, round(a.ff,1) as wind, round(a.fx,0) as poryv, round(a.t,2) as t, a.press, a.rh,a.r "
        . "from amk.amk10 a,amk.passport p   "
        . "where cast(p.wmo_id as integer)=a.ids and a.ids=$mids1 "
        . "and (a.date_obs between $mdate1 and $mdate2)  and press>-99 "
        . "order by date_obs desc"; 

$resultst = pg_query($hagk, $queryst);
$i=1;
//$row=array();
$row=pg_fetch_all($resultst);
//echo "<br>".$row;
echo json_encode($row); 
//echo $row; 
?>