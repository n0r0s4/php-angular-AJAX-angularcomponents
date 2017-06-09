/** review.js
* author  norosa@programmer.net
* version 2017/04
* main js review entity
*/
function Review ()
{
	//Attributes declaration
	this.id;
	this.idUser;
	this.dateReview;
	this.rate;
	this.description;


	//Methods declaration
	this.construct = function (id,idUser,dateReview, rate,description)
	{
		this.setId(id);
		this.setIdUser(idUser);
		this.setDateReview(dateReview);
		this.setRate(rate);
		this.setDescription(description);
	}

	this.setId = function (id){this.id=id;}
	this.setRate = function (rate){this.rate=rate;}
	this.setDescription = function (description){this.description=description;}
	this.setIdUser = function (idUser){this.idUser=idUser;}
	this.setDateReview = function (dateReview){this.dateReview=dateReview;}

	this.getId = function () {return this.id;}
	this.getRate = function () {return this.rate;}
	this.getDescription = function () {return this.description;}
	this.getIdUser = function () {return this.idUser;}
	this.getDateReview = function () {return this.dateReview;}


	this.arrayToString = function (arrayReview)
	{
		var reviewString ="";
		$.each(arrayReview, function (index, review){
			reviewString+="reiew number "+(index+1)+":"+review.toString()+"\n";
		});
		return reviewString;
	}

	this.toString = function ()
	{
		var reviewString ="id="+this.getId()+" rate="+this.getRate()+" description="+this.getDescription()+" idUser="+this.getIdUser();
		reviewString +=" dateReview="+this.getDateReview();

		return reviewString;
	}
}
