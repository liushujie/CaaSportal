var UrlStore = {
    "doRequest": function (url, method, async, getParam, dataType,postParam,successCallback,errorCallBack, header) {
        if (getParam != undefined && getParam != null) {
            url = url + getParam;
        }
        var setting = {
            'url': url,
            'type': method != undefined ? method : 'POST',
            'async': async != undefined ? async : 'true',
            'dataType':dataType != undefined ? dataType : 'json',
            'success': function (data) {
                successCallback(data);
            },
            'error': function (e) {
                if(errorCallBack)
                    errorCallBack(e);
            }
        };
        if(postParam != undefined && postParam != null)
        {
            setting.data = postParam;
        }
        if (header != undefined && header != null) {
            setting.contentType = header;
        }
        $.ajax(setting);
    },
    //登录API
    "LOGIN_API":"/pr/loginurl"
}