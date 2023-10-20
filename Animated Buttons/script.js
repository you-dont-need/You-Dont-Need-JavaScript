gsap.registerPlugin(MotionPathPlugin);
MorphSVGPlugin.convertToPath("circle, rect");
gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%" });
gsap.set("#rectSentItems", { x: "-=240" });
const tl = gsap.timeline();

let ranOnce = false;

function onBtnUp() {
	if (ranOnce) {
		tl.restart();
		return;
	}
	ranOnce = true;
	tl.to("#base", { duration: 0.2, scale: 1, transformOrigin: "50% 50%" });
	tl.to(
		"#btnBase",
		{ duration: 0.77, morphSVG: "#cBottom", ease: "power1.inOut" },
		"start"
	);

	tl.to("#btnBase", { duration: 0.23, morphSVG: "#cTop", ease: "power1.inOut" });
	tl.to("#btnBase", {
		duration: 0.2,
		morphSVG: "#cCenter",
		ease: "power1.inOut"
	});
	tl.to(
		"#btnBase",
		{ duration: 0.5, morphSVG: "#cEnd", ease: "power1.inOut" },
		"revealStart"
	);
	tl.to("#rectSentItems", { x: "0", duration: 0.5 }, "revealStart");
	tl.to(
		"#mask1",
		{ x: "-=260", duration: 0.5, ease: "power1.inOut" },
		"revealStart"
	);
	tl.to(
		"#paperPlane",
		{ x: "-=205", duration: 0.5, ease: "power1.inOut" },
		"revealStart"
	);
	tl.to(
		"#paperPlanePath",
		{ duration: 0.43, morphSVG: "#tickMark" },
		"start+=0.77"
	);

	tl.to(
		"#txtSend",
		{ duration: 0.6, scale: 0, transformOrigin: "50% 50%" },
		"start"
	);
	tl.to(
		"#paperPlaneRoute",
		{ drawSVG: "80% 100%", duration: 0.7, ease: "power1.inOut" },
		"start+=0.3"
	);
	tl.to(
		"#paperPlaneRoute",
		{ drawSVG: "100% 100%", duration: 0.2, ease: "power1.inOut" },
		"start+=1"
	);

	tl.to(
		"#paperPlane",
		{
			duration: 1,
			ease: "power1.inOut",
			immediateRender: true,
			motionPath: {
				path: "#paperPlaneRoute",
				align: "#paperPlaneRoute",
				alignOrigin: [0.5, 0.5],
				autoRotate: 90
			}
		},
		"start"
	);

	tl.to(
		"#paperPlanePath",
		{ duration: 0.15, attr: { fill: "#ffffff" } },
		"start"
	);
	tl.to(
		"#paperPlanePath",
		{ duration: 0.15, attr: { fill: "#4E67E8" } },
		"start+=0.77"
	);
}

function onBtnDown() {
	gsap.timeline({ defaults: { clearProps: true } });
	gsap.to("#base", { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
}

const btn = document.getElementById("base");
btn.addEventListener("mousedown", onBtnDown);
btn.addEventListener("mouseup", onBtnUp);
