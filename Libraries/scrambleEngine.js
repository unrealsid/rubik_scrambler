function loadScramble(scrambleVector)
{
	var rotationSet = [];

	var scramble = scrambleVector;
	for(var i = 0; i < scramble.length; i++)
	{
		var character = scramble[i];
		switch(character)
		{
			case "R2":
				console.log("R2");
				rotationSet.push(rotateR);
				rotationSet.push(rotateR);
				break;
			
			case "U2":
				console.log("U2");
				rotationSet.push(rotateU);
				rotationSet.push(rotateU);
				break;
				
			case "F2":
				console.log("F2");	
				rotationSet.push(rotateF);
				rotationSet.push(rotateF);
				break;
				
			case "B2":
				rotationSet.push(rotateB);
				rotationSet.push(rotateB);
				break;
				
			case "L2":
				rotationSet.push(rotateL);
				rotationSet.push(rotateL);
				break;
				
			case "D2":
				rotationSet.push(rotateD);
				rotationSet.push(rotateD);
				break;	
				
			case "M2":
				rotationSet.push(rotateM);
				rotationSet.push(rotateM);
				break;
				
			case "R'":
				console.log("R'");
				rotationSet.push(rotateR_P);
				break;
			
			case "U'":
				console.log("U'");
				rotationSet.push(rotateU_P);
				break;
				
			case "F'":
				console.log("F'");	
				rotationSet.push(rotateF_P);
				break;
				
			case "B'":
				rotationSet.push(rotateB_P);
				break;
				
			case "L'":
				rotationSet.push(rotateL_P);
				break;
				
			case "D'":
				rotationSet.push(rotateD_P);
				break;	
				
			case "M'":
				rotationSet.push(rotateM_P);
				break;
			
			case "R":
				console.log("R");
				rotationSet.push(rotateR);
				break;
			
			case "U":
				console.log("U");
				rotationSet.push(rotateU);
				break;
				
			case "F":
				console.log("F");	
				rotationSet.push(rotateF);
				break;
				
			case "B":
				rotationSet.push(rotateB);
				break;
				
			case "L":
				rotationSet.push(rotateL);
				break;
				
			case "D":
				rotationSet.push(rotateD);
				break;	
				
			case "M":
				rotationSet.push(rotateM);
				break;
		}
	}
	setCubeRotations(rotationSet);
}

function setCubeRotations(func)
{
	var count = 0;
	for(var i = 0; i < func.length; i++)
	{
		setTimeout(func[i], count);
		count += 700;
	}
}