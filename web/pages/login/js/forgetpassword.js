$(function()
{
    initForgetpassword();

})

function initForgetpassword()
{
    var email = $("#email"),code = $("#code");
    email.attr("placeholder","Email");
    code.attr("placeholder","Verification code");

    $('body :input').blur(
        function() {
            // 验证邮箱
            if ($(this).is('#email')) {
                if($.trim(this.value).length < 1 ){
                    email.attr("placeholder","Email required");
                }
            }
            // 验证验证码
            if ($(this).is('#code')) {
                if($.trim(this.value).length < 1 ){
                    code.attr("placeholder","Verification code required");
                }
            }

        } );
    //为回车键绑上登陆事件
    $("body").bind("keydown",function(e){
        if(e.keyCode==13){
            emailValiadate();
        }
    });

}

function emailValiadate()
{
    var email = $("#email"),code = $("#code");
    email.removeClass('warning');
    code.removeClass('warning');
    var validateemail = $.trim(email.val()),validatecode = $.trim(code.val());
    if (validateemail.length < 1) {
        email.val("");
        email.addClass('warning');
        email.attr("placeholder","Email required");
        return false;
    }
    if (validatecode.length < 1) {
        code.val("");
        code.addClass('warning');
        code.attr("placeholder","Verification code required");
        return false;
    }
    return true;
}

