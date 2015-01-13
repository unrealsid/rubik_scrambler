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
	var eventChar = String.fromCharCode(event.keyCode)
	var args = eventToRotation[eventChar];
	if (args)
	{
		// Regular movement
		args = args.slice(); // Copy so the original is not changed.
		args[1] += event.shiftKey ? "P" : ""; // Append P for prime.
		if (event.altKey && args[2] && (args[2] == args[3]))
		{
			// If the args are non-zero and the same then that means
			// that alt was pressed with for one of the sides.  In
			// this case a double move is done by extending the
			// limits so that the origin is included.
			if (args[2] < 0)
			{
				args[3] = 0;
			}
			else
			{
				args[2] = 0;
			}
		}
		// Convert the -1, 0, 1 placement along the axes to limits
		// given the cubieDist between them.  The limits are inclusive.
		args[2] = cubieDist * args[2] - 1; // Lower limit, so 1 before.
		args[3] = cubieDist * args[3] + 1; // Lower limit, so 1 after.
		rotateFace.apply(this, args);
        argsList.push(args);
	}
	else
	{
		// Special keys
		switch (eventChar)
		{
			// A lot of good letters were already taken.
			case "A": // (A)nimation toggle
				var animCB = document.getElementById("skipAnimation");
				animCB.checked = !animCB.checked;
				break;
			case "G": // Undo (like Ctrl-G in Emacs)
                args = argsList.pop();
                if (args)
                {
                    faceOdr = args[1];
                    if (faceOdr[faceOdr.length - 1] == "P")
                        faceOdr = faceOdr.substr(0, faceOdr.length - 1);
                    else
                        faceOdr += "P";
                    args[1] = faceOdr;
                    rotateFace.apply(this, args);
                }
                break;
			case "H": // (H)ide toggle
				visible = !visible;
				var visibility = visible ? "visible" : "hidden";
                                var index;
                var ids = ["stats", "info", "checkboxes", "btn-refresh", "scramble"];
                for (var index = 0; index < ids.length; ++index)
                {
                    var elem = document.getElementById(ids[index]);
                    if (elem)
                    {
                        elem.style.visibility = visibility;
                    }
                }

				break;
			case "N": // (N)ew cube (scramble)
				displayScramble();
                argsList = [];
				break;
			case "O": // (O)rientation display toggle.
				var orientCB = document.getElementById("dispOrientationLabels");
				orientCB.checked = !orientCB.checked;
				animate();
				break;
			case "Q": // (Q)uit the current cube
				// location.reload();
                resetScene();
                argsList = [];
                animate();
				break;
		}
	}
}
