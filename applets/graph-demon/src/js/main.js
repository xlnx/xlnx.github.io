'use strict'

let V = [
	300, // V[0]
	16, // V[1]
	0.8570226485748713,	// V[2]
	0.2991860139794316,	// V[3]
	3.733142519614251	// V[4]
];

let T0 = V[0];
let psize = V[1];
let mrate = V[2];
// add v
let mpec = V[3]
let K = [
	10, // V[4]
	1000, // V[5]
	0.005, // V[6]
	0.2, // V[7]
	0.003, // V[8]
];
let lambda = V[4]; // [2, 5]

let Cmax = 1;
let L = 36;

let LW = 5;
let R = 20;
let W = 10;

let eps = 1e-5;
let T = 0;

let canvas = $("#canvas-main").get(0);
let cxt = canvas.getContext("2d");

function drawpoint(opt) {
	cxt.fillStyle = "#FF0000";
	cxt.beginPath();
	cxt.arc(opt.X[0], opt.X[1], opt.r, 0, Math.PI * 2, true);
	cxt.closePath();
	cxt.fill();
	cxt.fillStyle = "#FFFFFF";
	cxt.font = "20px Arial";
	cxt.fillText(opt.tag, opt.X[0] - 10, opt.X[1] + 10, opt.r * 1.5);
}

function drawline(opt) {
	cxt.strokeStyle = "#0";
	cxt.lineWidth = opt.w;
	cxt.moveTo(opt.X[0][0], opt.X[0][1]);
	cxt.lineTo(opt.X[1][0], opt.X[1][1]);
	cxt.stroke();
}

let rand = Math.random;

let n = 0;
let m = 0;
let edge = [];
let out = [];
let ft = 0;
let sigmat = 0;

function randrange(a, b) {
	return Math.floor((b - a) * rand()) + a;
}

function rnd2() {
	return rand() >= 0.5 ? 1 : 0;
}

function genrate(rate) {
	return rand() < rate;
}

function getp(X, i) {
	return [X[i << 1], X[1 + (i << 1)]];
}

function subp(a, b) {
	return [a[0] - b[0], a[1] - b[1]];
}

function addp(a, b) {
	return [a[0] + b[0], a[1] + b[1]];
}

function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1];
}

function det(a, b) {
	return a[0] * b[1] - a[1] * b[0];
}

function norm(a) {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}

function angle(a, b) {
	let x = dot(a, b) / norm(a) / norm(b);
	x > 1 && (x = 1); x < -1 && (x = -1);
	return Math.acos(x);
}

function cmp(x) {
	if (Math.abs(x) < eps) {
		return 0;
	} else {
		if (x > 0) {
			return 1;
		} else {
			return -1;
		}
	}
}

function cross(a, b) { // [p1, p2], [p3, p4]
	let p12 = subp(a[1], a[0]);
	let p34 = subp(b[1], b[0]);
	let p31 = subp(a[0], b[0]);
	let p13 = subp(b[0], a[0]);

	let c1 = det(p13, p34);
	let c2 = det(p12, p34);
	let c3 = det(p12, p31);

	c2 < 0 && (c2 = -c2, c1 = -c1, c3 = -c3);

	if (cmp(c2 - 0) != 0 && cmp(c1 - 0) >= 0 && cmp(c1 - c2) <= 0 &&
		cmp(c3 - 0) >= 0 && cmp(c3 - c2) <= 0){
		if (cmp(det(p12, p34) - 0) == 0) {
			return Infinity;
		} else {
			return 1;
		}
	} else {
		return 0;
	}
}

function f(X) {
	// X = [x1, y1, x2, y2...].length == 2n
	let c = 0;
	for (let i = 0; i < n; ++i) {
		for (let j = i + 1; j < n; ++j) {
			c += L * L / norm(subp(getp(X, i), getp(X, j)));
		}
	}
	for (let i = 0; i < m; ++i) {
		let l = norm(subp(getp(X, edge[i].u), getp(X, edge[i].v)));
		c += l * l / L;
	}
	let res = K[0] * Cmax / c;
	c = K[1];
	for (let k = 0; k < n; ++k) {
		if (out[k].length >= 2) {
			let minA = Infinity;
			for (let i = 0; i < out[k].length; ++i) {
				for (let j = i + 1; j < out[k].length; ++j) {
					minA = Math.min(minA, angle(
						subp(getp(X, out[k][i]), getp(X, k)),
						subp(getp(X, out[k][j]), getp(X, k))
					));
				}
			}
			c *= minA;
		}
	}
	res *= c + 1;
	c = 0;
	for (let i = 0; i < m; ++i) {
		for (let j = i + 1; j < m; ++j) {
			c += cross(
				[getp(X, edge[i].v), getp(X, edge[i].u)],
				[getp(X, edge[j].v), getp(X, edge[j].u)]
			);
		}
	}
	res /= (K[2] * c + 1);
	let yMax = -Infinity, yMin = Infinity;
	let xMax = -Infinity, xMin = Infinity;
	for (let i = 0; i < X.length; i += 2) {
		X[i] < xMin && (xMin = X[i]);
		X[i] > xMax && (xMax = X[i]);
	}
	for (let i = 1; i < X.length; i += 2) {
		X[i] < yMin && (yMin = X[i]);
		X[i] > yMax && (yMax = X[i]);
	}
	res /= Math.abs((yMax - yMin) / (xMax - xMin) - 1) + 1;
	// NaN req !
	c = 0;
	for (let i = 0; i < m; ++i) {
		c += norm(subp(getp(X, edge[i].u), getp(X, edge[i].v)));
	}
	res /= K[4] * c + 1;
	let h = c / m;
	c = 0;
	for (let i = 0; i < m; ++i) {
		let x = norm(subp(getp(X, edge[i].u), getp(X, edge[i].v))) - h;
		c += x * x;
	}
	res /= 1 + K[3] * c / m;
	return res;
}

