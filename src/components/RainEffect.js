import React, { useRef, useEffect } from 'react';

const RainEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        let splashes = [];

        class Raindrop {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.length = Math.random() * 20 + 5; // Độ dài hạt mưa
                this.speed = Math.random() * 5 + 15; // Tốc độ rơi
                this.opacity = Math.random() * 0.5 + 0.3; // Độ trong suốt
                this.thickness = Math.random() * 2 + 0.5; // Độ dày hạt mưa
            }

            update() {
                this.y += this.speed;

                if (this.y > canvas.height) {
                    this.createSplash();
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = this.thickness;
                ctx.stroke();
                ctx.closePath();
            }

            createSplash() {
                splashes.push(new Splash(this.x, canvas.height, this.thickness));
            }
        }

        class Splash {
            constructor(x, y, thickness) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 3 + 2; // Bán kính giọt nước
                this.opacity = Math.random() * 0.5 + 0.2; // Độ mờ
                this.thickness = thickness;
                this.lifetime = 0; // Thời gian tồn tại
                this.maxLifetime = 20; // Tuổi thọ tối đa
            }

            update() {
                this.radius += 0.5; // Mở rộng giọt nước
                this.opacity -= 0.02; // Mờ dần
                this.lifetime++;

                if (this.lifetime >= this.maxLifetime) {
                    const index = splashes.indexOf(this);
                    if (index > -1) splashes.splice(index, 1);
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = this.thickness / 2;
                ctx.stroke();
                ctx.closePath();
            }
        }

        function createRaindrops() {
            for (let i = 0; i < 200; i++) { // Tăng số lượng hạt mưa
                particles.push(new Raindrop());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((raindrop) => {
                raindrop.update();
                raindrop.draw();
            });

            splashes.forEach((splash) => {
                splash.update();
                splash.draw();
            });

            requestAnimationFrame(animate);
        }

        createRaindrops();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            splashes = [];
            createRaindrops();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                pointerEvents: 'none',
            }}
        />
    );
};

export default RainEffect;
