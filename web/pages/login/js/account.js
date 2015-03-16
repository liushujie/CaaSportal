$(function()
{
    initAccountInfo();

})

function initAccountInfo()
{
    var username = $("#username"),email = $("#email"),firstname = $("#firstname"),lastname = $("#lastname");
    username.val("jsmith");
    email.val("john.smith@ubc.ca");
    firstname.val("John");
    lastname.val("Smith");
}

function cancelHandle()
{
    //验证通过，并登陆系统
    window.location.href = "login.html";
}

