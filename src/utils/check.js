/**
 * Created by THINK on 2017/6/13.
 */

let CheckUtils = {
    /**
     * 检查字符串是否为合法QQ号码
     * @param {String} 字符串
     * @return {bool} 是否为合法QQ号码
     */
    isQQ(aQQ) {
        let bValidate = RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);
        if (bValidate) {
          return true;
        }
        else
          return false;
    },
    /**
     * 检查字符串是否为合法手机号码
     * @param {String} 字符串
     * @return {bool} 是否为合法手机号码
     */
    isPhone(aPhone) {
      let  bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(aPhone);
      if (bValidate) {
        return true;
      }
      else{
        return false;
      }
  },
  /**
   * 检查字符串是否为合法email地址
   * @param {String} 字符串
   * @return {bool} 是否为合法email地址
   */
    isEmail(aEmail) {
      var bValidate = RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(aEmail);
      if (bValidate) {
        return true;
      }
      else
        return false;
    },

}
export default CheckUtils;
