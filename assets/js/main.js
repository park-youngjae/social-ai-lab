(() => {

  /* =========================================
     Mobile Navigation
  ========================================= */

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const teamItem = document.querySelector('.nav-item.has-dropdown');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {

      const isOpen = nav.classList.toggle('open');

      document.body.classList.toggle(
        'menu-open',
        isOpen
      );

      toggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );
    });
  }


  /* =========================================
     Mobile Team Dropdown
  ========================================= */

  if (teamItem) {

    const teamLink = teamItem.querySelector('.nav-link');

    teamLink?.addEventListener('click', (e) => {

      if (window.innerWidth <= 820) {

        e.preventDefault();

        teamItem.classList.toggle('mobile-open');
      }
    });
  }


  /* =========================================
     Close Mobile Navigation
  ========================================= */

  document
    .querySelectorAll('.nav-links a')
    .forEach((a) => {

      a.addEventListener('click', () => {

        if (
          window.innerWidth <= 820 &&
          !a.classList.contains('nav-link')
        ) {

          nav?.classList.remove('open');

          document.body.classList.remove(
            'menu-open'
          );
        }
      });

    });


  /* =========================================
     Scroll Reveal Animation
     - 아래에서 위로 등장
     - 같은 영역에서는 순차적으로 등장
  ========================================= */

  const revealEls =
    document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {

    const io = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const el = entry.target;
          const parent = el.parentElement;


          /* 같은 부모의 reveal 요소 순서 계산 */
          if (parent) {

            const siblings = Array.from(
              parent.querySelectorAll(
                ':scope > .reveal'
              )
            );

            const index =
              siblings.indexOf(el);


            /*
             * 각 요소마다 100ms씩 delay
             * 최대 delay는 400ms
             */
            if (index >= 0) {

              el.style.transitionDelay =
                `${Math.min(
                  index * 100,
                  400
                )}ms`;
            }
          }


          /* 화면에 나타나도록 클래스 추가 */
          el.classList.add('in-view');


          /*
           * 한 번 나타난 뒤에는
           * 다시 애니메이션하지 않음
           */
          io.unobserve(el);
        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );


    revealEls.forEach((el) => {
      io.observe(el);
    });

  } else {

    revealEls.forEach((el) => {
      el.classList.add('in-view');
    });
  }


  /* =========================================
     Scroll To Top
  ========================================= */

  const scrollTop =
    document.querySelector('.scroll-top');

  if (scrollTop) {

    const update = () => {

      scrollTop.classList.toggle(
        'visible',
        window.scrollY > 450
      );
    };

    update();

    window.addEventListener(
      'scroll',
      update,
      { passive: true }
    );

    scrollTop.addEventListener(
      'click',
      () => {

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      }
    );
  }


  /* =========================================
     News - Show More
  ========================================= */

  const moreBtn =
    document.querySelector(
      '[data-news-more]'
    );

  if (moreBtn) {

    moreBtn.addEventListener(
      'click',
      () => {

        document
          .querySelectorAll(
            '.news-item.is-hidden'
          )
          .forEach((el) => {

            el.classList.remove(
              'is-hidden'
            );

          });

        moreBtn.remove();
      }
    );
  }


  /* =========================================
     Publications Filter
  ========================================= */

  const filterBtns =
    document.querySelectorAll(
      '[data-filter]'
    );

  const pubCards =
    document.querySelectorAll(
      '.pub-card[data-category]'
    );


  filterBtns.forEach((btn) => {

    btn.addEventListener(
      'click',
      () => {

        filterBtns.forEach((b) => {
          b.classList.remove('active');
        });


        btn.classList.add('active');


        const target =
          btn.dataset.filter;


        pubCards.forEach((card) => {

          card.style.display =
            target === 'all' ||
            card.dataset.category === target
              ? 'grid'
              : 'none';

        });

      }
    );
  });

})();