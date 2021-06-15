class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	   var options = {
		   'restitution':1.5,
		   'density' : 0.9,
		   'friction' : 1
	   }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("yellow");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r)
			pop()
	}

}