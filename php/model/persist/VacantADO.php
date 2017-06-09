<?php
/** VacantADOClass.php
 * Entity VacantADOClass
 * author  norosa@programmer.net
 * version 2017/04
 */
require_once "EntityInterfaceADO.php";
require_once "BDvideoclub.php";
require_once "../model/Vacant.php";

class VacantADO implements EntityInterface {


   //----------Data base Values---------------------------------------
   private static $tableDateReview = "vacant";
   private static $colDateReviewId = "id";
   private static $colDateReviewDateReview = "name";
   private static $colDateReviewDescription = "description";

   //---Databese management section-----------------------
   /**
  * fromResultSetList()
  * this function runs a query and returns an array with all the result transformed into an object
  * @param res query to execute
  * @return objects collection
   */
   private static function fromResultSetList( $res ) {
   $entityList = array();
   $i=0;
   foreach ( $res as $row) {
     //We get all the values an add into the array
     $entity = VacantADO::fromResultSet( $row );

     $entityList[$i]= $entity;
     $i++;
   }
   return $entityList;
   }

   /**
 * fromResultSet()
 * the query result is transformed into an object
 * @param res ResultSet del qual obtenir dades
 * @return object
   */
   private static function fromResultSet( $res ) {
 //We get all the values form the query
   $id = $res[ VacantADO::$colDateReviewId];
   $name = $res[ VacantADO::$colDateReviewDateReview ];
   $description = $res[ VacantADO::$colDateReviewDescription ];

       //Object construction
       $entity = new Vacant();
   $entity->setId($id);
   $entity->setName($name);
   $entity->setDescription($description);

   return $entity;
   }

   /**
  * findByQuery()
  * It runs a particular query and returns the result
  * @param cons query to run
  * @return objects collection
   */
   public static function findByQuery( $cons, $vector ) {
   //Connection with the database
   try {
     $conn = DBConnect::getInstance();
   }
   catch (PDOException $e) {
     echo "Error executing query.";
     error_log("Error executing query in VacantADO: " . $e->getMessage() . " ");
     die();
   }

   //Run the query
   $res = $conn->execution($cons, $vector);

   return VacantADO::fromResultSetList( $res );
   }

   /**
  * findById()
  * It runs a query and returns an object array
  * @param id
  * @return object with the query results
   */
   public static function findById( $review ) {
   $cons = "select * from `".VacantADO::$tableDateReview."` where ".VacantADO::$colDateReviewId." = ?";
   $arrayValues = [$review->getId()];

   return VacantADO::findByQuery($cons,$arrayValues);
   }


   /**
 * findByIdClient()
  * It runs a query and returns an object array
  * @param name
  * @return object with the query results
   */
   public static function findByIdClient( $review ) {
   $cons = "select * from `".VacantADO::$tableDateReview."` where ".VacantADO::$colDateReviewIdClient." = ?";
   $arrayValues = [$review->getIdClient()];

   return VacantADO::findByQuery( $cons, $arrayValues );
   }

   /**
 * findByIdUser()
  * It runs a query and returns an object array
  * @param name
  * @return object with the query results
   */
   public static function findByIdUser( $review ) {
   $cons = "select * from `".VacantADO::$tableDateReview."` where ".VacantADO::$colDateReviewIdUser." = ?";
   $arrayValues = [$review->getIdUser()];

   return VacantADO::findByQuery( $cons, $arrayValues );
   }

   /**
  * findAll()
  * It runs a query and returns an object array
  * @param none
  * @return object with the query results
   */
   public static function findAll( ) {
     $cons = "select * from `".VacantADO::$tableDateReview."`";
     $arrayValues = [];

   return VacantADO::findByQuery( $cons, $arrayValues );
   }


   /**
  * create()
  * insert a new row into the database
   */
   public function create($review) {
   //Connection with the database
   try {
     $conn = DBConnect::getInstance();
   }
   catch (PDOException $e) {
     print "Error connecting database: " . $e->getMessage() . " ";
     die();
   }

   $cons="insert into ".VacantADO::$tableDateReview." (`name`,`description`) values (?, ?)";
   $arrayValues= [$review->getIdUser(),$review->getDateReview(),$review->getRate(),$review->getDescription()];

   $id = $conn->executionInsert($cons, $arrayValues);

   $review->setId($id);

     return $review->getId();
 }

   /**
  * delete()
  * it deletes a row from the database
   */
   public function delete($review) {
   //Connection with the database
   try {
     $conn = DBConnect::getInstance();
   }
   catch (PDOException $e) {
     print "Error connecting database: " . $e->getMessage() . " ";
     die();
   }


   $cons="delete from `".VacantADO::$tableDateReview."` where ".VacantADO::$colDateReviewId." = ?";
   $arrayValues= [$review->getId()];

   $conn->execution($cons, $arrayValues);
   }


   /**
  * update()
  * it updates a row of the database
   */
   public function update($review) {
   //Connection with the database
   try {
     $conn = DBConnect::getInstance();
   }
   catch (PDOException $e) {
     print "Error connecting database: " . $e->getMessage() . " ";
     die();
   }

   $cons="update `".VacantADO::$tableDateReview."` set ".VacantADO::$colDateReviewIdUser." = ?,".VacantADO::$colDateReviewDateReview." = ?,".
          VacantADO::$colDateReviewRate." = ?, ".VacantADO::$colDateReviewDescription." =? where ".VacantADO::$colDateReviewId." = ?";
   $arrayValues= [$review->getIdUser(),$review->getDateReview(),$review->getRate(),$review->getDescription(), $review->getId()];

   $conn->execution($cons, $arrayValues);
   }

   public function toString() {
       $toString .= "VacantADO[id=" . $this->id . "][idUser=" . $this->idUser . "][name=" . $this->name . "][desciption=" . $this->desciption . "]";
   return $toString;

   }
}
?>
