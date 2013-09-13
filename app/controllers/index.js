var _counter = 0;

function doClick(e) {
    _counter++;
    alert($.label.text + _counter);
    $.label.text = $.label.text + _counter;
}

$.index.open();
