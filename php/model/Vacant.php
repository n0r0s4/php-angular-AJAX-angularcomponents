<?php
/** VacantClass.php
 * Entity VacantClass
 * author  norosa@programmer.net
 * version 2017/04
 */
require_once "EntityInterface.php";

class Vacant implements EntityInterface {
   private $id;
   private $name;
   private $description;


   function __construct() {
   }

   public function getId() {
       return $this->id;
   }

   public function getName() {
       return $this->name;
   }


   public function getDescription() {
       return $this->description;
   }


   public function setId($id) {
       $this->id = $id;
   }

   public function setName($name) {
       $this->name = $name;
   }


   public function setDescription($description) {
       $this->description = $description;
   }


   public function getAll() {
   $data = array();
   $data["id"] = $this->id;
   $data["name"] = $this->name;
   $data["description"] = $this->description;
   return $data;
   }

   public function setAll($id, $name, $description) {
   $this->setId($id);
   $this->setName($name);
   $this->setDescription($description);
   }

   public function toString() {
       $toString = "Review[id=" . $this->id ."][name=" . $this->name ."][desciption=" . $this->description . "]";
   return $toString;

   }
}
?>
