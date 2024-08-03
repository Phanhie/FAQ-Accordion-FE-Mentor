const section = document.querySelectorAll('section').length;

for (let i = 0; i < section; i++) {
    let plus = document.querySelectorAll('.plus')[i];
    let minus = document.querySelectorAll('.minus')[i];
    let p = document.querySelectorAll('p')[i];

    function show() {
      plus.style.display = 'none';
      minus.style.display = 'inline-block';
      p.style.display = 'inline-block';
    }

    function hide() {
        plus.style.display = 'inline-block';
        minus.style.display = 'none';
        p.style.display = 'none';
      }

      plus.addEventListener('click', show);
      minus.addEventListener('click', hide);

      plus.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          show();
        }
        if (e.keyCode === 32) {
          e.preventDefault();
          show();
        }
      });
    
      minus.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          hide();
        }
        if (e.keyCode === 32) {
          e.preventDefault();
          hide();
        }
      });
    }