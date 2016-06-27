

<?php

//header("Content-type: application/json; charset=utf-8");
//header(" charset=utf-8");
 include 'phpdbclass.php';


try {
 
	 

	 $action = $_POST["action"];
	 $id = $_POST["id"];
	 $categroy = $_POST["categroy"];
	 $imgpath = $_POST["imgpath"];
	 $title = $_POST["title"];
	 $desc = $_POST["desc"];

	$db = new db();
	$result;

	switch ($action) {
	case "add":$result = $db->insertdata($title, $imgpath, $categroy, $desc);
		break;
	case "del":$result = $db->deletedata($id);
		break;
	case "edit":$result = $db->updatedata($title, $imgpath, $categroy, $desc, $id);
		break;
	case "select":$result = $db->selectdata($categroy);
		break;
	}
	echo $result;  
} catch (Exception $e) {
	  echo $e->getMessage();

}
/*
echo "this is first my programe php 中文";
$GLOBALS["con"]=mysql_connect("localhost","root","111111");
if(!$GLOBALS["con"])
{
die("could not connect".mysql_error());
}else
{
echo "connect ok";

mysql_select_db("world",$GLOBALS["con"]);
$result= mysql_query("select count(1) from city",$GLOBALS["con"]);
echo json_encode(mysql_fetch_array($result));
mysql_close($GLOBALS["con"]);
 */

//var_dump($db);
// get_class_methods("db");
//echo $db->selectdata();
/*class datahandler{
public $a='s';
public function getconn()
{
echo $a;
$con=mysql_connect("localhost","root","111111");
return $con;

}

}

$myclass=new datahandler();
$con=$myclass->getconn();
if(!$con){

}else
{

mysql_select_db("world",$con);
$result= mysql_query("select count(1) from city",$con);
echo json_encode(mysql_fetch_array($result));

}

 */

?>