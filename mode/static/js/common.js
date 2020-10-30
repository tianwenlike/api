/*一天时段判断，凌晨，早上，上午，下午，傍晚，晚上*/
function shiduan() {
    var now = new Date(), hour = now.getHours();
    if (hour < 6) {
        return '凌晨';
    } else if (hour < 9) {
        return '早上';
    } else if (hour < 12) {
        return '上午';
    } else if (hour < 14) {
        return '中午';
    } else if (hour < 17) {
        return '下午';
    } else if (hour < 19) {
        return '傍晚';
    } else if (hour < 22) {
        return '晚上';
    } else {
        return '夜里';
    }
}

/*获取当前时间*/
function dangqianshijian(mark) {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth();
    m = m + 1;
    m = (m < 10) ? '0' + m : m;
    var d = now.getDate();
    d = (d < 10) ? '0' + d : d;
    var h = now.getHours();
    h = (h < 10) ? '0' + h : h;
    var i = now.getMinutes();
    i = (i < 10) ? '0' + i : i;
    var s = now.getSeconds();
    s = (s < 10) ? '0' + s : s;
    var hm = now.getMilliseconds();
    hm = (hm < 10) ? '00' + s : ((hm < 100) ? '00' + s : s);
    if (mark == 1) {
        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    } else if (mark == 2) {
        return y + '-' + m + '-' + d;
    } else {
        return {y: y, m: m, d: d, d: d, h: h, i: i, s: s, hm: hm};
    }
}

/*获取明天日期*/
function mingttianshijian() {
    var now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);
    var y = now.getFullYear();
    var m = now.getMonth();
    m = m + 1;
    m = (m < 10) ? '0' + m : m;
    var d = now.getDate();
    d = (d < 10) ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

/* 返回函数 */
$('.j_back').click(function () {
    window.history.back();
});

/*调用摄像头或上传图片*/
$('.j_camera').click(function () {
    $(this).parent().children('.guobandanimg').click();
});

/*跳转页面*/
$('.j_url').click(function () {
    window.location.href = $(this).data('url');
});

/*显示调出调入仓库*/
function f_canku(obj) {
    var v = obj
    if (v == 'GBDC') {
        $('.F_OUTWHboxb').removeClass('d-none');
        $('.F_INWHboxb').removeClass('d-none');
        $('.F_ora_POOrderboxb').addClass('d-none');
        $('.F_ora_POTypeboxb').addClass('d-none');
        $('.F_Supplierboxb').addClass('d-none');
    } else {
        $('.F_OUTWHboxb').addClass('d-none');
        $('.F_INWHboxb').addClass('d-none');
        $('.F_ora_POOrderboxb').removeClass('d-none');
        $('.F_ora_POTypeboxb').removeClass('d-none');
        $('.F_Supplierboxb').removeClass('d-none');
    }
}

/*截取url参数*/
function getQueryVariable(variable = '') {
    var query = window.location.search.substring(1);
    if (!query) {
        return false;
    }
    var vars = query.split("&");
    var back = [];
    for (var i = 0; i < vars.length; i++) {
        if (variable) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        } else {
            var pair = vars[i].split("=");
            back.push([pair[0], pair[1]]);
        }
    }
    if (variable) {
        return '';
    }
    return back;
}

$('body').on('focus', '.listp', function () {
    $(this).parent().children('.listul').show();
});
$('body').on('click', 'label, th', function () {
    $(this).parent().children('.listbox').children('.listul').hide();
    if ($(this).parent().children('.listbox').children('.listp').val() == '') {
        $(this).parent().children('.listbox').children('.listinput').val('');
    }
});
$('body').on('click', '.guanbishaixuan', function () {
    $('.shaixuan').hide();
});
$('body').on('click', '.xianshishaixuan', function () {
    $('.shaixuan').show();
});
$('body').on('click', '.listul li', function () {
    var name = $(this).text();
    var v = $(this).data('number');
    $(this).parent().parent().children('.listp').val(name);
    $(this).parent().parent().children('.listinput').val(v);
    $(this).parent().parent().children('.listul').hide();
});
$('body').on('keyup', '.listp', function () {
    var v = $(this).val();
    var ls_v = '';
    $.each($(this).parent().children('.listul').children(), function (i, e) {
        if (v === '') {
            $(e).show();
        } else {
            v = v.toUpperCase();
            ls_v = $(e).text();
            if (ls_v.indexOf(v) != -1) {
                $(e).show();
            } else {
                $(e).hide();
            }
        }
    });
});
$(function () {
    //$('input[type="text"]').after('<span class="scan">x</span>');
    var lsinputtext = $('input[type="text"]');
    if (lsinputtext.length > 0) {
        lsinputtext.each(function (index, e) {
            if ($(e).hasClass('nodel')) {

            } else {
                if ($(e).parent().hasClass('listbox')) {
                    $(e).after('<span class="scan">x</span>');
                }
            }
        });
    }
    $('body').on('click', 'label', function () {
        $('.listul').hide();
    });
    $('body').on('click', 'input', function () {
        var that = this;
        var lslistul = $('.listul');
        if (lslistul.length > 0) {
            lslistul.each(function (index, e) {
                if ($(e).css('display') == 'none') {

                } else {
                    $('.listul').hide();
                    $(that).parent().children('.listul').show();
                }
            });
        }
    });
});
$('body').on('click', '.scan', function () {
    $(this).parent().children('input[type="text"]').val('');
    $(this).parent().children('input.listinput').val('');
    $(this).parent().children('.listul').hide();
    $(this).parent().children('input.listinput2').val('');
    $(this).parent().children('.listul2').hide();
});

function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 3600 * 30 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 60 * 60 * 1000);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}

$(document).on('click', '.shaixuane', function () {
    if ($(this).children('.glyphicon').hasClass('glyphicon-chevron-right')) {
        $(this).children('.glyphicon').removeClass('glyphicon-chevron-right');
        $(this).children('.glyphicon').addClass('glyphicon-chevron-down');
        $(this).parent().parent().children('.shiaxuanneirong').show();
    } else {
        $(this).children('.glyphicon').addClass('glyphicon-chevron-right');
        $(this).children('.glyphicon').removeClass('glyphicon-chevron-down');
        $(this).parent().parent().children('.shiaxuanneirong').hide();
    }
});

function backstatus(values) {
    if (values) {
        switch (values) {
            case 'A':
                return '保存';
                break;
            case 'B':
                return '审核中';
                break;
            case 'C':
                return '已审核';
                break;
            case 'D':
                return '重新审核';
                break;
            case 'Z':
                return '暂存';
                break;
            default:
                return '';
        }
    } else {
        return '';
    }
}

$(function (){
    var t = window.setInterval(function () {
        $("#e_list>tbody").find("tr>td").each(function (i, e) {
            if ($(e) != '' && $(e) != undefined && $(e) != null) {
                if ($.isNumeric($(e).text())) {
                    $(this).css('text-align', 'right');
                } else {
                    $(this).css('text-align', 'left');
                }
                window.clearInterval(t);
            }
        }, 1000)
    });
    return false;
})

