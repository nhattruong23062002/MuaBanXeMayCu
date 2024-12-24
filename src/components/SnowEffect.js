import React, { useRef, useEffect } from 'react';

const SnowEffect = () => {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        console.log(canvas.width, canvas.height); // Kiểm tra kích thước canvas




        let particles = [];

        class Snowflake {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 4 + 1; // Kích thước hạt
                this.speed = Math.random() * 3 + 1; // Tốc độ rơi
                this.wind = Math.random() * 2 - 1; // Gió
            }

            update() {
                this.y += this.speed;
                this.x += this.wind;

                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width || this.x < 0) {
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();
            }
        }

        function createSnowflakes() {
            for (let i = 0; i < 200; i++) {
                particles.push(new Snowflake());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((snowflake) => {
                snowflake.update();
                snowflake.draw();
            });
            requestAnimationFrame(animate);
        }

        createSnowflakes();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            createSnowflakes();
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

export default SnowEffect;
