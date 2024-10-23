function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // مخفی کردن همه تب‌ها
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active"); // غیرفعال کردن تمام تب‌ها
    }
    document.getElementById(tabName).style.display = "block"; // نمایش تب انتخاب‌شده
    event.currentTarget.classList.add("active"); // فعال‌سازی تب
}

// نمایش پیش‌فرض تب "منوی سفارش"
document.getElementById("category-menu").style.display = "block";
