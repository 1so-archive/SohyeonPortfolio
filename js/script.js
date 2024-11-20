$(document).ready(function() {
    $('.content-lists button').click(function() {
        const imgBox = $(this).siblings('.img-box');
        imgBox.toggleClass('on');

        // img-box의 on 클래스 여부에 따라 슬라이드 토글
        if (imgBox.hasClass('on')) {
            imgBox.stop().slideDown(300);
        } else {
            imgBox.stop().slideUp(300);
        }
    });
    

});
document.addEventListener('DOMContentLoaded', function() {
    // 'active' 클래스를 적용할 요소들을 선택
    const elements = document.querySelectorAll('.txt-wrap, .sec-title, .year-lists .ani, .active, .line-top, .line-bottom');
    
    // 페이지가 처음 로드될 때 모든 요소에서 active 클래스를 제거
    elements.forEach(element => {
        element.classList.remove('active');
    });

    window.addEventListener('scroll', function() {
        elements.forEach(element => {
            // 요소의 위치를 확인
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;

            // 화면 상단에 요소가 다가올 때 active 클래스를 추가
            if (elementTop <= window.innerHeight * 0.75 && elementTop + elementHeight > 0) {
                // 'active' 클래스가 없을 경우에만 추가
                if (!element.classList.contains('active')) {
                    element.classList.add('active');
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // 모든 섹션(section 요소)와 내비게이션 링크를 가져옵니다
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".gnb li a");

    // IntersectionObserver를 사용해 각 섹션의 가시성을 추적합니다
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const targetId = entry.target.id;  // 관찰되는 섹션의 ID
            const correspondingLink = document.querySelector(`.gnb li a[href="#${targetId}"]`);

            if (entry.isIntersecting) {
                // 섹션이 보이면 active 클래스를 추가
                correspondingLink.classList.add("active");
            } else {
                // 섹션이 보이지 않으면 active 클래스를 제거
                correspondingLink.classList.remove("active");
            }
        });
    }, {
        threshold: 0.12,  // 섹션이 12% 보일 때 바로 활성화
        rootMargin: "0px 0px -20% 0px"  // 섹션이 화면 하단에서 20%만큼 보일 때 활성화
    });

    // 각 섹션을 observer로 등록합니다
    sections.forEach(section => {
        observer.observe(section);
    });

    // 스크롤 이벤트를 감지하여 내비게이션 고정 상태를 관리합니다.
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY > headerHeight) {
            // 스크롤이 헤더 높이를 넘어서면, 내비게이션을 고정시킵니다
            header.classList.add("scrolled");
        } else {
            // 스크롤이 헤더 높이보다 적으면, 내비게이션을 원래 상태로 돌립니다
            header.classList.remove("scrolled");
        }
    });
});
// navLinks.forEach(link => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute("href").substring(1);
//         const targetSection = document.getElementById(targetId);

//         window.scrollTo({
//             top: targetSection.offsetTop - header.offsetHeight,
//             behavior: 'smooth'
//         });
//     });
// });


