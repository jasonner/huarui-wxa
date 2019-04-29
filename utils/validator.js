
var vcity = {
  11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
  21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
  33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
  42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
  51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
  63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
}
//检查号码是否符合规范，包括长度，类型  
const isCardNo = (card) => {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
  var reg = /(^\d{17}(\d|X)$)/;
  if (reg.test(card) === false) {
    return false;
  }

  return true;
}  

//取身份证前两位,校验省份  
const checkProvince = (card) => {
  var province = card.substr(0, 2);
  if (vcity[province] == undefined) {
    return false;
  }
  return true;
}

//检查生日是否正确  
const checkBirthday = (card) => {
  var len = card.length;
  //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字  
  if (len == '15') {
    var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
    var arr_data = card.match(re_fifteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date('19' + year + '/' + month + '/' + day);
    return verifyBirthday('19' + year, month, day, birthday);
  }
  //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X  
  if (len == '18') {
    var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    var arr_data = card.match(re_eighteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date(year + '/' + month + '/' + day);
    return verifyBirthday(year, month, day, birthday);
  }
  return false;
} 
//校验日期  
const verifyBirthday = (year, month, day, birthday) => {
  var now = new Date();
  var now_year = now.getFullYear();
  //年月日是否合理  
  if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
    //判断年份的范围（0岁到100岁之间)  
    var time = now_year - year;
    if (time >= 0 && time <= 100) {
      return true;
    }
    return false;
  }
  return false;
}  
//校验位的检测  
const checkParity = (card) => {
  //15位转18位  
  //card = changeFivteenToEighteen(card);  
  var len = card.length;
  if (len == '18') {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardTemp = 0, i, valnum;
    for (i = 0; i < 17; i++) {
      cardTemp += card.substr(i, 1) * arrInt[i];
    }
    valnum = arrCh[cardTemp % 11];
    if (valnum == card.substr(17, 1)) {
      return true;
    }
    return false;
  }
  return false;
}

/**
		 * 自然数校验，适用于：
		 * 		1.输入金额;2.年龄;......
		 */
const isInt = (numStr, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '您输入的数字不合法';
  }
  if (!/^\+?[1-9][0-9]*$/.test(numStr)) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}
/**
		 * 金额校验
		 */
const isMoney = (numStr, errMsg) => {
  if (typeof errMsg == 'undefined') {
    errMsg = '您输入的金额不合法';
  }
  if (!/^[1-9]{1}[0-9]{2,7}[.]{8}[0-9]{9,10}$/.test(numStr)) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}

const hasCard = (cardNo, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '请选择银行卡';
  }
  if (typeof cardNo == 'undefined' || cardNo == null || cardNo == '') {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}
/**
		 * 密码校验
		 * 		
		 */
const isPassword = (numStr, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '你输入的密码格式不正确';
  }
  if (!/^[a-zA-Z0-9]*$/.test(numStr) || (numStr.length < 6 || numStr.length > 20)) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}
/**
		 * 地址长度校验
		 */
const isAddress = (str) => {
  if (!/^[A-Za-z0-9_\u4e00-\u9fa5]+$/.test(str)) {
    //$.alertMessage("地址不能包含特殊字符");
    return false;
  }
  str = str.replace(/[^\u4e00-\u9fa5]/gi, "");
  if (str.length < 5) {
    //$.alertMessage("地址长度不能少于5个汉字!");
    return false;
  }

  return true;
}

/**
   * 手机号码校验
   * 		
   */
const isMobile = (numStr, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '你输入的手机号码格式不正确';
  }
  if (!/^(13|15|18|14|17)\d{9}$/.test(numStr)) {
    wx.showModal({
      title: '提示',
      content: errMsg
    })
    return false;
  }
  return true;
}

/**
		 * 电子邮箱校验
		 * 		
		 */
const isEmail = (numStr, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '你输入的手机号码格式不正确';
  }
  var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!reg.test(numStr)) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}

const isEmpty = (str, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '输入为空';
  }
  if (str == '' || str == null || str == undefined) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}

const isChecked = (id, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '请先阅读相关条款并同意';
  }
  var flag = $('#' + id).prop('checked');
  if (!flag) {
    //$.alertMessage(errMsg);
  }
  return flag;
}

/**
		 * 身份证校验
		 * 		
		 */
const isIdno = (idNo, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '身份证格式不正确';
  }
  //是否为空  
  if (idNo === '') {
    //$.alertMessage('身份证号不能为空');
    return false;
  }
  //校验长度，类型  
  if (isCardNo(idNo) === false) {
    //$.alertMessage(errMsg);
    return false;
  }
  //检查省份  
  if (checkProvince(idNo) === false) {
    //$.alertMessage(errMsg);
    return false;
  }
  //校验生日  
  if (checkBirthday(idNo) === false) {
    //$.alertMessage(errMsg);
    return false;
  }
  //检验位的检测  
  if (checkParity(idNo) === false) {
    //$.alertMessage(errMsg);
    return false;
  }

  return true;
}

const isLength = (str, len, tar) => {
  var errMsg = tar + '不能小于' + len + '位';
  if (str == '' || str == null || str == undefined) {
    //$.alertMessage(errMsg);
    return false;
  }
  if (str.length < len) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}

/**车架号校验*/
const isRackNo = (rackNo, errMsg) => {
  if (typeof errMsg == "undefined") {
    errMsg = '车架号格式不正确';
  }
  var reg = /^[a-zA-Z0-9]{17}$/;
  if (!reg.test(rackNo)) {
    //$.alertMessage(errMsg);
    return false;
  }
  return true;
}

/**车牌号校验（去除了省份缩写）*/
const isVehicleNumber = (vehicleNumber) => {
  var result = false;
  if (vehicleNumber.length == 6) {
    var express = /^[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    result = express.test(vehicleNumber);
  }
  if (!result)
    //$.alertMessage('请输入正确的车牌号');
  return result;
}

module.exports = {
  isCardNo: isCardNo,
  checkProvince: checkProvince,
  checkBirthday: checkBirthday,
  verifyBirthday: verifyBirthday,
  checkParity: checkParity,
  isInt: isInt,
  isMoney: isMoney,
  hasCard: hasCard,
  isPassword: isPassword,
  isAddress: isAddress,
  isMobile: isMobile,
  isEmail: isEmail,
  isEmpty: isEmpty,
  isChecked: isChecked,
  isIdno: isIdno,
  isLength: isLength,
  isRackNo: isRackNo,
  isVehicleNumber: isVehicleNumber
}