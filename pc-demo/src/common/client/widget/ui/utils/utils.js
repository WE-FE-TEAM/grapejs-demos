/**
 * Created by jess on 15/9/28.
 */


function myFocus(sel, start, end) {
    try{
        if (sel.setSelectionRange) {
            sel.focus();
            sel.setSelectionRange(start,end);
        }
        else if (sel.createTextRange) {
            var range = sel.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    }catch(e){}
}


var utils = {
};


//将光标定位到输入框的最后
utils.moveCursorEnd = function( element ){
    if( element ){
        var value = element.value;
        if( value ){
            myFocus( element, value.length, value.length );
        }
    }
};


/////////////////解析URL参数///////////
utils.query2json = function( s ){
    s = s.replace(/^\?/,'');
    var out = {};
    var arr = s.split('&');
    for( var i = 0, len = arr.length; i < len; i++ ){
        var temp = arr[i];
        var tempArr = temp.split('=');
        if( tempArr.length === 2 ){
            try{
                out[ tempArr[0] ] = decodeURIComponent( tempArr[1] );
            }catch(e){}
        }
    }

    return out;
};

//utils.json2query = function( data ){};


utils.getSearchConf = function(){
    return utils.query2json( location.search );
};

///////////////////////////////////数字操作先关函数///////

//保留两位小数
utils.fixFloat1 =  function (floatNumber) {
    if (typeof floatNumber == 'string') {
        floatNumber = parseFloat(floatNumber, 10);
    }
    return parseFloat(Math.round(floatNumber * 100) / 100, 10).toFixed(1);
};

//保留两位小数
utils.fixFloat2 =  function (floatNumber) {
    if (typeof floatNumber == 'string') {
    floatNumber = parseFloat(floatNumber, 10);
    }
    return parseFloat(Math.round(floatNumber * 100) / 100, 10).toFixed(2);
};
//保留4位小数
utils.fixFloat4 =  function (floatNumber) {
    if (typeof floatNumber == 'string') {
    floatNumber = parseFloat(floatNumber, 10);
    }
    return parseFloat(Math.round(floatNumber * 10000) / 10000, 10).toFixed(4);
};
//整数添加,
utils.commaInteger = function(number){
    number = parseInt(number, 10);
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
//浮点数添加,
utils.commaFloat = function(number){
    if(!number) return 0;
    return utils.fixFloat2(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


//是否数字或浮点数
utils.isNumber = function(str){
    str = str || '';
    return /^\d+(\.\d+)?$/.test(str);
};


//////////////////  基金操作  /////////

//获取 YYYY-MM-DD 格式的日期
utils.formatYearMonthDate = function( date ){
    var out = '';

    if( date && date instanceof  Date){
        var month = date.getMonth() + 1;
        var day = date.getDate() ;

        var year = date.getFullYear();

        if( month < 10 ){
            month = '0' + month;
        }

        if( day < 10 ){
            day = '0' + day;
        }

        out = year + '-' + month + '-' + day;
    }

    return out;

};

//获取 MM-DD 格式的日期
utils.formatMonthDate = function( date ){
    var out = '';

    if( date && date instanceof  Date){
        var month = date.getMonth() + 1;
        var day = date.getDate() ;

        if( month < 10 ){
            month = '0' + month;
        }

        if( day < 10 ){
            day = '0' + day;
        }

        out = month + '-' + day;
    }

    return out;

};

//获取可读的基金类型
utils.getFundTypeString = function( type ){

    var typeString = '';
    //是否是货币基金
    var isMoneyFund = false;
    //是否保本基金
    var isSafeFund = false;

    switch( type ){
        case '1':
            typeString = '股票型';
            break;
        case '2':
            typeString = '债券型';
            break;
        case '3':
            typeString = '混合型';
            break;
        case '4':
            typeString = '货币型';
            isMoneyFund = true;
            break;
        case '5':
            typeString = '保本型';
            isSafeFund = true;
            break;
        case '6':
            typeString = '指数型';
            break;

        default:
            typeString = '';

    }

    return {
        typeString : typeString,
        isMoneyFund : isMoneyFund,
        isSafeFund : isSafeFund
    };
};

//是否是货币基金
utils.isMoneyFund = function( type ){
    return type === 'FUND_MONEY';
};

//来自盈米
var FUND_YM = 'YM';
//来自钱景
var FUND_QJ = 'QJ';

//基金状态，是否可以申购
utils.canBuyFund = function( status, onSale, fundChannel ){
    var canBuy = false;
    var canRedemption = false;
    var buyText = '';

    if( onSale === '1' ){
        //可销售
        switch(status){
            case '0':
            case '6':
                canBuy = true;
                buyText = '立即申购';
                break;
            case '1':
                canBuy = true;
                buyText = '立即认购';
                break;
            case '4':
            case '5':
            case '8':
                canBuy = false;
                buyText = '停止申购';
                break;
            case '9':
                canBuy = false;
                buyText = '封闭期';
                break;
            default:
                ;
        }


    }else{
        //暂停销售
        buyText = '暂不销售';
    }

    if( fundChannel === FUND_YM ){
        //盈米的赎回,只判断 status
        if( status === '0' || status === '5' ){
            canRedemption = true;
        }
    }else if( fundChannel === FUND_QJ ){
        //钱景的基金,都可以赎回
        canRedemption = true;
    }



    return {
        canBuyFund : canBuy,
        canRedemption : canRedemption,
        fundBuyText : buyText
    };
};

//基金能否购买


//处理 账户外 基金详情的JSON，加上前端展示需要的内容
utils.adaptFundInfo = function( obj ){

    var temp = utils.getFundTypeString( obj.fundType );

    //是否是 货币基金
    var isMoneyFund = temp.isMoneyFund;
    //用户可读的基金类型
    var typeString = temp.typeString;

    //是否能 申购
    var buyStatus = utils.canBuyFund( obj.fundStatus, obj.onSale, obj.fundChannel );

    //风险等级
    var riskLevelText = '';
    switch( obj.riskLevel ){
        case '1':
            riskLevelText = '低';
            break;
        case '2':
            riskLevelText = '中';
            break;
        case '3':
            riskLevelText = '高';
            break;
        default:
            riskLevelText = '--';
    }

    //最新净值的计算日期
    var calcDateText = '--';
    if( obj.calcDate ){
        var date = new Date( parseInt( obj.calcDate, 10) );
        calcDateText = utils.formatMonthDate( date );
    }


    //判断是否超出用户的风险等级
    var fundRiskLevel = parseInt( obj.riskLevel, 10 );
    var userRiskLevel = parseInt( obj.riskability, 10 );

    var isOverUserRisk = userRiskLevel < fundRiskLevel;


    return {
        isOverUserRisk : isOverUserRisk,
        shareScale : utils.commaFloat( obj.shareScale ),
        marketValue : utils.commaFloat( obj.marketValue / 100000000 ),
        isMoneyFund : isMoneyFund,
        isSafeFund : temp.isSafeFund,
        typeString : typeString,
        canBuyFund : buyStatus.canBuyFund,
        canRedemption : buyStatus.canRedemption,
        fundBuyText : buyStatus.fundBuyText,
        riskLevelText : riskLevelText,
        calcDateText : calcDateText
    };

};

//处理 账户内 基金详情数据，添加用于展现的数据
utils.adaptUserFundInfo = function( obj ){

    var temp = utils.getFundTypeString( obj.fundType );

    //是否能 申购
    var buyStatus = utils.canBuyFund( obj.fundStatus, obj.onSale, obj.fundChannel );

    //是否是 货币基金
    var isMoneyFund = temp.isMoneyFund;
    //用户可读的基金类型
    var typeString = temp.typeString;

    //最新收益日期
    var calcDateText = '';
    if( obj.calcDate ){
        //calcDate 后端给的数据格式为 YYYY-MM-DD
        var date = new Date( parseInt( obj.calcDate, 10) );
        calcDateText = utils.formatMonthDate( date );
    }

    //后端没给时,默认是 0
    obj.freezeShare = obj.freezeShare || '0.00';

    //可用份额
    var totalShare = parseFloat( obj.totalShare, 10 );
    var freezeShare = parseFloat( obj.freezeShare , 10 );
    var availableShare = utils.fixFloat2(totalShare - freezeShare);


    return {
        isMoneyFund : isMoneyFund,
        typeString : typeString,
        canBuyFund : buyStatus.canBuyFund,
        canRedemption : buyStatus.canRedemption,
        calcDateText : calcDateText,
        availableShare : availableShare
    };

};

utils.setCookie = function (c_name, value, expireTime) {
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + expireTime);
	document.cookie = c_name + "=" + escape(value) + ((expireTime == null) ? "" : ";expires=" + exdate.toGMTString() + ";path=/")
};

//////////////////// 民生银行资金存管 相关函数  /////////

var minsheng2rrdBankCodeMap = {
    '00' : '305',
    '01' : '102',
    '02' : '104',
    '03' : '105',
    '04' : '103',
    '05' : '301',
    '06' : '308',
    '07' : '309',
    '08' : '302',
    '09' : '303',
    '10' : '307',
    '11' : '304',
    '12' : '403',
    '13' : '',
    '14' : '306',
    '15' : '310',
    '16' : '316',
    '17' : '319',
    '18' : '',
    '19' : '',
    '20' : '',
    '21' : '',
    '22' : '',
    '23' : '',
    '24' : '',
    '25' : '',
    '26' : '',
    '27' : '',
    '28' : '',
    '29' : '318',
    '30' : '',
    '31' : '',
    '32' : ''
};
var longCardName2shortCardName = {
    '00' : '民生银行',
    '01' : '工商银行',
    '02' : '中国银行',
    '03' : '建设银行',
    '04' : '农业银行',
    '05' : '交通银行',
    '06' : '招商银行',
    '07' : '兴业银行',
    '08' : '中信银行',
    '09' : '光大银行',
    '10' : '平安银行',
    '11' : '华夏银行',
    '12' : '储蓄银行',
    '13' : '北京银行',
    '14' : '广发银行',
    '15' : '浦发银行',
    '16' : '浙商银行',
    '17' : '徽商银行',
    '18' : '',
    '19' : '江苏银行',
    '20' : '上海银行',
    '21' : '南京银行',
    '22' : '杭州银行',
    '23' : '苏州银行',
    '24' : '宁波银行',
    '25' : '温州银行',
    '26' : '台州银行',
    '27' : '包商银行',
    '28' : '哈尔滨银行',
    '29' : '渤海银行',
    '30' : '东亚银行',
    '31' : '上海农商行',
    '32' : '北京农商行'
};
/**
 * 民生返回的银行code,转换到人人贷的银行code,只能用于显示银行的小图标
 * @param minshengBankCode {String} 民生系统里的银行code
 * @returns {*|string} 人人贷的银行code
 */
utils.minshengBankCode2rrd = function( minshengBankCode ){
    var oldCode = minsheng2rrdBankCodeMap[ '' + minshengBankCode ] || ( 'minsheng-' + minshengBankCode );
    return oldCode;
};
utils.longName2shortName = function( minshengBankCode ){
    var shortName = longCardName2shortCardName[ '' + minshengBankCode ];
    return shortName;
};


utils.getArgs= function (strParame) {
    var args = new Object( );
    var query = location.search.substring(1);
    var pairs = query.split("&"); // Break at ampersand
    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf("=");
        if (pos == -1) continue;
        var argname = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args[strParame];
}

module.exports = utils;




