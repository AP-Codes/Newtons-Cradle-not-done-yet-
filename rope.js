class rope{
	constructor(body1, body2, pointA, pointB)
	{

	//create rope constraint here
	this.pointA = pointA
	this.pointB = pointB

	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}
	}

	}


    //create display() here 
	display(){
		
		var pointA = this.rope1.bodyA.position;
		var pointB = this.rope1.bodyB.position;
		
		
		strokeWeight(5);
		stroke("white")
		line(rope1.pointA.x, rope1.pointA.y, bob1.position.x, bob1.position.y);
		
	}
}
