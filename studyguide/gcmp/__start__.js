(
	function() {
		var CANVAS_ID = "application-canvas";

		var canvas, devices, app;
		var hiloCarga    = null;
		var contador     = 0;
		var createCanvas = function() {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", CANVAS_ID);
			canvas.setAttribute("tabindex", 0);
			// canvas.style.visibility = 'hidden';

			// Disable I-bar cursor on click+drag
			canvas.onselectstart = function() { return false; };

			document.body.appendChild(canvas);

			return canvas;
		};

		var createInputDevices = function(canvas) {
			var devices = {
				elementInput : new pc.ElementInput(canvas, {
					useMouse : INPUT_SETTINGS.useMouse,
					useTouch : INPUT_SETTINGS.useTouch
				}),
				keyboard : INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
				mouse : INPUT_SETTINGS.useMouse ? new pc.Mouse(canvas) : null,
				gamepads : INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
				touch : INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(canvas) : null
			};

			return devices;
		};

		var configureCss = function(fillMode, width, height) {
			// Configure resolution and resize event
			if (canvas.classList) {
				canvas.classList.add("fill-mode-" + fillMode);
			}

			// css media query for aspect ratio changes
			var css = "@media screen and (min-aspect-ratio: " + width + "/" + height + ") {";
			css += "    #application-canvas.fill-mode-KEEP_ASPECT {";
			css += "        width: auto;";
			css += "        height: 100%;";
			css += "        margin: 0 auto;";
			css += "    }";
			css += "}";

			// append css to style
			if (document.head.querySelector) {
				document.head.querySelector("style").innerHTML += css;
			}
		};

		window.reflow = function() {

			appLoad = app;
			if (!isMobile.any()) {
				app.resizeCanvas(canvas.width, canvas.height);
				canvas.style.width  = "";
				canvas.style.height = "";

				var fillMode = app._fillMode;

				if (fillMode == pc.FILLMODE_NONE || fillMode == pc.FILLMODE_KEEP_ASPECT) {
					if ((
						fillMode == pc.FILLMODE_NONE && canvas.clientHeight < window.innerHeight
					) || (
						canvas.clientWidth / canvas.clientHeight >= window.innerWidth / window.innerHeight
					)) {
						canvas.style.marginTop = Math.floor((
							window.innerHeight - canvas.clientHeight
						) / 2) + "px";
					} else {
						canvas.style.marginTop = "";
					}
				}
			} else {
				// if (window.innerHeight < window.innerWidth) //landscape
				// {
				// 	document.getElementById("rotate").style.display = "block";
				// 	canvas.style.display                            = "none";
				// } else // portrait
				// {
				// 	document.getElementById("rotate").style.display = "none";
				// 	canvas.style.display                            = "block";
				// }

			}
		};

		var displayError = function(html) {
			var div = document.createElement("div");

			div.innerHTML = [
				"<table style=\"background-color: #8CE; width: 100%; height: 100%;\">",
				"  <tr>",
				"      <td align=\"center\">",
				"          <div style=\"display: table-cell; vertical-align: middle;\">",
				"              <div style=\"\">" + html + "</div>",
				"          </div>",
				"      </td>",
				"  </tr>",
				"</table>"
			].join("\n");

			document.body.appendChild(div);
		};

		hiloCarga = setInterval(creaCanvas, 30);
		var elem  = document.createElement("img");
		elem.setAttribute("src", "rotatetoplay.png");
		elem.setAttribute("id", "fotoRotate");
		// elem.setAttribute("height", window.innerHeight * 0.9);
		// elem.setAttribute("width", window.innerWidth * 0.98);
		elem.setAttribute("alt", "Rotate");
		document.getElementById("rotate").appendChild(elem);
		var splash              = document.getElementById("rotate");
		// splash.style.visibility = "hidden";

		function creaCanvas() {
			if (!isMobile.any()) {
				contador                = contador + 30;
				// var splash              = document.getElementById("rotate");
				// splash.style.visibility = "hidden";
				// if (contador >= 900) {
				// }
				// canvas  = createCanvas();
				// devices = createInputDevices(canvas);
				// inicia();
				// loadjscssfile("__loading__.js", "js");
				// clearInterval(hiloCarga);
			} else {
				contador                = 0;




				// var splash              = document.getElementById("rotate");
				// splash.style.visibility = "visible";
				// var foto                = document.getElementById("fotoRotate");
				// foto.style.width        = window.innerWidth * 0.98 + "px";
				// foto.style.height       = window.innerHeight * 0.9 + "px";
			}
			// var splash              = document.getElementById("rotate");
			// splash.style.visibility = "hidden";
			canvas  = createCanvas();
			devices = createInputDevices(canvas);
			inicia();
			loadjscssfile("__loading__.js", "js");
			clearInterval(hiloCarga);
		}

		function inicia() {

			try {
				app = new pc.Application(canvas, {
					elementInput : devices.elementInput,
					keyboard : devices.keyboard,
					mouse : devices.mouse,
					gamepads : devices.gamepads,
					touch : devices.touch,
					graphicsDeviceOptions : window.CONTEXT_OPTIONS,
					assetPrefix : window.ASSET_PREFIX || "",
					scriptPrefix : window.SCRIPT_PREFIX || "",
					scriptsOrder : window.SCRIPTS || []
				});

			} catch (e) {
				if (e instanceof pc.UnsupportedBrowserError) {
					displayError("This page requires a browser that supports WebGL.<br/>" +
						"<a href=\"http://get.webgl.org\">Click here to find out more.</a>");
				} else if (e instanceof pc.ContextCreationError) {
					displayError("It doesn't appear your computer can support WebGL.<br/>" +
						"<a href=\"http://get.webgl.org/troubleshooting/\">Click here for more information.</a>");
				} else {
					displayError("Could not initialize application. Error: " + e);
				}

				return;
			}

			app.configure(CONFIG_FILENAME, function(err) {
				if (err) {
					console.error(err);
				}

				configureCss(app._fillMode, app._width, app._height);
				reflow();

				window.addEventListener("resize", reflow, false);
				window.addEventListener("orientationchange", reflow, false);

				app.preload(function(err) {
					if (err) {
						console.error(err);
					}

					app.loadScene(SCENE_PATH, function(err, scene) {
						if (err) {
							console.error(err);
						}

						//app.start();
						// if (canvas.width > canvas.height) {
						// 	window.location.reload();
						// 	return;
						// }
						APP                     = app;
						// var splash              = document.getElementById("application-splash-wrapper");
						// splash.style.visibility = "hidden";
						// var splash              = document.getElementById("rotate");
						// splash.style.visibility = "hidden";
					});
				});
			});
		}
	}()
);
