<?php
/**
* VacantController class
* it controls user's model server part of the application
*/
require_once "ControllerInterface.php";
require_once "../model/Vacant.php";
require_once "../model/persist/VacantADO.php";


class VacantControllerClass implements ControllerInterface {
	private $action;
	private $jsonData;

	function __construct($action, $jsonData) {
		$this->setAction($action);
		$this->setJsonData($jsonData);
	}

	public function getAction() {
		return $this->action;
	}

	public function getJsonData() {
		return $this->jsonData;
	}

	public function setAction($action) {
		$this->action = $action;
	}
	public function setJsonData($jsonData) {
		$this->jsonData = $jsonData;
	}

	public function doAction()
	{
		$outPutData = array();

		switch ( $this->getAction() )
		{
			case 10000:
				$outPutData = $this->loadInitData();
				break;

			default:
				$errors = array();
				$outPutData[0]=false;
				$errors[]="Sorry, there has been an error. Try later";
				$outPutData[]=$errors;
				error_log("Action not correct in FilmControllerClass, value: ".$this->getAction());
				break;
		}

		return $outPutData;
	}

	private function loadInitData()
	{
		$outPutData = array();
		$outPutData[]=true;
		$errors = array();

		$listVacants = VacantADO::findAll();

		if(count($listVacants)==0)
		{
			$outPutData[0]=false;
			$errors[]="No vacants found in database";
		}
		else
		{
			$vacantsArray=array();

			foreach ($listVacants as $vacant)
			{
				$vacantsArray[]=$vacant->getAll();
			}
		}

		if($outPutData[0])
		{
			$outPutData[]=$vacantsArray;
		}
		else
		{
			$outPutData[]=$errors;
		}

		return $outPutData;
	}

}
?>
