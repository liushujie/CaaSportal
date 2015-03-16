$(function()
{
    initRegister();

})

function initRegister()
{
    var username = $("#username"),email = $("#email"),password = $("#password"),password2 = $("#password2"),
        firstname = $("#firstname"),lastname = $("#lastname");
        username.val("");
        email.val("");
        password.val("");
        password2.val("");
        firstname.val("");
        lastname.val("");
//    username.attr("placeholder","Username");
//    email.attr("placeholder","Email");
//    password.attr("placeholder","Password");
//    password2.attr("placeholder","Retype password");
//    firstname.attr("placeholder","First Name");
//    lastname.attr("placeholder","Last Name");

    $('body :input').blur(
        function() {
            // 验证帐号
            if ($(this).is('#username')) {
                if($.trim(this.value).length < 1 ){
                    username.attr("placeholder","Username required");
                }
            }
            // 验证邮箱
            if ($(this).is('#email')) {
                if($.trim(this.value).length < 1 ){
                    email.attr("placeholder","Email required");
                }
            }
            // 验证密码
            if ($(this).is('#password')) {
                if($.trim(this.value).length < 1 ){
                    password.attr("placeholder","Password required");
                }
            }
            // 验证确认密码
            if ($(this).is('#password2')) {
                if($.trim(this.value).length < 1 ){
                    password2.attr("placeholder","Retype password required");
                }
            }

            // 验证firstname
            if ($(this).is('#firstname')) {
                if($.trim(this.value).length < 1 ){
                    firstname.attr("placeholder","First Name required");
                }
            }

            // 验证lastname
            if ($(this).is('#lastname')) {
                if($.trim(this.value).length < 1 ){
                    lastname.attr("placeholder","Last Name required");
                }
            }


        });
//    //为回车键绑上注册事件
//    $("body").bind("keydown",function(e){
//        if(e.keyCode==13){
//            registerValiadate();
//        }
//    });

}

function registerValiadate()
{
    var $error = $("#errormsg");
    $error.html("");
    var username = $("#username"),email = $("#email"),password = $("#password"),password2 = $("#password2"),
        firstname = $("#firstname"),lastname = $("#lastname");
    username.removeClass('caas-warning');
    email.removeClass('caas-warning');
    password.removeClass('caas-warning');
    password2.removeClass('caas-warning');
    firstname.removeClass('caas-warning');
    lastname.removeClass('caas-warning');
    var rgusername = $.trim(username.val()),rgemail = $.trim(email.val()),rgfirstname = $.trim(firstname.val()),
        rglastname = $.trim(lastname.val()),rgpassword = $.trim(password.val()),rgpassword2 = $.trim(password2.val());
    if (rgfirstname.length < 1) {
        firstname.val("");
        firstname.addClass('caas-warning');
        firstname.attr("placeholder","First Name required");
        return false;
    }

    if (rglastname.length < 1) {
        lastname.val("");
        lastname.addClass('caas-warning');
        lastname.attr("placeholder","Last Name required");
        return false;
    }

    if (rgemail.length < 1) {
        email.val("");
        email.addClass('caas-warning');
        email.attr("placeholder","Email required");
        return false;
    }

    if (rgusername.length < 1) {
        username.val("");
        username.addClass('caas-warning');
        username.attr("placeholder","Username required");
        return false;
    }

    if (rgpassword.length < 1) {
        password.val("");
        password.addClass('caas-warning');
        password.attr("placeholder","Password required");
        return false;
    }

    if (rgpassword2.length < 1) {
        password2.val("");
        password2.addClass('caas-warning');
        password2.attr("placeholder","Retype password required");
        return false;
    }



//    var data = {
//        username: loginusername,
//        password: loginpassword
//    };
//    UrlStore.doRequest(UrlStore.LOGIN_API,"POST",null,null,null,data,function(result)
//    {
//        //验证通过，并登陆系统
//        window.location.href = "../../cluster.html";
//        return;
//    },
//    function(error){
//        password.val("");
//        alert("请输入正确的用户名和密码");
//    })
//
    if(rgusername == "admin" && rgpassword == "password")
    {
        //验证通过，并登陆系统
        // window.location.href = "../../cluster.html";
        return true;
    }
    else
    {
        password.val("");
        password2.val("");

        $error.html("Please input 'admin' as username and 'password' as password");
        return false;
    }

}

function cancelHandle()
{
    //验证通过，并登陆系统
    window.location.href = "login.html";
}

