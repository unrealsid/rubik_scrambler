function addEventListeners()
{
    //onWindowResize
    window.addEventListener("resize", onWindowResize, false);
	
	//Keyboard Event Listener
	window.document.addEventListener("keydown", onDocumentKeyDown, false);
	
	//scramble
	//window.document.getElementById("setScramble").addEventListener("onclick", scrambleCube, false);
	document.getElementById("btn-refresh").addEventListener("click", displayScramble);
}

function onWindowResize(event)
{
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}
		
function onDocumentKeyDown(event)
{
	var args = eventToRotation[String.fromCharCode(event.keyCode)];
	if (args)
	{
		args = args.slice(); // Copy so the original is not changed.
		args[1] += event.shiftKey ? "P" : ""; // Append P for prime.
		// Convert the -1, 0, 1 placement along the axes to limits
		// given the cubieDist between them.  The limits are inclusive.
		args[2] = cubieDist * args[2] - 1; // Lower limit, so 1 before.
		args[3] = cubieDist * args[3] + 1; // Lower limit, so 1 after.
		rotateFace.apply(this, args);
	}
}
