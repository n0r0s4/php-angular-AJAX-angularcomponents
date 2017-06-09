/** apply.js
* author  norosa@programmer.net
* version 2017/04
* main js apply entity
*/
function Apply ()
{
	//Attributes declaration
	this.id;
	this.idVacant;
	this.startDate;
	this.portfolio;
	this.salary;
	this.about;
	this.relocate;
	this.idUser;
	this.hobbies = new Array();


	//Methods declaration
	this.construct = function (id,idVacant,startDate,portfolio,salary,about,relocate,idUser, hobbies)
	{
		this.setId(id);
		this.setIdVacant(idVacant);
		this.setPortfolio(portfolio);
		this.setStartDate(startDate);
		this.setSalary(salary);
		this.setAbout(about);
		this.setRelocate(relocate);
		this.setIdUser(idUser);
		this.setHobbies(hobbies);
	}

	this.setId = function (id){this.id=id;}
	this.setIdVacant = function (idVacant){this.idVacant=idVacant;}
	this.setPortfolio = function (portfolio){this.portfolio=portfolio;}
	this.setStartDate = function (startDate){this.startDate=startDate;}
	this.setSalary = function (salary){this.salary=salary;}
	this.setAbout = function (about){this.about=about;}
	this.setRelocate = function (relocate){this.relocate=relocate;}
	this.setIdUser = function (idUser){this.idUser=idUser;}
	this.setHobbies = function (hobbies){this.hobbies=hobbies;}

	this.getId = function () {return this.id;}
	this.getIdVacant = function (){return this.idVacant;}
	this.getPortfolio = function () {return this.portfolio;}
	this.getStartDate = function () {return this.startDate;}
	this.getSalary = function () {return this.salary;}
	this.getAbout = function () {return this.about;}
	this.getRelocate = function () {return this.relocate;}
	this.getIdUser = function () {return this.idUser;}
	this.getHobbies = function () {return this.hobbies;}

	this.arrayToString = function (arrayApply)
	{
		var applyString ="";
		$.each(arrayApply, function (index, apply){
			applyString+="apply number "+(index+1)+":"+apply.toString()+"\n";
		});
		return applyString;

	}

	this.toString = function ()
	{
		var applyString ="id="+this.getId()+" portfolio="+this.getPortfolio()+" idVacant="+this.getIdVacant()+" startDate="+this.getStartDate();
		applyString +=" salary="+this.getSalary()+" about="+this.getAbout()+" relocate="+this.getRelocate()+" idUser="+this.getIdUser()+" hobbies=";

		var review = new reviewObj();
		applyString +=review.arrayToString(this.getHobbies());

		return applyString;
	}

	this.addHobbies = function (hobby)
{
	this.hobbies.push(hobby);
}

this.removeHobbies = function (hobby)
{
	for (var i = 0; i < this.getHobbies().length; i++)
	{
		if(this.getHobbies()[i]==hobby)
		{
			this.hobbies.splice(i,1);
			break;
		}
	}

}
}
