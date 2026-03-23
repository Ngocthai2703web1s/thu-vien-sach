// ==================== QUẢN LÝ BẢNG SÁCH ====================
const sortedBooks = [...bookData].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
);

function renderBookTable(books) {
    const tbody = document.getElementById('tableBody');
    const emptyMsg = document.getElementById('emptyMessage');
    tbody.innerHTML = '';

    if (books.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    }
    emptyMsg.style.display = 'none';

    books.forEach(book => {
        const row = document.createElement('tr');

        const tdCategory = document.createElement('td');
        tdCategory.textContent = book.category;
        row.appendChild(tdCategory);

        const tdTitle = document.createElement('td');
        tdTitle.textContent = book.title;
        row.appendChild(tdTitle);

        const tdLink = document.createElement('td');
        const a = document.createElement('a');
        a.href = book.link;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = '📥 Tải về';
        tdLink.appendChild(a);
        row.appendChild(tdLink);

        tbody.appendChild(row);
    });
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function filterBooks(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = sortedBooks.filter(book =>
        book.category.toLowerCase().includes(lowerKeyword) ||
        book.title.toLowerCase().includes(lowerKeyword)
    );
    renderBookTable(filtered);
}

const debouncedFilter = debounce(filterBooks, 300);

document.getElementById('searchInput').addEventListener('input', function (e) {
    debouncedFilter(e.target.value);
});

// Hiển thị toàn bộ sách ban đầu
renderBookTable(sortedBooks);

// ==================== QUẢN LÝ GALLERY ẢNH ====================
function getRandomDistinctItems(arr, n) {
    if (n >= arr.length) return [...arr];
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

function initGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

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

            link.addEventListener('click', function (e) {
                e.preventDefault();
                window.open(item.link, '_blank');
            });

            link.addEventListener('keydown', function (e) {
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
            nameDiv.textContent = item.name;

            link.appendChild(img);
            link.appendChild(nameDiv);
            itemDiv.appendChild(link);
            gallery.appendChild(itemDiv);
        });
    }

    render(getRandomDistinctItems(imageData, 4));

    let timeoutId = null;

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

        const onTransitionEnd = function () {
            clearTimeout(fallbackTimer);
            gallery.removeEventListener('transitionend', onTransitionEnd);
            completeUpdate();
        };

        gallery.addEventListener('transitionend', onTransitionEnd);

        function completeUpdate() {
            render(getRandomDistinctItems(imageData, 4));
            requestAnimationFrame(() => {
                gallery.classList.remove('fade-out');
            });
            scheduleNext();
        }
    }

    scheduleNext();

    window.addEventListener('beforeunload', function () {
        clearSchedule();
    });
}

// Khởi tạo cả hai gallery
initGallery('galleryTop');
initGallery('galleryBottom');