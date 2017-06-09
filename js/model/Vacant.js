/** vacant.js
* author  norosa@programmer.net
* version 2017/04
* main js vacant entity
*/
function Vacant ()
{
	//Attributes declaration
	this.id;
	this.name;
	this.description;


	//Methods declaration
	this.construct = function (id,name,description)
	{
		this.setId(id);
		this.setName(name);
		this.setDescription(description);
	}

	this.setId = function (id){this.id=id;}
	this.setDescription = function (description){this.description=description;}
	this.setName = function (name){this.name=name;}

	this.getId = function () {return this.id;}
	this.getDescription = function () {return this.description;}
	this.getName = function () {return this.name;}


	this.arrayToString = function (arrayVacant)
	{
		var vacantString ="";
		$.each(arrayVacant, function (index, vacant){
			vacantString+="reiew number "+(index+1)+":"+vacant.toString()+"\n";
		});
		return vacantString;
	}

	this.toString = function ()
	{
		var vacantString ="id="+this.getId()+" description="+this.getDescription();
		vacantString +=" name="+this.getName();

		return vacantString;
	}
}