function expval(x) {
	return sigmat == 0 ? 1:
		1 + (x.f - ft) / 2 / sigmat;
}

function init() {
	let res = new Array(psize);
	for (let i = 0; i < psize; ++i) {
		res[i] = new Array(2 * n);
		for (let j = 0; j < 2 * n; ++j) {
			res[i][j] = randrange(0, 100);
		}
	}
	return res;
}

function evaluate(P) {
	let s = 0;
	for (let x of P) {
		s += x.f = f(x);
	}
	ft = s / P.length;
	s = 0;
	for (let x of P) {
		s += (x.f - ft) * (x.f - ft);
	}
	sigmat = Math.sqrt(s / P.length);
	for (let x of P) {
		x.f = expval(x);
	}
}

function select(P) {
	P.sort(function (a, b) {
		return b.f - a.f;
	})
	return P.slice(0, Math.ceil(Math.sqrt(psize)));
}

function crossover(P) {
	// test
	let PP = [];
	let k = 0;//Math.floor(n / 2);
	let a = new Array(2 * n - k);
	for (let i = 0; i < P.length; ++i) {
		for (let j = i + 1; j < P.length; ++j) {
			for (let x = 0; x < 2 * n - k; ++x) {
				a[x] = rand();
			}
			let Sz = new Array(2 * n), Sw = new Array(2 * n);
			for (let x = 0; x != 2 * n; ++x) {
				Sz[x] = P[i][x];
				Sw[x] = P[j][x];
			}
			// let s = randrange(0, k);
			let s = 0;
			for (let x = s; x < s + 2 * n - k; ++x) {
				Sz[x] = Sz[x] * a[x - s] + (1 - a[x - s]) * P[j][x];
				Sw[x] = Sw[x] * a[x - s] + (1 - a[x - s]) * P[i][x];
			}
			PP.push(Sz); PP.push(Sw);
		}
	}
	return PP;
}

function delta(t, y) {
	return y * Math.pow(1 - Math.pow(rand(), 1 - t / (T*1.1) ), lambda);
}

function mutate(P, t) {
	let a = 0, b = 100;
	for (let x of P) {
		if (genrate(mrate)) {
			for (let i = 0; i < 2 * n; ++i) {
				if (genrate(mpec)) {
					// let id = randrange(0, 2 * n);
					x[i] += rnd2() ? (
						+ delta(t, b - x[i])
					) : (
						- delta(t, x[i] - a)
					);
				}
			}
		}
	}
	return P;
}

function calc() {
	let P = init(), t = 0;
	for (; t < T; ++t) {
		evaluate(P);
		P = select(P);
		// for (let x of P) {
		// 	paintgraph(x)
		// }
		P = mutate(crossover(P), t);
	}
	evaluate(P);
	let res = [];
	res.f = -Infinity;
	for (let x of P) {
		x.f > res.f && (res = x);
	}
	return res;
}

function translate(X) {
	let minX = Infinity, maxX = -Infinity;
	let minY = Infinity, maxY = - Infinity;
	for (let i = 0; i < 2 * n; i += 2) {
		X[i] < minX && (minX = X[i]);
		X[i] > maxX && (maxX = X[i]);
		X[i + 1] < minY && (minY = X[i + 1]);
		X[i + 1] > maxY && (maxY = X[i + 1]);
	}
	if (maxX != minX && maxY != minY) {
		for (let i = 0; i < 2 * n; i += 2) {
			X[i] = (X[i] - minX) * (canvas.width - 2 * (R + W)) / (maxX - minX) + R + W;
			X[i + 1] = (X[i + 1] - minY) * (canvas.width - 2 * (R + W)) / (maxY - minY) + R + W;
		}
	}
}

