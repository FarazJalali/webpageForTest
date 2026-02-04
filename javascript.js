document.addEventListener('DOMContentLoaded', function() {
    // تمام آیتم‌های نوبار
    const navItems = document.querySelectorAll('.nav-item');
    // تمام صفحات
    const pages = document.querySelectorAll('.page');

    // اضافه کردن event listener به هر آیتم نوبار
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // گرفتن صفحه هدف از data-page
            const targetPage = this.getAttribute('data-page');

            // حذف کلاس active از همه آیتم‌های نوبار
            navItems.forEach(nav => {
                nav.classList.remove('active');
            });

            // اضافه کردن کلاس active به آیتم کلیک شده
            this.classList.add('active');

            // مخفی کردن همه صفحات
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // نمایش صفحه هدف
            const activePage = document.getElementById(targetPage);
            activePage.classList.add('active');
        });
    });
});
