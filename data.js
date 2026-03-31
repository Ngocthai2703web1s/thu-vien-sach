// data.js - Chứa dữ liệu tĩnh: danh sách sách, ảnh quảng cáo và icon cho thể loại

// Dữ liệu sách phong phú
window.bookData = [
    { category: "Kỹ Năng Sống", title: "7 Thói Quen Của Bạn Trẻ Thành Đạt", link: "https://link4m.net/qCjvc5" },
    { category: "Kỹ Năng Sống", title: "Đắc Nhân Tâm", link: "https://link4m.com/ZPtxA8ts" },
    { category: "Văn Học", title: "Nhà Giả Kim", link: "https://link4m.net/W7OcQT" },
    { category: "Văn Học", title: "Hoàng Tử Bé", link: "https://link4m.com/EqBk89G" },
	{ category: "Trinh Thám", title: "Tử Thư Tây Hạ 1 -  Mộ Người Sống Bí Ẩn Trong Tử Thư", link: "https://link4m.net/erTyT" },
	{ category: "Trinh Thám", title: "Tử Thư Tây Hạ 2 - U Hồn Bí Ẩn", link: "https://link4m.com/Mk84g" },
	{ category: "Trinh Thám", title: "Tử Thư Tây Hạ 3 - Biên Giới Không Bóng Người", link: "https://link4m.com/puzCgCZ8" },
	{ category: "Trinh Thám", title: "Tử Thư Tây Hạ 4 - Ẩn Số Nơi Sa Mạc", link: "https://link4m.net/WB8sK" },
	{ category: "Trinh Thám", title: "Tử Thư Tây Hạ 5 - Kết Cục Chết Chóc", link: "https://link4m.net/5j465" },
    { category: "Khoa Học", title: "Cái Vô Hạn Trong Lòng Bàn Tay", link: "https://link4m.net/OaGmUW" },
    { category: "Khoa Học", title: "Thuyết Tương Đối Cho Mọi Người", link: "https://link4m.net/Crkfi2X" },
	{ category: "Kỹ Năng Sống", title: "13 Lý Do Tại Sao", link: "https://link4m.com/nZxPbbK" },
    { category: "Trinh Thám", title: "Phăng Teo", link: "https://link4m.net/TdCXv1" },
    { category: "Công Nghệ", title: "Trí tuệ nhân tạo", link: "#" },
    { category: "Trinh Thám", title: "Án Mạng Trên Chuyến Tàu Tốc Hành Phương Đông", link: "https://link4m.com/CuvxfgM" },
    { category: "Kinh Tế", title: "Những Nguyên Lý Của Kinh Tế Chính Trị Học Và Thuế Khóa", link: "https://link4m.com/cOIKoXiF" },
    { category: "Tâm lý", title: "Hiểu Về Trái Tim", link: "https://link4m.com/91aKPD" },
    { category: "Tâm lý", title: "Nghệ Thuật Sống", link: "https://link4m.net/xqWwos7H" },
	{ category: "Trinh Thám", title: "Mặt Nạ Tử Thần Đỏ", link: "https://link4m.com/D7hU7EK4" },
	{ category: "Trinh Thám", title: "Mặt Nạ Trắng", link: "https://link4m.com/x2DjGdRT" },
	{ category: "Trinh Thám", title: "Hồi Ức Kẻ Sát Nhân", link: "https://link4m.net/7gtwE74J" },
	{ category: "Trinh Thám", title: "Tổ Trinh Thám Linh Dị Tập 1", link: "https://link4m.com/MFzxvO1U" },
	{ category: "Trinh Thám", title: "Căn Hộ Số 203", link: "https://link4m.net/aPRenu0N" },
	{ category: "Trinh Thám", title: "Bảy Ngày Đếm Ngược", link: "https://link4m.com/tvym9" },
	{ category: "Trinh Thám", title: "Nếu Như Được Làm Lại", link: "https://link4m.com/fMCQvlg" },
	{ category: "Công Nghệ", title: "BA Interview Questions and Answers", link: "#" }
];

// Dữ liệu ảnh quảng cáo (adv)
window.imageData = [
    { src: 'https://down-cvs-vn.img.susercontent.com/vn-11134207-7r98o-lxkn2oqgsi559f.webp', name: 'Sốt thái trộn chân gà , tai heo , hải sản', link: 'https://s.shopee.vn/5VQi5eaCXU' },
    { src: 'https://down-cvs-vn.img.susercontent.com/vn-11134201-7ras8-mck5zxshdgyq08.webp', name: 'Khăn giấy TopGia Đa sắc thùng 04 bịch', link: 'https://s.shopee.vn/8KktTBQLFA' },
    { src: 'https://down-cvs-vn.img.susercontent.com/vn-11134207-7r98o-lvi9iw22uv6s28.webp', name: 'Muối chấm thịt nướng và chấm hải sản- chấm BBQ', link: 'https://s.shopee.vn/9fGHBMp86q' },
    { src: 'https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m8yjjtkm14ku2f.webp', name: 'Sốt Thái Trộn Chân Gà,Trứng Non,Tai Heo,Gân Bò,Trộn Đủ Món', link: 'https://s.shopee.vn/6fcfc3RKFx' },
    { src: 'https://down-zl-vn.img.susercontent.com/vn-11134207-81ztc-mlncw1u94c9b67.webp', name: 'Thùng 30 gói Khăn giấy rút TopGia', link: 'https://s.shopee.vn/70FW5jrPis' },
    { src: 'https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lndsoahicvwa54.webp', name: 'Hộp đựng rau củ tủ lạnh có quai trong suốt', link: 'https://s.shopee.vn/9fGHGj90cJ' },
    { src: 'https://down-zl-vn.img.susercontent.com/sg-11134201-7repu-m8c771r43cmfdd.webp', name: 'Combo 03 Túi Đường Mía Thiên Nhiên Biên Hòa 1Kg', link: 'https://s.shopee.vn/6VJFV1WoJl' },
    { src: 'https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lza4c4tc6i4td6.webp', name: 'Trà Bổ Máu Ích Huyết Mát Gan Bình An', link: 'https://s.shopee.vn/5L7I6yLd4T' }
];

// Icon mapping cho từng thể loại sách (dùng trong main.js)
window.categoryIconMap = {
    "Kỹ Năng Sống": "fa-users",
    "Văn Học": "fa-feather-alt",
    "Khoa Học": "fa-flask",
    "Công Nghệ": "fa-microchip",
    "Trinh Thám": "fa-search",
    "Kinh Tế": "fa-chart-line",
    "Kinh Dị": "fa-ghost",
    "Tâm Lý": "fa-brain"
};
