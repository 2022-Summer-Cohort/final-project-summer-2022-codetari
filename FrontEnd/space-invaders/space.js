export default function playGame() {


    const canvas = document.querySelector("canvas");
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    class Player {
        constructor() {
            this.velocity = {
                x: 0,
                y: 0
            }
            this.score = 0;

            const image = new Image()
            image.src = './img/spaceship.png'
            image.onload = () => {
                const scale = 0.15;
                this.image = image;
                this.width = image.width * scale
                this.height = image.height * scale
                this.position = {
                    x: canvas.width / 2 - this.width / 2,
                    y: canvas.height - this.height - 100
                }
            }
        }

        draw() {
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }
        update() {
            if (this.image) {
                this.draw()
                this.position.x += this.velocity.x;
            }
        }
        addScore() {
            this.score++;
        }
    }
    class Invader {
        constructor({ position }) {
            this.velocity = {
                x: 0,
                y: 0
            }
            let randomNum = Math.floor(Math.random() * 8);
            const image = new Image();
            // image.src = './img/carrots.png'
            switch (randomNum) {
                case 0:
                    image.src = './img/carrots.png'
                    break;
                case 1:
                    image.src = './img/curlybrackets.png'
                    break;
                case 2:
                    image.src = './img/semicolon.png'
                    break;
                case 3:
                    image.src = './img/WCCI.png'
                    break;
                case 4:
                    image.src = './img/carrotsBlue.png'
                    break;
                case 5:
                    image.src = './img/curlybracketsRed.png'
                    break;
                case 6:
                    image.src = './img/dolorSign.png'
                    break;
                case 7:
                    image.src = './img/exclamation.png'
                    break;
            }
            randomNum = Math.floor(Math.random() * 3);
            image.onload = () => {
                const scale = 0.15;
                this.image = image;
                this.width = image.width * scale
                this.height = image.height * scale
                this.position = {
                    x: position.x,
                    y: position.y
                }
            }
        }

        draw() {
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }
        update({ velocity }) {
            if (this.image) {
                this.draw()
                this.position.x += velocity.x;
                this.position.y += velocity.y;
            }
        }
    }
    const bracket = document.querySelector('#curlyBracket');
    class Projectile {
        constructor({ position, velocity }) {
            this.position = position;
            this.velocity = velocity;

            this.radius = 3
        }
        draw() {
            c.beginPath()
            c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
            c.fillStyle = 'red'
            c.fill()
            c.closePath()
        }
        update() {
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y

        }
    }
    class Particle {
        constructor({ position, velocity, radius, color }) {
            this.position = position;
            this.velocity = velocity;

            this.radius = radius
            this.color = color
            this.opacity = 1;
        }
        draw() {
            c.save()
            c.globalAlpha = this.opacity
            c.beginPath()
            c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
            c.restore()
        }
        update() {
            this.draw()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y

            this.opacity -= 0.01;

        }
    }

    let x = 3;
    class Grid {
        constructor(x) {
            this.position = {
                x: 0,
                y: 0
            }
            this.velocity = {
                x: x,
                y: 0
            }
            this.invaders = [];

            const rows = Math.floor(Math.random() * 5 + 2);
            const columns = Math.floor(Math.random() * 5 + 2);
            this.width = columns * 30;
            for (let x = 0; x < columns; x++) {
                for (let y = 0; y < rows; y++) {
                    this.invaders.push(new Invader({
                        position: {
                            x: x * 30,
                            y: y * 30
                        }
                    }
                    ))
                }
            }
        }
        update() {
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y

            this.velocity.y = 0

            if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
                this.velocity.x = -this.velocity.x
                this.velocity.y = 30;
            }
        }
    }
    const scoreEl = document.querySelector(".score")
    const player = new Player();
    const projectiles = [];
    const particles = [];
    const grids = [new Grid(x)];
    const keys = {
        a: {
            pressed: false
        },
        d: {
            pressed: false
        },
        w: {
            pressed: false
        }
    }
    let frames = 0;
    let randInterval = Math.floor((Math.random() * 500) + 500)
    function animate() {
        requestAnimationFrame(animate)
        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)
        player.update();
        particles.forEach((particle, i) => {
            if (particle.opacity <= 0) {
                setTimeout(() => {
                    particles.splice(i, 1)
                }, 0)
            }
            else {
                particle.update();
            }
        })
        projectiles.forEach((projectile, index) => {
            if (projectile.position.y + projectile.radius <= 0) {
                projectiles.splice(index, 1)
            } else {
                projectile.update();
            }
        })
        grids.forEach((grid) => {
            grid.update();
            grid.invaders.forEach((invader, i) => {
                invader.update({ velocity: grid.velocity })

                projectiles.forEach((projectile, j) => {
                    if (projectile.position.y - projectile.radius <= invader.position.y + invader.height
                        && projectile.position.x + projectile.radius >= invader.position.x
                        && projectile.position.x - projectile.radius <= invader.position.x + invader.width
                        && projectile.position.y + projectile.radius >= invader.position.y) {
                        setTimeout(() => {
                            const invaderFound = grid.invaders.find((invader2) => {
                                return invader2 === invader
                            })
                            const projectileFound = projectiles.find((projectile2) => projectile2 === projectile)

                            if (invaderFound && projectileFound) {
                                player.addScore();
                                scoreEl.innerHTML = player.score;
                                if (player.score % 100 == 0) {
                                    x += 1;
                                    console.log(x)
                                }
                                for (let i = 0; i < 15; i++) {
                                    particles.push(new Particle({
                                        position: {
                                            x: invader.position.x + invader.width / 2,
                                            y: invader.position.y + invader.height / 2
                                        },
                                        velocity: {
                                            x: (Math.random() - 0.5) * 2,
                                            y: (Math.random() - 0.5) * 2
                                        },
                                        radius: Math.random() * 3,
                                        color: 'orange'
                                    }))
                                }

                                grid.invaders.splice(i, 1)
                                projectiles.splice(j, 1)

                            }
                        }, 0)

                    }
                })
            })
        })
        if (keys.a.pressed && player.position.x >= 0) {
            player.velocity.x = -5
        } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
            player.velocity.x = 5
        } else {
            player.velocity.x = 0;
        }
        if (frames % randInterval === 0) {
            grids.push(new Grid(x))
            randInterval = Math.floor((Math.random() * 500) + 500)
            frames = 0
        }
        frames++
        if (frames % 10 == 0 && keys.w.pressed) {
            projectiles.push(new Projectile({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y
                },
                velocity: {
                    x: 0,
                    y: -10
                }
            }))
        }
    }

    addEventListener('keydown', ({ key }) => {
        switch (key) {
            case 'a':
                console.log('left')
                keys.a.pressed = true
                break;
            case 'd':
                console.log('right')
                keys.d.pressed = true
                break;
            case 'w':
                console.log('w')
                keys.w.pressed = true;
        }
    })
    addEventListener('keyup', ({ key }) => {
        switch (key) {
            case 'a':
                keys.a.pressed = false
                break;
            case 'd':
                keys.d.pressed = false
                break;

            case 'w':
                keys.w.pressed = false
                break;


        }
    })

    animate()

}