function analyze(X) {
	let log = [];
	let c = 0;
	for (let i = 0; i < n; ++i) {
		for (let j = i + 1; j < n; ++j) {
			c += L * L / norm(subp(getp(X, i), getp(X, j)));
		}
	}
	for (let i = 0; i < m; ++i) {
		let l = norm(subp(getp(X, edge[i].u), getp(X, edge[i].v)));
		c += l * l / L;
	}
	log.push(K[0] * Cmax / c);
	let res = K[0] * Cmax / c;
	c = K[1];
	for (let k = 0; k < n; ++k) {
		if (out[k].length >= 2) {
			let minA = Infinity;
			for (let i = 0; i < out[k].length; ++i) {
				for (let j = i + 1; j < out[k].length; ++j) {
					minA = Math.min(minA, angle(
						subp(getp(X, out[k][i]), getp(X, k)),
						subp(getp(X, out[k][j]), getp(X, k))
					));
				}
			}
			c *= minA;
		}
	}
	log.push(c + 1);
	res *= c + 1;
	c = 0;
	for (let i = 0; i < m; ++i) {
		for (let j = i + 1; j < m; ++j) {
			c += cross(
				[getp(X, edge[i].v), getp(X, edge[i].u)],
				[getp(X, edge[j].v), getp(X, edge[j].u)]
			);
		}
	}
	log.push(1 / (K[2] * c + 1));
	res /= (K[2] * c + 1);
	let yMax = -Infinity, yMin = Infinity;
	let xMax = -Infinity, xMin = Infinity;
	for (let i = 0; i < X.length; i += 2) {
		X[i] < xMin && (xMin = X[i]);
		X[i] > xMax && (xMax = X[i]);
	}
	for (let i = 1; i < X.length; i += 2) {
		X[i] < yMin && (yMin = X[i]);
		X[i] > yMax && (yMax = X[i]);
	}
	log.push(1 / (Math.abs((yMax - yMin) / (xMax - xMin) - 1) + 1));
	res /= Math.abs((yMax - yMin) / (xMax - xMin) - 1) + 1;
	// NaN req !
	c = 0;
	for (let i = 0; i < m; ++i) {
		c += norm(subp(getp(X, edge[i].u), getp(X, edge[i].v)));
	}
	log.push(1 / (K[4] * c + 1));
	res /= K[4] * c + 1;
	let h = c / m;
	c = 0;
	for (let i = 0; i < m; ++i) {
		let x = norm(subp(getp(X, edge[i].u), getp(X, edge[i].v))) - h;
		c += x * x;
	}
	log.push(1 / (1 + K[3] * c / m));
	res /= 1 + K[3] * c / m;
	console.log(log);
	return res;
}

function paintgraph(X) {
	cxt.clearRect(0, 0, canvas.width, canvas.height);
	console.log(f(X));
	analyze(X);
	translate(X)
	for (let i = 0; i < m; ++i) {
		drawline({
			w: LW,
			X: [
				[X[edge[i].u * 2], X[edge[i].u * 2 + 1]],
				[X[edge[i].v * 2], X[edge[i].v * 2 + 1]]
			]
		})
	}
	for (let i = 0; i != X.length; i += 2) {
		drawpoint({
			r: R,
			X: [X[i], X[i + 1]],
			tag: i / 2
		});
	}
	drawpoint({
		r: 1,
		X: [-100, -100]
	})
}

function genGraph() {
	try {
		let a = $("#in").val().split(/\s+/);
		let id = -1;
		while ((id = a.indexOf("")) != -1) {
			a.splice(id, 1);
		}
		a = a.map(function(val){
			let v = parseInt(val);
			if (isNaN(v)) {
				throw "invN";
			}
			return v;
		});
		setdata(a);
		let X = calc();
		paintgraph(X)
	} catch(err) {
		alert(err);
	}
};

function setdata(a) {
	n = a[0];
	m = a[1] * 2;
	T = T0 * 500 / n / n / n;
	L = 1e5 / Math.sqrt(n);
	out = new Array(n);
	for (let i = 0; i < n; ++i) {
		out[i] = [];
	}
	edge = [];
	for (let i = 2; i < a.length; i += 2) {
		if (a[i] == a[i + 1]) {
			m -= 2;
		} else {
			edge.push({
				u: a[i],
				v: a[i + 1]
			});
			edge.push({
				u: a[i + 1],
				v: a[i]
			});
			out[a[i + 1]].push(a[i]);
			out[a[i]].push(a[i + 1]);
		}
	}
}

let expectedtime = 0.5

function testcalc() {
	let start = new Date().getTime();
	let t = calc();
	let end = new Date().getTime();
	paintgraph(t)
	translate(t)
	if ((end - start) / 2000 / expectedtime < 0.5) {
		t.f = f(t) * Math.pow(1.5 - 1./(1 + Math.exp(0.5)), 100)
	} else {
		t.f = f(t) * Math.pow(1.5 - 1./(1 + Math.exp(1 - (end - start) / 2000 / expectedtime)), 1e5)
	}
	console.log(t.f)
	return t.f
}