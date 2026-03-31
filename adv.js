// adv.js - Quản lý gallery quảng cáo với hiệu ứng xoay vòng ngẫu nhiên, độc lập cho từng khung

(function() {
    // Hàm lấy ngẫu nhiên n phần tử khác nhau từ mảng
    function getRandomDistinctItems(arr, n) {
        if (n >= arr.length) return [...arr];
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, n);
    }

    // Tạo một gallery quản lý riêng với ID và nguồn ảnh
    function initGallery(galleryId, imageSource) {
        const gallery = document.getElementById(galleryId);
        if (!gallery) return;

        let timeoutId = null;
        
        // Render các item ảnh vào gallery
        function render(items) {
            gallery.innerHTML = '';
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'gallery-item';

                const link = document.createElement('a');
                link.className = 'gallery-link';
                link.setAttribute('role', 'link');
                link.setAttribute('tabindex', '0');
                link.setAttribute('aria-label', `Mở link: ${item.name}`);
                link.setAttribute('data-url', item.link);
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.open(item.link, '_blank');
                });
                
                link.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.open(item.link, '_blank');
                    }
                });

                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.name;
                img.loading = 'lazy';

                const nameDiv = document.createElement('div');
                nameDiv.className = 'image-name';
                nameDiv.innerHTML = `<i class="fas fa-camera-retro"></i> ${item.name}`;

                link.appendChild(img);
                link.appendChild(nameDiv);
                itemDiv.appendChild(link);
                gallery.appendChild(itemDiv);
            });
        }

        function clearSchedule() {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        }

        function scheduleNext() {
            clearSchedule();
            const delay = Math.floor(Math.random() * 3000) + 5000; // 5-8 giây
            timeoutId = setTimeout(() => {
                performUpdate();
            }, delay);
        }

        function performUpdate() {
            gallery.classList.add('fade-out');
            const fallbackTimer = setTimeout(() => {
                gallery.removeEventListener('transitionend', onTransitionEnd);
                completeUpdate();
            }, 500);

            const onTransitionEnd = function() {
                clearTimeout(fallbackTimer);
                gallery.removeEventListener('transitionend', onTransitionEnd);
                completeUpdate();
            };

            gallery.addEventListener('transitionend', onTransitionEnd);

            function completeUpdate() {
                const newItems = getRandomDistinctItems(imageSource, 4);
                render(newItems);
                requestAnimationFrame(() => {
                    gallery.classList.remove('fade-out');
                });
                scheduleNext();
            }
        }

        function start() {
            const initialItems = getRandomDistinctItems(imageSource, 4);
            render(initialItems);
            scheduleNext();
        }

        function stop() {
            clearSchedule();
        }

        start();
        
        window.addEventListener('beforeunload', function() {
            stop();
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        if (window.imageData && window.imageData.length) {
            initGallery('galleryTop', window.imageData);
            initGallery('galleryBottom', window.imageData);
        } else {
            console.warn('imageData chưa sẵn sàng, gallery không thể khởi tạo');
        }
    });
})();
