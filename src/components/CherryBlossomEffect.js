import React, { useRef, useEffect } from 'react';

const SakuraEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const petals = [];

        class Petal {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height; // Xuất hiện từ trên cao
                this.size = Math.random() * 20 + 10; // Kích thước lớn hơn để trông giống cánh hoa
                this.speed = Math.random() * 3 + 1; // Tốc độ rơi
                this.angle = Math.random() * Math.PI * 2; // Góc ban đầu
                this.spin = Math.random() * 0.02 - 0.01; // Xoay nhẹ
                this.opacity = Math.random() * 0.7 + 0.3; // Độ trong suốt
            }

            update() {
                this.y += this.speed;
                this.x += Math.sin(this.angle) * 1; // Hiệu ứng dao động ngang
                this.angle += this.spin;

                // Khi cánh hoa rơi xuống đáy hoặc bay khỏi màn hình, đặt lại vị trí
                if (this.y > canvas.height) {
                    this.y = 0 - this.size;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.beginPath();

                // Vẽ hình cánh hoa bằng Bezier curves
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(
                    -this.size / 2, -this.size / 2, // Điểm đầu
                    this.size / 2, -this.size / 2,  // Điểm giữa
                    0, this.size                    // Điểm cuối
                );

                // Tô màu gradient hồng
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
                gradient.addColorStop(0, `rgba(255, 182, 193, ${this.opacity})`); // Hồng nhạt
                gradient.addColorStop(1, `rgba(255, 105, 180, ${this.opacity / 2})`); // Hồng đậm
                ctx.fillStyle = gradient;

                ctx.fill();
                ctx.restore();
            }
        }

        function createPetals() {
            for (let i = 0; i < 50; i++) {
                petals.push(new Petal());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            petals.forEach((petal) => {
                petal.update();
                petal.draw();
            });

            requestAnimationFrame(animate);
        }

        createPetals();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            petals.length = 0; // Xóa cánh hoa cũ
            createPetals(); // Tạo lại
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

export default SakuraEffect;
