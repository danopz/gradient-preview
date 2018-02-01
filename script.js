var left = document.getElementById('left');
var right = document.getElementById('right');

var render = function () {
    document.body.style.background = 'linear-gradient(to right, ' + left.value + ', ' + right.value + ')';
};
render();

left.addEventListener('change', render);
right.addEventListener('change', render);
