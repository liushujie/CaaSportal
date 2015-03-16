$(function()
  {
      initLogin();

  })

function initLogin()
{
    var username = $("#username"),password = $("#password");
    username.val("");
    password.val("");
//    username.attr("placeholder","Username");
//    password.attr("placeholder","Password");

    $('body :input').blur(
        function() {
            // 验证帐号
            if ($(this).is('#username')) {
                if($.trim(this.value).length < 1 ){
                    username.attr("placeholder","Username required");
                }
            }
            // 验证密码
            if ($(this).is('#password')) {
                if($.trim(this.value).length < 1 ){
                    password.attr("placeholder","Password required");
                }
            }
        });
//    //为回车键绑上登陆事件
//    $("body").bind("keydown",function(e){
//        if(e.keyCode==13){
//            loginValiadate();
//        }
//    });

}

function loginValiadate()
{
    var $error = $("#errormsg");
    $error.html("");
    var username = $("#username"),password = $("#password");
    username.removeClass('caas-warning');
    password.removeClass('caas-warning');
    var loginusername = $.trim(username.val());
    var loginpassword = $.trim(password.val());
    if (loginusername.length < 1) {
        username.val("");
        username.addClass('caas-warning');
        username.attr("placeholder","Username required");
        return false;
    }
    if (loginpassword.length < 1) {
        password.val("");
        password.addClass('caas-warning');
        password.attr("placeholder","Password required");
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

    if(loginusername == "admin" && loginpassword == "password")
    {
        //验证通过，并登陆系统
        // window.location.href = "../../cluster.html";
        return true;
    }
    else
    {
        password.val("");
        $error.html("Please input 'admin' as username and 'password' as password");
        return false;
    }

}

