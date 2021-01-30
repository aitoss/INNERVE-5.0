var Stars = {
    canvas: null,
    context: null,
    circleArray: [],
    colorArray: ["#909bd9", "#3b5a9b", "#006599", "#2b97f1", "#e84713", "#001b47", "#007bff", "#ffffff", "#4d5664d8"],
    mouseDistance: 50,
    radius: 0.7,
    maxRadius: 1.3,
    mouse: { x: void 0, y: void 0, down: !1, move: !1 },
    init: function () {
        (this.canvas = document.getElementById("stars")),
            (this.canvas.width = window.innerWidth),
            (this.canvas.height = window.innerHeight),
            (this.canvas.style.display = "block"),
            (this.context = this.canvas.getContext("2d")),
            window.addEventListener("mousemove", this.mouseMove),
            window.addEventListener("resize", this.resize),
            this.prepare(),
            this.animate();
    },
    Circle: function (e, t, n, i, o, r) {
        (this.x = e),
            (this.y = t),
            (this.dx = n),
            (this.dy = i),
            (this.radius = o),
            (this.minRadius = this.radius),
            (this.draw = function () {
                Stars.context.beginPath(), Stars.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), (Stars.context.fillStyle = r), Stars.context.fill()
            }),
            (this.update = function () {
                (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) && (this.dx = -this.dx),
                    (this.y + this.radius > Stars.canvas.height * 2 || this.y - this.radius < 0) && (this.dy = -this.dy),
                    (this.x += this.dx / 3),
                    (this.y += this.dy / 3),
                    Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance
                        ? this.radius < Stars.maxRadius && (this.radius += 1.3)
                        : this.radius > this.minRadius && (this.radius -= 1.3),
                    this.draw();
            });
    },
    prepare: function () {
        this.circleArray = [];
        for (var e = 0; e < particleNumber; e++) {
            var t = Stars.radius,
                n = Math.random() * (this.canvas.width - 2 * t) + t,
                i = Math.random() * (this.canvas.height - 2 * t) + t,
                o = 1.5 * (Math.random() - 0.5),
                r = 1.5 * (Math.random() - 1),
                a = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
            this.circleArray.push(new this.Circle(n, i, o, r, t, a));
        }
    },
    animate: function () {
        requestAnimationFrame(Stars.animate), Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);
        for (var e = 0; e < Stars.circleArray.length; e++) {
            Stars.circleArray[e].update();
        }
    },
    mouseMove: function (e) {
        (Stars.mouse.x = e.x), (Stars.mouse.y = e.y);
    },
    resize: function () {
        (Stars.canvas.width = window.innerWidth), (Stars.canvas.height = window.innerHeight);
    },
}

Stars.init();