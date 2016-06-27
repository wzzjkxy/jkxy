<?php
class db {
	public $con;
	const TABLE_NAME = "mynews";
	function __construct() {
		$this->con = mysqli_connect("localhost", "root", "111111");
		 
		mysqli_select_db( $this->con,"news");
	 


	}

	public function insertdata($title, $imgpath, $categroy, $desc) {
		$t = self::TABLE_NAME;
		$result = mysqli_query($this->con,"insert into {$t} (title,imgpath,categroy,newdesc) values('{$title}','{$imgpath}','{$categroy}','{$desc}') ");
		return $result;
	}

	public function updatedata($title, $imgpath, $categroy, $desc, $id) {
		$t = self::TABLE_NAME;
		$result = mysqli_query($this->con,"update {$t}
		set title= '{$title}',
		    imgpath='{$imgpath}',
		    categroy='{$categroy}',
		    newdesc='{$desc}'
		    where id='{$id}'");
		return  $result;
	}
	public function deletedata($id) {
		$t = self::TABLE_NAME;
		$result = mysqli_query($this->con,"delete from {$t} where id={$id}");
		return $result;
	}

	public function selectdata($categroy) {
		$t = self::TABLE_NAME;
		$result ;
		if($categroy==0){
		$result = mysqli_query($this->con,"select   * from {$t} order by createtime desc limit 0,10");
	}else
	{

	$result = mysqli_query($this->con,"select   * from {$t}  where categroy={$categroy} order createtime desc limit 0,10");
	}
  
		
	
if($result->num_rows==0){

		return "";
}else{$myarray = array();
		while ($row = mysqli_fetch_array($result)) {
			// $myarray2 = array();
			// array_push($myarray2, $row["id"]);
			// array_push($myarray2, $row["name"]);
			// array_push($myarray2, $row["countrycode"]);
			// array_push($myarray2, $row["district"]);
			// array_push($myarray2, $row["population"]);
			// echo count($myarray2);
			array_push($myarray, json_encode($row));
		}
		return json_encode($myarray);
	} 


	}

	function __destruct() {

		mysqli_close($this->con);
	}

}
?>