// main.js - Xử lý logic tìm kiếm, bộ lọc, hiển thị bảng sách và tạo danh mục thể loại

(function() {
    // Đợi DOM sẵn sàng
    document.addEventListener('DOMContentLoaded', function() {
        // Lấy dữ liệu từ window (data.js)
        const bookData = window.bookData;
        const categoryIconMap = window.categoryIconMap;
        
        if (!bookData) {
            console.error('Dữ liệu sách chưa được tải!');
            return;
        }

        // Sắp xếp sách theo tên (tăng dần)
        const sortedBooks = [...bookData].sort((a, b) => 
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
        
        // Lấy danh sách thể loại duy nhất
        const uniqueCategories = [...new Map(bookData.map(item => [item.category, item.category])).values()].sort();
        
        // DOM elements
        const tbody = document.getElementById('tableBody');
        const emptyMsg = document.getElementById('emptyMessage');
        const searchInput = document.getElementById('searchInput');
        const filterListContainer = document.getElementById('categoryFilterList');
        
        // Render bảng sách với icon cho thể loại và tên sách
        function renderBookTable(books) {
            tbody.innerHTML = '';
            if (books.length === 0) {
                emptyMsg.style.display = 'block';
                return;
            }
            emptyMsg.style.display = 'none';
            
            books.forEach(book => {
                const row = document.createElement('tr');
                
                // Cột thể loại (có icon)
                const tdCategory = document.createElement('td');
                const iconClass = categoryIconMap[book.category] || "fa-bookmark";
                tdCategory.innerHTML = `<i class="fas ${iconClass}" style="margin-right: 8px; color: #2980b9;"></i> ${book.category}`;
                row.appendChild(tdCategory);
                
                // Cột tên sách (có icon)
                const tdTitle = document.createElement('td');
                tdTitle.innerHTML = `<i class="fas fa-book" style="margin-right: 8px; color: #e67e22; font-size: 0.9rem;"></i> ${book.title}`;
                row.appendChild(tdTitle);
                
                // Cột link tải (icon download)
                const tdLink = document.createElement('td');
                const a = document.createElement('a');
                a.href = book.link;
                a.target = '_blank';
                a.rel = 'noopener';
                a.innerHTML = '<i class="fas fa-download"></i> Tải về';
                tdLink.appendChild(a);
                row.appendChild(tdLink);
                
                tbody.appendChild(row);
            });
        }
        
        // Hàm debounce
        function debounce(func, wait) {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }
        
        // Lọc sách theo keyword (thể loại hoặc tên)
        function filterBooks(keyword) {
            const lowerKeyword = keyword.toLowerCase();
            const filtered = sortedBooks.filter(book => 
                book.category.toLowerCase().includes(lowerKeyword) ||
                book.title.toLowerCase().includes(lowerKeyword)
            );
            renderBookTable(filtered);
            updateActiveCategoryFilter(keyword);
        }
        
        const debouncedFilter = debounce(filterBooks, 300);
        
        // Cập nhật trạng thái active cho các thẻ thể loại dựa vào từ khóa hiện tại
        function updateActiveCategoryFilter(currentKeyword) {
            const items = document.querySelectorAll('.filter-list li');
            items.forEach(item => {
                const categoryValue = item.getAttribute('data-category');
                if (categoryValue === 'all' && (currentKeyword === '' || currentKeyword === undefined)) {
                    item.classList.add('active');
                } 
                else if (categoryValue !== 'all' && currentKeyword.toLowerCase() === categoryValue.toLowerCase()) {
                    item.classList.add('active');
                } 
                else {
                    item.classList.remove('active');
                }
            });
        }
        
        // Xây dựng thanh bộ lọc thể loại
        function buildCategoryFilter() {
            filterListContainer.innerHTML = '';
            // Nút "Tất cả"
            const allLi = document.createElement('li');
            allLi.setAttribute('data-category', 'all');
            allLi.innerHTML = '<i class="fas fa-layer-group"></i> Tất cả';
            allLi.addEventListener('click', () => {
                searchInput.value = '';
                filterBooks('');
                searchInput.dispatchEvent(new Event('input'));
                updateActiveCategoryFilter('');
            });
            filterListContainer.appendChild(allLi);
            
            // Các thể loại riêng
            uniqueCategories.forEach(cat => {
                const li = document.createElement('li');
                li.setAttribute('data-category', cat);
                const icon = categoryIconMap[cat] || "fa-tag";
                li.innerHTML = `<i class="fas ${icon}"></i> ${cat}`;
                li.addEventListener('click', () => {
                    searchInput.value = cat;
                    filterBooks(cat);
                    searchInput.dispatchEvent(new Event('input'));
                    updateActiveCategoryFilter(cat);
                });
                filterListContainer.appendChild(li);
            });
            // Active mặc định là "Tất cả"
            updateActiveCategoryFilter('');
        }
        
        // Sự kiện tìm kiếm
        searchInput.addEventListener('input', function(e) {
            debouncedFilter(e.target.value);
        });
        
        // Khởi tạo giao diện
        renderBookTable(sortedBooks);
        buildCategoryFilter();
    });
})();
